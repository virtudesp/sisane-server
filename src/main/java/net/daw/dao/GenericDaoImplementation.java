/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import net.daw.bean.GenericBeanImplementation;
import net.daw.bean.GenericBeanInterface;
import net.daw.data.MysqlData;
import net.daw.helper.Conexion;
import net.daw.helper.FilterBean;

/**
 *
 * @author rafa
 * @param <TIPO_OBJETO>
 *
 */
public abstract class GenericDaoImplementation<TIPO_OBJETO> implements GenericDaoInterface<TIPO_OBJETO> {

    protected final MysqlData oMysql;
    protected final Conexion.Tipo_conexion enumTipoConexion;
    protected final String strTabla;

    public GenericDaoImplementation(String tabla) throws Exception {
        oMysql = new MysqlData();
        enumTipoConexion = Conexion.getConection();
        strTabla = tabla;
    }

    @Override
    public int getPages(int intRegsPerPag, ArrayList<FilterBean> hmFilter) throws Exception {
        int pages;
        try {
            oMysql.conexion(enumTipoConexion);
            pages = oMysql.getPages(strTabla, intRegsPerPag, hmFilter);
            oMysql.desconexion();
            return pages;
        } catch (Exception e) {
            throw new Exception("GenericDao.getPages: Error: " + e.getMessage());
        }
    }

    @Override
    public int getCount(ArrayList<FilterBean> hmFilter) throws Exception {
        int pages;
        try {
            oMysql.conexion(enumTipoConexion);
            pages = oMysql.getCount(strTabla, hmFilter);
            oMysql.desconexion();
            return pages;
        } catch (Exception e) {
            throw new Exception("GenericDao.getCount: Error: " + e.getMessage());
        }

    }

    @Override
    public ArrayList<TIPO_OBJETO> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBean> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        Class<TIPO_OBJETO> tipo = (Class<TIPO_OBJETO>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        Method metodo_setId = tipo.getMethod("setId", Integer.class);
        ArrayList<Integer> arrId;
        ArrayList<TIPO_OBJETO> arrCliente = new ArrayList<>();
        try {
            oMysql.conexion(enumTipoConexion);
            arrId = oMysql.getPage(strTabla, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                Object oBean = Class.forName(tipo.getName()).newInstance();
                metodo_setId.invoke(oBean, iterador.next());
                arrCliente.add(this.get((TIPO_OBJETO) oBean));
            }
            oMysql.desconexion();
            return arrCliente;
        } catch (Exception e) {
            throw new Exception("GenericDao.getPage: Error: " + e.getMessage());
        }

    }

    private void parseValue(TIPO_OBJETO oBean, Method method, String strTipoParamMetodoSet, String strValor) throws Exception {
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
    }

    private TIPO_OBJETO fillForeign(TIPO_OBJETO oBean, Class<TIPO_OBJETO> tipo) throws NoSuchMethodException, ClassNotFoundException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        for (Method method : tipo.getMethods()) {
            if (!method.getName().substring(3).equalsIgnoreCase("id")) {
                if (method.getName().substring(0, 3).equalsIgnoreCase("set")) {
                    final Class<?> classTipoParamMetodoSet = method.getParameterTypes()[0];
                    if (method.getName().length() >= 5) {
                        if (method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(0, 4).equalsIgnoreCase("obj_")) {

                            //ojo: en los pojos, los id_ deben preceder a los obj_ del mismo objeto siempre!
                            String strAjena = method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(4);
                            Method metodo_getId_Ajena = tipo.getMethod("getId_" + strAjena);
                            strAjena = strAjena.substring(0, 1).toUpperCase(Locale.ENGLISH) + strAjena.substring(1);
                            GenericDaoImplementation oAjenaDao = (GenericDaoImplementation) Class.forName("net.daw.dao." + strAjena + "Dao").newInstance();

                            GenericBeanImplementation oAjenaBean = (GenericBeanImplementation) Class.forName("net.daw.bean." + strAjena + "Bean").newInstance();
                            int intIdAjena = (Integer) metodo_getId_Ajena.invoke(oBean);
                            oAjenaBean.setId(intIdAjena);
                            oAjenaBean = (GenericBeanImplementation) oAjenaDao.get(oAjenaBean);
                            //String strDescription = oAjenaDao.getDescription((Integer) metodo_getId_Ajena.invoke(oBean));
                            method.invoke(oBean, oAjenaBean);

                        }
                    }
                }
            }
        }
        return oBean;
    }

    private TIPO_OBJETO fill(TIPO_OBJETO oBean, Class<TIPO_OBJETO> tipo, Method metodo_getId) throws NoSuchMethodException, ClassNotFoundException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        for (Method method : tipo.getMethods()) {
            if (!method.getName().substring(3).equalsIgnoreCase("id")) {
                if (method.getName().substring(0, 3).equalsIgnoreCase("set")) {
                    final Class<?> classTipoParamMetodoSet = method.getParameterTypes()[0];
                    if (method.getName().length() >= 5) {
                        if (!method.getName().substring(3).toLowerCase(Locale.ENGLISH).substring(0, 4).equalsIgnoreCase("obj_")) {
                            String strValor = oMysql.getOne(strTabla, method.getName().substring(3).toLowerCase(Locale.ENGLISH), (Integer) metodo_getId.invoke(oBean));
                            if (strValor != null) {
                                parseValue(oBean, method, classTipoParamMetodoSet.getName(), strValor);
                            }
                        }
                    } else {
                        String strValor = oMysql.getOne(strTabla, method.getName().substring(3).toLowerCase(Locale.ENGLISH), (Integer) metodo_getId.invoke(oBean));
                        if (strValor != null) {
                            parseValue(oBean, method, classTipoParamMetodoSet.getName(), strValor);
                        }
                    }

                }
            }
        }
        return oBean;
    }

    @Override
    public TIPO_OBJETO get(TIPO_OBJETO oBean) throws Exception {
        Class<TIPO_OBJETO> tipo = (Class<TIPO_OBJETO>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        Method metodo_getId = tipo.getMethod("getId");
        Method metodo_setId = tipo.getMethod("setId", Integer.class);
        if ((Integer) metodo_getId.invoke(oBean) > 0) {
            try {
                oMysql.conexion(enumTipoConexion);
                if (!oMysql.existsOne(strTabla, (Integer) metodo_getId.invoke(oBean))) {
                    metodo_setId.invoke(oBean, 0);
                } else {
                    oBean = fill(oBean, tipo, metodo_getId);
                    oBean = fillForeign(oBean, tipo);
                }
            } catch (Exception e) {
                throw new Exception("GenericDao.get: Error: " + e.getMessage());
            } finally {
                oMysql.desconexion();
            }
        } else {
            metodo_setId.invoke(oBean, 0);
        }
        return oBean;

    }

    @Override
    public TIPO_OBJETO set(TIPO_OBJETO oBean) throws Exception {
        Class<TIPO_OBJETO> tipo = (Class<TIPO_OBJETO>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        Method metodo_getId = tipo.getMethod("getId");
        Method metodo_setId = tipo.getMethod("setId", Integer.class);
        try {
            oMysql.conexion(enumTipoConexion);
            oMysql.initTrans();
            if ((Integer) metodo_getId.invoke(oBean) == 0) {
                metodo_setId.invoke(oBean, oMysql.insertOne(strTabla));
            }
            for (Method method : tipo.getMethods()) {
                if (!method.getName().substring(3).equalsIgnoreCase("id")) {
                    if (method.getName().substring(0, 3).equalsIgnoreCase("get")) {
                        if (!method.getName().equals("getClass")) {
                            final Class<?> classTipoDevueltoMetodoGet = method.getReturnType();
                            String value = method.invoke(oBean).toString();
                            switch (classTipoDevueltoMetodoGet.getName()) {
                                case "java.util.Date":
                                    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                                    value = format.format(method.invoke(oBean));
                                    break;
                                case "java.lang.Boolean":
                                    if ("true".equals(value)) {
                                        value = "1";
                                    } else {
                                        value = "0";
                                    }
                                    break;
                            }
                            String strCampo = method.getName().substring(3).toLowerCase(Locale.ENGLISH);
                            oMysql.updateOne((Integer) metodo_getId.invoke(oBean), strTabla, strCampo, value);

                        }
                    }
                }
            }
            oMysql.commitTrans();
        } catch (Exception e) {
            oMysql.rollbackTrans();
            throw new Exception("GenericDao.set: Error: " + e.getMessage());
        } finally {
            oMysql.desconexion();
        }
        return oBean;
    }

    @Override
    public void remove(TIPO_OBJETO oBean) throws Exception {
        Class<TIPO_OBJETO> tipo = (Class<TIPO_OBJETO>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        Method metodo_getId = tipo.getMethod("getId");
        try {
            oMysql.conexion(enumTipoConexion);
            oMysql.removeOne((Integer) metodo_getId.invoke(oBean), strTabla);
            oMysql.desconexion();
        } catch (Exception e) {
            throw new Exception("GenericDao.remove: Error: " + e.getMessage());
        } finally {
            oMysql.desconexion();
        }
    }

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            oMysql.conexion(enumTipoConexion);
            alColumns = oMysql.getColumnsName(strTabla, Conexion.getDatabaseName());

            oMysql.desconexion();

        } catch (Exception e) {
            throw new Exception("GenericDao.getColumnsNames: Error: " + e.getMessage());
        } finally {
            oMysql.desconexion();
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            oMysql.conexion(enumTipoConexion);
            alColumns = oMysql.getPrettyColumns(strTabla);
            oMysql.desconexion();
        } catch (Exception e) {
            throw new Exception("GenericDao.getPrettyColumnsNames: Error: " + e.getMessage());
        } finally {
            oMysql.desconexion();
        }
        return alColumns;
    }

}
