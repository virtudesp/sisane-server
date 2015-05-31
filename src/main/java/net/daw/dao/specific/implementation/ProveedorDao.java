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

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.bean.specific.implementation.ActividadBean;
import net.daw.bean.specific.implementation.ProveedorBean;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.SqlBuilder;

public class ProveedorDao implements ViewDaoInterface<ProveedorBean>,TableDaoInterface<ProveedorBean>, MetaDaoInterface {

    private String strSqlSelectDataOrigin = null;
    private String strTableOrigin = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public ProveedorDao(Connection oConexion) throws Exception {
        try {
            strTableOrigin = "proveedor";
            strSqlSelectDataOrigin = "select * from " + strTableOrigin + " where 1=1 ";
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }
    @Override
    public ArrayList<MetaBeanGenImpl> getmetainformation() throws Exception {
        ArrayList<MetaBeanGenImpl> alVector = null;
        try {

            for (Field field : ProveedorBean.class.getDeclaredFields()) {

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
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName(strTableOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getPrettyColumns(strTableOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPrettyColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ProveedorBean get(ProveedorBean oProveedorBean, Integer expand) throws Exception {
        if (oProveedorBean.getId() > 0) {
            try {
                if (!oMysql.existsNewOne(strSqlSelectDataOrigin, oProveedorBean.getId())) {
                    oProveedorBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oProveedorBean.setNia(oMysql.getNewOne(strSqlSelectDataOrigin, "nia", oProveedorBean.getId()));
                        oProveedorBean.setNombre(oMysql.getNewOne(strSqlSelectDataOrigin, "nombre", oProveedorBean.getId()));
                        oProveedorBean.setTelefono(oMysql.getNewOne(strSqlSelectDataOrigin, "telefono", oProveedorBean.getId()));
                        oProveedorBean.setDireccion(oMysql.getNewOne(strSqlSelectDataOrigin, "direccion", oProveedorBean.getId()));
                        oProveedorBean.setEmail(oMysql.getNewOne(strSqlSelectDataOrigin, "email", oProveedorBean.getId()));
                        oProveedorBean.setWeb(oMysql.getNewOne(strSqlSelectDataOrigin, "web", oProveedorBean.getId()));
                        oProveedorBean.setFax(oMysql.getNewOne(strSqlSelectDataOrigin, "fax", oProveedorBean.getId()));
                        oProveedorBean.setLocalidad(oMysql.getNewOne(strSqlSelectDataOrigin, "localidad", oProveedorBean.getId()));
//
//                        oProveedorBean.setId_usuario_1(Integer.parseInt(oMysql.getOne(strTableOrigin, "id_usuario_1", oProveedorBean.getId())));
//                        oProveedorBean.setId_usuario_2(Integer.parseInt(oMysql.getOne(strTableOrigin, "id_usuario_2", oProveedorBean.getId())));
//
//                        UsuarioBeanGenSpImpl oUsuario1 = new UsuarioBeanGenSpImpl();
//                        oUsuario1.setId(Integer.parseInt(oMysql.getOne(strTableOrigin, "id_usuario_1", oProveedorBean.getId())));
//                        
//                        UsuarioDaoGenSpImpl oUsuarioDAO1 = new UsuarioDaoGenSpImpl("usuario", "Usuario", oConnection);
//                        oUsuario1 = oUsuarioDAO1.get(oUsuario1, AppConfigurationHelper.getJsonDepth());
//                        oProveedorBean.setObj_usuario_1(oUsuario1);
//
//                        UsuarioBeanGenSpImpl oUsuario2 = new UsuarioBeanGenSpImpl();
//                        oUsuario2.setId(Integer.parseInt(oMysql.getOne(strTableOrigin, "id_usuario_2", oProveedorBean.getId())));
//                        UsuarioDaoGenSpImpl oUsuarioDAO2 = new UsuarioDaoGenSpImpl("usuario", "Usuario", oConnection);
//                        oUsuario2 = oUsuarioDAO2.get(oUsuario2, AppConfigurationHelper.getJsonDepth());
//                        oProveedorBean.setObj_usuario_2(oUsuario2);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oProveedorBean.setId(0);
        }
        return oProveedorBean;
    }

    @Override
    public int getPages(int intRegsPerPag, ArrayList<FilterBeanHelper> alFilter) throws Exception {
        strSqlSelectDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        int pages = 0;
        try {
            pages = oMysql.getNewPages(strSqlSelectDataOrigin, intRegsPerPag);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPages ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public int getCount(ArrayList<FilterBeanHelper> alFilter) throws Exception {
        strSqlSelectDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        int pages = 0;
        try {
            pages = oMysql.getNewCount(strSqlSelectDataOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getCount ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public ArrayList<ProveedorBean> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        strSqlSelectDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        strSqlSelectDataOrigin += SqlBuilder.buildSqlOrder(hmOrder);
        ArrayList<Integer> arrId;
        ArrayList<ProveedorBean> arrProveedor = new ArrayList<>();
        try {
            arrId = oMysql.getNewPage(strTableOrigin, intRegsPerPag, intPage);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ProveedorBean oProveedorBean = new ProveedorBean(iterador.next());
                arrProveedor.add(this.get(oProveedorBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrProveedor;
    }

    @Override
    public ProveedorBean set(ProveedorBean oProveedorBean) throws Exception {
        try {
            if (oProveedorBean.getId() == 0) {
                oProveedorBean.setId(oMysql.insertOne(strTableOrigin));
            }
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "nia", oProveedorBean.getNia());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "nombre", oProveedorBean.getNombre());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "telefono", oProveedorBean.getTelefono());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "direccion", oProveedorBean.getDireccion());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "email", oProveedorBean.getEmail());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "web", oProveedorBean.getWeb());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "fax", oProveedorBean.getFax());
            oMysql.updateOne(oProveedorBean.getId(), strTableOrigin, "localidad", oProveedorBean.getLocalidad());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oProveedorBean;
    }

    @Override
    public int remove(ProveedorBean oProveedorBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oProveedorBean.getId(), strTableOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }

}
