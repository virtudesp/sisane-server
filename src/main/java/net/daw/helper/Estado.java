/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.helper;

/**
 *
 * @author rafa
 */
public class Estado {

    public static enum Tipo_estado {

        Debug,
        Production
    };

    public static Tipo_estado getTipo_estado() {
        return Tipo_estado.Debug;
    }

}
