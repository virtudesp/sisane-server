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
import net.daw.bean.generic.specific.implementation.ProductoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipoproductoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.ProveedorBeanGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.SqlBuilder;

public class ProductoDaoSpcImpl implements ViewDaoInterface<ProductoBeanGenSpImpl>, TableDaoInterface<ProductoBeanGenSpImpl>, MetaDaoInterface {

    private String strDataOrigin = null;
    private String strTableOrigin = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public ProductoDaoSpcImpl(Connection oConexion) throws Exception {
        try {
            strDataOrigin = "select * from producto where 1=1 ";
            strTableOrigin = "producto";
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName(strDataOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getPrettyColumns(strDataOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPrettyColumnsNames ERROR: " + ex.getMessage()));
        }
        return alColumns;
    }

    @Override
    public ProductoBeanGenSpImpl get(ProductoBeanGenSpImpl oProductoBean, Integer expand) throws Exception {
        if (oProductoBean.getId() > 0) {
            try {
                if (!oMysql.existsNewOne(strDataOrigin, oProductoBean.getId())) {
                    oProductoBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oProductoBean.setCodigo(oMysql.getNewOne(strDataOrigin, "codigo", oProductoBean.getId()));
                        oProductoBean.setDescripcion(oMysql.getNewOne(strDataOrigin, "descripcion", oProductoBean.getId()));
                        oProductoBean.setPrecio(Double.parseDouble(oMysql.getNewOne(strDataOrigin, "precio", oProductoBean.getId())));

//                        oProductoBean.setId_tipoproducto(Integer.parseInt(oMysql.getNewOne(strDataOrigin, "id_tipoproducto", oProductoBean.getId())));
//                        oProductoBean.setId_proveedor(Integer.parseInt(oMysql.getNewOne(strDataOrigin, "id_proveedor", oProductoBean.getId())));
//                        
//                        TipoproductoBeanGenSpImpl oTipoproducto = new TipoproductoBeanGenSpImpl();
//                        oTipoproducto.setId(Integer.parseInt(oMysql.getNewOne(strDataOrigin, "id_tipoproducto", oProductoBean.getId())));
//                        TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("tipoproducto", oConnection);
//                        oTipoproducto = oTipoproductoDAO.get(oTipoproducto, AppConfigurationHelper.getJsonDepth());
//                        oProductoBean.setObj_tipoproducto(oTipoproducto);
//                        
                        ProveedorBeanGenSpImpl oProveedor = new ProveedorBeanGenSpImpl();
                        oProveedor.setId(Integer.parseInt(oMysql.getNewOne(strDataOrigin, "id_proveedor", oProductoBean.getId())));
                        ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl(oConnection);
                        oProveedor = oProveedorDAO.get(oProveedor, AppConfigurationHelper.getJsonDepth());
                        oProductoBean.setObj_proveedor(oProveedor);
                        oProductoBean.setPath(oMysql.getNewOne(strDataOrigin, "path", oProductoBean.getId()));
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oProductoBean.setId(0);
        }
        return oProductoBean;
    }

    @Override
    public int getPages(int intRegsPerPag, ArrayList<FilterBeanHelper> alFilter) throws Exception {
        strDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        int pages = 0;
        try {
            pages = oMysql.getNewPages(strDataOrigin, intRegsPerPag);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPages ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public int getCount(ArrayList<FilterBeanHelper> alFilter) throws Exception {
        strDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        int pages = 0;
        try {
            pages = oMysql.getNewCount(strDataOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getCount ERROR: " + ex.getMessage()));
        }
        return pages;
    }

    @Override
    public ArrayList<ProductoBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> alFilter, HashMap<String, String> hmOrder) throws Exception {             
        strDataOrigin += SqlBuilder.buildSqlWhere(alFilter);
        strDataOrigin += SqlBuilder.buildSqlOrder(hmOrder);        
        ArrayList<Integer> arrId;
        ArrayList<ProductoBeanGenSpImpl> arrProducto = new ArrayList<>();
        try {
            arrId = oMysql.getNewPage(strDataOrigin, intRegsPerPag, intPage);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ProductoBeanGenSpImpl oProductoBean = new ProductoBeanGenSpImpl(iterador.next());
                arrProducto.add(this.get(oProductoBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrProducto;
    }

    @Override
    public ProductoBeanGenSpImpl set(ProductoBeanGenSpImpl oProductoBean) throws Exception {
        try {
            if (oProductoBean.getId() == 0) {
                oProductoBean.setId(oMysql.insertOne(strTableOrigin));
            }
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "codigo", oProductoBean.getCodigo());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "descripcion", oProductoBean.getDescripcion());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "precio", oProductoBean.getPrecio().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "id_tipoproducto", oProductoBean.getId_tipoproducto().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "id_proveedor", oProductoBean.getId_tipoproducto().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableOrigin, "path", oProductoBean.getPath());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oProductoBean;
    }

    @Override
    public int remove(ProductoBeanGenSpImpl oProductoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oProductoBean.getId(), strTableOrigin);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }

}
