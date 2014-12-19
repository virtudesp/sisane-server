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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.generic.specific.implementation.DetallePedidoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.PedidoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.ProductoBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.PedidoDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class DetallePedidoDaoSpcImpl implements ViewDaoInterface<DetallePedidoBeanGenSpImpl>, TableDaoInterface<DetallePedidoBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public DetallePedidoDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    public ArrayList<DetallePedidoBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<DetallePedidoBeanGenSpImpl> arrDetallePedido = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                DetallePedidoBeanGenSpImpl oDetallePedidoBean = new DetallePedidoBeanGenSpImpl(iterador.next());
                arrDetallePedido.add(this.get(oDetallePedidoBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrDetallePedido;
    }

    @Override
    public DetallePedidoBeanGenSpImpl get(DetallePedidoBeanGenSpImpl oDetallePedidoBean, Integer expand) throws Exception {
        if (oDetallePedidoBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oDetallePedidoBean.getId())) {
                    oDetallePedidoBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oDetallePedidoBean.setCantidad(Integer.parseInt(oMysql.getOne(strTableName, "cantidad", oDetallePedidoBean.getId())));
                        oDetallePedidoBean.setId_pedido(Integer.parseInt(oMysql.getOne(strTableName, "id_pedido", oDetallePedidoBean.getId())));

                        PedidoBeanGenSpImpl oPedido = new PedidoBeanGenSpImpl();
                        oPedido.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_pedido", oDetallePedidoBean.getId())));
                        PedidoDaoGenSpImpl oPedidoDAO = new PedidoDaoGenSpImpl("Pedido", oConnection);
                        oPedido = oPedidoDAO.get(oPedido, AppConfigurationHelper.getJsonDepth());
                        oDetallePedidoBean.setObj_pedido(oPedido);

                        oDetallePedidoBean.setId_producto(Integer.parseInt(oMysql.getOne(strTableName, "id_producto", oDetallePedidoBean.getId())));

                        ProductoBeanGenSpImpl oProducto = new ProductoBeanGenSpImpl();
                        oProducto.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_producto", oDetallePedidoBean.getId())));
                        ProductoDaoSpcImpl oProductoDAO = new ProductoDaoSpcImpl("producto", oConnection);
                        oProducto = oProductoDAO.get(oProducto, AppConfigurationHelper.getJsonDepth());
                        oDetallePedidoBean.setObj_producto(oProducto);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oDetallePedidoBean.setId(0);
        }
        return oDetallePedidoBean;
    }

    @Override
    public DetallePedidoBeanGenSpImpl set(DetallePedidoBeanGenSpImpl oDetallePedidoBean) throws Exception {
        try {
            if (oDetallePedidoBean.getId() == 0) {
                oDetallePedidoBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oDetallePedidoBean.getId(), strTableName, "cantidad", oDetallePedidoBean.getCantidad().toString());
            oMysql.updateOne(oDetallePedidoBean.getId(), strTableName, "id_pedido", oDetallePedidoBean.getId_pedido().toString());
            oMysql.updateOne(oDetallePedidoBean.getId(), strTableName, "id_producto", oDetallePedidoBean.getId_producto().toString());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oDetallePedidoBean;
    }

    @Override
    public int remove(DetallePedidoBeanGenSpImpl oDetallePedidoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oDetallePedidoBean.getId(), strTableName);
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
