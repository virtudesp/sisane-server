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
import net.daw.bean.specific.implementation.ProductoBean;
import net.daw.bean.specific.implementation.TipoproductoBean;
import net.daw.bean.specific.implementation.ProveedorBean;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.annotations.SelectSourceMetaInformation;
import net.daw.helper.annotations.TableSourceMetaInformation;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.SqlBuilder;

public class ProductoDao implements ViewDaoInterface<ProductoBean>,TableDaoInterface<ProductoBean>, MetaDaoInterface {

    private String strSqlSelectDataOrigin = null;
    private String strTableOrigin = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public ProductoDao(Connection oConexion) throws Exception {
        try {
            Class<ProductoBean> classProductoBean = ProductoBean.class;
            if (classProductoBean.isAnnotationPresent(TableSourceMetaInformation.class)) {
                TableSourceMetaInformation annotationTableSourceMetaInformation = classProductoBean.getAnnotation(TableSourceMetaInformation.class);
                //TableSourceMetaInformation annotationTableSourceMetaInformation = (TableSourceMetaInformation) annotation;
                strTableOrigin = annotationTableSourceMetaInformation.TableName();
                strSqlSelectDataOrigin = "select * from " + strTableOrigin + " where 1=1 ";
            }
            if (classProductoBean.isAnnotationPresent(SelectSourceMetaInformation.class)) {
                SelectSourceMetaInformation annotationSelectSourceMetaInformation = classProductoBean.getAnnotation(SelectSourceMetaInformation.class);
                //SelectSourceMetaInformation annotationSelectSourceMetaInformation = (SelectSourceMetaInformation) annotation;
                strTableOrigin = null;
                strSqlSelectDataOrigin = annotationSelectSourceMetaInformation.SqlSelect() + " where 1=1 ";
            }
            if (strSqlSelectDataOrigin.equals(null)) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + classProductoBean.getName() + " Beans must be annotated by SelectSourceMetaInformation or TableSourceMetaInformation "));
            }
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

            for (Field field : ProductoBean.class.getDeclaredFields()) {

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
            //if (!strTableOrigin.equals(null)) {
                alColumns = oMysql.getColumnsName(strTableOrigin);
            //} else {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getColumnsNames ERROR: Please, specify Table annotation in Bean"));
            //}
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            //if (!strTableOrigin.equals(null)) {
                alColumns = oMysql.getPrettyColumns(strTableOrigin);
            //} else {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPrettyColumnsNames ERROR: Please, specify Table annotation in Bean"));
            //}

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPrettyColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ProductoBean get(ProductoBean oProductoBean, Integer expand) throws Exception {
        //if (!strSqlSelectDataOrigin.equals(null)) {
            if (oProductoBean.getId() > 0) {
                try {
                    if (!oMysql.existsNewOne(strSqlSelectDataOrigin, oProductoBean.getId())) {
                        oProductoBean.setId(0);
                    } else {
                        expand--;
                        if (expand > 0) {
                            oProductoBean.setCodigo(oMysql.getNewOne(strSqlSelectDataOrigin, "codigo", oProductoBean.getId()));
                            oProductoBean.setDescripcion(oMysql.getNewOne(strSqlSelectDataOrigin, "descripcion", oProductoBean.getId()));
                            oProductoBean.setPrecio(Double.parseDouble(oMysql.getNewOne(strSqlSelectDataOrigin, "precio", oProductoBean.getId())));

                            oProductoBean.setId_tipoproducto(Integer.parseInt(oMysql.getNewOne(strSqlSelectDataOrigin, "id_tipoproducto", oProductoBean.getId())));
                            oProductoBean.setId_proveedor(Integer.parseInt(oMysql.getNewOne(strSqlSelectDataOrigin, "id_proveedor", oProductoBean.getId())));

                            TipoproductoBean oTipoproducto = new TipoproductoBean();
                            oTipoproducto.setId(Integer.parseInt(oMysql.getNewOne(strSqlSelectDataOrigin, "id_tipoproducto", oProductoBean.getId())));
                            TipoproductoDao oTipoproductoDAO = new TipoproductoDao(oConnection);
                            oTipoproducto = oTipoproductoDAO.get(oTipoproducto, AppConfigurationHelper.getJsonDepth());
                            oProductoBean.setObj_tipoproducto(oTipoproducto);

                            ProveedorBean oProveedor = new ProveedorBean();
                            oProveedor.setId(Integer.parseInt(oMysql.getNewOne(strSqlSelectDataOrigin, "id_proveedor", oProductoBean.getId())));
                            ProveedorDao oProveedorDAO = new ProveedorDao(oConnection);
                            oProveedor = oProveedorDAO.get(oProveedor, AppConfigurationHelper.getJsonDepth());
                            oProductoBean.setObj_proveedor(oProveedor);
                            oProductoBean.setPath(oMysql.getNewOne(strSqlSelectDataOrigin, "path", oProductoBean.getId()));
                        }
                    }
                } catch (Exception ex) {
                    ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
                }
            } else {
                oProductoBean.setId(0);
            }
        //} else {
        //    ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: strSqlSelectDataOrigin not valid"));
        //}
        return oProductoBean;
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
    public ArrayList<ProductoBean> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        strSqlSelectDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        strSqlSelectDataOrigin += SqlBuilder.buildSqlOrder(hmOrder);
        ArrayList<Integer> arrId;
        ArrayList<ProductoBean> arrProducto = new ArrayList<>();
        try {
            arrId = oMysql.getNewPage(strSqlSelectDataOrigin, intRegsPerPag, intPage);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ProductoBean oProductoBean = new ProductoBean(iterador.next());
                arrProducto.add(this.get(oProductoBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrProducto;
    }

    @Override
    public ProductoBean set(ProductoBean oProductoBean) throws Exception {
        try {
            if (oProductoBean.getId() == 0) {
                oProductoBean.setId(oMysql.insertOne(strTableOrigin));
            }
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "codigo", oProductoBean.getCodigo());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "descripcion", oProductoBean.getDescripcion());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "precio", oProductoBean.getPrecio().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "id_tipoproducto", oProductoBean.getId_tipoproducto().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "id_proveedor", oProductoBean.getId_tipoproducto().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "path", oProductoBean.getPath());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oProductoBean;
    }

    @Override
    public int remove(ProductoBean oProductoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oProductoBean.getId(), strTableOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }

}
