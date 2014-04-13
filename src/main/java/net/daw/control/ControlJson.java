/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.control;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.GenericBeanImplementation;
import net.daw.bean.GenericBeanInterface;
import net.daw.dao.GenericDaoImplementation;
import net.daw.dao.GenericDaoInterface;
import net.daw.helper.EncodingUtil;
import net.daw.helper.FilterBean;
import net.daw.process.GenericOperation;
import net.daw.process.GenericProcessInterface;

/**
 *
 * @author rafa
 */
public class ControlJson extends HttpServlet {

    private void retardo(Integer iLast) {
        try {
            Thread.sleep(iLast);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
        }
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        //debug delay
        retardo(0);
        //control de autenticación
        if (request.getSession().getAttribute("usuarioBean") == null) {
            Gson gson = new Gson();
            Map<String, String> data = new HashMap<>();
            data.put("status", "401");
            data.put("message", "error de autenticación");
            String resultado = gson.toJson(data);
            request.setAttribute("contenido", resultado);
            getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
        } else {
            //String n = request.getParameter("new");
            String op = request.getParameter("op");
            String ob = request.getParameter("ob");
//            if (!"new".equals(n)) {
//                //url: http://localhost:8081/ausiaxBroth/json?ob=actividad&op=get&new=new&id=1
//                try {
//                    try {
//                        String callop = Character.toUpperCase(ob.charAt(0)) + ob.substring(1) + Character.toUpperCase(op.charAt(0)) + op.substring(1);
//                        GenericOperation operation = (GenericOperation) Class.forName("net.daw.operaciones." + callop).newInstance();
//                        String data = operation.execute(request, response);
//                        request.setAttribute("contenido", data);
//                        getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);
//                    } catch (ClassNotFoundException ex) {
//                        Logger.getLogger(ControlJson.class.getName()).log(Level.SEVERE, null, ex);
//                    }
//                } catch (InstantiationException | IllegalAccessException ex) {
//                    Logger.getLogger(ControlJson.class.getName()).log(Level.SEVERE, null, ex);
//                }
//
//            } else {
            String objeto = Character.toUpperCase(ob.charAt(0)) + ob.substring(1);
            String operacion = op;
            String datos = "";
            GenericProcessInterface process = (GenericProcessInterface) Class.forName("net.daw.process." + objeto + "Process").newInstance();
            GenericBeanImplementation oBean = (GenericBeanImplementation) Class.forName("net.daw.bean." + objeto + "Bean").newInstance();
            GenericDaoImplementation oDao = (GenericDaoImplementation) Class.forName("net.daw.dao." + objeto + "Dao").newInstance();
            switch (operacion) {
                case "get":
                    oBean.setId(Integer.parseInt(request.getParameter("id")));
                    //oBean = (GenericBeanImplementation) oDao.get(oBean);
                    datos = process.get(oBean, oDao);
                    break;
                case "getcolumns":
                    //oBean = (GenericBeanImplementation) oDao.get(oBean);
                    datos = process.getColumns(oBean, oDao);
                    break;
                case "getpage":
                case "getpages":
                case "getregisters":
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
                    if ("getpage".equals(operacion)) {
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
                        datos = process.getPage(intRegsPerPag, intPage, alFilter, hmOrder, oBean, oDao);
                    } else {
                        if ("getpages".equals(operacion)) {
                            datos = process.getPages(intRegsPerPag, alFilter, oDao);
                        } else {
                            if ("getregisters".equals(operacion)) {
                                datos = process.getRegisters(alFilter, oDao);
                            }
                        }
                    }
                    break;
                case "remove":
                    oBean.setId(Integer.parseInt(request.getParameter("id")));
                    datos = process.remove(oBean, oDao);
                    break;
                case "save":
                    String jason = request.getParameter("json");
                    jason = EncodingUtil.decodeURIComponent(jason);
                    Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
                    oBean = gson.fromJson(jason, oBean.getClass());
                    datos = process.save(jason, oBean, oDao);
                    break;
                default:
                    break;
            }

            request.setAttribute("contenido", datos);
            getServletContext().getRequestDispatcher("/jsp/messageAjax.jsp").forward(request, response);

        }

//        }
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
            Logger.getLogger(ControlJson.class
                    .getName()).log(Level.SEVERE, null, ex);
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
