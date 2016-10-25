/*
 * Copyright (c) 2016 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * zylkanexy server: Helps you to develop easily AJAX web applications 
 *                   by copying and modifying this Java Server.
 *
 * Sources at https://github.com/rafaelaznar/zylkanexy
 * 
 * zylkanexy server is distributed under the MIT License (MIT)
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
package net.daw.service.implementation;

import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.implementation.ReplyBean;
import net.daw.bean.implementation.UsuarioBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.implementation.UsuarioDao;

import net.daw.helper.statics.AppConfigurationHelper;
import static net.daw.helper.statics.AppConfigurationHelper.getSourceConnection;
import net.daw.helper.statics.EncodingUtilHelper;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.JsonMessage;
import net.daw.helper.statics.Log4j;
import net.daw.helper.statics.ParameterCook;

import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.ViewServiceInterface;

public class UsuarioService implements TableServiceInterface, ViewServiceInterface {

    protected HttpServletRequest oRequest = null;

    public UsuarioService(HttpServletRequest request) {
        oRequest = request;
    }

    private Boolean checkpermission(String strMethodName) throws Exception {
        UsuarioBean oUserBean = (UsuarioBean) oRequest.getSession().getAttribute("userBean");
        if (oUserBean != null) {
            return true;
        } else {
            return false;
        }
    }

    public String getenvironment() throws Exception {
        String data = "";
        if (this.checkpermission("getenvironment")) {
            data = "{"
                    + "\"OPENSHIFT_APP_DNS\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_APP_DNS"))
                    + ",\"OPENSHIFT_APP_NAME\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_APP_NAME"))
                    + ",\"OPENSHIFT_APP_UUID\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_APP_UUID"))
                    + ",\"OPENSHIFT_JBOSSEWS_IP\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_JBOSSEWS_IP"))
                    + ",\"OPENSHIFT_JBOSSEWS_PORT\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_JBOSSEWS_PORT"))
                    + ",\"OPENSHIFT_SECRET_TOKEN\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_SECRET_TOKEN"))
                    + ",\"OPENSHIFT_HOMEDIR\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_HOMEDIR"))
                    + ",\"OPENSHIFT_DATA_DIR\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_DATA_DIR"))
                    + ",\"OPENSHIFT_REPO_DIR\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_REPO_DIR"))
                    + ",\"OPENSHIFT_TMP_DIR\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_TMP_DIR"))
                    + ",\"OPENSHIFT_LOG_DIR\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_LOG_DIR"))
                    + ",\"LOGSHIFTER_JBOSSEWS_MAX_FILESIZE\":" + EncodingUtilHelper.quotate(System.getenv("LOGSHIFTER_JBOSSEWS_MAX_FILESIZE"))
                    + ",\"LOGSHIFTER_JBOSSEWS_MAX_FILES\":" + EncodingUtilHelper.quotate(System.getenv("LOGSHIFTER_JBOSSEWS_MAX_FILES"))
                    + ",\"OPENSHIFT_MYSQL_DB_HOST\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MYSQL_DB_HOST"))
                    + ",\"OPENSHIFT_MYSQL_DB_PORT\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MYSQL_DB_PORT"))
                    + ",\"OPENSHIFT_MYSQL_DB_USERNAME\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MYSQL_DB_USERNAME"))
                    + ",\"OPENSHIFT_MYSQL_DB_PASSWORD\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MYSQL_DB_PASSWORD"))
                    + ",\"OPENSHIFT_MYSQL_DB_SOCKET\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MYSQL_DB_SOCKET"))
                    + ",\"OPENSHIFT_MYSQL_DB_URL\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MYSQL_DB_URL"))
                    + ",\"OPENSHIFT_MAX_SESSIONS_PER_GEAR\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_MAX_SESSIONS_PER_GEAR"))
                    + ",\"OPENSHIFT_JBOSSEWS_LD_LIBRARY_PATH_ELEMENT\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_JBOSSEWS_LD_LIBRARY_PATH_ELEMENT"))
                    + ",\"JENKINS_USERNAME\":" + EncodingUtilHelper.quotate(System.getenv("JENKINS_USERNAME"))
                    + ",\"JENKINS_PASSWORD\":" + EncodingUtilHelper.quotate(System.getenv("JENKINS_PASSWORD"))
                    + ",\"JENKINS_URL\":" + EncodingUtilHelper.quotate(System.getenv("JENKINS_URL"))
                    + ",\"JAVA_OPTS_EXT\":" + EncodingUtilHelper.quotate(System.getenv("JAVA_OPTS_EXT"))
                    + ",\"OPENSHIFT_GEAR_DNS\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_GEAR_DNS"))
                    + ",\"OPENSHIFT_GEAR_NAME\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_GEAR_NAME"))
                    + ",\"OPENSHIFT_GEAR_UUID\":" + EncodingUtilHelper.quotate(System.getenv("OPENSHIFT_GEAR_UUID"))
                    + "}";
            data = JsonMessage.getJson("200", data);

            return data;

        } else {
            return JsonMessage.getJsonMsg("401", "Unauthorized");
        }

    }

    @Override
    public ReplyBean getcount() throws Exception {
        if (this.checkpermission("getcount")) {
            String data = null;
            ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                data = JsonMessage.getJson("200", Integer.toString(oUsuarioDao.getCount(alFilter)));
            } catch (Exception ex) {
                Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                throw new Exception();
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }
            return new ReplyBean(200, data);
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg("401", "Unauthorized"));
        }
    }

    @Override
    public ReplyBean get() throws Exception {
        if (this.checkpermission("get")) {
            int id = ParameterCook.prepareId(oRequest);
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                UsuarioBean oUsuarioBean = new UsuarioBean(id);
                oUsuarioBean = oUsuarioDao.get(oUsuarioBean, AppConfigurationHelper.getJsonDepth());
                Gson gson = AppConfigurationHelper.getGson();
                data = JsonMessage.getJson("200", AppConfigurationHelper.getGson().toJson(oUsuarioBean));
            } catch (Exception ex) {
                Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                throw new Exception();
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }
            return new ReplyBean(200, data);
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg("401", "Unauthorized"));
        }
    }

    @Override
    public ReplyBean getall() throws Exception {
        if (this.checkpermission("getall")) {
            ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
            HashMap<String, String> hmOrder = ParameterCook.prepareOrder(oRequest);
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;

            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                ArrayList<UsuarioBean> arrBeans = oUsuarioDao.getAll(alFilter, hmOrder, 1);
                data = JsonMessage.getJson("200", AppConfigurationHelper.getGson().toJson(arrBeans));
            } catch (Exception ex) {
                Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                throw new Exception();
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }

            return new ReplyBean(200, data);
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg("401", "Unauthorized"));
        }
    }

    @Override
    @SuppressWarnings("empty-statement")
    public ReplyBean getpage() throws Exception {
        if (this.checkpermission("getpage")) {
            int intRegsPerPag = ParameterCook.prepareRpp(oRequest);;
            int intPage = ParameterCook.preparePage(oRequest);
            ArrayList<FilterBeanHelper> alFilter = ParameterCook.prepareFilter(oRequest);
            HashMap<String, String> hmOrder = ParameterCook.prepareOrder(oRequest);
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                List<UsuarioBean> arrBeans = oUsuarioDao.getPage(intRegsPerPag, intPage, alFilter, hmOrder, AppConfigurationHelper.getJsonDepth());
                data = JsonMessage.getJson("200", AppConfigurationHelper.getGson().toJson(arrBeans));
            } catch (Exception ex) {
                Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                throw new Exception();
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }
            return new ReplyBean(200, data);
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg("401", "Unauthorized"));
        }
    }

    @Override
    public ReplyBean remove() throws Exception {
        if (this.checkpermission("remove")) {
            Integer id = ParameterCook.prepareId(oRequest);
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                oConnection.setAutoCommit(false);
                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                data = JsonMessage.getJson("200", (String) oUsuarioDao.remove(id).toString());
                oConnection.commit();
            } catch (Exception ex) {
                oConnection.rollback();
                Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                throw new Exception();
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }
            return new ReplyBean(200, data);
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg("401", "Unauthorized"));
        }
    }

    @Override
    public ReplyBean set() throws Exception {
        if (this.checkpermission("set")) {
            String jason = ParameterCook.prepareJson(oRequest);
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                oConnection.setAutoCommit(false);
                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                UsuarioBean oUsuarioBean = new UsuarioBean();
                oUsuarioBean = AppConfigurationHelper.getGson().fromJson(jason, oUsuarioBean.getClass());
                if (oUsuarioBean != null) {
                    Integer iResult = oUsuarioDao.set(oUsuarioBean);
                    if (iResult >= 1) {
                        data = JsonMessage.getJson("200", iResult.toString());
                    } else {
                        data = JsonMessage.getJson("500", "Error during registry set");
                    }
                } else {
                    data = JsonMessage.getJson("500", "Error during registry set");
                }
                oConnection.commit();
            } catch (Exception ex) {
                oConnection.rollback();
                Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                throw new Exception();
            } finally {
                if (oConnection != null) {
                    oConnection.close();
                }
                if (oDataConnectionSource != null) {
                    oDataConnectionSource.disposeConnection();
                }
            }
            return new ReplyBean(200, data);
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg("401", "Unauthorized"));

        }
    }

    public ReplyBean login() throws SQLException, Exception {
        UsuarioBean oUserBean = (UsuarioBean) oRequest.getSession().getAttribute("userBean");
        String strAnswer = null;
        String strCode = "200";
        try {
            if (oUserBean == null) {
                String login = oRequest.getParameter("user");
                String pass = oRequest.getParameter("pass");
                if (!login.equals("") && !pass.equals("")) {
                    ConnectionInterface oDataConnectionSource = null;
                    Connection oConnection = null;
                    try {
                        oDataConnectionSource = getSourceConnection();
                        oConnection = oDataConnectionSource.newConnection();
                        UsuarioBean oUsuario = new UsuarioBean();
                        oUsuario.setLogin(login);
                        oUsuario.setPassword(pass);
                        UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                        oUsuario = oUsuarioDao.getFromLogin(oUsuario);
                        if (oUsuario.getId() != 0) {
                            oRequest.getSession().setAttribute("userBean", oUsuario);
                            strAnswer = oUsuario.getLogin();
                        } else {
                            strCode = "403";
                            strAnswer = "User or password incorrect";
                        }
                    } catch (Exception ex) {
                        Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
                        strCode = "403";
                        strAnswer = "ERROR01";
                    } finally {
                        if (oConnection != null) {
                            oConnection.close();
                        }
                        if (oDataConnectionSource != null) {
                            oDataConnectionSource.disposeConnection();
                        }
                    }
                }
            } else {
                strAnswer = "Already logged in";
            }
        } catch (Exception ex) {
            Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
            strCode = "403";
            strAnswer = "ERROR02";
        }
        return new ReplyBean(Integer.parseInt(strCode), JsonMessage.getJsonMsg(strCode, strAnswer));

    }

    public ReplyBean logout() {
        oRequest.getSession().invalidate();
        return new ReplyBean(200, JsonMessage.getJsonMsg("200", "bye"));
    }

    public ReplyBean getsessionstatus() {
        String strAnswer = null;
        UsuarioBean oUserBean = (UsuarioBean) oRequest.getSession().getAttribute("userBean");
        if (oUserBean == null) {
            return new ReplyBean(403, JsonMessage.getJsonMsg("403", "Unauthorized"));
        } else {
            return new ReplyBean(200, JsonMessage.getJsonMsg("200", oUserBean.getLogin()));
        }
    }

    public ReplyBean sessionuserlevel() {
        String strAnswer = null;
        UsuarioBean oUserBean = (UsuarioBean) oRequest.getSession().getAttribute("userBean");
        Map<Integer, String> map = new HashMap<Integer, String>();
        if (oUserBean == null) {
            return new ReplyBean(403, JsonMessage.getJsonMsg("403", "Unauthorized"));
        } else {
            return new ReplyBean(200, JsonMessage.getJsonMsg("200", oUserBean.getId_estado().toString()));
        }
    }

}
