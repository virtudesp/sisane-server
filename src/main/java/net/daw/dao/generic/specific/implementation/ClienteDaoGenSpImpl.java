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
package net.daw.dao.generic.specific.implementation;

import net.daw.dao.generic.implementation.TableDaoGenImpl;
import java.sql.Connection;
import net.daw.bean.generic.specific.implementation.ClienteBeanGenSpImpl;
import net.daw.helper.AppConfigurationHelper;

public class ClienteDaoGenSpImpl extends TableDaoGenImpl<ClienteBeanGenSpImpl> {

    public ClienteDaoGenSpImpl(String strObject, Connection pooledConnection) throws Exception {
        super(strObject, pooledConnection);
    }

    
    

//    public ClienteBean type(ClienteBean oClienteBean) throws Exception {
//
//        try {
//            AlumnoDao oAlumnoDao = new AlumnoDao();
//            AlumnoBean oAlumnoBean = oAlumnoDao.getFromId_usuario(oClienteBean);
//            oClienteBean.setTipoCliente(Enum.TipoCliente.Alumno);
//        } catch (Exception e1) {
//            try {
//                EmpresaDao oEmpresaDao = new EmpresaDao();
//                EmpresaBean oEmpresaBean = oEmpresaDao.getFromId_usuario(oClienteBean);
//                oClienteBean.setTipoCliente(Enum.TipoCliente.Empresa);
//            } catch (Exception e2) {
//                try {
//                    ProfesorDao oProfesorDao = new ProfesorDao();
//                    ProfesorBean oProfesorBean = oProfesorDao.getFromId_usuario(oClienteBean);
//                    oClienteBean.setTipoCliente(Enum.TipoCliente.Profesor);
//                } catch (Exception e3) {
//                    throw new Exception("ClienteDao.type: Error: " + e3.getMessage());
//                }
//            }
//        } finally {
//            oMysql.desconexion();
//        }
//        return oClienteBean;
//    }
//    @Override
//    public ClienteBean get(ClienteBean oClienteBean) throws Exception {
//        if (oClienteBean.getId() > 0) {
//            try {
//                oMysql.conexion(enumTipoConexion);
//                if (!oMysql.existsOne("usuario", oClienteBean.getId())) {
//                    oClienteBean.setId(0);
//                } else {
//                    oClienteBean.setLogin(oMysql.getOne("usuario", "login", oClienteBean.getId()));
//                    oClienteBean.setPassword(oMysql.getOne("usuario", "password", oClienteBean.getId()));
//                }
//            } catch (Exception e) {
//                throw new Exception("ClienteDao.getCliente: Error: " + e.getMessage());
//            } finally {
//                oMysql.desconexion();
//            }
//        } else {
//            oClienteBean.setId(0);
//        }
//        return oClienteBean;
//    }
//
//
//    @Override
//    public String getDescription(int id) throws Exception {
//        ClienteBean oClienteBean = new ClienteBean();
//        oClienteBean.setId(id);
//        oClienteBean = this.get(oClienteBean);
//        String description;
//        if (oClienteBean.getLogin().length() > 20) {
//            description = oClienteBean.getLogin().substring(0, 19) + "...";
//        } else {
//            description = oClienteBean.getLogin();
//        }
//        return description;
//    }
}
