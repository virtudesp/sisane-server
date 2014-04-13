/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.daw.bean.EmpresaBean;
import net.daw.dao.EmpresaDao;
import net.daw.helper.Conexion;

/**
 *
 * @author AntonioNP
 */
public class EmpresaRemove implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            EmpresaDao oEmpresaDAO = new EmpresaDao();
            EmpresaBean oEmpresa = new EmpresaBean();
            oEmpresa.setId(Integer.parseInt(request.getParameter("id")));
            Map<String, String> data = new HashMap<>();
            if (oEmpresa != null) {
                oEmpresaDAO.remove(oEmpresa);
                data.put("status", "200");
                data.put("message", "se ha eliminado el registro con id=" + oEmpresa.getId());
            } else {
                data.put("status", "error");
                data.put("message", "error");
            }
            Gson gson = new Gson();
            String resultado = gson.toJson(data);
            return resultado;
        } catch (Exception e) {
            throw new ServletException("EmpresaRemoveJson: View Error: " + e.getMessage());
        }
    }
}
