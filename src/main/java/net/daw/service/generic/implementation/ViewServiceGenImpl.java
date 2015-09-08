/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package net.daw.service.generic.implementation;

import net.daw.service.publicinterface.ViewServiceInterface;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.generic.implementation.TableDaoGenImpl;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.JsonMessage;
import net.daw.helper.statics.ParameterCook;

public abstract class ViewServiceGenImpl extends MetaServiceGenImpl implements ViewServiceInterface {

    public ViewServiceGenImpl(HttpServletRequest request) {
        super(request);
    }

    protected Boolean canexecute_get() {
        return true;
    }

    @Override
    public String get() throws Exception {
        if (this.canexecute_get()) {
            int id = ParameterCook.prepareId(oRequest);
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = new BoneConnectionPoolImpl();
                oConnection = oDataConnectionSource.newConnection();
                BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Bean").newInstance();
                Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
                TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
                Method metodo_setId = oGenericBean.getClass().getMethod("setId", Integer.class);
                metodo_setId.invoke(oGenericBean, id); //oGenericBean.setId(id);
                oGenericBean = (BeanGenImpl) (BeanInterface) oGenericDao.get(oGenericBean, AppConfigurationHelper.getJsonDepth());
                GsonBuilder gsonBuilder = new GsonBuilder();
                gsonBuilder.setDateFormat("dd/MM/yyyy");
                Gson gson = gsonBuilder.excludeFieldsWithoutExposeAnnotation().create();
                data = gson.toJson(oGenericBean);
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }
            return data;
        } else {
            return JsonMessage.get("500", "ERROR: Invalid permission: You aren't allowed to execute this command");
        }
    }

    @Override
    public String getall() throws Exception {
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        HashMap<String, String> hmOrder = ParameterCook.prepareOrder(oRequest);
        String data = null;
        Connection oConnection = null;
        ConnectionInterface oDataConnectionSource = null;
        try {
            oDataConnectionSource = new BoneConnectionPoolImpl();
            oConnection = oDataConnectionSource.newConnection();
            BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Bean").newInstance();
            Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
            TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
            List<BeanInterface> loGenericBean = oGenericDao.getAll(alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.excludeFieldsWithoutExposeAnnotation().create();
            data = gson.toJson(loGenericBean);
            data = "{\"list\":" + data + "}";
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getAll ERROR: " + ex.getMessage()));
        } finally {
            if (oConnection != null) {
                oConnection.close();
            }
            if (oDataConnectionSource != null) {
                oDataConnectionSource.disposeConnection();
            }
        }
        return data;
    }

    @Override
    public String getpage() throws Exception {
        int intRegsPerPag = ParameterCook.prepareRpp(oRequest);;
        int intPage = ParameterCook.preparePage(oRequest);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        HashMap<String, String> hmOrder = ParameterCook.prepareOrder(oRequest);
        String data = null;
        Connection oConnection = null;
        ConnectionInterface oDataConnectionSource = null;
        try {
            oDataConnectionSource = new BoneConnectionPoolImpl();
            oConnection = oDataConnectionSource.newConnection();
            BeanGenImpl oGenericBean = (BeanGenImpl) Class.forName("net.daw.bean.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Bean").newInstance();
            Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
            TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
            List<BeanInterface> loGenericBean = oGenericDao.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
            GsonBuilder gsonBuilder = new GsonBuilder();
            gsonBuilder.setDateFormat("dd/MM/yyyy");
            Gson gson = gsonBuilder.excludeFieldsWithoutExposeAnnotation().create();
            data = gson.toJson(loGenericBean);
            data = "{\"list\":" + data + "}";
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        } finally {
            if (oConnection != null) {
                oConnection.close();
            }
            if (oDataConnectionSource != null) {
                oDataConnectionSource.disposeConnection();
            }
        }
        return data;
    }

    @Override
    public String getpages() throws Exception {
        int intRegsPerPag = ParameterCook.prepareRpp(oRequest);
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        String data = null;
        Connection oConnection = null;
        ConnectionInterface oDataConnectionSource = null;
        try {
            oDataConnectionSource = new BoneConnectionPoolImpl();
            oConnection = oDataConnectionSource.newConnection();
            Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
            TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
            int pages = oGenericDao.getPages(intRegsPerPag, alFilter);
            data = "{\"data\":\"" + Integer.toString(pages) + "\"}";
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPages ERROR: " + ex.getMessage()));
        } finally {
            if (oConnection != null) {
                oConnection.close();
            }
            if (oDataConnectionSource != null) {
                oDataConnectionSource.disposeConnection();
            }
        }
        return data;
    }

    @Override
    public String getcount() throws Exception {
        String data = null;
        ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
        Connection oConnection = null;
        ConnectionInterface oDataConnectionSource = null;
        try {
            oDataConnectionSource = new BoneConnectionPoolImpl();
            oConnection = oDataConnectionSource.newConnection();
            Constructor c = Class.forName("net.daw.dao.specific.implementation." + ParameterCook.prepareCamelCaseObject(oRequest) + "Dao").getConstructor(Connection.class);
            TableDaoGenImpl oGenericDao = (TableDaoGenImpl) c.newInstance(oConnection);
            int registers = oGenericDao.getCount(alFilter);
            data = "{\"data\":\"" + Integer.toString(registers) + "\"}";
            return data;
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getCount ERROR: " + ex.getMessage()));
        } finally {
            if (oConnection != null) {
                oConnection.close();
            }
            if (oDataConnectionSource != null) {
                oDataConnectionSource.disposeConnection();
            }
        }
        return data;
    }

    @Override
    public String getaggregateviewone() throws Exception {
        String data = null;
        try {
            String meta = this.getmetainformation();
            String one = this.get();
            data = "{"
                    + "\"meta\":" + meta
                    + ",\"bean\":" + one
                    + "}";
            return data;
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getAggregateViewOne ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getaggregateviewsome() throws Exception {
        String data = null;
        try {
            String meta = this.getmetainformation();
            String page = this.getpage();
            String pages = this.getpages();
            String registers = this.getcount();
            data = "{"
                    + "\"meta\":" + meta
                    + ",\"page\":" + page
                    + ",\"pages\":" + pages
                    + ",\"registers\":" + registers
                    + "}";
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getAggregateViewSome ERROR: " + ex.getMessage()));
        }
        return data;
    }

    @Override
    public String getaggregateviewall() throws Exception {
        String data = null;
        try {
            String meta = this.getmetainformation();
            String all = this.getall();
            String registers = this.getcount();
            data = "{"
                    + "\"meta\":" + meta
                    + ",\"page\":" + all
                    + ",\"registers\":" + registers
                    + "}";
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getAggregateViewSome ERROR: " + ex.getMessage()));
        }
        return data;
    }
}
