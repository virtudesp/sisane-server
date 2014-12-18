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
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class ProductoDaoSpcImpl implements ViewDaoInterface<ProductoBeanGenSpImpl>, TableDaoInterface<ProductoBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public ProductoDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    public ArrayList<ProductoBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<ProductoBeanGenSpImpl> arrProducto = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
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
    public ProductoBeanGenSpImpl get(ProductoBeanGenSpImpl oProductoBean, Integer expand) throws Exception {
        if (oProductoBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oProductoBean.getId())) {
                    oProductoBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oProductoBean.setCodigo(oMysql.getOne(strTableName, "codigo", oProductoBean.getId()));
                        oProductoBean.setDescripcion(oMysql.getOne(strTableName, "descripcion", oProductoBean.getId()));
                        oProductoBean.setPrecio(Double.parseDouble(oMysql.getOne(strTableName, "precio", oProductoBean.getId())));

                        oProductoBean.setId_tipoproducto(Integer.parseInt(oMysql.getOne(strTableName, "id_tipoproducto", oProductoBean.getId())));
                        oProductoBean.setId_proveedor(Integer.parseInt(oMysql.getOne(strTableName, "id_proveedor", oProductoBean.getId())));
                        
                        TipoproductoBeanGenSpImpl oTipoproducto = new TipoproductoBeanGenSpImpl();
                        oTipoproducto.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_tipoproducto", oProductoBean.getId())));
                        TipoproductoDaoSpcImpl oTipoproductoDAO = new TipoproductoDaoSpcImpl("tipoproducto", oConnection);
                        oTipoproducto = oTipoproductoDAO.get(oTipoproducto, AppConfigurationHelper.getJsonDepth());
                        oProductoBean.setObj_tipoproducto(oTipoproducto);
                        
                        ProveedorBeanGenSpImpl oProveedor = new ProveedorBeanGenSpImpl();
                        oProveedor.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_proveedor", oProductoBean.getId())));
                        ProveedorDaoSpcImpl oProveedorDAO = new ProveedorDaoSpcImpl("proveedor", oConnection);
                        oProveedor = oProveedorDAO.get(oProveedor, AppConfigurationHelper.getJsonDepth());
                        oProductoBean.setObj_proveedor(oProveedor);
                        
                        oProductoBean.setPath(oMysql.getOne(strTableName, "path", oProductoBean.getId()));
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
    public ProductoBeanGenSpImpl set(ProductoBeanGenSpImpl oProductoBean) throws Exception {
        try {
            if (oProductoBean.getId() == 0) {
                oProductoBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oProductoBean.getId(), strTableName, "codigo", oProductoBean.getCodigo());
            oMysql.updateOne(oProductoBean.getId(), strTableName, "descripcion", oProductoBean.getDescripcion());
            oMysql.updateOne(oProductoBean.getId(), strTableName, "precio", oProductoBean.getPrecio().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableName, "id_tipoproducto", oProductoBean.getId_tipoproducto().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableName, "id_proveedor", oProductoBean.getId_tipoproducto().toString());
            oMysql.updateOne(oProductoBean.getId(), strTableName, "path", oProductoBean.getPath());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oProductoBean;
    }

    @Override
    public int remove(ProductoBeanGenSpImpl oProductoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oProductoBean.getId(), strTableName);
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
