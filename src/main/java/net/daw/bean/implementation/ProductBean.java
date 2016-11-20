/*
 * Copyright (c) 2016 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * bauxer server: Helps you to develop easily AJAX web applications 
 *                   by copying and modifying this Java Server.
 *
 * Sources at https://github.com/rafaelaznar/bauxer
 * 
 * bauxer server is distributed under the MIT License (MIT)
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
import net.daw.bean.publicinterface.GenericBean;
import net.daw.dao.implementation.ProducttypeDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class ProductBean implements GenericBean {

    @Expose
    private Integer id;
    @Expose
    private String code;
    @Expose
    private String description;
    @Expose
    private Float price;
    @Expose
    private Integer stock;
    @Expose(serialize = false)
    private Integer id_producttype = 0;
    @Expose(deserialize = false)
    private ProducttypeBean obj_producttype;

    public ProductBean() {
    }

    public ProductBean(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Integer getId_producttype() {
        return id_producttype;
    }

    public void setId_producttype(Integer id_producttype) {
        this.id_producttype = id_producttype;
    }

    public ProducttypeBean getObj_producttype() {
        return obj_producttype;
    }

    public void setObj_producttype(ProducttypeBean obj_producttype) {
        this.obj_producttype = obj_producttype;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "code,";
        strColumns += "description,";
        strColumns += "price,";
        strColumns += "stock,";
        strColumns += "id_producttype";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(code) + ",";
        strColumns += EncodingUtilHelper.quotate(description) + ",";
        strColumns += price + ",";
        strColumns += stock + ",";
        strColumns += id_producttype;
        return strColumns;
    }

    @Override
    public String toPairs() {
        String strColumns = "";
        //strColumns +="id="; id + ";
        strColumns += "code=" + EncodingUtilHelper.quotate(code) + ",";
        strColumns += "description=" + EncodingUtilHelper.quotate(description) + ",";
        strColumns += "price=" + price + ",";
        strColumns += "stock=" + stock + ",";
        strColumns += "id_producttype=" + id_producttype;
        return strColumns;
    }

    @Override
    public ProductBean fill(ResultSet oResultSet, Connection pooledConnection, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setCode(oResultSet.getString("code"));
        this.setDescription(oResultSet.getString("description"));
        this.setPrice(oResultSet.getFloat("price"));
        this.setStock(oResultSet.getInt("stock"));

        if (expand > 0) {
            ProducttypeBean oProducttypeBean = new ProducttypeBean();
            ProducttypeDao oProducttypeDao = new ProducttypeDao(pooledConnection);
            oProducttypeBean.setId(oResultSet.getInt("id_producttype"));
            oProducttypeBean = oProducttypeDao.get(oProducttypeBean, expand - 1);
            this.setObj_producttype(oProducttypeBean);
        } else {
            this.setId_producttype(oResultSet.getInt("id_producttype"));
        }

        return this;
    }

}
