package net.daw.data;

/**
 * Clase Mysql para acceder a bases de datos Mysql. Nivel data.
 *
 * @author rafael aznar
 */
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import net.daw.helper.ConnectionSource;
import net.daw.helper.FilterBean;

public class MysqlDataImplementation implements GenericDataInterface {

    Connection connection = null;

    @Override
    public void setPooledConnection(Connection pooledConnection) throws Exception {
        connection = pooledConnection;
    }

    @Override
    public void removeOne(int intId, String strTabla) throws Exception {

        Statement oStatement = null;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "DELETE FROM " + strTabla + " WHERE id = " + intId;
            oStatement.executeUpdate(strSQL);
        } catch (SQLException e) {
            throw new Exception("mysql.deleteOne: Error al eliminar el registro: " + e.getMessage());
        } finally {
            oStatement.close();
        }
    }

    @Override
    public int insertOne(String strTabla) throws Exception {

        ResultSet oResultSet;
        java.sql.PreparedStatement oPreparedStatement = null;
        int id = 0;
        try {
            String strSQL = "INSERT INTO " + strTabla + " (id) VALUES (null) ";
            oPreparedStatement = connection.prepareStatement(strSQL, Statement.RETURN_GENERATED_KEYS);
            int returnLastInsertId = oPreparedStatement.executeUpdate();
            if (returnLastInsertId != -1) {
                oResultSet = oPreparedStatement.getGeneratedKeys();
                oResultSet.next();
                id = oResultSet.getInt(1);
            }
            return id;
        } catch (SQLException e) {
            throw new Exception("mysql.insertOne: Error al insertar el registro: " + e.getMessage());
        } finally {
            oPreparedStatement.close();

        }
    }

    @Override
    public void setNull(int intId, String strTabla, String strCampo) throws Exception {

        Statement oStatement = null;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "UPDATE " + strTabla + " SET " + strCampo + " = null WHERE id = " + Integer.toString(intId);
            oStatement.executeUpdate(strSQL);
        } catch (SQLException e) {
            throw new Exception("mysql.setNull: Error al modificar el registro: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public void updateOne(int intId, String strTabla, String strCampo, String strValor) throws Exception {

        Statement oStatement = null;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "UPDATE " + strTabla + " SET " + strCampo + " = '" + strValor + "' WHERE id = " + Integer.toString(intId);
            oStatement.executeUpdate(strSQL);
        } catch (SQLException e) {
            throw new Exception("mysql.updateOne: Error al modificar el registro: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public String getId(String strTabla, String strCampo, String strValor) throws Exception {

        Statement oStatement = null;
        ResultSet oResultSet;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "SELECT id FROM " + strTabla + " WHERE " + strCampo + "='" + strValor + "'";
            oResultSet = oStatement.executeQuery(strSQL);
            if (oResultSet.next()) {
                return oResultSet.getString("id");
            } else {
                return null;
            }
        } catch (SQLException ex) {
            throw new Exception("mysql.getId: No se ha podido realizar la consulta: " + ex.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public String getOne(String strTabla, String strCampo, int id) throws Exception {

        Statement oStatement = null;
        ResultSet oResultSet;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "SELECT " + strCampo + " FROM " + strTabla + " WHERE id=" + Integer.toString(id);
            oResultSet = oStatement.executeQuery(strSQL);
            if (oResultSet.next()) {
                return oResultSet.getString(strCampo);
            } else {
                return null;
            }

        } catch (SQLException ex) {
            throw new Exception("mysql.getOne: No se ha podido realizar la consulta: " + ex.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public Boolean existsOne(String strTabla, int id) throws Exception {

        int result = 0;
        Statement oStatement = null;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "SELECT count(*) FROM " + strTabla + " WHERE 1=1";
            ResultSet rs = oStatement.executeQuery(strSQL);
            while (rs.next()) {
                result = rs.getInt("COUNT(*)");
            }
            return (result > 0);
        } catch (SQLException e) {
            throw new Exception("mysql.existsOne: Error en la consulta: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public int getPages(String strTabla, int intRegsPerPage, ArrayList<FilterBean> alFilter) throws Exception {

        int intResult = 0;
        Statement oStatement = null;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "SELECT count(*) FROM " + strTabla + " WHERE 1=1";
            if (alFilter != null) {
                Iterator iterator = alFilter.iterator();
                while (iterator.hasNext()) {
                    FilterBean oFilterBean = (FilterBean) iterator.next();
                    switch (oFilterBean.getFilterOperator()) {
                        case "like":
                            strSQL += " AND " + oFilterBean.getFilter() + " LIKE '%" + oFilterBean.getFilterValue() + "%'";
                            break;
                        case "notlike":
                            strSQL += " AND " + oFilterBean.getFilter() + " NOT LIKE '%" + oFilterBean.getFilterValue() + "%'";
                            break;
                        case "equals":
                            strSQL += " AND " + oFilterBean.getFilter() + " = '" + oFilterBean.getFilterValue() + "'";
                            break;
                        case "notequalto":
                            strSQL += " AND " + oFilterBean.getFilter() + " <> '" + oFilterBean.getFilterValue() + "'";
                            break;
                        case "less":
                            strSQL += " AND " + oFilterBean.getFilter() + " < " + oFilterBean.getFilterValue() + "";
                            break;
                        case "lessorequal":
                            strSQL += " AND " + oFilterBean.getFilter() + " <= " + oFilterBean.getFilterValue() + "";
                            break;
                        case "greater":
                            strSQL += " AND " + oFilterBean.getFilter() + " > " + oFilterBean.getFilterValue() + "";
                            break;
                        case "greaterorequal":
                            strSQL += " AND " + oFilterBean.getFilter() + " >= " + oFilterBean.getFilterValue() + "";
                            break;
                    }

                }

            }

//            if (hmOrder != null) {
//                strSQL += " ORDER BY";
//                for (Map.Entry oPar : hmOrder.entrySet()) {
//                    strSQL += " " + oPar.getKey() + " " + oPar.getValue() + ",";
//                }
//                strSQL = strSQL.substring(0, strSQL.length() - 1);
//            }
            ResultSet oResultSet = oStatement.executeQuery(strSQL);
            while (oResultSet.next()) {
                intResult = oResultSet.getInt("COUNT(*)") / intRegsPerPage;
                if ((oResultSet.getInt("COUNT(*)") % intRegsPerPage) > 0) {
                    intResult++;
                }
            }
            return intResult;
        } catch (SQLException e) {
            throw new Exception("mysql.getPages: Error en la consulta: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public int getCount(String strTabla, ArrayList<FilterBean> alFilter) throws Exception {

        int intResult = 0;
        Statement oStatement = null;
        try {
            oStatement = (Statement) connection.createStatement();
            String strSQL = "SELECT count(*) FROM " + strTabla + " WHERE 1=1";
            if (alFilter != null) {
                Iterator iterator = alFilter.iterator();
                while (iterator.hasNext()) {
                    FilterBean oFilterBean = (FilterBean) iterator.next();
                    switch (oFilterBean.getFilterOperator()) {
                        case "like":
                            strSQL += " AND " + oFilterBean.getFilter() + " LIKE '%" + oFilterBean.getFilterValue() + "%'";
                            break;
                        case "notlike":
                            strSQL += " AND " + oFilterBean.getFilter() + " NOT LIKE '%" + oFilterBean.getFilterValue() + "%'";
                            break;
                        case "equals":
                            strSQL += " AND " + oFilterBean.getFilter() + " = '" + oFilterBean.getFilterValue() + "'";
                            break;
                        case "notequalto":
                            strSQL += " AND " + oFilterBean.getFilter() + " <> '" + oFilterBean.getFilterValue() + "'";
                            break;
                        case "less":
                            strSQL += " AND " + oFilterBean.getFilter() + " < " + oFilterBean.getFilterValue() + "";
                            break;
                        case "lessorequal":
                            strSQL += " AND " + oFilterBean.getFilter() + " <= " + oFilterBean.getFilterValue() + "";
                            break;
                        case "greater":
                            strSQL += " AND " + oFilterBean.getFilter() + " > " + oFilterBean.getFilterValue() + "";
                            break;
                        case "greaterorequal":
                            strSQL += " AND " + oFilterBean.getFilter() + " >= " + oFilterBean.getFilterValue() + "";
                            break;
                    }
                }
            }
            ResultSet oResultSet = oStatement.executeQuery(strSQL);
            while (oResultSet.next()) {
                intResult = oResultSet.getInt("COUNT(*)");
            }
            return intResult;
        } catch (SQLException e) {
            throw new Exception("mysql.getCount: Error en la consulta: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

//    //select column_name, column_comment from information_schema.columns where table_name='documento';
//    //SHOW FULL COLUMNS FROM documento
//    @Override
//    public ArrayList<String> getColumnsName(String strTabla) throws Exception {
//        Connection conexion = ConnectionSource.getDataSource().getConnection();
//        Statement oStatement = null;
//        try {
//            ArrayList<String> vector = new ArrayList<>();
//
//           
//            oStatement = conexion.createStatement();
//            //String strSQL = "SELECT id FROM " + strTabla + " WHERE 1=1 ";
//            String strSQL = "SELECT `COLUMN_NAME` FROM `INFORMATION_SCHEMA`.`COLUMNS` ";
//            strSQL += "WHERE `TABLE_SCHEMA`='" + ConnectionClass.getDatabaseName() + "' ";
//            strSQL += "AND `TABLE_NAME`='" + strTabla + "' ";
//            ResultSet oResultSet = oStatement.executeQuery(strSQL);
//            while (oResultSet.next()) {
//                if (oResultSet.getString("COLUMN_NAME").length() >= 4) {
//                    if (oResultSet.getString("COLUMN_NAME").substring(0, 3).equalsIgnoreCase("id_")) {
//                        vector.add("obj_" + oResultSet.getString("COLUMN_NAME").substring(3));
//                    } else {
//                        vector.add(oResultSet.getString("COLUMN_NAME"));
//                    }
//                } else {
//                    vector.add(oResultSet.getString("COLUMN_NAME"));
//                }
//            }
//            return vector;
//        } catch (SQLException e) {
//            throw new Exception("mysql.getColumnsName: Error en la consulta: " + e.getMessage());
//        } finally {
//            oStatement.close();
//            conexion.close();
//        }
//    }
    @Override

    public ArrayList<String> getColumnsName(String strTabla) throws Exception {

        Statement oStatement = null;
        try {
            ArrayList<String> vector = new ArrayList<>();

            oStatement = connection.createStatement();
            //String strSQL = "SELECT id FROM " + strTabla + " WHERE 1=1 ";
            String strSQL = "SHOW FULL COLUMNS FROM " + strTabla;
            ResultSet oResultSet = oStatement.executeQuery(strSQL);
            while (oResultSet.next()) {
                if (oResultSet.getString("Field").length() >= 4) {
                    if (oResultSet.getString("Field").substring(0, 3).equalsIgnoreCase("id_")) {
                        vector.add("obj_" + oResultSet.getString("Field").substring(3));
                    } else {
                        vector.add(oResultSet.getString("Field"));
                    }
                } else {
                    vector.add(oResultSet.getString("Field"));
                }
            }
            return vector;
        } catch (SQLException e) {
            throw new Exception("mysql.getColumnsName: Error en la consulta: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public ArrayList<String> getPrettyColumns(String strTabla) throws Exception {

        Statement oStatement = null;
        try {
            ArrayList<String> vector = new ArrayList<>();

            oStatement = connection.createStatement();
            //String strSQL = "SELECT id FROM " + strTabla + " WHERE 1=1 ";
            String strSQL = "SHOW FULL COLUMNS FROM " + strTabla;
            ResultSet oResultSet = oStatement.executeQuery(strSQL);
            while (oResultSet.next()) {
                vector.add(oResultSet.getString("Comment")); //COLUMNS.Comment COLUMN_COMMENT
//                if (desc) {
//                    if (oResultSet.getString("COLUMN_NAME").length() >= 4) {
//                        if (oResultSet.getString("COLUMN_NAME").substring(0, 3).equalsIgnoreCase("id_")) {
//                            vector.add("desc_" + oResultSet.getString("COLUMN_NAME").substring(3));
//                        }
//                    }
//                }
            }
            return vector;
        } catch (SQLException e) {
            throw new Exception("mysql.getPrettyColumns: Error en la consulta: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }

    @Override
    public ArrayList<Integer> getPage(String strTabla, int intRegsPerPage, int intPagina, ArrayList<FilterBean> alFilter, HashMap<String, String> hmOrder) throws Exception {

        Statement oStatement = null;
        try {
            ArrayList<Integer> vector = new ArrayList<>();
            int intOffset;

            oStatement = (Statement) connection.createStatement();
            intOffset = Math.max(((intPagina - 1) * intRegsPerPage), 0);
            String strSQL = "SELECT id FROM " + strTabla + " WHERE 1=1 ";
            if (alFilter != null) {
                Iterator iterator = alFilter.iterator();
                while (iterator.hasNext()) {
                    FilterBean oFilterBean = (FilterBean) iterator.next();
                    switch (oFilterBean.getFilterOperator()) {
                        case "like":
                            strSQL += " AND " + oFilterBean.getFilter() + " LIKE '%" + oFilterBean.getFilterValue() + "%'";
                            break;
                        case "notlike":
                            strSQL += " AND " + oFilterBean.getFilter() + " NOT LIKE '%" + oFilterBean.getFilterValue() + "%'";
                            break;
                        case "equals":
                            strSQL += " AND " + oFilterBean.getFilter() + " = '" + oFilterBean.getFilterValue() + "'";
                            break;
                        case "notequalto":
                            strSQL += " AND " + oFilterBean.getFilter() + " <> '" + oFilterBean.getFilterValue() + "'";
                            break;
                        case "less":
                            strSQL += " AND " + oFilterBean.getFilter() + " < " + oFilterBean.getFilterValue() + "";
                            break;
                        case "lessorequal":
                            strSQL += " AND " + oFilterBean.getFilter() + " <= " + oFilterBean.getFilterValue() + "";
                            break;
                        case "greater":
                            strSQL += " AND " + oFilterBean.getFilter() + " > " + oFilterBean.getFilterValue() + "";
                            break;
                        case "greaterorequal":
                            strSQL += " AND " + oFilterBean.getFilter() + " >= " + oFilterBean.getFilterValue() + "";
                            break;
                    }
                }
            }
            if (hmOrder != null) {
                strSQL += " ORDER BY";
                for (Map.Entry oPar : hmOrder.entrySet()) {
                    strSQL += " " + oPar.getKey() + " " + oPar.getValue() + ",";
                }
                strSQL = strSQL.substring(0, strSQL.length() - 1);
            }
            strSQL += " LIMIT " + intOffset + " , " + intRegsPerPage;
            ResultSet oResultSet = oStatement.executeQuery(strSQL);
            while (oResultSet.next()) {
                vector.add(oResultSet.getInt("id"));
            }
            return vector;
        } catch (SQLException e) {
            throw new Exception("mysql.getPage: Error en la consulta: " + e.getMessage());
        } finally {
            oStatement.close();

        }
    }
}
