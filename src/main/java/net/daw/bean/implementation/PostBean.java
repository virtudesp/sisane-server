/*
 * Copyright (c) 2016 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * sisane-server: Helps you to develop easily AJAX web applications 
 *                   by copying and modifying this Java Server.
 *
 * Sources at https://github.com/rafaelaznar/sisane-server
 * 
 * sisane-server is distributed under the MIT License (MIT)
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

import net.daw.bean.publicinterface.GenericBean;
import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import net.daw.dao.implementation.UserDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class PostBean implements GenericBean {

    @Expose
    private Integer id = 0;
    @Expose
    private String title = "";
    @Expose
    private String content = "";
    @Expose
    private Date creation = new Date();
    @Expose
    private Date modification = new Date();

    @Expose
    private Integer hits = 0;
    @Expose(serialize = false)
    private Integer id_user = 0;
    @Expose(deserialize = false)
    private UserBean obj_user = null;

    @Expose
    private String labels = "";
    @Expose
    private Boolean published = false;
    @Expose
    private Boolean frontpaged = false;
    @Expose
    private Boolean emphasized = false;

    public PostBean() {
        this.id = 0;
    }

    public PostBean(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreation() {
        return creation;
    }

    public void setCreation(Date creation) {
        this.creation = creation;
    }

    public Date getModification() {
        return modification;
    }

    public void setModification(Date modification) {
        this.modification = modification;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
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

    public String getLabels() {
        return labels;
    }

    public void setLabels(String labels) {
        this.labels = labels;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public Boolean getFrontpaged() {
        return frontpaged;
    }

    public void setFrontpaged(Boolean frontpaged) {
        this.frontpaged = frontpaged;
    }

    public Boolean getEmphasized() {
        return emphasized;
    }

    public void setEmphasized(Boolean emphasized) {
        this.emphasized = emphasized;
    }

    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "title,";
        strColumns += "content,";
        strColumns += "creation,";
        strColumns += "modification,";
        strColumns += "hits,";
        strColumns += "id_user,";

        strColumns += "labels,";
        strColumns += "published,";
        strColumns += "frontpaged,";
        strColumns += "emphasized";
        return strColumns;
    }

    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(title) + ",";
        strColumns += EncodingUtilHelper.quotate(content) + ",";
        strColumns += EncodingUtilHelper.stringifyAndQuotate(creation) + ",";
        strColumns += EncodingUtilHelper.stringifyAndQuotate(modification) + ",";
        strColumns += hits + ",";
        strColumns += id_user + ",";
        strColumns += EncodingUtilHelper.quotate(labels) + ",";
        strColumns += published + ",";
        strColumns += frontpaged + ",";
        strColumns += emphasized;
        return strColumns;
    }

    @Override
    public String toPairs() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String strPairs = "";
        //strPairs += "id=" + id + ",";
        strPairs += "title=" + EncodingUtilHelper.quotate(title) + ",";
        strPairs += "content=" + EncodingUtilHelper.quotate(content) + ",";
        strPairs += "creation=" + EncodingUtilHelper.quotate(format.format(creation)) + ",";
        strPairs += "modification=" + EncodingUtilHelper.quotate(format.format(modification)) + ",";
        strPairs += "hits=" + hits + ",";
        strPairs += "id_user=" + id_user + ",";
        strPairs += "labels=" + EncodingUtilHelper.quotate(labels) + ",";
        strPairs += "published=" + published + ",";
        strPairs += "frontpaged=" + frontpaged + ",";
        strPairs += "emphasized=" + emphasized;
        return strPairs;
    }

    @Override
    public PostBean fill(ResultSet oResultSet, Connection pooledConnection, PuserBean oPuserBean_security, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setTitle(oResultSet.getString("title"));
        this.setContent(oResultSet.getString("content"));
        this.setCreation(oResultSet.getDate("creation"));
        this.setModification(oResultSet.getDate("modification"));
        this.setHits(oResultSet.getInt("hits"));
        this.setLabels(oResultSet.getString("labels"));
        this.setPublished(oResultSet.getBoolean("published"));
        this.setFrontpaged(oResultSet.getBoolean("frontpaged"));
        this.setEmphasized(oResultSet.getBoolean("emphasized"));
        if (expand > 0) {
            UserBean oUserBean = new UserBean();
            UserDao oUserDao = new UserDao(pooledConnection, oPuserBean_security);
            oUserBean.setId(oResultSet.getInt("id_user"));
            oUserBean = oUserDao.get(oUserBean, expand - 1);
            this.setObj_user(oUserBean);
        } else {
            this.setId_user(oResultSet.getInt("id_user"));
        }

        return this;
    }

}
