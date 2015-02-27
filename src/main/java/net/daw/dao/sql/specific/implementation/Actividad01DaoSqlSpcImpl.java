/*
 * Copyright (C) 2015 rafa
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
package net.daw.dao.sql.specific.implementation;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.generic.specific.implementation.ActividadBeanGenSpImpl;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.SqlBuilder;

/**
 *
 * @author rafa
 */
public class Actividad01DaoSqlSpcImpl {

    //private String strSqlDataSource = null;

    private String strSelect = null;
    private String strFrom = null;
    private String strWhere = null;
    private String strGroupBy = null;
    private String strHaving = null;
    private String strOrderBy = null;

    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public Actividad01DaoSqlSpcImpl(String ob, Connection oConexion) throws Exception {
        //esbozo
        try {
            strSelect = "SELECT id, Count(enunciado) As NumberOfEnunciado ";
            strFrom = "FROM actividad ";
            strWhere = "WHERE 1=1 and id > 3 ";
            strGroupBy = "GROUP BY evaluacion ";
            strHaving = "HAVING NumberOfEnunciado >2 ";
            strOrderBy = "ORDER BY NumberOfEnunciado DESC ";
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }

    private String getSql() throws Exception {

        String strSqlDataSource = null;
        strSqlDataSource += strSelect;
        strSqlDataSource += strFrom;
        strSqlDataSource += strWhere;
        strSqlDataSource += strGroupBy;
        strSqlDataSource += strHaving;
        strSqlDataSource += strOrderBy;
        return strSqlDataSource;

    }

    public ArrayList<ActividadBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<ActividadBeanGenSpImpl> arrActividad = new ArrayList<>();
        try {
            strWhere += SqlBuilder.buildSqlWhere(hmFilter);
            if (!SqlBuilder.buildSqlOrder(hmOrder).isEmpty()) {
                strOrderBy = SqlBuilder.buildSqlOrder(hmOrder);
            }

            arrId = oMysql.getNewPage(this.getSql(), intRegsPerPag, intPage);
            
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ActividadBeanGenSpImpl oActividadBean = new ActividadBeanGenSpImpl(iterador.next());
                //arrActividad.add(this.get(oActividadBean, 1));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrActividad;
    }
}
