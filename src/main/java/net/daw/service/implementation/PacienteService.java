/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
import net.daw.bean.implementation.PusuarioBean;
import net.daw.bean.implementation.ReplyBean;
import net.daw.bean.implementation.PacienteBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.implementation.PacienteDao;
import net.daw.helper.statics.AppConfigurationHelper;
import static net.daw.helper.statics.AppConfigurationHelper.getSourceConnection;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.JsonMessage;
import net.daw.helper.statics.Log4j;
import net.daw.helper.statics.ParameterCook;
import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.ViewServiceInterface;

public class PacienteService implements TableServiceInterface, ViewServiceInterface {

    protected HttpServletRequest oRequest = null;

    public PacienteService(HttpServletRequest request) {
        oRequest = request;
    }

    private Boolean checkpermission(String strMethodName) throws Exception {
        PusuarioBean oPuserBean = (PusuarioBean) oRequest.getSession().getAttribute("userBean");
        if (oPuserBean != null) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public ReplyBean getcount() throws Exception {
        if (this.checkpermission("getcount")) {
            String data = null;
            ArrayList<FilterBeanHelper> alFilter = ParameterCook.getFilterParams(ParameterCook.prepareFilter(oRequest));
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {

                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                data = JsonMessage.getJsonExpression(200, Long.toString(oPacienteDao.getCount(alFilter)));
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
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
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
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                PacienteBean oPacienteBean = new PacienteBean(id);
                oPacienteBean = oPacienteDao.get(oPacienteBean, AppConfigurationHelper.getJsonMsgDepth());
                Gson gson = AppConfigurationHelper.getGson();
                data = JsonMessage.getJsonExpression(200, AppConfigurationHelper.getGson().toJson(oPacienteBean));
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
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
        }
    }

    @Override
    public ReplyBean getall() throws Exception {
        if (this.checkpermission("getall")) {
            HashMap<String, String> hmOrder = ParameterCook.getOrderParams(ParameterCook.prepareOrder(oRequest));
            ArrayList<FilterBeanHelper> alFilter = ParameterCook.getFilterParams(ParameterCook.prepareFilter(oRequest));
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                ArrayList<PacienteBean> arrBeans = oPacienteDao.getAll(alFilter, hmOrder, AppConfigurationHelper.getJsonMsgDepth());
                data = JsonMessage.getJsonExpression(200, AppConfigurationHelper.getGson().toJson(arrBeans));
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
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
        }
    }

    @Override
    public ReplyBean getpage() throws Exception {
        if (this.checkpermission("getpage")) {
            int intRegsPerPag = ParameterCook.prepareRpp(oRequest);
            int intPage = ParameterCook.preparePage(oRequest);
            HashMap<String, String> hmOrder = ParameterCook.getOrderParams(ParameterCook.prepareOrder(oRequest));
            ArrayList<FilterBeanHelper> alFilter = ParameterCook.getFilterParams(ParameterCook.prepareFilter(oRequest));
            String data = null;
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                List<PacienteBean> arrBeans = oPacienteDao.getPage(intRegsPerPag, intPage, alFilter, hmOrder, AppConfigurationHelper.getJsonMsgDepth());
                data = JsonMessage.getJsonExpression(200, AppConfigurationHelper.getGson().toJson(arrBeans));
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
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
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
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                data = JsonMessage.getJsonExpression(200, (String) oPacienteDao.remove(id).toString());
                oConnection.commit();
            } catch (Exception ex) {
                if (oConnection != null) {
                    oConnection.rollback();
                }
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
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
        }
    }

    @Override
    public ReplyBean set() throws Exception {
        if (this.checkpermission("set")) {
            String jason = ParameterCook.prepareJson(oRequest);
            ReplyBean oReplyBean = new ReplyBean();
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                oConnection.setAutoCommit(false);
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                PacienteBean oPacienteBean = new PacienteBean();
                oPacienteBean = AppConfigurationHelper.getGson().fromJson(jason, oPacienteBean.getClass());
                if (oPacienteBean != null) {
                    Integer iResult = oPacienteDao.set(oPacienteBean);
                    if (iResult >= 1) {
                        oReplyBean.setCode(200);
                        oReplyBean.setJson(JsonMessage.getJsonExpression(200, iResult.toString()));
                    } else {
                        oReplyBean.setCode(500);
                        oReplyBean.setJson(JsonMessage.getJsonMsg(500, "Error during registry set"));
                    }
                } else {
                    oReplyBean.setCode(500);
                    oReplyBean.setJson(JsonMessage.getJsonMsg(500, "Error during registry set"));
                }
                oConnection.commit();
            } catch (Exception ex) {
                if (oConnection != null) {
                    oConnection.rollback();
                }
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
            return oReplyBean;
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
        }
    }

    public ReplyBean login() throws SQLException, Exception {
        PusuarioBean oPuserBean = (PusuarioBean) oRequest.getSession().getAttribute("userBean");
        PusuarioBean oPuser = null;
        String strAnswer = null;
        String strCode = "200";
        try {
            if (oPuserBean == null) {
                String login = oRequest.getParameter("user");
                String pass = oRequest.getParameter("pass");
                if (!login.equals("") && !pass.equals("")) {
                    ConnectionInterface oDataConnectionSource = null;
                    Connection oConnection = null;
                    try {
                        oDataConnectionSource = getSourceConnection();
                        oConnection = oDataConnectionSource.newConnection();
                        oPuser = new PusuarioBean();
                        oPuser.setLogin(login);
                        oPuser.setPassword(pass);
                        PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                        oPuser = oPacienteDao.getFromLogin(oPuser);
                        if (oPuser.getId() != 0) {
                            strCode = "200";
                            oRequest.getSession().setAttribute("userBean", oPuser);
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
                //strAnswer = "Already logged in";
            }
        } catch (Exception ex) {
            Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
            strCode = "403";
            strAnswer = "ERROR02";
        }
        if (strCode == "200") {
            return new ReplyBean(200, JsonMessage.getJsonExpression(200, AppConfigurationHelper.getGson().toJson(oPuser)));
        } else {
            return new ReplyBean(Integer.parseInt(strCode), JsonMessage.getJsonMsg(Integer.parseInt(strCode), strAnswer));
        }

    }

    public ReplyBean logout() {
        oRequest.getSession().invalidate();
        return new ReplyBean(200, JsonMessage.getJsonMsg(200, "bye"));
    }

    public ReplyBean getsessionstatus() throws Exception {
        String strAnswer = null;
        PusuarioBean oPuserBean = (PusuarioBean) oRequest.getSession().getAttribute("userBean");
        if (oPuserBean == null) {
            return new ReplyBean(403, JsonMessage.getJsonMsg(403, "Unauthorized"));
        } else {
            return new ReplyBean(200, JsonMessage.getJsonExpression(200, AppConfigurationHelper.getGson().toJson(oPuserBean)));
        }
    }

    public ReplyBean sessionuserlevel() {
        String strAnswer = null;
        PacienteBean oPacienteBean = (PacienteBean) oRequest.getSession().getAttribute("userBean");
        Map<Integer, String> map = new HashMap<>();
        if (oPacienteBean == null) {
            return new ReplyBean(403, JsonMessage.getJsonMsg(403, "Unauthorized"));
        } else {
            return new ReplyBean(200, JsonMessage.getJsonExpression(200, oPacienteBean.getId_tipousuario().toString()));
        }
    }

    public ReplyBean passchange() throws Exception {
        if (this.checkpermission("passchange")) {            
            String oldPass = oRequest.getParameter("old");
            String newPass = oRequest.getParameter("new");
            ReplyBean oReplyBean = new ReplyBean();
            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            try {
                oDataConnectionSource = getSourceConnection();
                oConnection = oDataConnectionSource.newConnection();
                oConnection.setAutoCommit(false);
                PacienteDao oPacienteDao = new PacienteDao(oConnection, (PusuarioBean) oRequest.getSession().getAttribute("userBean"));
                Integer iResult = oPacienteDao.passchange(oldPass, newPass);
                if (iResult >= 1) {
                    oReplyBean.setCode(200);
                    oReplyBean.setJson(JsonMessage.getJsonExpression(200, iResult.toString()));
                } else {
                    oReplyBean.setCode(500);
                    oReplyBean.setJson(JsonMessage.getJsonMsg(500, "Error during changing password"));
                }
                oConnection.commit();
            } catch (Exception ex) {
                if (oConnection != null) {
                    oConnection.rollback();
                }
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
            return oReplyBean;
        } else {
            return new ReplyBean(401, JsonMessage.getJsonMsg(401, "Unauthorized"));
        }
    }

}
