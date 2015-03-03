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
import net.daw.bean.generic.specific.implementation.ProveedorBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.specific.implementation.ProveedorDaoSpcImpl;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.EncodingUtilHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.ParameterCook;
import net.daw.service.publicinterface.MetaServiceInterface;
import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.ViewServiceInterface;

public class ProveedorServiceSpImpl implements TableServiceInterface, ViewServiceInterface, MetaServiceInterface {

    protected Connection oConnection = null;

    public ProveedorServiceSpImpl() throws Exception {
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public String getprettycolumns() throws Exception {
        String data = null;
        ArrayList<String> alColumns = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            alColumns = oProveedorDAO.getPrettyColumnsNames();
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
        try {
            oConnection.setAutoCommit(false);
            ArrayList<String> alColumns = null;
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            alColumns = oProveedorDAO.getColumnsNames();
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
    public void setsource(String source) throws Exception {
        
    }

    @Override
    public void setpojo(String pojo) throws Exception {
        
    }

    @Override
    public String remove(Integer id) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            ProveedorBeanGenSpImpl oProveedor = new ProveedorBeanGenSpImpl(id);
            Map<String, String> data = new HashMap<>();
            oProveedorDAO.remove(oProveedor);
            data.put("status", "200");
            data.put("message", "se ha eliminado el registro con id=" + oProveedor.getId());
            Gson gson = new Gson();
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return resultado;
    }

    @Override
    public String set(String jason) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            ProveedorBeanGenSpImpl oProveedor = new ProveedorBeanGenSpImpl();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            jason = EncodingUtilHelper.decodeURIComponent(jason);
            oProveedor = gson.fromJson(jason, oProveedor.getClass());
            oProveedor = oProveedorDAO.set(oProveedor);
            Map<String, String> data = new HashMap<>();
            data.put("status", "200");
            data.put("message", Integer.toString(oProveedor.getId()));
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }

    public String get(HttpServletRequest request) throws Exception {
        Integer id = ParameterCook.prepareId(request);
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            ProveedorBeanGenSpImpl oProveedor = new ProveedorBeanGenSpImpl(id);
            oProveedor = oProveedorDAO.get(oProveedor, AppConfigurationHelper.getJsonDepth());
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oProveedor);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
        }
        return data;
    }

    public String getpage(HttpServletRequest request) throws Exception {
                HashMap<String, String> hmOrder = ParameterCook.prepareOrder(request);
        int intPage = ParameterCook.preparePage(request);
        int intRegsPerPag = ParameterCook.prepareRpp(request);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(request);
        
        
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            List<ProveedorBeanGenSpImpl> oProveedors = oProveedorDAO.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            data = gson.toJson(oProveedors);
            data = "{\"list\":" + data + "}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getpage ERROR: " + ex.getMessage()));
        }
        return data;
    }

    public String getpages(HttpServletRequest request) throws Exception {
           int intRegsPerPag = ParameterCook.prepareRpp(request);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(request);
        
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            int pages = oProveedorDAO.getPages(intRegsPerPag, alFilter);
            data = "{\"data\":\"" + Integer.toString(pages) + "\"}";
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getpages ERROR: " + ex.getMessage()));
        }
        return data;
    }

    public String getcount(HttpServletRequest request) throws Exception {
           ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(request);
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
            int registers = oProveedorDAO.getCount(alFilter);
            data = "{\"data\":\"" + Integer.toString(registers) + "\"}";
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getcount ERROR: " + ex.getMessage()));
        }
        return data;
    }

    public String getaggregateviewone(HttpServletRequest request) throws Exception {
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            String columns = this.getcolumns();
            String prettyColumns = this.getprettycolumns();
            //String types = this.getTypes();
            String one = this.get(request);
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

    public String getaggregateviewsome(HttpServletRequest request) throws Exception {
                HashMap<String, String> hmOrder = ParameterCook.prepareOrder(request);
        int intPage = ParameterCook.preparePage(request);
        int intRegsPerPag = ParameterCook.prepareRpp(request);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(request);
        
        
        
        String data = null;
        try {
            oConnection.setAutoCommit(false);
            String columns = this.getcolumns();
            String prettyColumns = this.getprettycolumns();
            //String types = this.getTypes();
            String page = this.getpage(request);
            String pages = this.getpages(request);
            String registers = this.getcount(request);
            data = "{\"data\":{"
                    + "\"columns\":" + columns
                    + ",\"prettyColumns\":" + prettyColumns
                    // + ",\"types\":" + types
                    + ",\"page\":" + page
                    + ",\"pages\":" + pages
                    + ",\"registers\":" + registers
                    + "}}";
            oConnection.commit();

        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getaggregateviewsome ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String get(Integer id) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getpage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getpages(int intRegsPerPag, ArrayList<FilterBeanHelper> alFilter) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getcount(ArrayList<FilterBeanHelper> alFilter) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getaggregateviewone(Integer id) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getaggregateviewsome(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
