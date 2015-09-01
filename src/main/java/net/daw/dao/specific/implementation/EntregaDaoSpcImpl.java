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
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.bean.specific.implementation.ActividadBean;
import net.daw.bean.specific.implementation.DocumentoBean;
import net.daw.bean.specific.implementation.EntregaBean;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;

public class EntregaDaoSpcImpl implements ViewDaoInterface<EntregaBean>, TableDaoInterface<EntregaBean>, MetaDaoInterface {

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
    public ArrayList<MetaBeanGenImpl> getmetainformation() throws Exception {
        ArrayList<MetaBeanGenImpl> alVector = null;
        try {

            for (Field field : EntregaBean.class.getDeclaredFields()) {

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
    public ArrayList<EntregaBean> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<EntregaBean> arrEntrega = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                EntregaBean oEntregaBean = new EntregaBean(iterador.next());
                arrEntrega.add(this.get(oEntregaBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrEntrega;
    }

    @Override
    public EntregaBean get(EntregaBean oEntregaBean, Integer expand) throws Exception {
//        if (oEntregaBean.getId() > 0) {
//            try {
//                if (!oMysql.existsOne(strTableName, oEntregaBean.getId())) {
//                    oEntregaBean.setId(0);
//                } else {
//                    oEntregaBean.setNota(Integer.parseInt(oMysql.getOne(strTableName, "nota", oEntregaBean.getId())));
//
//                    String fecha = "";
//                    fecha = oMysql.getOne(strTableName, "fecha", oEntregaBean.getId());
//                    SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
//                    oEntregaBean.setFecha(date.parse(fecha));
//
//                    oEntregaBean.setId_documento(Integer.parseInt(oMysql.getOne(strTableName, "id_documento", oEntregaBean.getId())));
//
//                    DocumentoBean oDocumento = new DocumentoBean();
//                    oDocumento.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_documento", oEntregaBean.getId())));
//                    DocumentoDao oDocumentoDAO = new DocumentoDao(oConnection);
//                    oDocumento = oDocumentoDAO.get(oDocumento, AppConfigurationHelper.getJsonDepth());
//                    oEntregaBean.setObj_documento(oDocumento);
//
//                    oEntregaBean.setId_documento(Integer.parseInt(oMysql.getOne(strTableName, "id_actividad", oEntregaBean.getId())));
//                    ActividadBean oActividad = new ActividadBean();
//                    oActividad.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_actividad", oEntregaBean.getId())));
//                    ActividadDao oActividadDAO = new ActividadDao(oConnection);
//                    oActividad = oActividadDAO.get(oActividad, AppConfigurationHelper.getJsonDepth());
//                    oEntregaBean.setObj_actividad(oActividad);
//
//                }
//            } catch (Exception ex) {
//                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
//            }
//        } else {
//            oEntregaBean.setId(0);
//        }
        return oEntregaBean;
    }

    @Override
    public EntregaBean set(EntregaBean oEntregaBean) throws Exception {
//        try {
//            if (oEntregaBean.getId() == 0) {
//                oEntregaBean.setId(oMysql.insertOne(strTableName));
//            }
//
//            oMysql.updateOne(oEntregaBean.getId(), strTableName, "nota", oEntregaBean.getNota().toString());
//
//            SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
//            oMysql.updateOne(oEntregaBean.getId(), strTableName, "fecha", date.format(oEntregaBean.getFecha()));
//
//            oMysql.updateOne(oEntregaBean.getId(), strTableName, "id_documento", oEntregaBean.getId_documento().toString());
//            oMysql.updateOne(oEntregaBean.getId(), strTableName, "id_actividad", oEntregaBean.getId_actividad().toString());
//
//        } catch (Exception ex) {
//            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
//        }
        return oEntregaBean;
    }

    @Override
    public int remove(EntregaBean oEntregaBean) throws Exception {
        int result = 0;
//        try {
//            result = oMysql.removeOne(oEntregaBean.getId(), strTableName);
//        } catch (Exception ex) {
//            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
//        }
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
