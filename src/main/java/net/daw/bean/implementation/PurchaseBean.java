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

import com.google.gson.annotations.Expose;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import net.daw.bean.publicinterface.GenericBean;
import net.daw.dao.implementation.DocumentDao;
import net.daw.dao.implementation.ProductDao;
import net.daw.dao.implementation.UserDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class PurchaseBean implements GenericBean {

    @Expose
    private Integer id = 0;

    @Expose(serialize = false)
    private Integer id_user = 0;
    @Expose(deserialize = false)
    private UserBean obj_user;

    @Expose(serialize = false)
    private Integer id_product = 0;
    @Expose(deserialize = false)
    private ProductBean obj_product;

    @Expose(serialize = false)
    private Integer id_document = 0;
    @Expose(deserialize = false)
    private DocumentBean obj_document;

    @Expose
    private Date date = new Date();
    @Expose
    private Integer quantity = 0;

    public PurchaseBean() {
    }

    public Integer getId() {
        return id;
    }

    public PurchaseBean(Integer id) {
        this.id = id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Integer getId_product() {
        return id_product;
    }

    public void setId_product(Integer id_product) {
        this.id_product = id_product;
    }

    public ProductBean getObj_product() {
        return obj_product;
    }

    public void setObj_product(ProductBean obj_product) {
        this.obj_product = obj_product;
    }

    public Integer getId_document() {
        return id_document;
    }

    public void setId_document(Integer id_document) {
        this.id_document = id_document;
    }

    public DocumentBean getObj_document() {
        return obj_document;
    }

    public void setObj_document(DocumentBean obj_document) {
        this.obj_document = obj_document;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "id_user,";
        strColumns += "id_product,";
        strColumns += "id_document,";
        strColumns += "date,";
        strColumns += "quantity";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += id_user + ",";
        strColumns += id_product + ",";
        strColumns += id_document + ",";
        strColumns += EncodingUtilHelper.stringifyAndQuotate(date) + ",";
        strColumns += quantity;
        return strColumns;
    }

    @Override
    public String toPairs() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public PurchaseBean fill(ResultSet oResultSet, Connection pooledConnection, PuserBean oPuserBean_security, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));

        if (expand > 0) {
            UserBean oUserBean = new UserBean();
            UserDao oUserDao = new UserDao(pooledConnection, oPuserBean_security);
            oUserBean.setId(oResultSet.getInt("id_user"));
            oUserBean = oUserDao.get(oUserBean, expand - 1);
            this.setObj_user(oUserBean);
        } else {
            this.setId_user(oResultSet.getInt("id_user"));
        }

        if (expand > 0) {
            ProductBean oProductBean = new ProductBean();
            ProductDao oProductDao = new ProductDao(pooledConnection, oPuserBean_security);
            oProductBean.setId(oResultSet.getInt("id_product"));
            oProductBean = oProductDao.get(oProductBean, expand - 1);
            this.setObj_product(oProductBean);
        } else {
            this.setId_product(oResultSet.getInt("id_product"));
        }

        if (expand > 0) {
            DocumentBean oDocumentBean = new DocumentBean();
            DocumentDao oDocumentDao = new DocumentDao(pooledConnection, oPuserBean_security);
            oDocumentBean.setId(oResultSet.getInt("id_document"));
            oDocumentBean = oDocumentDao.get(oDocumentBean, expand - 1);
            this.setObj_document(oDocumentBean);
        } else {
            this.setId_product(oResultSet.getInt("id_product"));
        }

        this.setDate(oResultSet.getDate("date"));
        this.setQuantity(oResultSet.getInt("quantity"));
        return this;
    }

}
