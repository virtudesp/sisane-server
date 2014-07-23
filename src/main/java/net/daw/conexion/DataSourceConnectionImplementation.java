/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.conexion;

import java.sql.Connection;
import java.sql.SQLException;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;



public class DataSourceConnectionImplementation implements GenericConnectionInterface {

    @Override
    public Connection crearConexion() {
        return null;
//        try {   
//            InitialContext initialContext=new InitialContext();
//            DataSource dataSource=(DataSource) initialContext.lookup("java:comp/env/jdbc/" + ConnectionClass.getDatabaseName());
//            Connection connection=dataSource.getConnection();
//            return connection;
//        } catch (NamingException | SQLException ex) {
//            throw new RuntimeException(ex);
//        }
    }
    
}

