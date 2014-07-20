/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.dao;

import java.util.ArrayList;
import net.daw.bean.AlumnoBean;
import net.daw.bean.DocumentoBean;
import net.daw.bean.EmpresaBean;
import net.daw.bean.ProfesorBean;
import net.daw.bean.UsuarioBean;
import net.daw.helper.Enum;

/**
 *
 * @author rafa
 */
public class UsuarioDao extends GenericDaoImplementation<UsuarioBean> {

    public UsuarioDao() throws Exception {
        super( "usuario");
    }

    public UsuarioBean getFromLogin(UsuarioBean oUsuario) throws Exception {
        try {
            oMysql.conexion(enumTipoConexion);
            String strId = oMysql.getId("usuario", "login", oUsuario.getLogin());
            if (strId == null) {
                oUsuario.setId(0);
            } else {
                Integer intId= Integer.parseInt(strId);
                oUsuario.setId(intId);
                String pass = oUsuario.getPassword();
                oUsuario.setPassword(oMysql.getOne("usuario", "password", oUsuario.getId()));
                if (!pass.equals(oUsuario.getPassword())) {
                    oUsuario.setId(0);
                }
            }
            oMysql.desconexion();
            return oUsuario;
        } catch (Exception e) {
            throw new Exception("UsuarioDao.getFromLogin: Error: " + e.getMessage());
        }
    }

    public UsuarioBean type(UsuarioBean oUsuarioBean) throws Exception {

        try {
            AlumnoDao oAlumnoDao = new AlumnoDao();
            AlumnoBean oAlumnoBean = oAlumnoDao.getFromId_usuario(oUsuarioBean);
            oUsuarioBean.setTipoUsuario(Enum.TipoUsuario.Alumno);
        } catch (Exception e1) {
            try {
                EmpresaDao oEmpresaDao = new EmpresaDao();
                EmpresaBean oEmpresaBean = oEmpresaDao.getFromId_usuario(oUsuarioBean);
                oUsuarioBean.setTipoUsuario(Enum.TipoUsuario.Empresa);
            } catch (Exception e2) {
                try {
                    ProfesorDao oProfesorDao = new ProfesorDao();
                    ProfesorBean oProfesorBean = oProfesorDao.getFromId_usuario(oUsuarioBean);
                    oUsuarioBean.setTipoUsuario(Enum.TipoUsuario.Profesor);
                } catch (Exception e3) {
                    throw new Exception("UsuarioDao.type: Error: " + e3.getMessage());
                }
            }
        } finally {
            oMysql.desconexion();
        }
        return oUsuarioBean;
    }
 
    @Override
    public UsuarioBean get(UsuarioBean oUsuarioBean) throws Exception {
        if (oUsuarioBean.getId() > 0) {
            try {
                oMysql.conexion(enumTipoConexion);
                if (!oMysql.existsOne("usuario", oUsuarioBean.getId())) {
                    oUsuarioBean.setId(0);
                } else {
                    oUsuarioBean.setLogin(oMysql.getOne("usuario", "login", oUsuarioBean.getId()));
                    oUsuarioBean.setPassword(oMysql.getOne("usuario", "password", oUsuarioBean.getId()));
                }
            } catch (Exception e) {
                throw new Exception("UsuarioDao.getUsuario: Error: " + e.getMessage());
            } finally {
                oMysql.desconexion();
            }
        } else {
            oUsuarioBean.setId(0);
        }
        return oUsuarioBean;
    }


    @Override
    public String getDescription(int id) throws Exception {
        UsuarioBean oUsuarioBean = new UsuarioBean();
        oUsuarioBean.setId(id);
        oUsuarioBean = this.get(oUsuarioBean);
        String description;
        if (oUsuarioBean.getLogin().length() > 20) {
            description = oUsuarioBean.getLogin().substring(0, 19) + "...";
        } else {
            description = oUsuarioBean.getLogin();
        }
        return description;
    }
    
}
