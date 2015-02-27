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
package net.daw.helper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 *
 * @author rafa
 */
public class SqlBuilder {

    public static String buildSqlWhere(ArrayList<FilterBeanHelper> alFilter) {
        String strSQLFilter = "";
        if (alFilter != null) {
            Iterator iterator = alFilter.iterator();
            while (iterator.hasNext()) {
                FilterBeanHelper oFilterBean = (FilterBeanHelper) iterator.next();
                switch (oFilterBean.getFilterOperator()) {
                    case "like":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " LIKE '%" + oFilterBean.getFilterValue() + "%'";
                        break;
                    case "notlike":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " NOT LIKE '%" + oFilterBean.getFilterValue() + "%'";
                        break;
                    case "equals":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " = '" + oFilterBean.getFilterValue() + "'";
                        break;
                    case "notequalto":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " <> '" + oFilterBean.getFilterValue() + "'";
                        break;
                    case "less":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " < " + oFilterBean.getFilterValue() + "";
                        break;
                    case "lessorequal":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " <= " + oFilterBean.getFilterValue() + "";
                        break;
                    case "greater":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " > " + oFilterBean.getFilterValue() + "";
                        break;
                    case "greaterorequal":
                        strSQLFilter += " AND " + oFilterBean.getFilter() + " >= " + oFilterBean.getFilterValue() + "";
                        break;
                }
            }
        }
        return strSQLFilter;
    }

    public static String buildSqlOrder(HashMap<String, String> hmOrder) {
        String strSQLOrder = "";
        if (hmOrder != null) {
            strSQLOrder += " ORDER BY";
            for (Map.Entry oPar : hmOrder.entrySet()) {
                strSQLOrder += " " + oPar.getKey() + " " + oPar.getValue() + ",";
            }
            strSQLOrder = strSQLOrder.substring(0, strSQLOrder.length() - 1);
        }
        return strSQLOrder;
    }

    public static String buildSqlLimit(int intTotalRegs, int intRegsPerPage, int intPageNumber) {
        int maxPaginas = new Double(intTotalRegs / intRegsPerPage).intValue();
        intPageNumber = Math.min(intPageNumber - 1, maxPaginas) + 1;
        int intOffset = Math.max(((intPageNumber - 1) * intRegsPerPage), 0);
        return " LIMIT " + intOffset + " , " + intRegsPerPage;
    }

}
