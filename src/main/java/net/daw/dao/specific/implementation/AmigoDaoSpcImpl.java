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
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.generic.specific.implementation.AmigoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TipoproductoBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class AmigoDaoSpcImpl implements ViewDaoInterface<AmigoBeanGenSpImpl>, TableDaoInterface<AmigoBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public AmigoDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    public ArrayList<AmigoBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<AmigoBeanGenSpImpl> arrAmigo = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                AmigoBeanGenSpImpl oAmigoBean = new AmigoBeanGenSpImpl(iterador.next());
                arrAmigo.add(this.get(oAmigoBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrAmigo;
    }

    @Override
    public AmigoBeanGenSpImpl get(AmigoBeanGenSpImpl oAmigoBean, Integer expand) throws Exception {
        if (oAmigoBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oAmigoBean.getId())) {
                    oAmigoBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oAmigoBean.setId_usuario_1(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario_1", oAmigoBean.getId())));
                        oAmigoBean.setId_usuario_2(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario_2", oAmigoBean.getId())));

                        UsuarioBeanGenSpImpl oUsuario1 = new UsuarioBeanGenSpImpl();
                        oUsuario1.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario_1", oAmigoBean.getId())));
                        UsuarioDaoGenSpImpl oUsuarioDAO1 = new UsuarioDaoGenSpImpl("usuario", oConnection);
                        oUsuario1 = oUsuarioDAO1.get(oUsuario1, AppConfigurationHelper.getJsonDepth());
                        oAmigoBean.setObj_usuario_1(oUsuario1);

                        UsuarioBeanGenSpImpl oUsuario2 = new UsuarioBeanGenSpImpl();
                        oUsuario2.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario_2", oAmigoBean.getId())));
                        UsuarioDaoGenSpImpl oUsuarioDAO2 = new UsuarioDaoGenSpImpl("usuario", oConnection);
                        oUsuario2 = oUsuarioDAO2.get(oUsuario2, AppConfigurationHelper.getJsonDepth());
                        oAmigoBean.setObj_usuario_2(oUsuario2);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oAmigoBean.setId(0);
        }
        return oAmigoBean;
    }

    @Override
    public AmigoBeanGenSpImpl set(AmigoBeanGenSpImpl oAmigoBean) throws Exception {
        try {
            if (oAmigoBean.getId() == 0) {
                oAmigoBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oAmigoBean.getId(), strTableName, "id_usuario_1", oAmigoBean.getId_usuario_1().toString());
            oMysql.updateOne(oAmigoBean.getId(), strTableName, "id_usuario_2", oAmigoBean.getId_usuario_2().toString());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oAmigoBean;
    }

    @Override
    public int remove(AmigoBeanGenSpImpl oAmigoBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oAmigoBean.getId(), strTableName);
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

    public AmigoBeanGenSpImpl agregarAmigo(AmigoBeanGenSpImpl oAmigoBean) throws Exception {
        try {
            oMysql.agregarAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":agregarAmigo ERROR: " + ex.getMessage()));
        }
        return oAmigoBean;
    }

    public AmigoBeanGenSpImpl removeAmigo(AmigoBeanGenSpImpl oAmigoBean) throws Exception {
        try {
            oMysql.removeAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());

        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":removeAmigo ERROR: " + ex.getMessage()));
        }
        return oAmigoBean;
    }
    
    public Boolean existeAmigo(AmigoBeanGenSpImpl oAmigoBean) throws Exception {
        int oAmigo = 0;
        Boolean amigo = false;
        try {
            oAmigo = oMysql.existeAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());
            if (oAmigo > 0) {
                amigo = true;
            } else {
                amigo = false;
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":existeAmigo ERROR: " + ex.getMessage()));
        }
        return amigo;
    }
    
    @Override
    public int updateOne(int intId, String strTabla, String strCampo, String strValor) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
