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
import net.daw.bean.generic.specific.implementation.PedidoBeanGenSpImpl;

public class PedidoDaoGenSpImpl extends TableDaoGenImpl<PedidoBeanGenSpImpl> {

    public PedidoDaoGenSpImpl(String strFuente, Connection pooledConnection) throws Exception {
        super(strFuente, "Pedido", pooledConnection);
    }

//    public PedidoBean type(PedidoBean oPedidoBean) throws Exception {
//
//        try {
//            AlumnoDao oAlumnoDao = new AlumnoDao();
//            AlumnoBean oAlumnoBean = oAlumnoDao.getFromId_usuario(oPedidoBean);
//            oPedidoBean.setTipoPedido(Enum.TipoPedido.Alumno);
//        } catch (Exception e1) {
//            try {
//                EmpresaDao oEmpresaDao = new EmpresaDao();
//                EmpresaBean oEmpresaBean = oEmpresaDao.getFromId_usuario(oPedidoBean);
//                oPedidoBean.setTipoPedido(Enum.TipoPedido.Empresa);
//            } catch (Exception e2) {
//                try {
//                    ProfesorDao oProfesorDao = new ProfesorDao();
//                    ProfesorBean oProfesorBean = oProfesorDao.getFromId_usuario(oPedidoBean);
//                    oPedidoBean.setTipoPedido(Enum.TipoPedido.Profesor);
//                } catch (Exception e3) {
//                    throw new Exception("PedidoDao.type: Error: " + e3.getMessage());
//                }
//            }
//        } finally {
//            oMysql.desconexion();
//        }
//        return oPedidoBean;
//    }
//    @Override
//    public PedidoBean get(PedidoBean oPedidoBean) throws Exception {
//        if (oPedidoBean.getId() > 0) {
//            try {
//                oMysql.conexion(enumTipoConexion);
//                if (!oMysql.existsOne("usuario", oPedidoBean.getId())) {
//                    oPedidoBean.setId(0);
//                } else {
//                    oPedidoBean.setLogin(oMysql.getOne("usuario", "login", oPedidoBean.getId()));
//                    oPedidoBean.setPassword(oMysql.getOne("usuario", "password", oPedidoBean.getId()));
//                }
//            } catch (Exception e) {
//                throw new Exception("PedidoDao.getPedido: Error: " + e.getMessage());
//            } finally {
//                oMysql.desconexion();
//            }
//        } else {
//            oPedidoBean.setId(0);
//        }
//        return oPedidoBean;
//    }
//
//
//    @Override
//    public String getDescription(int id) throws Exception {
//        PedidoBean oPedidoBean = new PedidoBean();
//        oPedidoBean.setId(id);
//        oPedidoBean = this.get(oPedidoBean);
//        String description;
//        if (oPedidoBean.getLogin().length() > 20) {
//            description = oPedidoBean.getLogin().substring(0, 19) + "...";
//        } else {
//            description = oPedidoBean.getLogin();
//        }
//        return description;
//    }
}
