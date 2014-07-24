/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import net.daw.helper.ConnectionClass;

public class DriverManagerConnectionImpl implements GenericConnectionInterface {

    @Override
    public Connection newConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://" + ConnectionClass.getDatabaseHost() + ":" + ConnectionClass.getDatabasePort() + "/" + ConnectionClass.getDatabaseName(), ConnectionClass.getDatabaseLogin(), ConnectionClass.getDatabasePassword());
            return connection;
        } catch (ClassNotFoundException | SQLException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public void disposeConnection() {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
