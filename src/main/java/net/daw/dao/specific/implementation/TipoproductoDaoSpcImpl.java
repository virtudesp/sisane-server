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
import net.daw.bean.generic.specific.implementation.TipoproductoBeanGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.FilterBeanHelper;

public class TipoproductoDaoSpcImpl implements ViewDaoInterface<TipoproductoBeanGenSpImpl>,TableDaoInterface<TipoproductoBeanGenSpImpl>, MetaDaoInterface {

    private final String strTableName = "tipoproducto";
    private final String strClassName = this.getClass().getName();
    private final MysqlDataSpImpl oMysql;
    private final String strView;
    private Connection connection = null;

    public TipoproductoDaoSpcImpl(String view, Connection pooledConnection) throws Exception {
        try {
            connection = pooledConnection;
            strView = view;
            oMysql = new MysqlDataSpImpl(connection);
        } catch (Exception e) {
            throw new Exception(strClassName + ".constructor: Error: " + e.getMessage());
            //throw new Exception(strClassName + new Object() {}.getClass().getEnclosingMethod().getName() + ": Error: " + e.getMessage());
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
    public ArrayList<TipoproductoBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<TipoproductoBeanGenSpImpl> arrTipoproducto = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                TipoproductoBeanGenSpImpl oTipoproductoBean = new TipoproductoBeanGenSpImpl(iterador.next());
                arrTipoproducto.add(this.get(oTipoproductoBean));
            }
            return arrTipoproducto;
        } catch (Exception e) {
            throw new Exception(strClassName + ".getPage: Error: " + e.getMessage());
        }
    }

    @Override
    public TipoproductoBeanGenSpImpl get(TipoproductoBeanGenSpImpl oTipoproductoBean) throws Exception {
        if (oTipoproductoBean.getId() > 0) {
            try {
                if (!oMysql.existsOne("producto", oTipoproductoBean.getId())) {
                    oTipoproductoBean.setId(0);
                } else {
                    oTipoproductoBean.setDescripcion(oMysql.getOne(strTableName, "descripcion", oTipoproductoBean.getId()));
                }
            } catch (Exception e) {
                throw new Exception(strClassName + ".get: Error: " + e.getMessage());
            }
        } else {
            oTipoproductoBean.setId(0);
        }
        return oTipoproductoBean;
    }

    @Override
    public TipoproductoBeanGenSpImpl set(TipoproductoBeanGenSpImpl oTipoproductoBean) throws Exception {
        try {
            if (oTipoproductoBean.getId() == 0) {
                oTipoproductoBean.setId(oMysql.insertOne("producto"));
            }
            oMysql.updateOne(oTipoproductoBean.getId(), strTableName, "descripcion", oTipoproductoBean.getDescripcion());
        } catch (Exception e) {
            throw new Exception(strClassName + ".set: Error: " + e.getMessage());
        }
        return oTipoproductoBean;
    }

    @Override
    public int remove(TipoproductoBeanGenSpImpl oTipoproductoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oTipoproductoBean.getId(), strTableName);
        } catch (Exception e) {
            throw new Exception(strClassName + ".remove: Error: " + e.getMessage());
        }
        return result;
    }

    @Override
    public ArrayList<String> getColumnsNames() throws Exception {
        ArrayList<String> alColumns = null;
        try {
            alColumns = oMysql.getColumnsName("producto");
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
