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
import net.daw.bean.publicinterface.GenericBean;
import net.daw.dao.implementation.UsertypeDao;
import net.daw.helper.statics.EncodingUtilHelper;

public class PuserBean implements GenericBean {

    @Expose
    private Integer id = 0;
    @Expose
    private String name;
    @Expose
    private String surname;
    @Expose
    private String login;
    @Expose
    private String password;
    @Expose
    private String address;
    @Expose
    private String city;
    @Expose
    private String zip;
    @Expose
    private String state;
    @Expose
    private String country;
    @Expose
    private String email;
    @Expose
    private String phone;

    @Expose(serialize = false)
    private Integer id_usertype = 0;
    @Expose(deserialize = false)
    private UsertypeBean obj_usertype = null;

    public PuserBean() {
    }

    public PuserBean(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getId_usertype() {
        return id_usertype;
    }

    public void setId_usertype(Integer id_usertype) {
        this.id_usertype = id_usertype;
    }

    public UsertypeBean getObj_usertype() {
        return obj_usertype;
    }

    public void setObj_usertype(UsertypeBean obj_usertype) {
        this.obj_usertype = obj_usertype;
    }

    @Override
    public String getColumns() {
        String strColumns = "";
        strColumns += "id,";
        strColumns += "name,";
        strColumns += "surname,";
        strColumns += "login,";
        strColumns += "password,";
        strColumns += "address,";
        strColumns += "city,";
        strColumns += "zip,";
        strColumns += "state,";
        strColumns += "country,";
        strColumns += "email,";
        strColumns += "phone,";
        strColumns += "id_usertype";
        return strColumns;
    }

    @Override
    public String getValues() {
        String strColumns = "";
        strColumns += id + ",";
        strColumns += EncodingUtilHelper.quotate(name) + ",";
        strColumns += EncodingUtilHelper.quotate(surname) + ",";
        strColumns += EncodingUtilHelper.quotate(login) + ",";
        strColumns += EncodingUtilHelper.quotate(password) + ",";
        strColumns += EncodingUtilHelper.quotate(address) + ",";
        strColumns += EncodingUtilHelper.quotate(city) + ",";
        strColumns += EncodingUtilHelper.quotate(zip) + ",";
        strColumns += EncodingUtilHelper.quotate(state) + ",";
        strColumns += EncodingUtilHelper.quotate(country) + ",";
        strColumns += EncodingUtilHelper.quotate(email) + ",";
        strColumns += EncodingUtilHelper.quotate(phone) + ",";
        strColumns += id_usertype;
        return strColumns;
    }

    @Override
    public String toPairs() {
        String strPairs = "";
        //strPairs += "id=" + id + ",";
        strPairs += "name=" + EncodingUtilHelper.quotate(name) + ",";
        strPairs += "surname=" + EncodingUtilHelper.quotate(surname) + ",";
        strPairs += "login=" + EncodingUtilHelper.quotate(login) + ",";
        strPairs += "password=" + EncodingUtilHelper.quotate(password) + ",";
        strPairs += "address=" + EncodingUtilHelper.quotate(address) + ",";
        strPairs += "city=" + EncodingUtilHelper.quotate(city) + ",";
        strPairs += "zip=" + EncodingUtilHelper.quotate(zip) + ",";
        strPairs += "state=" + EncodingUtilHelper.quotate(state) + ",";
        strPairs += "country=" + EncodingUtilHelper.quotate(country) + ",";
        strPairs += "email=" + EncodingUtilHelper.quotate(email) + ",";
        strPairs += "phone=" + EncodingUtilHelper.quotate(phone) + ",";
        strPairs += "id_usertype=" + id_usertype;
        return strPairs;
    }

    @Override
    public PuserBean fill(ResultSet oResultSet, Connection pooledConnection, PuserBean oPuserBean_security, Integer expand) throws SQLException, Exception {
        this.setId(oResultSet.getInt("id"));
        this.setName(oResultSet.getString("name"));
        this.setSurname(oResultSet.getString("surname"));
        this.setLogin(oResultSet.getString("login"));
        this.setPassword(oResultSet.getString("password"));
        this.setAddress(oResultSet.getString("address"));
        this.setCity(oResultSet.getString("city"));
        this.setZip(oResultSet.getString("zip"));
        this.setState(oResultSet.getString("state"));
        this.setCountry(oResultSet.getString("country"));
        this.setEmail(oResultSet.getString("email"));
        this.setPhone(oResultSet.getString("phone"));
        if (expand > 0) {
            UsertypeBean oUsertypeBean = new UsertypeBean();
            UsertypeDao oUsertypeDao = new UsertypeDao(pooledConnection, oPuserBean_security);
            oUsertypeBean.setId(oResultSet.getInt("id_usertype"));
            oUsertypeBean = oUsertypeDao.get(oUsertypeBean, expand - 1);
            this.setObj_usertype(oUsertypeBean);
        } else {
            this.setId_usertype(oResultSet.getInt("id_usertype"));
        }
        return this;
    }

}
