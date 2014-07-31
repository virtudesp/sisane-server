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

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.implementation.UsuarioBeanImpl;
import net.daw.conexion.implementation.BoneConnectionPoolImpl;
import net.daw.conexion.publicinterface.GenericConnectionInterface;
import net.daw.dao.implementation.UsuarioDaoImpl;
import net.daw.helper.Estado;
import net.daw.helper.Estado.Tipo_estado;

public class ControlJsp extends HttpServlet {

    private static final long serialVersionUID = 1L;

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
            //HTTP headers
            response.setHeader("page language", "java");
            response.setHeader("contentType", "text/html");
            response.setHeader("pageEncoding", "UTF-8");
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            //parameter loading
            String op = request.getParameter("op");
            String ob = request.getParameter("ob");
            String mode = request.getParameter("mode");
            //load default values
            if (op == null) {
                op = "inicio";
            }
            if (ob == null) {
                ob = "usuario";
            }
            if (mode == null) {
                mode = "wrappered";
            }
            //security check
            if (request.getSession().getAttribute("usuarioBean") == null) {
                ob = "usuario";
                if (!op.equals("inicio") && !op.equals("login02")) {
                    op = "login01";
                    mode = "wrappered";
                }
            }
            //login & logout management
            if (ob.equalsIgnoreCase("usuario")) {
                if (op.equalsIgnoreCase("login02")) {
                    UsuarioBeanImpl oUsuario = new UsuarioBeanImpl();
                    String login = request.getParameter("login");
                    String pass = request.getParameter("password");
                    if (!login.equals("") && !pass.equals("")) {
                        oUsuario.setLogin(login);
                        oUsuario.setPassword(pass);
                        UsuarioDaoImpl oUsuarioDao = new UsuarioDaoImpl(connection);
                        oUsuario = oUsuarioDao.getFromLogin(oUsuario);
                        if (oUsuario.getId() != 0) {
                            //oUsuario = oUsuarioDao.type(oUsuario); //fill user level -> pending
                            request.getSession().setAttribute("usuarioBean", oUsuario);
                        }
                    }
                }
                if (op.equalsIgnoreCase("logout")) {
                    request.getSession().invalidate();
                }
            }
            //delivering jsp page
            if ("wrappered".equals(mode)) {
                request.setAttribute("contenido", "jsp/" + ob + "/" + op + ".jsp");
                request.setAttribute("connection", connection);
                getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            } else {
                response.setContentType("text/html; charset=UTF-8");
                request.setAttribute("connection", connection);
                getServletContext().getRequestDispatcher("/jsp/" + ob + "/" + op + ".jsp").forward(request, response);
            }
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
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            if (Estado.getTipo_estado() == Tipo_estado.Debug) {
                PrintWriter out = response.getWriter();
                out.println("<html><body><h1>Application error</h1><strong>Message:</strong> " + ex + "<body></html>");
            } else {
                Logger.getLogger(ControlJsp.class.getName()).log(Level.SEVERE, null, ex);
            }

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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            if (Estado.getTipo_estado() == Tipo_estado.Debug) {
                PrintWriter out = response.getWriter();
                out.println("<html><body><h1>Application error</h1><strong>Message:</strong> " + ex + "<body></html>");
            } else {
                Logger.getLogger(ControlJsp.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "jsp controller";
    }
// </editor-fold>
}
