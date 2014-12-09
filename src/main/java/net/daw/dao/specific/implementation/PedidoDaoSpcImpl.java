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
package net.daw.dao.specific.implementation;

import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PedidoBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class PedidoDaoSpcImpl implements ViewDaoInterface<PedidoBeanGenSpImpl>, TableDaoInterface<PedidoBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public PedidoDaoSpcImpl(String ob, Connection oConexion) throws Exception {
        try {
            strTableName = ob;
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public int getPages(int intRegsPerPag, ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages = 0;
        try {
            pages = oMysql.getPages(strTableName, intRegsPerPag, hmFilter);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPages ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public int getCount(ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages = 0;
        try {
            pages = oMysql.getCount(strTableName, hmFilter);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getCount ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public ArrayList<PedidoBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<PedidoBeanGenSpImpl> arrPedido = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                PedidoBeanGenSpImpl oPedidoBean = new PedidoBeanGenSpImpl(iterador.next());
                arrPedido.add(this.get(oPedidoBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrPedido;
    }

    @Override
    public PedidoBeanGenSpImpl get(PedidoBeanGenSpImpl oPedidoBean, Integer expand) throws Exception {
        if (oPedidoBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oPedidoBean.getId())) {
                    oPedidoBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                        String dateInString = oMysql.getOne(strTableName, "fecha", oPedidoBean.getId());
                        oPedidoBean.setFecha(formatter.parse(dateInString));
                        oPedidoBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPedidoBean.getId())));

                        UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
                        oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPedidoBean.getId())));
                        UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl("usuario", oConnection);
                        oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                        oPedidoBean.setObj_usuario(oUsuario);
                    }

                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oPedidoBean.setId(0);
        }
        return oPedidoBean;
    }

    @Override
    public PedidoBeanGenSpImpl set(PedidoBeanGenSpImpl oPedidoBean) throws Exception {
        try {
            if (oPedidoBean.getId() == 0) {
                oPedidoBean.setId(oMysql.insertOne(strTableName));
            }
            /* oMysql.updateOne(oPedidoBean.getId(), strTableName, "fecha", oPedidoBean.getFecha();*/
            oMysql.updateOne(oPedidoBean.getId(), strTableName, "id_usuario", oPedidoBean.getId_usuario().toString());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oPedidoBean;
    }

    @Override
    public int remove(PedidoBeanGenSpImpl oPedidoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oPedidoBean.getId(), strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName(strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getPrettyColumns(strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPrettyColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public int updateOne(int intId, String strTabla, String strCampo, String strValor) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
