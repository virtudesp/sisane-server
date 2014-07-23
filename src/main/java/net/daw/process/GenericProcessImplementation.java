/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import net.daw.bean.DocumentoBean;
import net.daw.bean.GenericBeanInterface;
import net.daw.dao.DocumentoDao;
import net.daw.dao.GenericDaoImplementation;
import net.daw.dao.GenericDaoInterface;

import net.daw.helper.FilterBean;

/**
 * String data;
 *
 * @author raznara
 * @param <OPERATION_BEAN>
 * @param <OPERATION_DAO>
 */
public abstract class GenericProcessImplementation<OPERATION_BEAN, OPERATION_DAO> implements GenericProcessInterface<OPERATION_BEAN, OPERATION_DAO> {

    @Override
    public String getPrettyColumns(String objeto) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.

        Constructor c = Class.forName("net.daw.dao." + objeto + "Dao").getConstructor();
        GenericDaoImplementation oDao = (GenericDaoImplementation) c.newInstance();

        ArrayList<String> alColumns = null;
        String data;

        alColumns = oDao.getPrettyColumnsNames();

        GsonBuilder gsonBuilder = new GsonBuilder();

        Gson gson = gsonBuilder.create();
        data = gson.toJson(alColumns);
        return data;
    }

    @Override
    public String getColumns(String objeto) throws Exception {

        Constructor c = Class.forName("net.daw.dao." + objeto + "Dao").getConstructor();
        GenericDaoImplementation oDao = (GenericDaoImplementation) c.newInstance();

        ArrayList<String> alColumns = null;
        String data;

        alColumns = oDao.getColumnsNames();

        GsonBuilder gsonBuilder = new GsonBuilder();

        Gson gson = gsonBuilder.create();
        data = gson.toJson(alColumns);

        return data;
    }

    @Override
    public String get(OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        String data;
        try {
            GenericBeanInterface oGenericBean = (GenericBeanInterface) oBean;
            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;

            oGenericBean = (GenericBeanInterface) oGenericDao.get(oGenericBean);

//            Class<OPERATION_BEAN> tipoBean = (Class<OPERATION_BEAN>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
//            Class<OPERATION_DAO> tipoDao = (Class<OPERATION_DAO>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1];
//
//            //ClassDemo cls = new ClassDemo();
//            Class oBeanClass = oBean.getClass();
//            
//            
//            //Method metodo_get2 = tipoDao.getMethod("dd" );
//            Method metodo_get = tipoDao.getDeclaredMethod("get",new Class[]{oBeanClass});
//            
//            
//            oBean = (OPERATION_BEAN) metodo_get.invoke(oDao, oBean);
            //oBean = (GenericBeanImplementation) oDao.get(oBean);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");

            Gson gson = gsonBuilder.excludeFieldsWithoutExposeAnnotation().create();
            //Gson gson = gsonBuilder.create();
            data = gson.toJson(oGenericBean);
            return data;

        } catch (Exception e) {
            throw new ServletException("GetJson: View Error: " + e.getMessage());
        }

    }

//    @Override
//    public String getColumns(OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception {
//        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//
//        try {
//            GenericBeanInterface oGenericBean = (GenericBeanInterface) oBean;
//            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;
//
//            // oGenericBean = (GenericBeanInterface) oGenericDao.get(oGenericBean);
//            ArrayList<String> alColumns = oGenericDao.getColumnsNames();
//            String data = new Gson().toJson(alColumns);
//            data = "{\"data\":" + data + "}";
//            return data;
//        } catch (Exception e) {
//            throw new ServletException("GetcolumnsJson: View Error: " + e.getMessage());
//        }
//
//    }
    @Override
    public String getPage(int intRegsPerPag, int intPage, ArrayList<FilterBean> alFilter, HashMap<String, String> hmOrder, OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.

        try {
            GenericBeanInterface oGenericBean = (GenericBeanInterface) oBean;
            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;
            List<GenericBeanInterface> loGenericBean = oGenericDao.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.excludeFieldsWithoutExposeAnnotation().create();
            String data = gson.toJson(loGenericBean);
            data = "{\"list\":" + data + "}";
            return data;
        } catch (Exception e) {
            throw new ServletException("GetpageJson: View Error: " + e.getMessage());
        }
    }

    @Override
    public String getPages(int intRegsPerPag, ArrayList<FilterBean> alFilter, OPERATION_DAO oDao) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        try {
            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;
            int pages = oGenericDao.getPages(intRegsPerPag, alFilter);
            String data = "{\"data\":\"" + Integer.toString(pages) + "\"}";
            return data;
        } catch (Exception e) {
            throw new ServletException("FollowerGetpagesJson: View Error: " + e.getMessage());
        }
    }

    @Override
    public String remove(OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        try {
            GenericBeanInterface oGenericBean = (GenericBeanInterface) oBean;
            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;
            Map<String, String> data = new HashMap<>();
            if (oGenericBean != null) {
                oGenericDao.remove(oGenericBean);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oGenericBean.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("RemoveJson: View Error: " + e.getMessage());
        }

    }

    @Override
    public String save(String jason, OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.

        try {
            GenericBeanInterface oGenericBean = (GenericBeanInterface) oBean;
            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;
//
            Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
//
//            oGenericBean = gson.fromJson(jason, oGenericBean.getClass());

            Map<String, String> data = new HashMap<>();
            if (oGenericBean != null) {
                oGenericBean = (GenericBeanInterface) oGenericDao.set(oGenericBean);
                data.put("status", "200");
                data.put("message", Integer.toString(oGenericBean.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("SaveJson: View Error: " + e.getMessage());
        }

    }

    @Override
    public String getRegisters(ArrayList<FilterBean> alFilter, OPERATION_DAO oDao) throws Exception {
        try {
            GenericDaoInterface oGenericDao = (GenericDaoInterface) oDao;
            int registers = oGenericDao.getCount(alFilter);
            String data = "{\"data\":\"" + Integer.toString(registers) + "\"}";
            return data;
        } catch (Exception e) {
            throw new ServletException("GetregistersJson: View Error: " + e.getMessage());
        }
    }

//    @Override
//    //no se utiliza por ahora
//    public String getList(int intRegsPerPag, int intPage, ArrayList<FilterBean> alFilter, HashMap<String, String> hmOrder, OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception {
//        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
//        try {
//            //falta controlar la transacción a esta altura
//            String columns = this.getColumns();
//            String prettyColumns = this.getPrettyColumns();
//            //String types = this.getTypes();
//            String page = this.getPage(intRegsPerPag, intPage, alFilter, hmOrder, oBean, oDao);
//            String pages = this.getPages(intRegsPerPag, alFilter, oDao);
//            String registers = this.getRegisters(alFilter, oDao);
//            String data = "{\"data\":{"
//                    + "\"columns\":" + columns
//                    + ",\"prettyColumns\":" + prettyColumns
//                    // + ",\"types\":" + types
//                    + ",\"page\":" + page
//                    + ",\"pages\":" + pages
//                    + ",\"registers\":" + registers
//                    + "}}";
//            return data;
//        } catch (Exception e) {
//            throw new ServletException("GetpageJson: View Error: " + e.getMessage());
//        }
//    }

}
