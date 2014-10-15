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
import javax.servlet.ServletException;
import net.daw.bean.generic.specific.implementation.TipoproductoBeanGenSpImpl;
import net.daw.dao.specific.implementation.TipoproductoDaoSpcImpl;
import net.daw.helper.EncodingUtilHelper;
import net.daw.helper.FilterBeanHelper;
import net.daw.service.publicinterface.MetaServiceInterface;
import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.ViewServiceInterface;

public class TipoproductoServiceSpImpl implements TableServiceInterface, ViewServiceInterface, MetaServiceInterface {

    protected Connection oConnection = null;
    protected String strObjectName = null;

    public TipoproductoServiceSpImpl(String ob, Connection con) {
        strObjectName = Character.toUpperCase(ob.charAt(0)) + ob.substring(1);
        oConnection = con;
    }

    @Override
    public String remove(Integer id) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            TipoproductoBeanGenSpImpl oTipoproducto = new TipoproductoBeanGenSpImpl();
            oTipoproducto.setId(id);
            Map<String, String> data = new HashMap<>();
            if (oTipoproducto != null) {
                oTipoproductoDAO.remove(oTipoproducto);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oTipoproducto.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            oConnection.commit();
            return resultado;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("remove: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String save(String jason) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            TipoproductoBeanGenSpImpl oTipoproducto = new TipoproductoBeanGenSpImpl();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            jason = EncodingUtilHelper.decodeURIComponent(jason);
            oTipoproducto = gson.fromJson(jason, oTipoproducto.getClass());
            Map<String, String> data = new HashMap<>();
            if (oTipoproducto != null) {
                oTipoproducto = oTipoproductoDAO.set(oTipoproducto);
                data.put("status", "200");
                data.put("message", Integer.toString(oTipoproducto.getId()));
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            String resultado = gson.toJson(data);
            oConnection.commit();
            return resultado;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("save: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String get(Integer id) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            TipoproductoBeanGenSpImpl oTipoproducto = new TipoproductoBeanGenSpImpl();
            oTipoproducto.setId(id);
            oTipoproductoDAO.get(oTipoproducto);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            String data = gson.toJson(oTipoproducto);
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("get: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            List<TipoproductoBeanGenSpImpl> oTipoproductos = oTipoproductoDAO.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.create();
            String data = gson.toJson(oTipoproductos);
            data = "{\"list\":" + data + "}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getPage: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getPages(int intRegsPerPag, ArrayList<FilterBeanHelper> alFilter) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            int pages = oTipoproductoDAO.getPages(intRegsPerPag, alFilter);
            String data = "{\"data\":\"" + Integer.toString(pages) + "\"}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getPages: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getCount(ArrayList<FilterBeanHelper> alFilter) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            int registers = oTipoproductoDAO.getCount(alFilter);
            String data = "{\"data\":\"" + Integer.toString(registers) + "\"}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getCount: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getPrettyColumns() throws Exception {
        try {
            oConnection.setAutoCommit(false);
            ArrayList<String> alColumns = null;
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            alColumns = oTipoproductoDAO.getPrettyColumnsNames();
            String data = new Gson().toJson(alColumns);
            data = "{\"data\":" + data + "}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getPrettyColumns: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getColumns() throws Exception {
        try {
            oConnection.setAutoCommit(false);
            ArrayList<String> alColumns = null;
            TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("Tipoproducto", oConnection);
            alColumns = oTipoproductoDAO.getColumnsNames();
            String data = new Gson().toJson(alColumns);
            data = "{\"data\":" + data + "}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getColumns: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getAggregateViewOne(Integer id) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            //falta controlar la transacción a esta altura
            String columns = this.getColumns();
            String prettyColumns = this.getPrettyColumns();
            //String types = this.getTypes();
            String one = this.get(id);
            String data = "{\"data\":{"
                    + "\"columns\":" + columns
                    + ",\"prettyColumns\":" + prettyColumns
                    // + ",\"types\":" + types
                    + ",\"data\":" + one
                    + "}}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getAggregateViewOne: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

    @Override
    public String getAggregateViewSome(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {
        try {
            oConnection.setAutoCommit(false);
            String columns = this.getColumns();
            String prettyColumns = this.getPrettyColumns();
            //String types = this.getTypes();
            String page = this.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            String pages = this.getPages(intRegsPerPag, alFilter);
            String registers = this.getCount(alFilter);
            String data = "{\"data\":{"
                    + "\"columns\":" + columns
                    + ",\"prettyColumns\":" + prettyColumns
                    // + ",\"types\":" + types
                    + ",\"page\":" + page
                    + ",\"pages\":" + pages
                    + ",\"registers\":" + registers
                    + "}}";
            oConnection.commit();
            return data;
        } catch (Exception e) {
            oConnection.rollback();
            throw new ServletException("getAggregateViewSome: TipoproductoServiceSpcImpl Error: " + e.getMessage());
        }
    }

}
