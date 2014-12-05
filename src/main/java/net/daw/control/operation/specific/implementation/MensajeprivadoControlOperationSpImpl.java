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
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.control.operation.publicinterface.ControlOperationInterface;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;
import net.daw.helper.ParameterCooker;
import net.daw.service.specific.implementation.MensajeprivadoServiceSpImpl;

public class MensajeprivadoControlOperationSpImpl implements ControlOperationInterface {

    private ConnectionInterface DataConnectionSource = null;
    private Connection oConnection = null;
    private MensajeprivadoServiceSpImpl oMensajeprivadoService = null;

    public MensajeprivadoControlOperationSpImpl(HttpServletRequest request) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        try {
            DataConnectionSource = new BoneConnectionPoolImpl();
            oConnection = DataConnectionSource.newConnection();
            oMensajeprivadoService = new MensajeprivadoServiceSpImpl(ParameterCooker.prepareObject(request), ParameterCooker.prepareObject(request), oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":MensajeprivadoControlOperationSpImpl ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public String get(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            result = oMensajeprivadoService.get(ParameterCooker.prepareId(request));
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getaggregateviewone(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            result = oMensajeprivadoService.getAggregateViewOne(ParameterCooker.prepareId(request));
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getaggregateviewone ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getprettycolumns(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            result = oMensajeprivadoService.getPrettyColumns();
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getprettycolumns ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getcolumns(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            result = oMensajeprivadoService.getColumns();
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getcolumns ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getpage(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            Integer intRegsPerPag = ParameterCooker.prepareRpp(request);
            Integer intPage = ParameterCooker.preparePage(request);
            UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
            
            ArrayList<FilterBeanHelper> alFilter = new ArrayList<FilterBeanHelper>();
            FilterBeanHelper oFilterBean = new FilterBeanHelper();
            
            if (user.getId_tipousuario() != 1) {
                oFilterBean.setFilter("id_usuario_2");
                oFilterBean.setFilterOperator("equals");
                oFilterBean.setFilterValue(user.getId().toString());
                alFilter.add(oFilterBean);
            }
            HashMap<String, String> hmOrder = ParameterCooker.prepareOrder(request);
            
            result = oMensajeprivadoService.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getpage ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getpages(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            Integer intRegsPerPag = ParameterCooker.prepareRpp(request);
            UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
            
            ArrayList<FilterBeanHelper> alFilter = new ArrayList<FilterBeanHelper>();
            FilterBeanHelper oFilterBean = new FilterBeanHelper();
            
            if (user.getId_tipousuario() != 1) {
                oFilterBean.setFilter("id_usuario_2");
                oFilterBean.setFilterOperator("equals");
                oFilterBean.setFilterValue(user.getId().toString());
                alFilter.add(oFilterBean);
            }
            
            
            result = oMensajeprivadoService.getPages(intRegsPerPag, alFilter);
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getpages ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getregisters(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            ArrayList<FilterBeanHelper> alFilter = ParameterCooker.prepareFilter(request);
            result = oMensajeprivadoService.getCount(alFilter);
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getregisters ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String getaggregateviewsome(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            Integer intRegsPerPag = ParameterCooker.prepareRpp(request);
            Integer intPage = ParameterCooker.preparePage(request);
            UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
            
            ArrayList<FilterBeanHelper> alFilter = new ArrayList<FilterBeanHelper>();
            FilterBeanHelper oFilterBean = new FilterBeanHelper();
            
            if (user.getId_tipousuario() != 1) {
                oFilterBean.setFilter("id_usuario_2");
                oFilterBean.setFilterOperator("equals");
                oFilterBean.setFilterValue(user.getId().toString());
                alFilter.add(oFilterBean);
            }
            HashMap<String, String> hmOrder = ParameterCooker.prepareOrder(request);
            
            result = oMensajeprivadoService.getAggregateViewSomeId(intRegsPerPag, intPage, alFilter, hmOrder, user.getId(), user.getId_tipousuario());
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getaggregateviewsome ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String remove(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            result = oMensajeprivadoService.remove(ParameterCooker.prepareId(request));
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public String set(HttpServletRequest request) throws Exception {
        String result = null;
        try {
            UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
            result = oMensajeprivadoService.set2(ParameterCooker.prepareJson(request), user.getId(), user.getId_tipousuario());
            closeDB();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return result;
    }

    private void closeDB() throws SQLException, Exception {
        try {
            if (oConnection != null) {
                oConnection.close();
            }
            DataConnectionSource.disposeConnection();
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":closeDB ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public String updateOne(HttpServletRequest request) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
