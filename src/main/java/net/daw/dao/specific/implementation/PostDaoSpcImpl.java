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
import net.daw.bean.generic.specific.implementation.PostBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.TemaBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.AppConfigurationHelper;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;

public class PostDaoSpcImpl implements ViewDaoInterface<PostBeanGenSpImpl>, TableDaoInterface<PostBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public PostDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    public ArrayList<PostBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<PostBeanGenSpImpl> arrPost = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                PostBeanGenSpImpl oPostBean = new PostBeanGenSpImpl(iterador.next());
                arrPost.add(this.get(oPostBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrPost;
    }

    @Override
    public PostBeanGenSpImpl get(PostBeanGenSpImpl oPostBean, Integer expand) throws Exception {
        if (oPostBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oPostBean.getId())) {
                    oPostBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oPostBean.setTitulo(oMysql.getOne(strTableName, "titulo", oPostBean.getId()));
                        oPostBean.setMensaje(oMysql.getOne(strTableName, "mensaje", oPostBean.getId()));

                        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                        String dateInString = oMysql.getOne(strTableName, "fechacreacion", oPostBean.getId());
                        String dateInString2 = oMysql.getOne(strTableName, "fechamodificacion", oPostBean.getId());
                        oPostBean.setFechacreacion(formatter.parse(dateInString));
                        oPostBean.setFechamodificacion(formatter.parse(dateInString2));

                        oPostBean.setId_tema(Integer.parseInt(oMysql.getOne(strTableName, "id_tema", oPostBean.getId())));
                        oPostBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPostBean.getId())));

                        TemaBeanGenSpImpl oTema = new TemaBeanGenSpImpl();
                        oTema.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_tema", oPostBean.getId())));
                        TemaDaoSpcImpl oTemaDAO = new TemaDaoSpcImpl("tema", oConnection);
                        oTema = oTemaDAO.get(oTema, AppConfigurationHelper.getJsonDepth());
                        oPostBean.setObj_tema(oTema);

                        UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
                        oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPostBean.getId())));
                        UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl("usuario", oConnection);
                        oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                        oPostBean.setObj_usuario(oUsuario);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oPostBean.setId(0);
        }
        return oPostBean;
    }

    @Override
    public PostBeanGenSpImpl set(PostBeanGenSpImpl oPostBean) throws Exception {
        try {
            Boolean isNew = false;

            if (oPostBean.getId() == 0) {
                oPostBean.setId(oMysql.insertOne(strTableName));
                isNew = true;
            }

            oMysql.updateOne(oPostBean.getId(), strTableName, "titulo", oPostBean.getTitulo());
            oMysql.updateOne(oPostBean.getId(), strTableName, "mensaje", oPostBean.getMensaje());

            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date newDate = new Date();
            String date = formatter.format(newDate);

            if (isNew == false) {
                oMysql.updateOne(oPostBean.getId(), strTableName, "fechacreacion", oMysql.getOne(strTableName, "fechacreacion", oPostBean.getId()));
            } else {
                oMysql.updateOne(oPostBean.getId(), strTableName, "fechacreacion", date);
            }

            oMysql.updateOne(oPostBean.getId(), strTableName, "fechamodificacion", date);
            oMysql.updateOne(oPostBean.getId(), strTableName, "id_tema", oPostBean.getId_tema().toString());
            oMysql.updateOne(oPostBean.getId(), strTableName, "id_usuario", oPostBean.getId_usuario().toString());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oPostBean;
    }

    @Override
    public int remove(PostBeanGenSpImpl oPostBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oPostBean.getId(), strTableName);
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
