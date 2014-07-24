/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.operation;


import java.util.ArrayList;
import java.util.HashMap;
import net.daw.helper.FilterBean;

/**
 *
 * @author raznara
 * @param <OPERATION_BEAN>
 * @param <OPERATION_DAO>
 */
public interface GenericOperationInterface {

    //public void setConnectionPool(Connection c)throws Exception;
    
    
    public String get(Integer id) throws Exception;
    //public String get(GenericBeanImplementation oBean, GenericDaoImplementation<GenericBeanImplementation> oDao) throws Exception;

    //public String getColumns(OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception;
    public String getColumns() throws Exception;

    public String getRegisters(ArrayList<FilterBean> alFilter) throws Exception;

    //el columns va a llevar además el pretty columns y las validaciones de cliente    
    //pte utilizar objeto bean page
    public String getPage(int intRegsPerPag, int intPage, ArrayList<FilterBean> alFilter, HashMap<String, String> hmOrder) throws Exception;

    public String getPages(int intRegsPerPag, ArrayList<FilterBean> alFilter) throws Exception;

    public String remove(Integer id) throws Exception;

    public String save(String jason) throws Exception;

//    public String getList(int intRegsPerPag, int intPage, ArrayList<FilterBean> alFilter, HashMap<String, String> hmOrder, OPERATION_BEAN oBean, OPERATION_DAO oDao) throws Exception;

    public String getPrettyColumns() throws Exception;

    //public String getTypes() throws Exception;

    //public void setConnection(ConnectionClass oConexion);
}
