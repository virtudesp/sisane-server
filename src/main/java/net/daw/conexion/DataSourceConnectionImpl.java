/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.conexion;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import net.daw.helper.ConnectionClass;

public class DataSourceConnectionImpl implements GenericConnectionInterface {

    InitialContext initialContext;    

    @Override
    public Connection newConnection() {

        try {
            initialContext = new InitialContext();
            DataSource dataSource = (DataSource) initialContext.lookup("java:comp/env/jdbc/" + ConnectionClass.getDatabaseName());
            Connection connection = dataSource.getConnection();
            return connection;
        } catch (NamingException | SQLException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    public void disposeConnection() {
        try {
            initialContext.close();
        } catch (NamingException ex) {
            Logger.getLogger(DataSourceConnectionImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
