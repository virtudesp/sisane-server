/*
 * Copyright (C) 2014 al038513
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
package net.daw.data.specific.implementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import net.daw.data.publicinterface.DataInterface;
import net.daw.helper.ExceptionBooster;

/**
 *
 * @author al038513
 */
public class CuestionarioMysqlDataSpImpl extends MysqlDataSpImpl implements DataInterface {

    public CuestionarioMysqlDataSpImpl(Connection pooledConnection) {
        super(pooledConnection);
    }

    public String getCuestionarioForm(Integer id) throws Exception {
        String strResult = null;
        PreparedStatement oPreparedStatement = null;
        ResultSet oResultSet;
        try {
            String strSQL = "select @rownum:=@rownum+1 as id ,cuestionario.id as id_cuestionario,"
                    + "pregunta.id as id_pregunta, opcion.id as id_opcion from cuestionario "
                    + "inner join pregunta on pregunta.id_cuestionario = cuestionario.id "
                    + "inner join opcion on opcion.id_pregunta = pregunta.id, "
                    + "(SELECT @rownum:=0)R "
                    + "Where cuestionario.id = ? "
                    + "order by id,cuestionario.id, pregunta.id, opcion.id";
            oPreparedStatement = connection.prepareStatement(strSQL);
            oPreparedStatement.setInt(1, id);
            oResultSet = oPreparedStatement.executeQuery();
            
         
            if (oResultSet.next()) {
                // strResult = oResultSet.getString(strCampo);
            } else {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getOne ERROR: ID not exists: " + id));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getOne ERROR: Can't process query: " + ex.getMessage()));
        } finally {
            if (oPreparedStatement != null) {
                oPreparedStatement.close();
            }
        }
        return strResult;
    }
}
