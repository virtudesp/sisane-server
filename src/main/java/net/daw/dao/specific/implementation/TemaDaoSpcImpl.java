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
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.generic.specific.implementation.TemaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipotemaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.TipotemaDaoGenSpImpl;
import net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class TemaDaoSpcImpl implements ViewDaoInterface<TemaBeanGenSpImpl>, TableDaoInterface<TemaBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public TemaDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    public ArrayList<TemaBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<TemaBeanGenSpImpl> arrTema = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                TemaBeanGenSpImpl oTemaBean = new TemaBeanGenSpImpl(iterador.next());
                arrTema.add(this.get(oTemaBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrTema;
    }

    @Override
    public TemaBeanGenSpImpl get(TemaBeanGenSpImpl oTemaBean, Integer expand) throws Exception {
        if (oTemaBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oTemaBean.getId())) {
                    oTemaBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oTemaBean.setNombre(oMysql.getOne(strTableName, "nombre", oTemaBean.getId()));

                        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                        String dateInString = oMysql.getOne(strTableName, "fechacreacion", oTemaBean.getId());
                        oTemaBean.setFechacreacion(formatter.parse(dateInString));

                        oTemaBean.setId_tipotema(Integer.parseInt(oMysql.getOne(strTableName, "id_tipotema", oTemaBean.getId())));
                        oTemaBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oTemaBean.getId())));

                        TipotemaBeanGenSpImpl oTipotema = new TipotemaBeanGenSpImpl();
                        oTipotema.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_tipotema", oTemaBean.getId())));
                        TipotemaDaoGenSpImpl oTipotemaDAO = new TipotemaDaoGenSpImpl("tipotema", oConnection);
                        oTipotema = oTipotemaDAO.get(oTipotema, AppConfigurationHelper.getJsonDepth());
                        oTemaBean.setObj_tipotema(oTipotema);

                        UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
                        oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oTemaBean.getId())));
                        UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl("usuario", oConnection);
                        oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                        oTemaBean.setObj_usuario(oUsuario);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oTemaBean.setId(0);
        }
        return oTemaBean;
    }

    @Override
    public TemaBeanGenSpImpl set(TemaBeanGenSpImpl oTemaBean) throws Exception {
        try {
            if (oTemaBean.getId() == 0) {
                oTemaBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oTemaBean.getId(), strTableName, "nombre", oTemaBean.getNombre());

            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date newDate = new Date();
            String date = formatter.format(newDate);

            if (oMysql.getOne(strTableName, "fechacreacion", oTemaBean.getId()) != null) {
                oMysql.updateOne(oTemaBean.getId(), strTableName, "fechacreacion", oMysql.getOne(strTableName, "fechacreacion", oTemaBean.getId()));
            } else {
                oMysql.updateOne(oTemaBean.getId(), strTableName, "fechacreacion", date);
            }

            oMysql.updateOne(oTemaBean.getId(), strTableName, "id_usuario", oTemaBean.getId_usuario().toString());
            oMysql.updateOne(oTemaBean.getId(), strTableName, "id_tipotema", oTemaBean.getId_tipotema().toString());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oTemaBean;
    }

    @Override
    public int remove(TemaBeanGenSpImpl oTemaBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oTemaBean.getId(), strTableName);
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
