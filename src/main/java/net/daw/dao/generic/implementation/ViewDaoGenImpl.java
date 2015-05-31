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

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.annotation.Annotation;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.dao.publicinterface.MetaDaoInterface;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.SqlBuilder;

public class ViewDaoGenImpl<BEAN_CLASS> extends MetaDaoGenImpl<BEAN_CLASS> implements ViewDaoInterface<BEAN_CLASS>, MetaDaoInterface<BEAN_CLASS> {
//

    public ViewDaoGenImpl(Connection pooledConnection) throws Exception {
        super(pooledConnection);
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
    public ArrayList<BEAN_CLASS> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        strSqlSelectDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        strSqlSelectDataOrigin += SqlBuilder.buildSqlOrder(hmOrder);
        Class<BEAN_CLASS> tipo = (Class<BEAN_CLASS>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        Method metodo_setId = tipo.getMethod("setId", Integer.class);
        ArrayList<Integer> arrId;
        ArrayList<BEAN_CLASS> arrCliente = new ArrayList<>();
        try {
            arrId = oMysql.getNewPage(strSqlSelectDataOrigin, intRegsPerPag, intPage);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                Object oBean = Class.forName(tipo.getName()).newInstance();
                metodo_setId.invoke(oBean, iterador.next());
                arrCliente.add(this.get((BEAN_CLASS) oBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrCliente;

    }

    private void parseValue(BEAN_CLASS oBean, Method method, String strTipoParamMetodoSet, String strValor) throws Exception {
        try {
            switch (strTipoParamMetodoSet) {
                case "java.lang.Double":
                    method.invoke(oBean, Double.parseDouble(strValor));
                    break;
                case "java.lang.Integer":
                    method.invoke(oBean, Integer.parseInt(strValor));
                    break;
                case "java.lang.Boolean":
                    if (Integer.parseInt(strValor) == 1) {
                        method.invoke(oBean, true);
                    } else {
                        method.invoke(oBean, false);
                    }
                    break;
                case "java.util.Date":
                    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                    method.invoke(oBean, format.parse(strValor));
                    break;
                default:
                    method.invoke(oBean, strValor);
                    break;
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":parseValue ERROR: " + ex.getMessage()));
        }
    }

    /**
     * For every field in the class obtain project annotations and treat only
     * foreign object fields to be filled.
     *
     * @param oBean
     * @param tipo
     * @return
     * @throws Exception
     */
    private BEAN_CLASS fillForeign(BEAN_CLASS oBean, Class<BEAN_CLASS> tipo) throws Exception {
        try {
            for (Field field : tipo.getDeclaredFields()) {
                Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
                for (Integer i = 0; i < fieldAnnotations.length; i++) {
                    if (fieldAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                        MethodMetaInformation fieldAnnotation = (MethodMetaInformation) fieldAnnotations[i];
                        if (fieldAnnotation.IsObjForeignKey() == true) {
                            Constructor DaoConstructor;
                            String strTabla = fieldAnnotation.ReferencesTable().substring(0, 1).toUpperCase(Locale.ENGLISH) + fieldAnnotation.ReferencesTable().substring(1);
                            //String strMethod = fieldAnnotation.ReferencesTable().substring(0, 1).toLowerCase(Locale.ENGLISH) + fieldAnnotation.ReferencesTable().substring(1);
                            DaoConstructor = Class.forName("net.daw.dao.specific.implementation." + strTabla + "Dao").getConstructor(Connection.class);
                            TableDaoGenImpl oAjenaDao = (TableDaoGenImpl) DaoConstructor.newInstance(oConnection);
                            BeanGenImpl oAjenaBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + strTabla + "Bean").newInstance();
                            //Method metodo_getId_Ajena = tipo.getMethod("getId_" + strMethod);
                            
                            
                            
                            String strForeignIdName = fieldAnnotation.MyIdName().substring(0, 1).toUpperCase(Locale.ENGLISH) + fieldAnnotation.MyIdName().substring(1);
                            
                            
                            
                            
                            Method metodo_getId_Ajena = tipo.getMethod("get" + strForeignIdName);
                            int intIdAjena = (Integer) metodo_getId_Ajena.invoke(oBean);
                            oAjenaBean.setId(intIdAjena);
                            oAjenaBean = (BeanGenImpl) oAjenaDao.get(oAjenaBean, AppConfigurationHelper.getJsonDepth());
                            //Method method_setObj_Propia = tipo.getDeclaredMethod("setObj_" + strMethod, oAjenaBean.getClass());
                            //Method method_setObj_Propia = tipo.getDeclaredMethod("set" +  methodAnnotation.MyObjName(), oAjenaBean.getClass());

                            Method method_setObj_Propia = getWriteMethod(field);

                            //String strForeignObjName = field.getName().substring(0, 1).toUpperCase(Locale.ENGLISH) + field.getName().substring(1);
                            //Method method_setObj_Propia = tipo.getDeclaredMethod("set" + strForeignObjName, oAjenaBean.getClass());
                            method_setObj_Propia.invoke(oBean, oAjenaBean);
                            //field.set(oBean, oAjenaBean); //no, because property is private!!!
                        }
                    }
                }
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":fillForeign ERROR: " + ex.getMessage()));
        }
        return oBean;
    }

    
    
    
    
    
    
    
    
    
      private BEAN_CLASS fillMetaForeign(BEAN_CLASS oBean, Class<BEAN_CLASS> tipo) throws Exception {
        try {
            for (Field field : tipo.getDeclaredFields()) {
                Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
                for (Integer i = 0; i < fieldAnnotations.length; i++) {
                    if (fieldAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                        MethodMetaInformation fieldAnnotation = (MethodMetaInformation) fieldAnnotations[i];
                        if (fieldAnnotation.IsMetaForeignKey() == true) {
                            ArrayList<MetaBeanGenImpl> oMetaBeanList= new ArrayList<>();
                                                        
                            String strTabla = fieldAnnotation.ReferencesTable().substring(0, 1).toUpperCase(Locale.ENGLISH) + fieldAnnotation.ReferencesTable().substring(1);
                                                        
                            Constructor DaoConstructor;
                            DaoConstructor = Class.forName("net.daw.dao.specific.implementation." + strTabla + "Dao").getConstructor(Connection.class);
                            MetaDaoGenImpl oAjenaMetaDao = (MetaDaoGenImpl) DaoConstructor.newInstance(oConnection);
                                                                                                                
                            oMetaBeanList=oAjenaMetaDao.getmetainformation();
                                                                                                                                                                                      
                            Method method_setObj_Propia = getWriteMethod(field);                      
                            method_setObj_Propia.invoke(oBean, oMetaBeanList);                       
                        }
                    }
                }
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":fillForeign ERROR: " + ex.getMessage()));
        }
        return oBean;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    private BEAN_CLASS fillForeign(BEAN_CLASS oBean, Class<BEAN_CLASS> tipo) throws Exception {
//        try {
//            for (Method method : tipo.getMethods()) {
//                if (method.getName().length() >= 5) { //los campos como minimo han de tener dos caracteres + el get o el set = 5 caracteres
//                    if (!method.getName().substring(3).equalsIgnoreCase("id")) {
//                        if (method.getName().substring(0, 3).equalsIgnoreCase("set")) {
//                            final Class<?> classTipoParamMetodoSet = method.getParameterTypes()[0];
//                            if (method.getName().length() >= 5) {
//                                if (method.getName().substring(3).length() >= 4) {
//                                    if (method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(0, 4).equalsIgnoreCase("obj_")) {
//                                        //prueba: method.getName().substring(method.getName().indexOf("_")+1,method.getName().lastIndexOf("_")))
//                                        //ojo: en los pojos, los id_ deben preceder a los obj_ del mismo objeto siempre!
//                                        //only two _ allowed in foreign keys
//                                        String strAjena, strTabla = null;
//
//                                        if (!(method.getName().indexOf("_") == (method.getName().lastIndexOf("_")))) {
//                                            strTabla = method.getName().substring(method.getName().indexOf("_") + 1, method.getName().lastIndexOf("_")).toLowerCase(Locale.ENGLISH);
//                                            strAjena = method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(4);
//                                        } else {
//                                            strAjena = method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(4);
//                                            strTabla = strAjena;
//                                        }
//                                        Method metodo_getId_Ajena = tipo.getMethod("getId_" + strAjena);
//                                        strTabla = strTabla.substring(0, 1).toUpperCase(Locale.ENGLISH) + strTabla.substring(1);
//                                //GenericDaoImplementation oAjenaDao = (GenericDaoImplementation) Class.forName("net.daw.dao." + strAjena + "Dao").newInstance();
//
//                                        //rafa: aqui intentamos crear el DAO de la clave ajena generico-específico y si no espcífico
//                                        //pte porque da error
//                                        Constructor c;
//
//                                        try {
//                                            c = Class.forName("net.daw.dao.specific.implementation." + strTabla + "Dao").getConstructor(Connection.class
//                                            );
//                                        } catch (ClassNotFoundException | NoSuchMethodException | SecurityException ex) {
//                                            //aqui da el error--> pte d eestudiar
//                                            c = Class.forName("net.daw.dao.specific.implementation." + strTabla + "Dao").getConstructor(Connection.class
//                                            );
//                                        }
//                                        //------------------------------------
//
//                                        TableDaoGenImpl oAjenaDao = (TableDaoGenImpl) c.newInstance(oConnection);
//
//                                        BeanGenImpl oAjenaBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + strTabla + "Bean").newInstance();
//                                        int intIdAjena = (Integer) metodo_getId_Ajena.invoke(oBean);
//                                        oAjenaBean.setId(intIdAjena);
//                                        oAjenaBean = (BeanGenImpl) oAjenaDao.get(oAjenaBean, AppConfigurationHelper.getJsonDepth());
//                                        //String strDescription = oAjenaDao.getDescription((Integer) metodo_getId_Ajena.invoke(oBean));
//                                        method.invoke(oBean, oAjenaBean);
//                                    }
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//        } catch (Exception ex) {
//            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":fillForeign ERROR: " + ex.getMessage()));
//        }
//        return oBean;
//    }
//    private BEAN_CLASS fill(BEAN_CLASS oBean, Class<BEAN_CLASS> tipo, Method metodo_getId) throws Exception {
//        try {
//            for (Method method : tipo.getDeclaredMethods()) {
//
//                if (!method.getName().substring(3).equalsIgnoreCase("id")) {
//                    if (method.getName().substring(0, 3).equalsIgnoreCase("set")) {
//                        final Class<?> classTipoParamMetodoSet = method.getParameterTypes()[0];
//                        if (method.getName().length() >= 5) {
//                            if (method.getName().substring(3).length() >= 4) {
//                                if (!method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(0, 4).equalsIgnoreCase("obj_")) {
//
//                                    //String kk = getFieldName(method);
//                                    String strValor = oMysql.getNewOne(strSqlSelectDataOrigin, method.getName().substring(3).toLowerCase(Locale.ENGLISH), (Integer) metodo_getId.invoke(oBean));
//                                    if (strValor != null) {
//                                        parseValue(oBean, method, classTipoParamMetodoSet.getName(), strValor);
//                                    }
//                                }
//                            } else {
//                                String strValor = oMysql.getNewOne(strSqlSelectDataOrigin, method.getName().substring(3).toLowerCase(Locale.ENGLISH), (Integer) metodo_getId.invoke(oBean));
//                                if (strValor != null) {
//                                    parseValue(oBean, method, classTipoParamMetodoSet.getName(), strValor);
//                                }
//                            }
//                        } else {
//                            String strValor = oMysql.getNewOne(strSqlSelectDataOrigin, method.getName().substring(3).toLowerCase(Locale.ENGLISH), (Integer) metodo_getId.invoke(oBean));
//                            if (strValor != null) {
//                                parseValue(oBean, method, classTipoParamMetodoSet.getName(), strValor);
//                            }
//                        }
//
//                    }
//                }
//            }
//
//        } catch (Exception ex) {
//            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":fill ERROR: " + ex.getMessage()));
//        }
//        return oBean;
//    }
    private BEAN_CLASS fill(BEAN_CLASS oBean, Class<BEAN_CLASS> tipo, Method metodo_getId) throws Exception {
        try {
            for (Method method : tipo.getDeclaredMethods()) {
                if (isSetter(method)) {
//                    System.out.println("* ---> " + method.getName());
                    Field field = getFieldName(method);
                    Annotation[] methodAnnotations = field.getDeclaredAnnotations();
                    for (Integer i = 0; i < methodAnnotations.length; i++) {
                        if (methodAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                            MethodMetaInformation methodAnnotation = (MethodMetaInformation) methodAnnotations[i];
                            if ( (methodAnnotation.IsMetaForeignKey() == false) && (methodAnnotation.IsObjForeignKey() == false) && (methodAnnotation.IsId() == false)) {
                                String strValor = oMysql.getNewOne(strSqlSelectDataOrigin, field.getName().toLowerCase(Locale.ENGLISH), (Integer) metodo_getId.invoke(oBean));
//                                System.out.println("            ---> metodo: " + methodAnnotation.ShortName());
//                                System.out.println("            ---> valor: " + strValor);
                                if (strValor != null) {
                                    final Class<?> classTipoParamMetodoSet = method.getParameterTypes()[0];
                                    parseValue(oBean, method, classTipoParamMetodoSet.getName(), strValor);
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":fill ERROR: " + ex.getMessage()));
        }
        return oBean;
    }

    public boolean isGetter(Method method) {
        if (!method.getName().startsWith("get")) {
            return false;
        }
        if (method.getParameterTypes().length != 0) {
            return false;
        }
        if (void.class.equals(method.getReturnType())) {
            return false;
        }
        return true;
    }

    public boolean isSetter(Method method) {
        if (!method.getName().startsWith("set")) {
            return false;
        }
        if (method.getParameterTypes().length != 1) {
            return false;
        }
        return true;
    }

    public Field getFieldName(Method method) {
        try {
            Class<?> classFromMethod = method.getDeclaringClass();
            BeanInfo infoOfTheBean = Introspector.getBeanInfo(classFromMethod);
            PropertyDescriptor[] propertyDescriptors = infoOfTheBean.getPropertyDescriptors();
            for (PropertyDescriptor propDesc : propertyDescriptors) {
                if (method.equals(propDesc.getWriteMethod()) || method.equals(propDesc.getReadMethod())) {
                    Class clss = method.getDeclaringClass();
                    for (Field field : clss.getDeclaredFields()) {
                        if (field.getName().equals(propDesc.getName())) {
                            return field;
                        }

                    }
                }
            }
        } catch (IntrospectionException | SecurityException ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getFieldName ERROR: " + ex.getMessage()));
        }
        return null;
    }

    public Method getReadMethod(Field field) {
        try {
            Class<?> classFromMethod = field.getDeclaringClass();
            BeanInfo infoOfTheBean = Introspector.getBeanInfo(classFromMethod);
            PropertyDescriptor[] propertyDescriptors = infoOfTheBean.getPropertyDescriptors();
            for (PropertyDescriptor propDesc : propertyDescriptors) {
                if (field.getName().equals(propDesc.getName())) {
                    //System.out.println(propDesc.getDisplayName());
                    return propDesc.getReadMethod();
                }
            }
        } catch (IntrospectionException ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getReadMethod ERROR: " + ex.getMessage()));
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getReadMethod ERROR: " + ex.getMessage()));
        }
        return null;
    }

    public Method getWriteMethod(Field field) {
        try {
            Class<?> classFromMethod = field.getDeclaringClass();
            BeanInfo infoOfTheBean = Introspector.getBeanInfo(classFromMethod);
            PropertyDescriptor[] propertyDescriptors = infoOfTheBean.getPropertyDescriptors();
            for (PropertyDescriptor propDesc : propertyDescriptors) {
                if (field.getName().equals(propDesc.getName())) {
                    //System.out.println(propDesc.getDisplayName());
                    return propDesc.getWriteMethod();
                }
            }
        } catch (IntrospectionException ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getWriteMethod ERROR: " + ex.getMessage()));
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getWriteMethod ERROR: " + ex.getMessage()));
        }
        return null;
    }

    @Override
    public BEAN_CLASS get(BEAN_CLASS oBean, Integer expand) throws Exception {
        try {
            Class<BEAN_CLASS> tipo = (Class<BEAN_CLASS>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
            Method metodo_getId = tipo.getMethod("getId");
            Method metodo_setId = tipo.getMethod("setId", Integer.class);
            if ((Integer) metodo_getId.invoke(oBean) > 0) {
                try {
                    if (!oMysql.existsNewOne(strSqlSelectDataOrigin, (Integer) metodo_getId.invoke(oBean))) {
                        metodo_setId.invoke(oBean, 0);
                    } else {
                        oBean = fill(oBean, tipo, metodo_getId);
                        expand--;
                        if (expand > 0) {
                            oBean = fillForeign(oBean, tipo);
                            oBean = fillMetaForeign(oBean, tipo);
                        }
                    }
                } catch (Exception ex) {
                    ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
                }
            } else {
                metodo_setId.invoke(oBean, 0);
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
        }
        return oBean;

    }



}
