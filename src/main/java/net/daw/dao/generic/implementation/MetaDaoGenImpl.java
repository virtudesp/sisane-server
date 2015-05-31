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
package net.daw.dao.generic.implementation;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import net.daw.dao.publicinterface.MetaDaoInterface;
import java.sql.Connection;
import java.util.ArrayList;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.annotations.SelectSourceMetaInformation;
import net.daw.helper.annotations.TableSourceMetaInformation;
import net.daw.helper.statics.ExceptionBooster;

public abstract class MetaDaoGenImpl<BEAN_CLASS> implements MetaDaoInterface<BEAN_CLASS> {

    protected String strSqlSelectDataOrigin = null;
    protected String strTableOrigin = null;
    protected MysqlDataSpImpl oMysql = null;
    protected Connection oConnection = null;

    public MetaDaoGenImpl(Connection pooledConnection) throws Exception {
        try {
            Class<BEAN_CLASS> classBEAN = (Class<BEAN_CLASS>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
            if (classBEAN.isAnnotationPresent(TableSourceMetaInformation.class)) {
                TableSourceMetaInformation annotationTableSourceMetaInformation = classBEAN.getAnnotation(TableSourceMetaInformation.class);
                //TableSourceMetaInformation annotationTableSourceMetaInformation = (TableSourceMetaInformation) annotation;
                strTableOrigin = annotationTableSourceMetaInformation.TableName();
                strSqlSelectDataOrigin = "select * from " + strTableOrigin + " where 1=1 ";
            }
            if (classBEAN.isAnnotationPresent(SelectSourceMetaInformation.class)) {
                SelectSourceMetaInformation annotationSelectSourceMetaInformation = classBEAN.getAnnotation(SelectSourceMetaInformation.class);
                //SelectSourceMetaInformation annotationSelectSourceMetaInformation = (SelectSourceMetaInformation) annotation;
                strTableOrigin = null;
                strSqlSelectDataOrigin = annotationSelectSourceMetaInformation.SqlSelection() + " where 1=1 ";
            }
            if (strSqlSelectDataOrigin.equals(null)) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + classBEAN.getName() + " Beans must be annotated by SelectSourceMetaInformation or TableSourceMetaInformation "));
            }
            oConnection = pooledConnection;
            oMysql = new MysqlDataSpImpl(oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public ArrayList<MetaBeanGenImpl> getmetainformation() throws Exception {
        ArrayList<MetaBeanGenImpl> alVector = null;
        try {
            Class<BEAN_CLASS> classBEAN = (Class<BEAN_CLASS>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
            alVector = new ArrayList<>();
            //getsuperclass para obtener el id
            Class<? super BEAN_CLASS> superClassBean = classBEAN.getSuperclass();
            for (Field field : superClassBean.getDeclaredFields()) {
                Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
                for (Integer i = 0; i < fieldAnnotations.length; i++) {
                    if (fieldAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                        MethodMetaInformation fieldAnnotation = (MethodMetaInformation) fieldAnnotations[i];
                        if (!fieldAnnotation.IsIdForeignKey()) {
                            MetaBeanGenImpl oMeta = new MetaBeanGenImpl();
                            oMeta.setName(field.getName());
                            oMeta.setDefaultValue(fieldAnnotation.DefaultValue());
                            oMeta.setDescription(fieldAnnotation.Description());
                            oMeta.setIsId(fieldAnnotation.IsId());
                            //oMeta.setIsIdForeignKey(fieldAnnotation.IsIdForeignKey());
                            oMeta.setIsObjForeignKey(fieldAnnotation.IsObjForeignKey());
                            oMeta.setIsPathToObject(fieldAnnotation.IsPathToObject());
                            oMeta.setIsMetaForeignKey(fieldAnnotation.IsMetaForeignKey());
                            
                            
                            oMeta.setMaxDecimal(fieldAnnotation.MaxDecimal());
                            oMeta.setMaxInteger(fieldAnnotation.MaxInteger());
                            oMeta.setMaxLength(fieldAnnotation.MaxLength());
                            oMeta.setMinLength(fieldAnnotation.MinLength());
                            
                            
                            
                            oMeta.setMyIdName(fieldAnnotation.MyIdName());
                            oMeta.setMyObjName(fieldAnnotation.MyObjName());
                            oMeta.setMyMetaName(fieldAnnotation.MyMetaName());
                            
                            oMeta.setReferencesTable(fieldAnnotation.ReferencesTable());

//                            oMeta.setForeignKeyDescription1(fieldAnnotation.ForeignKeyDescription1());
//                            oMeta.setForeignKeyDescription2(fieldAnnotation.ForeignKeyDescription2());
//                            oMeta.setForeignKeyDescription3(fieldAnnotation.ForeignKeyDescription3());

                            
                            oMeta.setIsForeignKeyDescriptor(fieldAnnotation.IsForeignKeyDescriptor());
                            
                            
                            
                            oMeta.setShortName(fieldAnnotation.ShortName());
                            oMeta.setType(fieldAnnotation.Type());
                            oMeta.setUltraShortName(fieldAnnotation.UltraShortName());
                            alVector.add(oMeta);
                        }
                    }
                }
            }
            //now fill the other fileds metainformation
            for (Field field : classBEAN.getDeclaredFields()) {
                Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
                for (Integer i = 0; i < fieldAnnotations.length; i++) {
                    if (fieldAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                        MethodMetaInformation fieldAnnotation = (MethodMetaInformation) fieldAnnotations[i];
                        if (!fieldAnnotation.IsIdForeignKey()) {
                            MetaBeanGenImpl oMeta = new MetaBeanGenImpl();
                            oMeta.setName(field.getName());
                            oMeta.setDefaultValue(fieldAnnotation.DefaultValue());
                            oMeta.setDescription(fieldAnnotation.Description());
                            oMeta.setIsId(fieldAnnotation.IsId());
                            //oMeta.setIsIdForeignKey(fieldAnnotation.IsIdForeignKey());
                            oMeta.setIsObjForeignKey(fieldAnnotation.IsObjForeignKey());
                            oMeta.setIsPathToObject(fieldAnnotation.IsPathToObject());
                            oMeta.setIsMetaForeignKey(fieldAnnotation.IsMetaForeignKey());
                            
                            
                            
                            oMeta.setMaxDecimal(fieldAnnotation.MaxDecimal());
                            oMeta.setMaxInteger(fieldAnnotation.MaxInteger());
                            oMeta.setMaxLength(fieldAnnotation.MaxLength());
                            oMeta.setMinLength(fieldAnnotation.MinLength());
                            
                            oMeta.setMyIdName(fieldAnnotation.MyIdName());
                            oMeta.setMyObjName(fieldAnnotation.MyObjName());
                            oMeta.setMyMetaName(fieldAnnotation.MyMetaName());
                            
                            oMeta.setReferencesTable(fieldAnnotation.ReferencesTable());

//                            oMeta.setForeignKeyDescription1(fieldAnnotation.ForeignKeyDescription1());
//                            oMeta.setForeignKeyDescription2(fieldAnnotation.ForeignKeyDescription2());
//                            oMeta.setForeignKeyDescription3(fieldAnnotation.ForeignKeyDescription3());

                            
                            
                            oMeta.setIsForeignKeyDescriptor(fieldAnnotation.IsForeignKeyDescriptor());
                            
                            
                            
                            oMeta.setShortName(fieldAnnotation.ShortName());
                            oMeta.setType(fieldAnnotation.Type());
                            oMeta.setUltraShortName(fieldAnnotation.UltraShortName());
                            alVector.add(oMeta);
                        }
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

}
