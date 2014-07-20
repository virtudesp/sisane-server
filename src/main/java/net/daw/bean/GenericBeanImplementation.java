/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.bean;

import com.google.gson.annotations.Expose;

/**
 *
 * @author rafa
 */
public class GenericBeanImplementation implements GenericBeanInterface {
@Expose
    private Integer id;

    public GenericBeanImplementation() {
        this.id = 0;
    }

    public GenericBeanImplementation(Integer id) {
        this.id = id;
    }

    @Override
    public Integer getId() {
        return id;
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

}
