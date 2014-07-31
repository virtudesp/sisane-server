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
package net.daw.dao.generic;

import net.daw.dao.publicinterface.MetaDaoInterface;
import java.sql.Connection;
import java.util.ArrayList;
import net.daw.data.implementation.MysqlDataImpl;

public class GenericMetaDaoImpl<TIPO_OBJETO> implements MetaDaoInterface {

    protected final MysqlDataImpl oMysql;
    protected final String strView;
    protected Connection connection = null;

    public GenericMetaDaoImpl(String view, Connection pooledConnection) throws Exception {
        connection = pooledConnection;
        strView = view;
        oMysql = new MysqlDataImpl(connection);
    }    

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName(strView);
        } catch (Exception e) {
            throw new Exception("GenericDao.getColumnsNames: Error: " + e.getMessage());
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getPrettyColumns(strView);
        } catch (Exception e) {
            throw new Exception("GenericDao.getPrettyColumnsNames: Error: " + e.getMessage());
        }
        return alColumns;
    }

}
