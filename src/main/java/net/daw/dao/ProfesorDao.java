/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package net.daw.dao;


import java.util.ArrayList;
import net.daw.bean.ProfesorBean;
import net.daw.bean.UsuarioBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Pedro Benito
 */
public class ProfesorDao extends GenericDaoImplementation<ProfesorBean>{
    
    public ProfesorDao() throws Exception{
        super( "profesor");
    }
    
    public ProfesorBean getFromId_usuario(UsuarioBean oUsuarioBean) throws Exception {
        ProfesorBean oProfesorBean = new ProfesorBean();
        if (oUsuarioBean.getId() > 0) {
            try {
                oMysql.conexion(enumTipoConexion);
                String id_usuario = Integer.toString(oUsuarioBean.getId());
                Integer id_user = Integer.parseInt(oMysql.getId("profesor", "id_usuario", id_usuario));
                oProfesorBean.setId(id_user);
            } catch (Exception e) {
                throw new Exception("ProfesorDao.getProfesor: Error: " + e.getMessage());
            } finally {
                oMysql.desconexion();
            }
        } else {
            oProfesorBean.setId(0);
        }
        return oProfesorBean;
    }

    @Override
    public String getDescription(int id) throws Exception {
        return "Descripcion de profesor";
    }
}
