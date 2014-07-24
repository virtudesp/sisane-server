/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.data;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.helper.FilterBean;

/**
 *
 * @author rafa
 */
public interface GenericDataInterface {

    public void setPooledConnection(Connection pooledConnection) throws Exception;

    public void removeOne(int intId, String strTabla) throws Exception;

    public int insertOne(String strTabla) throws Exception;

    public void setNull(int intId, String strTabla, String strCampo) throws Exception;

    public void updateOne(int intId, String strTabla, String strCampo, String strValor) throws Exception;

    public String getId(String strTabla, String strCampo, String strValor) throws Exception;

    public String getOne(String strTabla, String strCampo, int id) throws Exception;

    public Boolean existsOne(String strTabla, int id) throws Exception;

    public int getPages(String strTabla, int intRegsPerPage, ArrayList<FilterBean> alFilter) throws Exception;

    public int getCount(String strTabla, ArrayList<FilterBean> alFilter) throws Exception;

    public ArrayList<Integer> getPage(String strTabla, int intRegsPerPage, int intPagina, ArrayList<FilterBean> alFilter, HashMap<String, String> hmOrder) throws Exception;

    public ArrayList<String> getColumnsName(String strTabla) throws Exception;

    public ArrayList<String> getPrettyColumns(String strTabla) throws Exception;

    public void removeSomeId(String strTabla, ArrayList<Integer> Ids) throws SQLException;

    public void removeSomeCondition(String strTabla, String campo, String valor) throws Exception;

}
