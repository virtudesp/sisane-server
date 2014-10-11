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
package net.daw.control.generic.implementation;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import net.daw.control.publicinterface.GenericControlInterface;
import net.daw.service.generic.implementation.GenericTableServiceImpl;
import net.daw.conexion.implementation.BoneConnectionPoolImpl;
import net.daw.conexion.publicinterface.GenericConnectionInterface;
import net.daw.helper.FilterBean;

public class GenericControlImpl implements GenericControlInterface {

    private GenericConnectionInterface DataConnectionSource = null;
    private Connection connection = null;
    private final String operation, object;
    private final GenericTableServiceImpl process;

    public GenericControlImpl(HttpServletRequest request) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
        DataConnectionSource = new BoneConnectionPoolImpl();
        connection = DataConnectionSource.newConnection();
        operation = request.getParameter("op");
        object = request.getParameter("ob");
        Constructor oConstructor = Class.forName("net.daw.service.implementation." + Character.toUpperCase(object.charAt(0)) + object.substring(1) + "ServiceImpl").getConstructor(Connection.class);
        process = (GenericTableServiceImpl) oConstructor.newInstance(connection);
    }

    @Override
    public String get(HttpServletRequest request) throws Exception {
        String result = process.get(Integer.parseInt(request.getParameter("id")));
        closeDB();
        return result;
    }

    @Override
    public String getaggregateviewone(HttpServletRequest request) throws Exception {
        String result = process.getAggregateViewOne(Integer.parseInt(request.getParameter("id")));
        closeDB();
        return result;
    }

    @Override
    public String getprettycolumns(HttpServletRequest request) throws Exception {
        String result = process.getPrettyColumns();
        closeDB();
        return result;
    }

    @Override
    public String getcolumns(HttpServletRequest request) throws Exception {
        String result = process.getColumns();
        closeDB();
        return result;
    }

    private Integer prepareRpp(HttpServletRequest request) {
        int intRegsPerPag;
        if (request.getParameter("rpp") == null) {
            intRegsPerPag = 10;
        } else {
            intRegsPerPag = Integer.parseInt(request.getParameter("rpp"));
        }
        return intRegsPerPag;
    }

    private Integer preparePage(HttpServletRequest request) {
        int intPage;
        if (request.getParameter("page") == null) {
            intPage = 1;
        } else {
            intPage = Integer.parseInt(request.getParameter("page"));
        }
        return intPage;
    }

    private ArrayList<FilterBean> prepareFilter(HttpServletRequest request) {
        ArrayList<FilterBean> alFilter = new ArrayList<>();
        if (request.getParameter("filter") != null) {
            if (request.getParameter("filteroperator") != null) {
                if (request.getParameter("filtervalue") != null) {
                    FilterBean oFilterBean = new FilterBean();
                    oFilterBean.setFilter(request.getParameter("filter"));
                    oFilterBean.setFilterOperator(request.getParameter("filteroperator"));
                    oFilterBean.setFilterValue(request.getParameter("filtervalue"));
                    oFilterBean.setFilterOrigin("user");
                    alFilter.add(oFilterBean);
                }
            }
        }
        if (request.getParameter("systemfilter") != null) {
            if (request.getParameter("systemfilteroperator") != null) {
                if (request.getParameter("systemfiltervalue") != null) {
                    FilterBean oFilterBean = new FilterBean();
                    oFilterBean.setFilter(request.getParameter("systemfilter"));
                    oFilterBean.setFilterOperator(request.getParameter("systemfilteroperator"));
                    oFilterBean.setFilterValue(request.getParameter("systemfiltervalue"));
                    oFilterBean.setFilterOrigin("system");
                    alFilter.add(oFilterBean);
                }
            }
        }
        return alFilter;
    }

    private HashMap<String, String> prepareOrder(HttpServletRequest request) {
        HashMap<String, String> hmOrder = new HashMap<>();
        if (request.getParameter("order") != null) {
            if (request.getParameter("ordervalue") != null) {
                hmOrder.put(request.getParameter("order"), request.getParameter("ordervalue"));
            } else {
                hmOrder = null;
            }
        } else {
            hmOrder = null;
        }
        return hmOrder;
    }

    @Override
    public String getpage(HttpServletRequest request) throws Exception {
        Integer intRegsPerPag = prepareRpp(request);
        Integer intPage = preparePage(request);
        ArrayList<FilterBean> alFilter = prepareFilter(request);
        HashMap<String, String> hmOrder = prepareOrder(request);
        String result = process.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
        closeDB();
        return result;
    }

    @Override
    public String getpages(HttpServletRequest request) throws Exception {
        Integer intRegsPerPag = prepareRpp(request);
        ArrayList<FilterBean> alFilter = prepareFilter(request);
        String result = process.getPages(intRegsPerPag, alFilter);
        closeDB();
        return result;
    }

    @Override
    public String getregisters(HttpServletRequest request) throws Exception {
        ArrayList<FilterBean> alFilter = prepareFilter(request);
        String result = process.getCount(alFilter);
        closeDB();
        return result;
    }

    @Override
    public String getaggregateviewsome(HttpServletRequest request) throws Exception {
        Integer intRegsPerPag = prepareRpp(request);
        Integer intPage = preparePage(request);
        ArrayList<FilterBean> alFilter = prepareFilter(request);
        HashMap<String, String> hmOrder = prepareOrder(request);
        String result = process.getAggregateViewSome(intRegsPerPag, intPage, alFilter, hmOrder);
        closeDB();
        return result;
    }

    @Override
    public String remove(HttpServletRequest request) throws Exception {
        String result = process.remove(Integer.parseInt(request.getParameter("id")));
        closeDB();
        return result;
    }

    @Override
    public String save(HttpServletRequest request) throws Exception {
        String jason = request.getParameter("json").replaceAll("%2F", "/");
        String result = process.save(jason);
        closeDB();
        return result;
    }

    private void closeDB() throws SQLException {
        if (connection != null) {
            connection.close();
        }
        DataConnectionSource.disposeConnection();
    }
}
