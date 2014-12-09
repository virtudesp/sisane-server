/*
 * Copyright (C) July 2014 Rafael Aznar
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.dao.specific.implementation;

import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import net.daw.bean.generic.specific.implementation.ActividadBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.DocumentoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.EntregaBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.DocumentoDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class EntregaDaoSpcImpl implements ViewDaoInterface<EntregaBeanGenSpImpl>, TableDaoInterface<EntregaBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public EntregaDaoSpcImpl(String ob, Connection oConexion) throws Exception {
        try {
            strTableName = ob;
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public int getPages(int intRegsPerPag, ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages = 0;
        try {
            pages = oMysql.getPages(strTableName, intRegsPerPag, hmFilter);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPages ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public int getCount(ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages = 0;
        try {
            pages = oMysql.getCount(strTableName, hmFilter);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getCount ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public ArrayList<EntregaBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<EntregaBeanGenSpImpl> arrEntrega = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                EntregaBeanGenSpImpl oEntregaBean = new EntregaBeanGenSpImpl(iterador.next());
                arrEntrega.add(this.get(oEntregaBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrEntrega;
    }

    @Override
    public EntregaBeanGenSpImpl get(EntregaBeanGenSpImpl oEntregaBean, Integer expand) throws Exception {
        if (oEntregaBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oEntregaBean.getId())) {
                    oEntregaBean.setId(0);
                } else {
                    oEntregaBean.setNota(Integer.parseInt(oMysql.getOne(strTableName, "nota", oEntregaBean.getId())));

                    String fecha = "";
                    fecha = oMysql.getOne(strTableName, "fecha", oEntregaBean.getId());
                    SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
                    oEntregaBean.setFecha(date.parse(fecha));

                    oEntregaBean.setId_documento(Integer.parseInt(oMysql.getOne(strTableName, "id_documento", oEntregaBean.getId())));

                    DocumentoBeanGenSpImpl oDocumento = new DocumentoBeanGenSpImpl();
                    oDocumento.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_documento", oEntregaBean.getId())));
                    DocumentoDaoGenSpImpl oDocumentoDAO = new DocumentoDaoGenSpImpl("documento", oConnection);
                    oDocumento = oDocumentoDAO.get(oDocumento, AppConfigurationHelper.getJsonDepth());
                    oEntregaBean.setObj_documento(oDocumento);

                    oEntregaBean.setId_documento(Integer.parseInt(oMysql.getOne(strTableName, "id_actividad", oEntregaBean.getId())));
                    ActividadBeanGenSpImpl oActividad = new ActividadBeanGenSpImpl();
                    oActividad.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_actividad", oEntregaBean.getId())));
                    ActividadDaoSpcImpl oActividadDAO = new ActividadDaoSpcImpl("actividad", oConnection);
                    oActividad = oActividadDAO.get(oActividad, AppConfigurationHelper.getJsonDepth());
                    oEntregaBean.setObj_actividad(oActividad);

                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oEntregaBean.setId(0);
        }
        return oEntregaBean;
    }

    @Override
    public EntregaBeanGenSpImpl set(EntregaBeanGenSpImpl oEntregaBean) throws Exception {
        try {
            if (oEntregaBean.getId() == 0) {
                oEntregaBean.setId(oMysql.insertOne(strTableName));
            }

            oMysql.updateOne(oEntregaBean.getId(), strTableName, "nota", oEntregaBean.getNota().toString());

            SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
            oMysql.updateOne(oEntregaBean.getId(), strTableName, "fecha", date.format(oEntregaBean.getFecha()));

            oMysql.updateOne(oEntregaBean.getId(), strTableName, "id_documento", oEntregaBean.getId_documento().toString());
            oMysql.updateOne(oEntregaBean.getId(), strTableName, "id_actividad", oEntregaBean.getId_actividad().toString());

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oEntregaBean;
    }

    @Override
    public int remove(EntregaBeanGenSpImpl oEntregaBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oEntregaBean.getId(), strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName(strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getPrettyColumns(strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPrettyColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public int updateOne(int intId, String strTabla, String strCampo, String strValor) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
