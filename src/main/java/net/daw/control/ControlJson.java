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
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.conexion.implementation.BoneConnectionPoolImpl;
import net.daw.conexion.publicinterface.GenericConnectionInterface;
import net.daw.helper.FilterBean;
import net.daw.service.generic.GenericTableServiceImpl;

/**
 *
 * @author rafa
 */
public class ControlJson extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private void retardo(Integer iLast) {
        try {
            Thread.sleep(iLast);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
        }
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        GenericConnectionInterface DataConnectionSource = null;
        Connection connection = null;

        try {
            try {
                Class.forName("com.mysql.jdbc.Driver");
            } catch (Exception e) {
                e.printStackTrace();
                return;
            }

            DataConnectionSource = new BoneConnectionPoolImpl();
            connection = DataConnectionSource.newConnection();

            //----------------------------------------------------------------------          
            retardo(0); //debug delay
            // get parameters
            String operation = request.getParameter("op");
            String object = request.getParameter("ob");
            // prepare parameters

            //DocumentoProcess p=new DocumentoProcess("ff",connection);
            String jsonResult = "";
            // create generic class to serve the request
            Constructor oConstructor = Class.forName("net.daw.service.implementation." + Character.toUpperCase(object.charAt(0)) + object.substring(1) + "ServiceImpl").getConstructor(Connection.class);
            GenericTableServiceImpl process = (GenericTableServiceImpl) oConstructor.newInstance(connection);
            // serve the request and get json result into datos
            if (request.getSession().getAttribute("usuarioBean") != null || ("documento".equals(object))) {
                switch (operation) {
                    case "get":
                        jsonResult = process.get(Integer.parseInt(request.getParameter("id")));
                        break;
                    case "getprettycolumns":
                        jsonResult = process.getPrettyColumns();
                        break;
                    case "getcolumns":
                        jsonResult = process.getColumns();
                        break;
                    case "getpage":
                    case "getpages":
                    case "getregisters":
                    case "getview":
                        int intRegsPerPag;
                        if (request.getParameter("rpp") == null) {
                            intRegsPerPag = 10;
                        } else {
                            intRegsPerPag = Integer.parseInt(request.getParameter("rpp"));
                        }
                        int intPage;
                        if (request.getParameter("page") == null) {
                            intPage = 1;
                        } else {
                            intPage = Integer.parseInt(request.getParameter("page"));
                        }
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
                        if ("getpage".equals(operation) || "getview".equals(operation)) {
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
                            if ("getpage".equals(operation)) {
                                jsonResult = process.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
                            } else {
                                jsonResult = process.getView(intRegsPerPag, intPage, alFilter, hmOrder);
                            }
                        } else {
                            if ("getpages".equals(operation)) {
                                jsonResult = process.getPages(intRegsPerPag, alFilter);
                            } else {
                                if ("getregisters".equals(operation)) {
                                    jsonResult = process.getCount(alFilter);
                                }
                            }
                        }
                        break;
                    case "remove":
                        //if (request.getSession().getAttribute("usuarioBean") != null) {
                        jsonResult = process.remove(Integer.parseInt(request.getParameter("id")));
                        //}
                        break;
                    case "save":
                        //if (request.getSession().getAttribute("usuarioBean") != null) {
                        //String jason = TextParser.textDecode(request.getParameter("json"));
                        String jason = request.getParameter("json").replaceAll("%2F", "/");
                        jsonResult = process.save(jason);
                        //}
                        break;
                    default:
                        Map<String, String> data = new HashMap<>();
                        data.put("status", "401");
                        data.put("message", "error de operación");
                        Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
                        jsonResult = gson.toJson(data);
                        break;
                }
            }
            //send the result to the client
            request.setAttribute("contenido", jsonResult);
            getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ControlJson.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            //important to close connection
            if (connection != null) {
                connection.close();
            }
            DataConnectionSource.disposeConnection();
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
            Logger.getLogger(ControlJson.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(ControlJson.class.getName()).log(Level.SEVERE, null, ex);
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
