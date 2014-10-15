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
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.FilterBeanHelper;

public class ProductoDaoSpcImpl implements ViewDaoInterface<ProductoBeanGenSpImpl>,TableDaoInterface<ProductoBeanGenSpImpl> , MetaDaoInterface {

    private final String strTableName = "producto";
    private final String strClassName = "ProductoDaoSpcImpl";
    private final MysqlDataSpImpl oMysql;
    private final String strView;
    private Connection connection = null;

    public ProductoDaoSpcImpl(String view, Connection pooledConnection) throws Exception {
        try {
            connection = pooledConnection;
            strView = view;
            oMysql = new MysqlDataSpImpl(connection);
        } catch (Exception e) {
            throw new Exception(strClassName + ".constructor: Error: " + e.getMessage());
        }
    }

    @Override
    public int getPages(int intRegsPerPag, ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages;
        try {
            pages = oMysql.getPages(strTableName, intRegsPerPag, hmFilter);
            return pages;
        } catch (Exception e) {
            throw new Exception(strClassName + ".getPages: Error: " + e.getMessage());
        }
    }

    @Override
    public int getCount(ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages;
        try {
            pages = oMysql.getCount(strTableName, hmFilter);
            return pages;
        } catch (Exception e) {
            throw new Exception(strClassName + ".getCount: Error: " + e.getMessage());
        }
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
                arrProducto.add(this.get(oProductoBean));
            }
            return arrProducto;
        } catch (Exception e) {
            throw new Exception(strClassName + ".getPage: Error: " + e.getMessage());
        }
    }

    @Override
    public ProductoBeanGenSpImpl get(ProductoBeanGenSpImpl oProductoBean) throws Exception {
        if (oProductoBean.getId() > 0) {
            try {
                if (!oMysql.existsOne("producto", oProductoBean.getId())) {
                    oProductoBean.setId(0);
                } else {
                    oProductoBean.setCodigo(oMysql.getOne(strTableName, "codigo", oProductoBean.getId()));
                    oProductoBean.setDescripcion(oMysql.getOne(strTableName, "descripcion", oProductoBean.getId()));
                    oProductoBean.setPrecio(Double.parseDouble(oMysql.getOne(strTableName, "precio", oProductoBean.getId())));
                    oProductoBean.setId_tipoProducto(Integer.parseInt(oMysql.getOne(strTableName, "id_tipoproducto", oProductoBean.getId())));
                }
            } catch (Exception e) {
                throw new Exception(strClassName + ".get: Error: " + e.getMessage());
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
            oMysql.updateOne(oProductoBean.getId(), strTableName, "id_tipoproducto", oProductoBean.getId_tipoProducto().toString());
        } catch (Exception e) {
            throw new Exception(strClassName + ".set: Error: " + e.getMessage());
        }
        return oProductoBean;
    }

    @Override
    public int remove(ProductoBeanGenSpImpl oProductoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oProductoBean.getId(), strTableName);
        } catch (Exception e) {
            throw new Exception(strClassName + ".remove: Error: " + e.getMessage());
        }
        return result;
    }

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName(strTableName);
        } catch (Exception e) {
            throw new Exception(strClassName + ".getColumnsNames: Error: " + e.getMessage());
        } finally {
        }
        return alColumns;
    }

    @Override
    public ArrayList<String> getPrettyColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getPrettyColumns(strTableName);
        } catch (Exception e) {
            throw new Exception(strClassName + ".getPrettyColumnsNames: Error: " + e.getMessage());
        } finally {
        }
        return alColumns;
    }

}
