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

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.bean.specific.implementation.ActividadBean;
import net.daw.bean.specific.implementation.ComentarioBean;
import net.daw.bean.specific.implementation.PropuestaBean;
import net.daw.bean.specific.implementation.UsuarioBean;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;

/**
 *
 * @author al037805
 */
public class ComentarioDao implements ViewDaoInterface<ComentarioBean>, TableDaoInterface<ComentarioBean>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;
    private String strPojo = null;

    public ComentarioDao(String ob, String pojo, Connection oConexion) throws Exception {
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
    public ArrayList<MetaBeanGenImpl> getmetainformation() throws Exception {
        ArrayList<MetaBeanGenImpl> alVector = null;
        try {

            for (Field field : ComentarioBean.class.getDeclaredFields()) {

                Class tipo = MetaBeanGenImpl.class;
                Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
                for (Integer i = 0; i < fieldAnnotations.length; i++) {
                    if (fieldAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                        MethodMetaInformation fieldAnnotation = (MethodMetaInformation) fieldAnnotations[i];
                        MetaBeanGenImpl oMeta = new MetaBeanGenImpl();

                        oMeta.setName(field.getName());
                        oMeta.setDefaultValue(fieldAnnotation.DefaultValue());
                        oMeta.setDescription(fieldAnnotation.Description());
                        oMeta.setIsId(fieldAnnotation.IsId());
                        oMeta.setIsIdForeignKey(fieldAnnotation.IsIdForeignKey());
                        oMeta.setIsObjForeignKey(fieldAnnotation.IsObjForeignKey());
                        oMeta.setIsPathToObject(fieldAnnotation.IsPathToObject());
                        oMeta.setMaxDecimal(fieldAnnotation.MaxDecimal());
                        oMeta.setMaxInteger(fieldAnnotation.MaxInteger());
                        oMeta.setMaxLength(fieldAnnotation.MaxLength());
                        oMeta.setMinLength(fieldAnnotation.MinLength());
                        //oMeta.setMyObjIdName(fieldAnnotation.MyObjIdName());
                        oMeta.setMyObjName(fieldAnnotation.MyObjName());
                        oMeta.setReferencesTable(fieldAnnotation.ReferencesTable());
                        oMeta.setShortName(fieldAnnotation.ShortName());
                        oMeta.setType(fieldAnnotation.Type());
                        oMeta.setUltraShortName(fieldAnnotation.UltraShortName());

                        alVector.add(oMeta);
                    }
                }
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getmetainformation ERROR: " + ex.getMessage()));
        }
        return alVector;
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
    public ArrayList<ComentarioBean> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<ComentarioBean> arrComentario = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ComentarioBean oComentarioBean = new ComentarioBean(iterador.next());
                arrComentario.add(this.get(oComentarioBean, 1));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrComentario;
    }

    @Override
    public ComentarioBean get(ComentarioBean oComentarioBean, Integer expand) throws Exception {
        if (oComentarioBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oComentarioBean.getId())) {
                    oComentarioBean.setId(0);
                } else {
                    oComentarioBean.setContenido(oMysql.getOne(strTableName, "contenido", oComentarioBean.getId()));

                    /* Claves ajenas id_propuesta y id_usuario */
                    oComentarioBean.setId_propuesta(Integer.parseInt(oMysql.getOne(strTableName, "id_propuesta", oComentarioBean.getId())));
                    oComentarioBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oComentarioBean.getId())));

                    PropuestaBean oPropuesta = new PropuestaBean();
                    oPropuesta.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_propuesta", oComentarioBean.getId())));
                    PropuestaDao oPropuestaDAO = new PropuestaDao("propuesta", "propuesta", oConnection);
                    oPropuesta = oPropuestaDAO.get(oPropuesta, AppConfigurationHelper.getJsonDepth());
                    oComentarioBean.setObj_propuesta(oPropuesta);

                    UsuarioBean oUsuario = new UsuarioBean();
                    oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oComentarioBean.getId())));
                    UsuarioDao oUsuarioDAO = new UsuarioDao(oConnection);
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
    public ComentarioBean set(ComentarioBean oComentarioBean) throws Exception {
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
    public int remove(ComentarioBean oComentarioBean) throws Exception {
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

}
