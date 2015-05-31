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

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import net.daw.bean.meta.MetaBeanGenImpl;
import net.daw.bean.specific.implementation.ActividadBean;
import net.daw.bean.specific.implementation.TemaBean;
import net.daw.bean.specific.implementation.TipotemaBean;
import net.daw.bean.specific.implementation.UsuarioBean;
import net.daw.dao.publicinterface.MetaDaoInterface;
import net.daw.dao.publicinterface.TableDaoInterface;
import net.daw.dao.publicinterface.ViewDaoInterface;
import net.daw.data.specific.implementation.MysqlDataSpImpl;
import net.daw.helper.annotations.MethodMetaInformation;
import net.daw.helper.statics.AppConfigurationHelper;
import net.daw.helper.statics.ExceptionBooster;
import net.daw.helper.statics.FilterBeanHelper;

public class TemaDao implements ViewDaoInterface<TemaBean>,TableDaoInterface<TemaBean>, MetaDaoInterface {

    private String strTableName = null;
    private MysqlDataSpImpl oMysql = null;
    private Connection oConnection = null;

    public TemaDao(String ob, Connection oConexion) throws Exception {
        try {
            strTableName = ob;
            oConnection = oConexion;
            oMysql = new MysqlDataSpImpl(oConnection);
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":constructor ERROR: " + ex.getMessage()));
        }
    }
    @Override
    public ArrayList<MetaBeanGenImpl> getmetainformation() throws Exception {
        ArrayList<MetaBeanGenImpl> alVector = null;
        try {

            for (Field field : TemaBean.class.getDeclaredFields()) {

                Annotation[] fieldAnnotations = field.getDeclaredAnnotations();
                for (Integer i = 0; i < fieldAnnotations.length; i++) {
                    if (fieldAnnotations[i].annotationType().equals(MethodMetaInformation.class)) {
                        MethodMetaInformation fieldAnnotation = (MethodMetaInformation) fieldAnnotations[i];
                        MetaBeanGenImpl oMeta = new MetaBeanGenImpl();

                        oMeta.setName(field.getName());
                        oMeta.setDefaultValue(fieldAnnotation.DefaultValue());
                        oMeta.setDescription(fieldAnnotation.Description());
                        oMeta.setIsId(fieldAnnotation.IsId());
                        oMeta.setIsIdForeignKey(fieldAnnotation.IsIdForeignKey());
                        oMeta.setIsObjForeignKey(fieldAnnotation.IsObjForeignKey());
                        oMeta.setIsPathToObject(fieldAnnotation.IsPathToObject());
                        oMeta.setMaxDecimal(fieldAnnotation.MaxDecimal());
                        oMeta.setMaxInteger(fieldAnnotation.MaxInteger());
                        oMeta.setMaxLength(fieldAnnotation.MaxLength());
                        oMeta.setMinLength(fieldAnnotation.MinLength());
                        //oMeta.setMyObjIdName(fieldAnnotation.MyObjIdName());
                        oMeta.setMyObjName(fieldAnnotation.MyObjName());
                        oMeta.setReferencesTable(fieldAnnotation.ReferencesTable());
                        oMeta.setShortName(fieldAnnotation.ShortName());
                        oMeta.setType(fieldAnnotation.Type());
                        oMeta.setUltraShortName(fieldAnnotation.UltraShortName());

                        alVector.add(oMeta);
                    }
                }
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getmetainformation ERROR: " + ex.getMessage()));
        }
        return alVector;
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
    public ArrayList<TemaBean> getPage(int intRegsPerPag, int intPage, ArrayList<FilterBeanHelper> hmFilter, HashMap<String, String> hmOrder) throws Exception {
        ArrayList<Integer> arrId;
        ArrayList<TemaBean> arrTema = new ArrayList<>();
        try {
            arrId = oMysql.getPage(strTableName, intRegsPerPag, intPage, hmFilter, hmOrder);
            Iterator<Integer> iterador = arrId.listIterator();
            while (iterador.hasNext()) {
                TemaBean oTemaBean = new TemaBean(iterador.next());
                arrTema.add(this.get(oTemaBean, AppConfigurationHelper.getJsonDepth()));
            }
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getPage ERROR: " + ex.getMessage()));
        }
        return arrTema;
    }

    @Override
    public TemaBean get(TemaBean oTemaBean, Integer expand) throws Exception {
        if (oTemaBean.getId() > 0) {
            try {
                if (!oMysql.existsOne(strTableName, oTemaBean.getId())) {
                    oTemaBean.setId(0);
                } else {
                    expand--;
                    if (expand > 0) {
                        oTemaBean.setNombre(oMysql.getOne(strTableName, "nombre", oTemaBean.getId()));

                        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                        String dateInString = oMysql.getOne(strTableName, "fechacreacion", oTemaBean.getId());
                        oTemaBean.setFechacreacion(formatter.parse(dateInString));

                        oTemaBean.setId_tipotema(Integer.parseInt(oMysql.getOne(strTableName, "id_tipotema", oTemaBean.getId())));
                        oTemaBean.setId_usuario(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oTemaBean.getId())));

                        TipotemaBean oTipotema = new TipotemaBean();
                        oTipotema.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_tipotema", oTemaBean.getId())));
                        TipotemaDao oTipotemaDAO = new TipotemaDao(oConnection);
                        oTipotema = oTipotemaDAO.get(oTipotema, AppConfigurationHelper.getJsonDepth());
                        oTemaBean.setObj_tipotema(oTipotema);

                        UsuarioBean oUsuario = new UsuarioBean();
                        oUsuario.setId(Integer.parseInt(oMysql.getOne(strTableName, "id_usuario", oTemaBean.getId())));
                        UsuarioDao oUsuarioDAO = new UsuarioDao(oConnection);
                        oUsuario = oUsuarioDAO.get(oUsuario, AppConfigurationHelper.getJsonDepth());
                        oTemaBean.setObj_usuario(oUsuario);
                    }
                }
            } catch (Exception ex) {
                ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: " + ex.getMessage()));
            }
        } else {
            oTemaBean.setId(0);
        }
        return oTemaBean;
    }

    @Override
    public TemaBean set(TemaBean oTemaBean) throws Exception {
        try {
            if (oTemaBean.getId() == 0) {
                oTemaBean.setId(oMysql.insertOne(strTableName));
            }
            oMysql.updateOne(oTemaBean.getId(), strTableName, "nombre", oTemaBean.getNombre());

            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date newDate = new Date();
            String date = formatter.format(newDate);

            if (oMysql.getOne(strTableName, "fechacreacion", oTemaBean.getId()) != null) {
                oMysql.updateOne(oTemaBean.getId(), strTableName, "fechacreacion", oMysql.getOne(strTableName, "fechacreacion", oTemaBean.getId()));
            } else {
                oMysql.updateOne(oTemaBean.getId(), strTableName, "fechacreacion", date);
            }

            oMysql.updateOne(oTemaBean.getId(), strTableName, "id_usuario", oTemaBean.getId_usuario().toString());
            oMysql.updateOne(oTemaBean.getId(), strTableName, "id_tipotema", oTemaBean.getId_tipotema().toString());
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return oTemaBean;
    }

    @Override
    public int remove(TemaBean oTemaBean) throws Exception {
        int result = 0;
        try {
            result = oMysql.removeOne(oTemaBean.getId(), strTableName);
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
