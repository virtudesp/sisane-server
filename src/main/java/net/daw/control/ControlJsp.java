package net.daw.control;

import com.jolbox.bonecp.BoneCP;
import com.jolbox.bonecp.BoneCPConfig;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.UsuarioBean;
import net.daw.dao.UsuarioDao;
import net.daw.helper.ConnectionSource;
import net.daw.helper.Estado;
import net.daw.helper.Estado.Tipo_estado;

/**
 *
 * @author rafael aznar
 *
 */
public class ControlJsp extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {

        BoneCP connectionPool = null;
        try {

            try {
                Class.forName("com.mysql.jdbc.Driver");
            } catch (Exception e) {
                e.printStackTrace();
                return;
            }
            BoneCPConfig config = new BoneCPConfig();
            config.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/ausiaxContent");
            config.setUsername("root");
            config.setPassword("bitnami");
            config.setMinConnectionsPerPartition(5);
            config.setMaxConnectionsPerPartition(10);
            config.setPartitionCount(1);
            connectionPool = new BoneCP(config); // setup the connection pool

            //----------------------------------------------------------------------
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
                    UsuarioBean oUsuario = new UsuarioBean();
                    String login = request.getParameter("login");
                    String pass = request.getParameter("password");
                    if (!login.equals("") && !pass.equals("")) {
                        oUsuario.setLogin(login);
                        oUsuario.setPassword(pass);
                        UsuarioDao oUsuarioDao = new UsuarioDao(connectionPool.getConnection());

                

                        oUsuario = oUsuarioDao.getFromLogin(oUsuario);
                        if (oUsuario.getId() != 0) {
                            //oUsuario = oUsuarioDao.type(oUsuario); //fill user level
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
                request.setAttribute("connection", connectionPool.getConnection());
                getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            } else {
                response.setContentType("text/html; charset=UTF-8");
                request.setAttribute("connection", connectionPool.getConnection());
                getServletContext().getRequestDispatcher("/jsp/" + ob + "/" + op + ".jsp").forward(request, response);
            }
        } catch (Exception ex) {
            Logger.getLogger(ControlJson.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            connectionPool.close();
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
