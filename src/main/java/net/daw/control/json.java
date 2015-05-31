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
package net.daw.control;

import com.google.gson.Gson;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.specific.implementation.UsuarioBean;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.specific.implementation.UsuarioDao;
import net.daw.helper.statics.EstadoHelper;
import net.daw.helper.statics.EstadoHelper.Tipo_estado;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.JsonMessage;
import net.daw.helper.statics.ParameterCook;
import net.daw.service.publicinterface.MetaServiceInterface;

public class json extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private void sendResponse(HttpServletRequest request, HttpServletResponse response, String strStatus, String strMessage) throws ServletException, IOException {

        Map<String, String> data = new HashMap<>();
        data.put("status", strStatus);
        data.put("message", strMessage);
        Gson gson = new Gson();
        request.setAttribute("contenido", gson.toJson(data));
        getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
    }

    private void sendResponse2(HttpServletRequest request, HttpServletResponse response, String strStatus, String strMessage) throws ServletException, IOException {
        request.setAttribute("contenido", "{\"status\":" + strStatus + ",\"message\":" + strMessage + "}");
        getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
    }

    private void writeLog(HttpServletRequest request, HttpServletResponse response, String strMessage) throws ServletException, IOException {
        Logger.getLogger(JsonControl.class.getName()).log(Level.SEVERE, null, request.getRemoteHost() + ": " + request.getRemoteAddr() + ": " + strMessage);

    }

    private void retardo(Integer iLast) {
        try {
            Thread.sleep(iLast);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
        }
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        try {
            try {
                Class.forName("com.mysql.jdbc.Driver");
            } catch (Exception ex) {
                if (EstadoHelper.getTipo_estado() == Tipo_estado.Debug) {
                    request.setAttribute("contenido", JsonMessage.get("500", "ERROR: " + ex.getMessage()));
                    getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
                } else {
                    request.setAttribute("contenido", JsonMessage.get("500", "Applications server error. Please, contact your administrator."));
                    getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
                }
                Logger.getLogger(JsonControl.class.getName()).log(Level.SEVERE, null, ex);
                return;
            }

            //----------------------------------------------------------------------  
            if (EstadoHelper.getTipo_estado() == Tipo_estado.Debug) {
                retardo(EstadoHelper.getDelay()); //debug delay
            }

            String ob = ParameterCook.prepareObject(request);
            String op = ParameterCook.prepareOperation(request);
            UsuarioBean oUserBean = (UsuarioBean) request.getSession().getAttribute("userBean");
            if (op.equals("status")) {

                if (oUserBean == null) {
                    sendResponse(request, response, "403", "ERROR: You don't have permission to perform this operation");
                } else {
                    sendResponse(request, response, "200", oUserBean.getLogin());
                }
            } else {
                if (oUserBean == null) {
                    if (op.equals("login")) {
                        UsuarioBean oUsuario = new UsuarioBean();
                        String login = request.getParameter("login");
                        String pass = request.getParameter("password");
                        if (!login.equals("") && !pass.equals("")) {
                            ConnectionInterface DataConnectionSource = null;
                            Connection oConnection = null;
                            try {

                                DataConnectionSource = new BoneConnectionPoolImpl();

                                oConnection = DataConnectionSource.newConnection();
                                oUsuario.setLogin(login);
                                oUsuario.setPassword(pass);
                                UsuarioDao oUsuarioDao = new UsuarioDao(oConnection);
                                oUsuario = oUsuarioDao.getFromLogin(oUsuario);
                                if (oUsuario.getId() != 0) {
                                    //oUsuario = oUsuarioDao.type(oUsuario); //fill user level -> pending
                                    request.getSession().setAttribute("userBean", oUsuario);
                                    sendResponse(request, response, "200", oUsuario.getLogin());
                                    writeLog(request, response, oUsuario.getId() + ": Successful Login");
                                }
                            } catch (Exception ex) {
                                sendResponse(request, response, "403", "Error during user autentication");
                                writeLog(request, response, "Error dring user autentication:" + ex);
                            } finally {
                                if (oConnection != null) {
                                    oConnection.close();
                                }
                                if (DataConnectionSource != null) {
                                    DataConnectionSource.disposeConnection();
                                }
                            }

                        }
                    } else {
                        sendResponse(request, response, "403", "ERROR: You don't have permission to perform this operation");
                        writeLog(request, response, "Trying to access without session");
                        return;
                    }
                } else {
                    if (op.equalsIgnoreCase("login")) {
                        sendResponse(request, response, "200", oUserBean.getLogin());
                    }
                    if (op.equalsIgnoreCase("comprobar")) {
                        sendResponse(request, response, "200",  oUserBean.getLogin());
                    }
                    if (op.equalsIgnoreCase("logout")) {
                        UsuarioBean oUsuario = (UsuarioBean) request.getSession().getAttribute("userBean");
                        sendResponse(request, response, "200", "Bye");
                        writeLog(request, response, oUsuario.getId() + ": Logout");
                        request.getSession().invalidate();
                        return;
                    }
                    try {
                        String strClassName = "net.daw.service.specific.implementation." + ParameterCook.prepareCamelCaseObject(request) + "Service";
                        MetaServiceInterface oService = (MetaServiceInterface) Class.forName(strClassName).getDeclaredConstructor(HttpServletRequest.class).newInstance(request);
                        Method oMethodService = oService.getClass().getMethod(ParameterCook.prepareOperation(request));
                        String jsonResult = (String) oMethodService.invoke(oService);
                        sendResponse2(request, response, "200", jsonResult);
                    } catch (ClassNotFoundException | InstantiationException | IllegalAccessException ex) {
                        ExceptionBooster.boost(new Exception(this.getClass().getName() + ":processRequest ERROR: no such operation"));
                    }

                }
            }

        } catch (ServletException | IOException | NoSuchMethodException | SecurityException | IllegalArgumentException | InvocationTargetException ex) {
            sendResponse(request, response, "500", "Applications server error. Please, contact your administrator.");
            writeLog(request, response, ex.toString());
        } finally {
        }
    }

// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);

        } catch (Exception ex) {
            //Logger.getLogger(JsonControl.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);

        } catch (Exception ex) {
            //Logger.getLogger(JsonControl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
