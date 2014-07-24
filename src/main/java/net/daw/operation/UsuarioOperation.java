

package net.daw.operation;

import java.sql.Connection;

/**
 *
 * @author rafa
 */
public class UsuarioOperation extends GenericOperationImpl{

    public UsuarioOperation( Connection con) {
        super("Usuario", con);
    }




}