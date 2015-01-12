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
package net.daw.helper;

public class ConnectionClassHelper {

    public static Boolean getOpenShift() {
        Boolean openshift = false;
        if (System.getenv() != null
                && System.getenv("OPENSHIFT_APP_NAME") != null
                && !System.getenv("OPENSHIFT_APP_NAME").equals("")) {
            openshift = true;
        }
        return openshift;
    }

    public static String getDatabaseName() {
        if (ConnectionClassHelper.getOpenShift()) {
            return System.getenv("OPENSHIFT_APP_NAME");

        } else {
            return "ausiasYield2014";
        }
    }

    public static String getDatabaseLogin() {
        if (ConnectionClassHelper.getOpenShift()) {
            //return System.getenv("OPENSHIFT_MYSQL_DB_USERNAME");
            return "el username esta en la web de openshift";
        } else {
            return "root";
        }
    }

    public static String getDatabasePassword() {
        if (ConnectionClassHelper.getOpenShift()) {
            //return System.getenv("OPENSHIFT_MYSQL_DB_PASSWORD");
            return "la contraseña esta en la web de openshift";
        } else {
            return "bitnami";
        }
    }

    public static String getDatabasePort() {
        if (ConnectionClassHelper.getOpenShift()) {
            //return System.getenv("OPENSHIFT_MYSQL_DB_PORT");
            //return System.getenv("OPENSHIFT_DIY_PORT");
            return "3306";
        } else {
            return "3306";
        }
    }

    public static String getDatabaseHost() {
        if (ConnectionClassHelper.getOpenShift()) {
            //return System.getenv("OPENSHIFT_MYSQL_DB_IP");
            //return System.getenv("OPENSHIFT_DIY_IP");
            return "la ip aparece en la ventana de entrada al phpMyadmin";

        } else {
            return "127.0.0.1";
        }
    }

    public static String getConnectionChain() {
        if (ConnectionClassHelper.getOpenShift()) {
            //return "jdbc:" + System.getenv("OPENSHIFT_MYSQL_DB_URL") + ConnectionClassHelper.getDatabaseName();
            return "jdbc:mysql://" + ConnectionClassHelper.getDatabaseHost() + ":" + ConnectionClassHelper.getDatabasePort() + "/" + ConnectionClassHelper.getDatabaseName();
        } else {
            return "jdbc:mysql://" + ConnectionClassHelper.getDatabaseHost() + ":" + ConnectionClassHelper.getDatabasePort() + "/" + ConnectionClassHelper.getDatabaseName();
        }
    }
}
