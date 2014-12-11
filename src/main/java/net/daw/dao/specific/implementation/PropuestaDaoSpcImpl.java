/*
 * Copyright (C) 2014 al037805
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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import net.daw.bean.generic.specific.implementation.PropuestaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipopropuestaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

/**
 *
 * @author al037805
 */
public class PropuestaDaoSpcImpl implements ViewDaoInterface<PropuestaBeanGenSpImpl>, TableDaoInterface<PropuestaBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;
    private String strPojo = null;

    public PropuestaDaoSpcImpl(String ob, String pojo, Connection oConexion) throws Exception {
        try {
            strTableName = ob;
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);
            strPojo = pojo;
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
    public ArrayList<PropuestaBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<PropuestaBeanGenSpImpl> arrPropuesta = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                PropuestaBeanGenSpImpl oPropuestaBean = new PropuestaBeanGenSpImpl(iterador.next());
                arrPropuesta.add(this.get(oPropuestaBean, 1));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrPropuesta;
    }

    @Override
    public PropuestaBeanGenSpImpl get(PropuestaBeanGenSpImpl oPropuestaBean, Integer expand) throws Exception {
        if (oPropuestaBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oPropuestaBean.getId())) {
                    oPropuestaBean.setId(0);
                } else {
                    oPropuestaBean.setDescripcion(oMysql.getOne(strTableName, "descripcion", oPropuestaBean.getId()));

                    String fecha = "";
                    fecha = oMysql.getOne(strTableName, "fecha", oPropuestaBean.getId());
                    SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
                    oPropuestaBean.setFecha(date.parse(fecha));

                    oPropuestaBean.setPuntuacion(Integer.valueOf(oMysql.getOne(strTableName, "puntuacion", oPropuestaBean.getId())));

                    /* Claves ajenas id_tipopropuesta y id_usuario */
                    oPropuestaBean.setId_tipopropuesta(Integer.parseInt(oMysql.getOne(strTableName, "id_tipopropuesta", oPropuestaBean.getId())));
                    oPropuestaBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPropuestaBean.getId())));

                    TipopropuestaBeanGenSpImpl oTipopropuesta = new TipopropuestaBeanGenSpImpl();
                    oTipopropuesta.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_tipopropuesta", oPropuestaBean.getId())));
                    TipopropuestaDaoSpcImpl oTipoPropuestaDAO = new TipopropuestaDaoSpcImpl("tipopropuesta" ,"tipopropuesta" , oConnection);
                    oTipopropuesta = oTipoPropuestaDAO.get(oTipopropuesta, AppConfigurationHelper.getJsonDepth());
                    oPropuestaBean.setObj_tipopropuesta(oTipopropuesta);

                    UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
                    oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPropuestaBean.getId())));
                    UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl(strTableName, oConnection);
                    oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                    oPropuestaBean.setObj_usuario(oUsuario);

                    /* Fin de las claves ajenas id_tipopropuesta y id_usuario */
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oPropuestaBean.setId(0);
        }
        return oPropuestaBean;
    }

    @Override
    public PropuestaBeanGenSpImpl set(PropuestaBeanGenSpImpl oPropuestaBean) throws Exception {
        try {
            if (oPropuestaBean.getId() == 0) {
                oPropuestaBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oPropuestaBean.getId(), strTableName, "descripcion", oPropuestaBean.getDescripcion());

            SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
            oMysql.updateOne(oPropuestaBean.getId(), strTableName, "fecha", date.format(oPropuestaBean.getFecha()));

            oMysql.updateOne(oPropuestaBean.getId(), strTableName, "puntuacion", oPropuestaBean.getPuntuacion().toString());

            /* Aqui van las claves ajenas  */
            oMysql.updateOne(oPropuestaBean.getId(), strTableName, "id_tipopropuesta", oPropuestaBean.getId_tipopropuesta().toString());
            oMysql.updateOne(oPropuestaBean.getId(), strTableName, "id_usuario", oPropuestaBean.getId_usuario().toString());

            /*  Fin de las claves ajenas en servidor */
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oPropuestaBean;
    }

    @Override
    public int remove(PropuestaBeanGenSpImpl oPropuestaBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oPropuestaBean.getId(), strTableName);
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
