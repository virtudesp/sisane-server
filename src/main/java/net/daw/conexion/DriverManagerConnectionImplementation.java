/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;



public class DriverManagerConnectionImplementation implements GenericConnectionInterface {

    @Override
    public Connection crearConexion() {
        return null;
//        try {
//            Class.forName("com.mysql.jdbc.Driver");
//            Connection connection = DriverManager.getConnection("jdbc:mysql://" + ConnectionClass.getDatabaseHost() + ":" + ConnectionClass.getDatabasePort() + "/" + ConnectionClass.getDatabaseName(), ConnectionClass.getDatabaseLogin(), ConnectionClass.getDatabasePassword());
//            return connection;
//        } catch (ClassNotFoundException | SQLException ex) {
//            throw new RuntimeException(ex);
//        }
    }

}
