/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.EmpresaBean;
import net.daw.bean.UsuarioBean;
import net.daw.helper.Conexion;

/**
 *
 * @author AntonioNP
 */
public class EmpresaDao extends GenericDaoImplementation<EmpresaBean>{
    
    public EmpresaDao() throws Exception{
        super( "empresa");
    }
    
    public EmpresaBean getFromId_usuario(UsuarioBean oUsuarioBean) throws Exception {
        EmpresaBean oEmpresaBean = new EmpresaBean();
        if (oUsuarioBean.getId() > 0) {
            try {
                oMysql.conexion(enumTipoConexion);
                String id_usuario = Integer.toString(oUsuarioBean.getId());
                Integer id_user = Integer.parseInt(oMysql.getId("empresa", "id_usuario", id_usuario));
                oEmpresaBean.setId(id_user);
            } catch (Exception e) {
                throw new Exception("EmpresaDao.getEmpresa: Error: " + e.getMessage());
            } finally {
                oMysql.desconexion();
            }
        } else {
            oEmpresaBean.setId(0);
        }
        return oEmpresaBean;
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de empresa";
    }



}
