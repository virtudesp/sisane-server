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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.bean.specific.implementation.ActividadBean;
import net.daw.bean.specific.implementation.TipopropuestaBean;
import net.daw.bean.specific.implementation.TipopropuestaBean;
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
public class TipopropuestaDao implements ViewDaoInterface<TipopropuestaBean>, TableDaoInterface<TipopropuestaBean>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;
    private String strPojo = null;

    public TipopropuestaDao(String ob, String pojo, Connection oConexion) throws Exception {
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

            for (Field field : TipopropuestaBean.class.getDeclaredFields()) {

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
    public ArrayList<TipopropuestaBean> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<TipopropuestaBean> arrTipopropuesta = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                TipopropuestaBean oTipopropuestaBean = new TipopropuestaBean(iterador.next());
                arrTipopropuesta.add(this.get(oTipopropuestaBean, 1));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrTipopropuesta;
    }

    @Override
    public TipopropuestaBean get(TipopropuestaBean oTipopropuestaBean, Integer expand) throws Exception {
        if (oTipopropuestaBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oTipopropuestaBean.getId())) {
                    oTipopropuestaBean.setId(0);
                } else {
                    oTipopropuestaBean.setDescripcion(oMysql.getOne(strTableName, "descripcion", oTipopropuestaBean.getId()));

                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oTipopropuestaBean.setId(0);
        }
        return oTipopropuestaBean;
    }

    @Override
    public TipopropuestaBean set(TipopropuestaBean oTipopropuestaBean) throws Exception {
        try {
            if (oTipopropuestaBean.getId() == 0) {
                oTipopropuestaBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oTipopropuestaBean.getId(), strTableName, "descripcion", oTipopropuestaBean.getDescripcion());

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oTipopropuestaBean;
    }

    @Override
    public int remove(TipopropuestaBean oTipopropuestaBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oTipopropuestaBean.getId(), strTableName);
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
