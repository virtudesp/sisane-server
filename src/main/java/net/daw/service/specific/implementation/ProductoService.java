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
package net.daw.service.specific.implementation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.specific.implementation.ProductoBean;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.specific.implementation.ProductoDao;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.EncodingUtilHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.ParameterCook;
import net.daw.service.generic.implementation.TableServiceGenImpl;

public class ProductoService extends TableServiceGenImpl {

    public ProductoService(HttpServletRequest request) {
        super(request);
    }

    @Override
    public String remove() throws Exception {
        Integer id = ParameterCook.prepareId(oRequest);
        String resultado = null;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            ProductoBean oProducto = new ProductoBean(id);
            Map<String, String> data = new HashMap<>();
            oProductoDAO.remove(oProducto);
            data.put("status", "200");
            data.put("message", "se ha eliminado el registro con id=" + oProducto.getId());
            Gson gson = new Gson();
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        } finally {
            oConnection.close();
        }
        return resultado;
    }

    @Override
    public String set() throws Exception {
        String jason = ParameterCook.prepareJson(oRequest);
        String resultado = null;
        Connection oConnection = null;
        try {
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            ProductoBean oProducto = new ProductoBean();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            jason = EncodingUtilHelper.decodeURIComponent(jason);
            oProducto = gson.fromJson(jason, oProducto.getClass());
            oProducto = oProductoDAO.set(oProducto);
            Map<String, String> data = new HashMap<>();
            data.put("status", "200");
            data.put("message", Integer.toString(oProducto.getId()));
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }

    @Override
    public String get() throws Exception {
        Integer id = ParameterCook.prepareId(oRequest);
        String data = null;
        Connection oConnection = null;
        try {
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            ProductoBean oProducto = new ProductoBean(id);
            oProducto = oProductoDAO.get(oProducto, AppConfigurationHelper.getJsonDepth());
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oProducto);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getpage() throws Exception {
        HashMap<String, String> hmOrder = ParameterCook.prepareOrder(oRequest);
        int intPage = ParameterCook.preparePage(oRequest);
        int intRegsPerPag = ParameterCook.prepareRpp(oRequest);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        Connection oConnection = null;
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            List<ProductoBean> oProductos = oProductoDAO.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oProductos);
            data = "{\"list\":" + data + "}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getpage ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getpages() throws Exception {

        int intRegsPerPag = ParameterCook.prepareRpp(oRequest);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        Connection oConnection = null;
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            int pages = oProductoDAO.getPages(intRegsPerPag, alFilter);
            data = "{\"data\":\"" + Integer.toString(pages) + "\"}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getpages ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getcount() throws Exception {
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        String data = null;
        Connection oConnection = null;
        try {
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            int registers = oProductoDAO.getCount(alFilter);
            data = "{\"data\":\"" + Integer.toString(registers) + "\"}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getcount ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getprettycolumns() throws Exception {
        String data = null;
        ArrayList<String> alColumns = null;
        Connection oConnection = null;
        try {
            oConnection.setAutoCommit(false);
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            alColumns = oProductoDAO.getPrettyColumnsNames();
            data = new Gson().toJson(alColumns);
            //data = "{\"data\":" + data + "}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getprettycolumns ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getcolumns() throws Exception {
        String data = null;
        Connection oConnection = null;
        try {
            oConnection.setAutoCommit(false);
            ArrayList<String> alColumns = null;
            ProductoDao oProductoDAO = new ProductoDao(oConnection);
            alColumns = oProductoDAO.getColumnsNames();
            data = new Gson().toJson(alColumns);
            //data = "{\"data\":" + data + "}";
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getcolumns ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getaggregateviewone() throws Exception {
        String data = null;
        Connection oConnection = null;
        try {
            oConnection.setAutoCommit(false);
            String columns = this.getcolumns();
            String prettyColumns = this.getprettycolumns();
            //String types = this.getTypes();
            String one = this.get();
            data = "{\"data\":{"
                    + "\"columns\":" + columns
                    + ",\"prettyColumns\":" + prettyColumns
                    // + ",\"types\":" + types
                    + ",\"data\":" + one
                    + "}}";
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getaggregateviewone ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getaggregateviewsome() throws Exception {
        String data = null;
        int intRegsPerPag = 0;
        int intPage = 0;
        ArrayList<FilterBeanHelper> alFilter = null;
        HashMap<String, String> hmOrder = null;
        try {

            String columns = this.getcolumns();
            String prettyColumns = this.getprettycolumns();
            //String types = this.getTypes();
            String page = this.getpage();
            String pages = this.getpages();
            String registers = this.getcount();
            data = "{\"data\":{"
                    + "\"columns\":" + columns
                    + ",\"prettyColumns\":" + prettyColumns
                    // + ",\"types\":" + types
                    + ",\"page\":" + page
                    + ",\"pages\":" + pages
                    + ",\"registers\":" + registers
                    + "}}";

        } catch (Exception ex) {

            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getaggregateviewsome ERROR: " + ex.getMessage()));
        }
        return data;
    }

}
