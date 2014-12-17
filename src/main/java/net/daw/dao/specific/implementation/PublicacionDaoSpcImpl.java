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
import net.daw.bean.generic.specific.implementation.PublicacionBeanGenSpImpl;
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

public class PublicacionDaoSpcImpl implements ViewDaoInterface<PublicacionBeanGenSpImpl>, TableDaoInterface<PublicacionBeanGenSpImpl>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public PublicacionDaoSpcImpl(String ob, Connection oConexion) throws Exception {
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
    
    public int getPagesComentarioAmigo(int id_usuario, int intRegsPerPag, ArrayList<FilterBeanHelper> hmFilter) throws Exception {
        int pages = 0;
        try {
            pages = oMysql.getPagesComentarioAmigo(id_usuario, intRegsPerPag, hmFilter);
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
    public ArrayList<PublicacionBeanGenSpImpl> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<PublicacionBeanGenSpImpl> arrPublicacion = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                PublicacionBeanGenSpImpl oPublicacionBean = new PublicacionBeanGenSpImpl(iterador.next());
                arrPublicacion.add(this.get(oPublicacionBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrPublicacion;
    }
    
    public ArrayList<PublicacionBeanGenSpImpl> getPageComentarioAmigo(int id_usuario, int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<PublicacionBeanGenSpImpl> arrPublicacion = new ArrayList<>();
        try {
            arrId = oMysql.getPageComentarioAmigo(id_usuario, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                PublicacionBeanGenSpImpl oPublicacionBean = new PublicacionBeanGenSpImpl(iterador.next());
                arrPublicacion.add(this.get(oPublicacionBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrPublicacion;
    }

    @Override
    public PublicacionBeanGenSpImpl get(PublicacionBeanGenSpImpl oPublicacionBean, Integer expand) throws Exception {
        if (oPublicacionBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oPublicacionBean.getId())) {
                    oPublicacionBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oPublicacionBean.setContenido(oMysql.getOne(strTableName, "contenido", oPublicacionBean.getId()));

                        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                        String dateInString = oMysql.getOne(strTableName, "fechacreacion", oPublicacionBean.getId());         
                        oPublicacionBean.setFechacreacion(formatter.parse(dateInString));   
                        
                        oPublicacionBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPublicacionBean.getId())));

                        UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
                        oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oPublicacionBean.getId())));
                        UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl("usuario", oConnection);
                        oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                        oUsuario.setPassword(null);
                        oPublicacionBean.setObj_usuario(oUsuario);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oPublicacionBean.setId(0);
        }
        return oPublicacionBean;
    }

    @Override
    public PublicacionBeanGenSpImpl set(PublicacionBeanGenSpImpl oPublicacionBean) throws Exception {
        try {
            Boolean isNew = false;
            
            if (oPublicacionBean.getId() == 0) {
                oPublicacionBean.setId(oMysql.insertOne(strTableName));
                isNew = true;
            }
            
            oMysql.updateOne(oPublicacionBean.getId(), strTableName, "contenido", oPublicacionBean.getContenido());
            oMysql.updateOne(oPublicacionBean.getId(), strTableName, "id_usuario", oPublicacionBean.getId_usuario().toString());
            

            
            if (isNew == false) {
                oMysql.updateOne(oPublicacionBean.getId(), strTableName, "fechacreacion", oMysql.getOne(strTableName, "fechacreacion", oPublicacionBean.getId()));
            } else {
                SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");      
                Date newDate = new Date();       
                String date = formatter.format(newDate);
                oMysql.updateOne(oPublicacionBean.getId(), strTableName, "fechacreacion", date);
            }
            
            
            
            
            
            /*oMysql.updateOne(oPublicacionBean.getId(), strTableName, "mensaje", oPublicacionBean.getMensaje());
            oMysql.updateOne(oPublicacionBean.getId(), strTableName, "asunto", oPublicacionBean.getAsunto());
            

            
            oMysql.updateOne(oPublicacionBean.getId(), strTableName, "id_usuario_1", oPublicacionBean.getId_usuario_1().toString());
            oMysql.updateOne(oPublicacionBean.getId(), strTableName, "id_usuario_2", oPublicacionBean.getId_usuario_2().toString());*/
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oPublicacionBean;
    }

    @Override
    public int remove(PublicacionBeanGenSpImpl oPublicacionBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oPublicacionBean.getId(), strTableName);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: " + ex.getMessage()));
        }
        return result;
    }
    
    public AmigoBeanGenSpImpl agregarAmigo(AmigoBeanGenSpImpl oAmigoBean) throws Exception {
        try {

            oMysql.agregarAmigo(oAmigoBean.getId_usuario_1(), oAmigoBean.getId_usuario_2());
        
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oAmigoBean;
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
