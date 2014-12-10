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
package net.daw.dao.generic.specific.implementation;

import net.daw.dao.generic.implementation.TableDaoGenImpl;
import java.sql.Connection;
import java.sql.SQLException;
import net.daw.bean.generic.specific.implementation.ObjetoBeanGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.helper.ExceptionBooster;

public class ObjetoDaoGenSpImpl extends TableDaoGenImpl<ObjetoBeanGenSpImpl> implements TableDaoInterface<ObjetoBeanGenSpImpl>, ViewDaoInterface<ObjetoBeanGenSpImpl>, MetaDaoInterface {

    protected Connection oConnection = null;
    protected String strObjectName = null;

    public ObjetoDaoGenSpImpl(String strObject, Connection pooledConnection) throws Exception {
        super(strObject, "Objeto", pooledConnection);
        strObjectName = strObject;
        oConnection = pooledConnection;

    }

    public int getId(ObjetoBeanGenSpImpl oObjeto) throws SQLException {
        int id = 0;
        try {
            oConnection.setAutoCommit(false);
            id = Integer.parseInt(oMysql.getId(strObjectName, "descripcion", oObjeto.getDescripcion()));

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ": ERROR: " + ex.getMessage()));
        }
        return id;
    }

}
