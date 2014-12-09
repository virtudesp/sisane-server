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
import net.daw.bean.generic.specific.implementation.ComentarioBeanGenSpImpl;
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
public class ComentarioDaoSpcImpl implements ViewDaoInterface<ComentarioBeanGenSpImpl>, TableDaoInterface<ComentarioBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;
    private String strPojo = null;

    public ComentarioDaoSpcImpl(String ob, String pojo, Connection oConexion) throws Exception {
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
    public ArrayList<ComentarioBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<ComentarioBeanGenSpImpl> arrComentario = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ComentarioBeanGenSpImpl oComentarioBean = new ComentarioBeanGenSpImpl(iterador.next());
                arrComentario.add(this.get(oComentarioBean, 1));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrComentario;
    }

    @Override
    public ComentarioBeanGenSpImpl get(ComentarioBeanGenSpImpl oComentarioBean, Integer expand) throws Exception {
        if (oComentarioBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oComentarioBean.getId())) {
                    oComentarioBean.setId(0);
                } else {
                    oComentarioBean.setContenido(oMysql.getOne(strTableName, "contenido", oComentarioBean.getId()));

                    /* Claves ajenas id_propuesta y id_usuario */
                    oComentarioBean.setId_propuesta(Integer.parseInt(oMysql.getOne(strTableName, "id_propuesta", oComentarioBean.getId())));
                    oComentarioBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oComentarioBean.getId())));

                    PropuestaBeanGenSpImpl oPropuesta = new PropuestaBeanGenSpImpl();
                    oPropuesta.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_propuesta", oComentarioBean.getId())));
                    PropuestaDaoSpcImpl oPropuestaDAO = new PropuestaDaoSpcImpl("propuesta", "propuesta",oConnection);
                    oPropuesta = oPropuestaDAO.get(oPropuesta, AppConfigurationHelper.getJsonDepth());
                    oComentarioBean.setObj_propuesta(oPropuesta);

                    UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
                    oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oComentarioBean.getId())));
                    UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl(strTableName, oConnection);
                    oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                    oComentarioBean.setObj_usuario(oUsuario);

                    /* Fin de las claves ajenas id_propuesta y id_usuario */
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oComentarioBean.setId(0);
        }
        return oComentarioBean;
    }

    @Override
    public ComentarioBeanGenSpImpl set(ComentarioBeanGenSpImpl oComentarioBean) throws Exception {
        try {
            if (oComentarioBean.getId() == 0) {
                oComentarioBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oComentarioBean.getId(), strTableName, "contenido", oComentarioBean.getContenido());

            /* Aqui van las claves ajenas  */
            oMysql.updateOne(oComentarioBean.getId(), strTableName, "id_propuesta", oComentarioBean.getId_propuesta().toString());
            oMysql.updateOne(oComentarioBean.getId(), strTableName, "id_usuario", oComentarioBean.getId_usuario().toString());

            /*  Fin de las claves ajenas en servidor */
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oComentarioBean;
    }

    @Override
    public int remove(ComentarioBeanGenSpImpl oComentarioBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oComentarioBean.getId(), strTableName);
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
