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
package net.daw.control.operation.specific.implementation;

import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.control.operation.publicinterface.ControlOperationInterface;
import net.daw.helper.FilterBeanHelper;
import net.daw.helper.parameterCooker;
import net.daw.service.specific.implementation.TipoproductoServiceSpImpl;

public class TipoproductoControlOperationSpImpl implements ControlOperationInterface {

    private ConnectionInterface DataConnectionSource = null;
    private Connection oConnection = null;
    private final TipoproductoServiceSpImpl oTipoproductoService;

    public TipoproductoControlOperationSpImpl(HttpServletRequest request) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        DataConnectionSource = new BoneConnectionPoolImpl();
        oConnection = DataConnectionSource.newConnection();
        oTipoproductoService = new TipoproductoServiceSpImpl("Tipoproducto", oConnection);
    }

    @Override
    public String get(HttpServletRequest request) throws Exception {
        String result = oTipoproductoService.get(parameterCooker.prepareId(request));
        closeDB();
        return result;
    }

    @Override
    public String getaggregateviewone(HttpServletRequest request) throws Exception {
        String result = oTipoproductoService.getAggregateViewOne(parameterCooker.prepareId(request));
        closeDB();
        return result;
    }

    @Override
    public String getprettycolumns(HttpServletRequest request) throws Exception {
        String result = oTipoproductoService.getPrettyColumns();
        closeDB();
        return result;
    }

    @Override
    public String getcolumns(HttpServletRequest request) throws Exception {
        String result = oTipoproductoService.getColumns();
        closeDB();
        return result;
    }

    @Override
    public String getpage(HttpServletRequest request) throws Exception {
        Integer intRegsPerPag = parameterCooker.prepareRpp(request);
        Integer intPage = parameterCooker.preparePage(request);
        ArrayList<FilterBeanHelper> alFilter = parameterCooker.prepareFilter(request);
        HashMap<String, String> hmOrder = parameterCooker.prepareOrder(request);
        String result = oTipoproductoService.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
        closeDB();
        return result;
    }

    @Override
    public String getpages(HttpServletRequest request) throws Exception {
        Integer intRegsPerPag = parameterCooker.prepareRpp(request);
        ArrayList<FilterBeanHelper> alFilter = parameterCooker.prepareFilter(request);
        String result = oTipoproductoService.getPages(intRegsPerPag, alFilter);
        closeDB();
        return result;
    }

    @Override
    public String getregisters(HttpServletRequest request) throws Exception {
        ArrayList<FilterBeanHelper> alFilter = parameterCooker.prepareFilter(request);
        String result = oTipoproductoService.getCount(alFilter);
        closeDB();
        return result;
    }

    @Override
    public String getaggregateviewsome(HttpServletRequest request) throws Exception {
        Integer intRegsPerPag = parameterCooker.prepareRpp(request);
        Integer intPage = parameterCooker.preparePage(request);
        ArrayList<FilterBeanHelper> alFilter = parameterCooker.prepareFilter(request);
        HashMap<String, String> hmOrder = parameterCooker.prepareOrder(request);
        String result = oTipoproductoService.getAggregateViewSome(intRegsPerPag, intPage, alFilter, hmOrder);
        closeDB();
        return result;
    }

    @Override
    public String remove(HttpServletRequest request) throws Exception {
        String result = oTipoproductoService.remove(parameterCooker.prepareId(request));
        closeDB();
        return result;
    }

    @Override
    public String set(HttpServletRequest request) throws Exception {              
        String result = oTipoproductoService.set(parameterCooker.prepareJson(request));
        closeDB();
        return result;
    }

    private void closeDB() throws SQLException, Exception {
        if (oConnection != null) {
            oConnection.close();
        }
        DataConnectionSource.disposeConnection();
    }
}
