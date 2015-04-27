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
package net.daw.service.specific.implementation;

import java.sql.Connection;
import net.daw.service.generic.implementation.TableServiceGenImpl;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.specific.implementation.TrabajoBean;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.specific.implementation.TrabajoDao;
import net.daw.helper.statics.AppConfigurationHelper;

public class TrabajoService extends TableServiceGenImpl {

    public TrabajoService(HttpServletRequest request) {
        super(request);
    }

    public String getContenido(Integer id) throws Exception {
        String data;
        Connection oConnection = null;
        try {
            oConnection = new BoneConnectionPoolImpl().newConnection();

            TrabajoBean oTareaBean = new TrabajoBean();
            oTareaBean.setId(id);
            TrabajoDao oTareaDao = new TrabajoDao(oConnection);
            oTareaBean = oTareaDao.get(oTareaBean, AppConfigurationHelper.getJsonDepth());
            return "{\"data\":\"" + oTareaBean.getDescripcion() + "\"}";
        } catch (Exception e) {
            throw new ServletException("GetDescripcion: View Error: " + e.getMessage());
        }
    }
}
