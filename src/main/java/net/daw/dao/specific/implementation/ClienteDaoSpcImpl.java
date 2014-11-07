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
import net.daw.bean.generic.specific.implementation.ClienteBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipoproductoBeanGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class ClienteDaoSpcImpl implements ViewDaoInterface<ClienteBeanGenSpImpl>, TableDaoInterface<ClienteBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public ClienteDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    public ArrayList<ClienteBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<ClienteBeanGenSpImpl> arrCliente = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                ClienteBeanGenSpImpl oClienteBean = new ClienteBeanGenSpImpl(iterador.next());
                arrCliente.add(this.get(oClienteBean, 1));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrCliente;
    }

    @Override
    public ClienteBeanGenSpImpl get(ClienteBeanGenSpImpl oClienteBean, Integer expand) throws Exception {
        if (oClienteBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oClienteBean.getId())) {
                    oClienteBean.setId(0);
                } else {
                    oClienteBean.setNombre(oMysql.getOne(strTableName, "nombre", oClienteBean.getId()));
                    oClienteBean.setApe1(oMysql.getOne(strTableName, "ape1", oClienteBean.getId()));
                    oClienteBean.setApe2(oMysql.getOne(strTableName, "ape2", oClienteBean.getId()));
                    oClienteBean.setEmail(oMysql.getOne(strTableName, "email", oClienteBean.getId()));
                   

                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oClienteBean.setId(0);
        }
        return oClienteBean;
    }

    @Override
    public ClienteBeanGenSpImpl set(ClienteBeanGenSpImpl oClienteBean) throws Exception {
        try {
            if (oClienteBean.getId() == 0) {
                oClienteBean.setId(oMysql.insertOne(strTableName));
            }
            
            oMysql.updateOne(oClienteBean.getId(), strTableName, "nombre", oClienteBean.getNombre());
            oMysql.updateOne(oClienteBean.getId(), strTableName, "ape1", oClienteBean.getApe1());
            oMysql.updateOne(oClienteBean.getId(), strTableName, "ape2", oClienteBean.getApe2());
            oMysql.updateOne(oClienteBean.getId(), strTableName, "email", oClienteBean.getEmail());
          
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oClienteBean;
    }

    @Override
    public int remove(ClienteBeanGenSpImpl oClienteBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oClienteBean.getId(), strTableName);
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

}
