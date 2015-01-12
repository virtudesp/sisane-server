/*
 * Copyright (C) 2015 al038513
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
/*package net.daw.dao.generic.specific.implementation;

import java.sql.Connection;
import java.util.ArrayList;
import net.daw.bean.generic.specific.implementation.EstadoBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.dao.generic.implementation.TableDaoGenImpl;
import net.daw.helper.FilterBeanHelper;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author al038513
 */
/*public class EstadoDaoGenSpImplTest {

    private BoneConnectionPoolImpl DataConnectionSource = new BoneConnectionPoolImpl();
    private Connection connection = DataConnectionSource.newConnection();

    public EstadoDaoGenSpImplTest() throws Exception {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /*ARMANDO*/
   /* @Test
    public void testSetMethod() throws Exception {
        System.out.println("set");

        EstadoBeanGenSpImpl oBean = new EstadoBeanGenSpImpl();
        oBean.setId(0);
        oBean.setTipo("Loktar camarada.");
        Integer expResult = oBean.getId();
        EstadoDaoGenSpImpl instance = new EstadoDaoGenSpImpl("estado", connection);

        EstadoBeanGenSpImpl oBean2 = (EstadoBeanGenSpImpl) instance.set(oBean);
        Integer result = oBean2.getId();

        assertTrue("Los IDs son diferentes", result != expResult);

        Integer borrado = instance.remove(oBean2);

        assertTrue("Se ha borrado correctamente", borrado == 1);
    }

    /*JUAN MANUEL*/
   /* @Test
    public void testGetMethod() throws Exception {
        System.out.println("get");

        EstadoBeanGenSpImpl oBean = new EstadoBeanGenSpImpl();
        oBean.setId(0);
        oBean.setTipo("Listo");
        Integer expResult = oBean.getId();
        EstadoDaoGenSpImpl instance = new EstadoDaoGenSpImpl("estado", connection);

        EstadoBeanGenSpImpl oBean2 = (EstadoBeanGenSpImpl) instance.set(oBean);
        Integer result = oBean2.getId();

        assertTrue("Los IDs son iguales", result != expResult);

        EstadoBeanGenSpImpl oBean3 = (EstadoBeanGenSpImpl) instance.get(oBean2, 2);
        Integer result2 = oBean3.getId();

        assertTrue("Los IDs son diferentes", result2 != expResult);

        Integer borrado = instance.remove(oBean2);

        assertTrue("Se ha borrado correctamente", borrado == 1);
    }

    /*VICTOR*/
   /* @Test
    public void testGetCountMethod() throws Exception {
        System.out.println("getcount");

        EstadoDaoGenSpImpl instance = new EstadoDaoGenSpImpl("estado", connection);

        Integer oCount = instance.getCount(null);

        assertTrue("El numero de registros es igual o mayor que 0", oCount >= 0);

    }

    /*JOSE CORONADO*/
   /* @Test
    public void testGetPagesMethod() throws Exception {
        System.out.println("getpages");

        EstadoDaoGenSpImpl instance = new EstadoDaoGenSpImpl("estado", connection);

        Integer intRegsPerPag = 3;
        Integer oPages = instance.getPages(intRegsPerPag, null);
        assertTrue("Si exiten paginas", oPages >= 0);

    }

}
