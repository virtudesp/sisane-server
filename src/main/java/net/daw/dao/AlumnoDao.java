/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import net.daw.bean.AlumnoBean;
import net.daw.bean.UsuarioBean;
import net.daw.helper.Conexion;

/**
 *
 * @author Sergio
 */
public class AlumnoDao extends GenericDaoImplementation<AlumnoBean> {

    public AlumnoDao() throws Exception {
        super("alumno");
    }

    public AlumnoBean getFromId_usuario(UsuarioBean oUsuarioBean) throws Exception {
        AlumnoBean oAlumnoBean = new AlumnoBean();
        if (oUsuarioBean.getId() > 0) {
            try {
                oMysql.conexion(enumTipoConexion);
                String id_usuario = Integer.toString(oUsuarioBean.getId());
                Integer id_user = Integer.parseInt(oMysql.getId("alumno", "id_usuario", id_usuario));
                oAlumnoBean.setId(id_user);
            } catch (Exception e) {
                throw new Exception("AlumnoDao.getAlumno: Error: " + e.getMessage());
            } finally {
                oMysql.desconexion();
            }
        } else {
            oAlumnoBean.setId(0);
        }
        return oAlumnoBean;
    }
}
