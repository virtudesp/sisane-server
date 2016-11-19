/*
 * Copyright (c) 2016 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * zylkanexy server: Helps you to develop easily AJAX web applications 
 *                   by copying and modifying this Java Server.
 *
 * Sources at https://github.com/rafaelaznar/zylkanexy
 * 
 * zylkanexy server is distributed under the MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package net.daw.bean.implementation;

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import net.daw.bean.publicinterface.GenericBean;
import net.daw.dao.implementation.DocumenttypeDao;
import net.daw.dao.implementation.UserDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class DocumentBean implements GenericBean {

    @Expose
    private Integer id;
    @Expose
    private String description;
    @Expose
    private Date creation;
    @Expose
    private Boolean freezed;

    @Expose(serialize = false)
    private Integer id_documenttype = 0;
    @Expose(deserialize = false)
    private DocumenttypeBean obj_documenttype;

    @Expose(serialize = false)
    private Integer id_user = 0;
    @Expose(deserialize = false)
    private UserBean obj_user;

    public DocumentBean() {
    }

    public DocumentBean(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreation() {
        return creation;
    }

    public void setCreation(Date creation) {
        this.creation = creation;
    }

    public Boolean getFreezed() {
        return freezed;
    }

    public void setFreezed(Boolean freezed) {
        this.freezed = freezed;
    }

    public Integer getId_documenttype() {
        return id_documenttype;
    }

    public void setId_documenttype(Integer id_documenttype) {
        this.id_documenttype = id_documenttype;
    }

    public DocumenttypeBean getObj_documenttype() {
        return obj_documenttype;
    }

    public void setObj_documenttype(DocumenttypeBean obj_documenttype) {
        this.obj_documenttype = obj_documenttype;
    }

    public Integer getId_user() {
        return id_user;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }

    public UserBean getObj_user() {
        return obj_user;
    }

    public void setObj_user(UserBean obj_user) {
        this.obj_user = obj_user;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "description,";
        strColumns += "creation,";
        strColumns += "freezed,";
        strColumns += "id_documenttype,";
        strColumns += "id_user";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(description) + ",";
        strColumns += EncodingUtilHelper.stringifyAndQuotate(creation) + ",";
        strColumns += freezed + ",";
        strColumns += id_documenttype + ",";
        strColumns += id_user;
        return strColumns;
    }

    @Override
    public String toPairs() {
        String strColumns = "";
        //strColumns +="id="; id + ";
        strColumns += "description=" + EncodingUtilHelper.quotate(description) + ",";
        strColumns += "creation=" + EncodingUtilHelper.stringifyAndQuotate(creation) + ",";
        strColumns += "freezed=" + freezed + ",";
        strColumns += "id_documenttype=" + id_documenttype + ",";
        strColumns += "id_user=" + id_user;
        return strColumns;
    }

    @Override
    public DocumentBean fill(ResultSet oResultSet, Connection pooledConnection, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setDescription(oResultSet.getString("description"));
        this.setCreation(oResultSet.getDate("creation"));
        this.setFreezed(oResultSet.getBoolean("freezed"));
        if (expand > 0) {
            DocumenttypeBean oDocumenttypeBean = new DocumenttypeBean();
            DocumenttypeDao oDocumenttypeDao = new DocumenttypeDao(pooledConnection);
            oDocumenttypeBean.setId(oResultSet.getInt("id_documenttype"));
            oDocumenttypeBean = oDocumenttypeDao.get(oDocumenttypeBean, expand - 1);
            this.setObj_documenttype(oDocumenttypeBean);
        } else {
            this.setId_documenttype(oResultSet.getInt("id_documenttype"));
        }
        if (expand > 0) {
            UserBean oUserBean = new UserBean();
            UserDao oUserDao = new UserDao(pooledConnection);
            oUserBean.setId(oResultSet.getInt("id_user"));
            oUserBean = oUserDao.get(oUserBean, expand - 1);
            this.setObj_user(oUserBean);
        } else {
            this.setId_user(oResultSet.getInt("id_user"));
        }
        return this;
    }

}
