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
package net.daw.dao.generic.specific.implementation;

import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import net.daw.dao.generic.implementation.TableDaoGenImpl;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.Locale;
import net.daw.bean.generic.specific.implementation.PostBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.ProductoBeanGenSpImpl;
import net.daw.helper.ExceptionBooster;

public class PostDaoGenSpImpl extends TableDaoGenImpl<PostBeanGenSpImpl> {

    public PostDaoGenSpImpl(String strObject, Connection pooledConnection) throws Exception {
        super(strObject, pooledConnection);
    }
}
