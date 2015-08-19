/*
 * Copyright (C) 2015 rafa
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
package net.daw.bean.group;

import com.google.gson.annotations.Expose;
import java.util.ArrayList;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.meta.MetaBeanGenImpl;

/**
 *
 * @author rafa
 */
public class GroupBeanImpl {
    @Expose(deserialize = false)
    private BeanGenImpl bean =null;
    @Expose(deserialize = false)
    ArrayList<MetaBeanGenImpl> meta = null;

    public BeanGenImpl getBean() {
        return bean;
    }

    public void setBean(BeanGenImpl bean) {
        this.bean = bean;
    }

    public ArrayList<MetaBeanGenImpl> getMeta() {
        return meta;
    }

    public void setMeta(ArrayList<MetaBeanGenImpl> meta) {
        this.meta = meta;
    }


}
