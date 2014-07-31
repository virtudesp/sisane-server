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

package net.daw.service.implementation;

import net.daw.service.generic.GenericTableServiceImpl;
import java.sql.Connection;
import javax.servlet.ServletException;
import net.daw.bean.implementation.DocumentoBeanImpl;
import net.daw.dao.implementation.DocumentoDaoImpl;

public class DocumentoServiceImpl extends GenericTableServiceImpl {

    public DocumentoServiceImpl(Connection con) {
        super("Documento", con);
    }

    public String getContenido(Integer id) throws Exception {
        String data;
        try {
            DocumentoBeanImpl oDocumentoBean = new DocumentoBeanImpl();
            oDocumentoBean.setId(id);
            DocumentoDaoImpl oDocumentoDao = new DocumentoDaoImpl(oConnection);
            oDocumentoBean = oDocumentoDao.get(oDocumentoBean);
            return "{\"data\":\"" + oDocumentoBean.getContenido() + "\"}";
        } catch (Exception e) {
            throw new ServletException("GetContenido: View Error: " + e.getMessage());
        }
    }
}
