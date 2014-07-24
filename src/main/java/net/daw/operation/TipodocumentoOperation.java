/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.operation;

import java.sql.Connection;


/**
 *
 * @author rafa
 */
public class TipodocumentoOperation extends GenericOperationImpl {

    public TipodocumentoOperation(Connection con) {
        super("Tipodocumento", con);
    }

}
