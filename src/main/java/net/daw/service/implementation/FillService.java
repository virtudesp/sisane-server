/*
 * Copyright (c) 2016 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * bauxer server: Helps you to develop easily AJAX web applications 
 *                   by copying and modifying this Java Server.
 *
 * Sources at https://github.com/rafaelaznar/bauxer
 * 
 * bauxer server is distributed under the MIT License (MIT)
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
package net.daw.service.implementation;

import java.security.MessageDigest;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.implementation.ReplyBean;
import net.daw.bean.implementation.UserBean;
import net.daw.bean.implementation.UsertypeBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.implementation.UserDao;
import net.daw.dao.implementation.UsertypeDao;

import static net.daw.helper.statics.AppConfigurationHelper.getSourceConnection;
import net.daw.helper.statics.FilterBeanHelper;
import net.daw.helper.statics.JsonMessage;
import net.daw.helper.statics.ParameterCook;
import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.ViewServiceInterface;

public class FillService implements TableServiceInterface, ViewServiceInterface {

    protected HttpServletRequest oRequest = null;

    public FillService(HttpServletRequest request) {
        oRequest = request;
    }

    public Integer getRandomInt(int min, int max) {

        Random rand = new Random();
        int randomNum = rand.nextInt((max - min) + 1) + min;
        return randomNum;
    }

    public Date getRandDate(Integer days) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -days);
        return cal.getTime();
    }

    public String getDigito() {
        ArrayList<String> arrDigito = new ArrayList<>();
        arrDigito.add("1");
        arrDigito.add("2");
        arrDigito.add("3");
        arrDigito.add("4");
        arrDigito.add("5");
        arrDigito.add("6");
        arrDigito.add("7");
        arrDigito.add("8");
        arrDigito.add("9");
        arrDigito.add("0");
        return arrDigito.get(getRandomInt(0, 9));
    }

    public String sha256(String base) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(base.getBytes("UTF-8"));
            StringBuffer hexString = new StringBuffer();

            for (int i = 0; i < hash.length; i++) {
                String hex = Integer.toHexString(0xff & hash[i]);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }

            return hexString.toString().toUpperCase();
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
//    num1  = 1 + (int) (Math.random() * ((200 - 1) + 1));
// SimpleDateFormat oSimpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
//        fecha = ("2013-10-25");
//        

    public ReplyBean user() throws Exception {

        String data = null;

        Connection oConnection = null;
        ConnectionInterface oDataConnectionSource = null;
        oDataConnectionSource = getSourceConnection();
        oConnection = oDataConnectionSource.newConnection();

        UsertypeBean oUsertypeBean = new UsertypeBean();
        UsertypeDao oUsertypeDao = new UsertypeDao(oConnection);

        oUsertypeBean.setDescription("Administrador");
        oUsertypeBean.setDiscount(0.0);
        try {
            oUsertypeDao.set(oUsertypeBean);
        } catch (Exception e) {
            return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
        }
        oUsertypeBean.setDescription("Publicador");
        oUsertypeBean.setDiscount(0.0);
        try {
            oUsertypeDao.set(oUsertypeBean);
        } catch (Exception e) {
            return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
        }
        oUsertypeBean.setDescription("Cliente");
        oUsertypeBean.setDiscount(0.0);
        try {
            oUsertypeDao.set(oUsertypeBean);
        } catch (Exception e) {
            return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
        }
        oUsertypeBean.setDescription("Cliente preferente");
        oUsertypeBean.setDiscount(2.5);
        try {
            oUsertypeDao.set(oUsertypeBean);
        } catch (Exception e) {
            return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
        }

        ArrayList<String> arrNombre = new ArrayList<>();

        arrNombre.add("Santiago");
        arrNombre.add("Sebastián");
        arrNombre.add("Matías");
        arrNombre.add("Mateo");
        arrNombre.add("Nicolás");
        arrNombre.add("Alejandro");
        arrNombre.add("Diego");
        arrNombre.add("Samuel");
        arrNombre.add("Benjamín");
        arrNombre.add("Daniel");
        arrNombre.add("Joaquín");
        arrNombre.add("Lucas");
        arrNombre.add("Tomas");
        arrNombre.add("Gabriel");
        arrNombre.add("Martín");
        arrNombre.add("David");
        arrNombre.add("Emiliano");
        arrNombre.add("Jerónimo");
        arrNombre.add("Emmanuel");
        arrNombre.add("Agustín");
        arrNombre.add("Juan Pablo");
        arrNombre.add("Juan José");
        arrNombre.add("Andrés");
        arrNombre.add("Thiago");
        arrNombre.add("Leonardo");
        arrNombre.add("Felipe");
        arrNombre.add("Ángel");
        arrNombre.add("Maximiliano");
        arrNombre.add("Christopher");
        arrNombre.add("Juan Diego");
        arrNombre.add("Adrián");
        arrNombre.add("Pablo");
        arrNombre.add("Miguel Ángel");
        arrNombre.add("Rodrigo");
        arrNombre.add("Alexander");
        arrNombre.add("Ignacio");
        arrNombre.add("Emilio");
        arrNombre.add("Dylan");
        arrNombre.add("Bruno");
        arrNombre.add("Carlos");
        arrNombre.add("Vicente");
        arrNombre.add("Valentino");
        arrNombre.add("Santino");
        arrNombre.add("Julián");
        arrNombre.add("Juan Sebastián");
        arrNombre.add("Aarón");
        arrNombre.add("Lautaro");
        arrNombre.add("Axel");
        arrNombre.add("Fernando");
        arrNombre.add("Ian");
        arrNombre.add("Christian");
        arrNombre.add("Javier");
        arrNombre.add("Manuel");
        arrNombre.add("Luciano");
        arrNombre.add("Francisco");
        arrNombre.add("Juan David");
        arrNombre.add("Iker");
        arrNombre.add("Facundo");
        arrNombre.add("Rafael");
        arrNombre.add("Alex");
        arrNombre.add("Franco");
        arrNombre.add("Antonio");
        arrNombre.add("Luis");
        arrNombre.add("Isaac");
        arrNombre.add("Máximo");
        arrNombre.add("Pedro");
        arrNombre.add("Ricardo");
        arrNombre.add("Sergio");
        arrNombre.add("Eduardo");
        arrNombre.add("Bautista");
        arrNombre.add("Miguel");
        arrNombre.add("Cristóbal");
        arrNombre.add("Kevin");
        arrNombre.add("Jorge");
        arrNombre.add("Alonso");
        arrNombre.add("Anthony");
        arrNombre.add("Simón");
        arrNombre.add("Juan");
        arrNombre.add("Joshua");
        arrNombre.add("Diego Alejandro");
        arrNombre.add("Juan Manuel");
        arrNombre.add("Mario");
        arrNombre.add("Alan");
        arrNombre.add("Josué");
        arrNombre.add("Gael");
        arrNombre.add("Hugo");
        arrNombre.add("Matthew");
        arrNombre.add("Ivan");
        arrNombre.add("Damián");
        arrNombre.add("Lorenzo");
        arrNombre.add("Juan Martín");
        arrNombre.add("Esteban");
        arrNombre.add("Álvaro");
        arrNombre.add("Valentín");
        arrNombre.add("Dante");
        arrNombre.add("Jacobo");
        arrNombre.add("Jesús");
        arrNombre.add("Camilo");
        arrNombre.add("Juan Esteban");
        arrNombre.add("Elías");
        arrNombre.add("Sofía");
        arrNombre.add("Isabella");
        arrNombre.add("Camila");
        arrNombre.add("Valentina");
        arrNombre.add("Valeria");
        arrNombre.add("Mariana");
        arrNombre.add("Luciana");
        arrNombre.add("Daniela");
        arrNombre.add("Gabriela");
        arrNombre.add("Victoria");
        arrNombre.add("Martina");
        arrNombre.add("Lucía");
        arrNombre.add("Jimena");
        arrNombre.add("Sara");
        arrNombre.add("Samantha");
        arrNombre.add("María José");
        arrNombre.add("Emma");
        arrNombre.add("Catalina");
        arrNombre.add("Julieta");
        arrNombre.add("Mía");
        arrNombre.add("Antonella");
        arrNombre.add("Renata");
        arrNombre.add("Emilia");
        arrNombre.add("Natalia");
        arrNombre.add("Zoe");
        arrNombre.add("Nicole");
        arrNombre.add("Paula");
        arrNombre.add("Amanda");
        arrNombre.add("María Fernanda");
        arrNombre.add("Emily");
        arrNombre.add("Antonia");
        arrNombre.add("Alejandra");
        arrNombre.add("Juana");
        arrNombre.add("Andrea");
        arrNombre.add("Manuela");
        arrNombre.add("Ana Sofía");
        arrNombre.add("Guadalupe");
        arrNombre.add("Agustina");
        arrNombre.add("Elena");
        arrNombre.add("María");
        arrNombre.add("Bianca");
        arrNombre.add("Ariana");
        arrNombre.add("Ivanna");
        arrNombre.add("Abril");
        arrNombre.add("Florencia");
        arrNombre.add("Carolina");
        arrNombre.add("Maite");
        arrNombre.add("Rafaela");
        arrNombre.add("Regina");
        arrNombre.add("Adriana");
        arrNombre.add("Michelle");
        arrNombre.add("Alma");
        arrNombre.add("Violeta");
        arrNombre.add("Salomé");
        arrNombre.add("Abigail");
        arrNombre.add("Juliana");
        arrNombre.add("Valery");
        arrNombre.add("Isabel");
        arrNombre.add("Montserrat");
        arrNombre.add("Allison");
        arrNombre.add("Jazmín");
        arrNombre.add("Julia");
        arrNombre.add("Lola");
        arrNombre.add("Luna");
        arrNombre.add("Ana");
        arrNombre.add("Delfina");
        arrNombre.add("Alessandra");
        arrNombre.add("Ashley");
        arrNombre.add("Olivia");
        arrNombre.add("Constanza");
        arrNombre.add("Paulina");
        arrNombre.add("Rebeca");
        arrNombre.add("Carla");
        arrNombre.add("María Paula");
        arrNombre.add("Micaela");
        arrNombre.add("Fabiana");
        arrNombre.add("Miranda");
        arrNombre.add("Josefina");
        arrNombre.add("Laura");
        arrNombre.add("Alexa");
        arrNombre.add("María Alejandra");
        arrNombre.add("Luana");
        arrNombre.add("Fátima");
        arrNombre.add("Sara Sofía");
        arrNombre.add("Isidora");
        arrNombre.add("Malena");
        arrNombre.add("Romina");
        arrNombre.add("Ana Paula");
        arrNombre.add("Mariangel");
        arrNombre.add("Amelia");
        arrNombre.add("Elizabeth");
        arrNombre.add("Aitana");
        arrNombre.add("Ariadna");
        arrNombre.add("María Camila");
        arrNombre.add("Irene");
        arrNombre.add("Silvana");
        arrNombre.add("Clara");
        arrNombre.add("Magdalena");
        arrNombre.add("Sophie");
        arrNombre.add("Josefa");
        arrNombre.add("Sergio");
        arrNombre.add("Javi");
        arrNombre.add("Pedro");
        arrNombre.add("Antonio");
        arrNombre.add("José");
        arrNombre.add("Eduardo");
        arrNombre.add("Ana");
        arrNombre.add("Diana");
        arrNombre.add("Noemí");
        arrNombre.add("Arancha");
        arrNombre.add("Javier");
        arrNombre.add("Lucia");
        arrNombre.add("Lucas");
        arrNombre.add("Javier");
        arrNombre.add("Marco");
        arrNombre.add("Sandra");
        arrNombre.add("Margarita");
        arrNombre.add("Pedro");
        arrNombre.add("Toni");
        arrNombre.add("José");
        arrNombre.add("Guillermo");
        arrNombre.add("Rosa");
        arrNombre.add("Adela");
        arrNombre.add("Lucia");
        arrNombre.add("Paco");
        arrNombre.add("Sergio");
        arrNombre.add("Almudena");
        arrNombre.add("Francisca");
        arrNombre.add("Lola");
        arrNombre.add("Manuel");
        arrNombre.add("Miguel");
        arrNombre.add("Agustin");
        arrNombre.add("Noelia");
        arrNombre.add("Amparo");
        arrNombre.add("Benito");
        arrNombre.add("Ana");

        ArrayList<String> arrApe = new ArrayList<>();
        arrApe.add("Martín");
        arrApe.add("Benito");
        arrApe.add("Navarro");
        arrApe.add("Bonet");
        arrApe.add("Martinez");
        arrApe.add("Grancha");
        arrApe.add("Gavilan");
        arrApe.add("Perez");
        arrApe.add("Lopez");
        arrApe.add("Carreño");
        arrApe.add("Soria");
        arrApe.add("Tárraga");
        arrApe.add("Muñoz");
        arrApe.add("Vellisca");
        arrApe.add("Aznar");
        arrApe.add("Zapatero");
        arrApe.add("Blanco");
        arrApe.add("Soriano");
        arrApe.add("Reig");
        arrApe.add("Cabrera");
        arrApe.add("García");
        arrApe.add("Sancho");
        arrApe.add("Sanchís");
        arrApe.add("Gómez");
        arrApe.add("Giménez");
        arrApe.add("Montoya");
        arrApe.add("López");
        arrApe.add("Domínguez");
        arrApe.add("González");
        arrApe.add("Fernández");
        arrApe.add("Rodríguez");
        arrApe.add("Martínez");
        arrApe.add("Pérez");
        arrApe.add("Hernández");
        arrApe.add("Alvarez");
        arrApe.add("Gutierrez");
        arrApe.add("Belmonte");
        arrApe.add("Palomino");
        arrApe.add("Casanova");
        arrApe.add("Gutierrez");
        arrApe.add("Garcia");
        arrApe.add("Benito");
        arrApe.add("Soria");
        arrApe.add("Grancha");
        arrApe.add("Martinez");
        arrApe.add("Rodriguez");
        arrApe.add("Gutierrez");
        arrApe.add("Rubio");
        arrApe.add("Moreno");
        arrApe.add("Aragon");
        arrApe.add("Atienza");
        arrApe.add("Pons");
        arrApe.add("Ochoa");
        arrApe.add("Delicado");
        arrApe.add("Sanchez");
        arrApe.add("Sistiaga");
        arrApe.add("Urkullu");
        arrApe.add("Albert");
        arrApe.add("Laplaza");
        arrApe.add("Alpuente");
        arrApe.add("Pons");
        arrApe.add("Garrido");
        arrApe.add("Lopez");
        arrApe.add("Cuerda");
        arrApe.add("Cañizares");

        ArrayList<String> arrSexo = new ArrayList<>();
        arrSexo.add("Hombre");
        arrSexo.add("Mujer");

        ArrayList<String> arrVia = new ArrayList<>();
        arrVia.add("Avenida");
        arrVia.add("Paseo");
        arrVia.add("Plaza");
        arrVia.add("Rambla");
        arrVia.add("Calle");
        arrVia.add("Camino");

        ArrayList<String> arrDomicilio = new ArrayList<>();

        ArrayList<String> arrCodpostal = new ArrayList<>();
        arrCodpostal.add("46910");
        arrCodpostal.add("46490");
        arrCodpostal.add("46001");
        arrCodpostal.add("46022");
        arrCodpostal.add("46013");

        ArrayList<String> arrPoblacion = new ArrayList<>();

        arrPoblacion.add("Ademuz");
        arrPoblacion.add("Agullent");
        arrPoblacion.add("Aielo de Malferit");
        arrPoblacion.add("Aielo de Rugat");
        arrPoblacion.add("Alaquàs");
        arrPoblacion.add("Albaida");
        arrPoblacion.add("Albal");
        arrPoblacion.add("Albalat de la Ribera");
        arrPoblacion.add("Albalat dels Sorells");
        arrPoblacion.add("Albalat dels Tarongers");
        arrPoblacion.add("Alberic");
        arrPoblacion.add("Alborache");
        arrPoblacion.add("Alboraya");
        arrPoblacion.add("Albuixech");
        arrPoblacion.add("Alcublas");
        arrPoblacion.add("Alcàntera de Xúquer");
        arrPoblacion.add("Alcàsser");
        arrPoblacion.add("Aldaia");
        arrPoblacion.add("Alfafar");
        arrPoblacion.add("Alfara de Algimia");
        arrPoblacion.add("Alfara del Patriarca");
        arrPoblacion.add("Alfarp");
        arrPoblacion.add("Alfarrasí");
        arrPoblacion.add("Alfauir");
        arrPoblacion.add("Algar de Palancia");
        arrPoblacion.add("Algemesí");
        arrPoblacion.add("Algimia de Alfara");
        arrPoblacion.add("Alginet");
        arrPoblacion.add("Almiserà");
        arrPoblacion.add("Almoines");
        arrPoblacion.add("Almussafes");
        arrPoblacion.add("Almàssera");
        arrPoblacion.add("Alpuente");
        arrPoblacion.add("Alzira");
        arrPoblacion.add("Andilla");
        arrPoblacion.add("Anna");
        arrPoblacion.add("Antella");
        arrPoblacion.add("Aras de los Olmos");
        arrPoblacion.add("Ayora");
        arrPoblacion.add("Barx");
        arrPoblacion.add("Barxeta");
        arrPoblacion.add("Bellreguard");
        arrPoblacion.add("Bellús");
        arrPoblacion.add("Benaguasil");
        arrPoblacion.add("Benagéber");
        arrPoblacion.add("Benavites");
        arrPoblacion.add("Beneixida");
        arrPoblacion.add("Benetússer");
        arrPoblacion.add("Beniarjó");
        arrPoblacion.add("Beniatjar");
        arrPoblacion.add("Benicolet");
        arrPoblacion.add("Benifairó de la Valldigna");
        arrPoblacion.add("Benifairó de les Valls");
        arrPoblacion.add("Benifaió");
        arrPoblacion.add("Beniflá");
        arrPoblacion.add("Benigánim");
        arrPoblacion.add("Benimodo");
        arrPoblacion.add("Benimuslem");
        arrPoblacion.add("Beniparrell");
        arrPoblacion.add("Benirredrà");
        arrPoblacion.add("Benisanó");
        arrPoblacion.add("Benissoda");
        arrPoblacion.add("Benisuera");
        arrPoblacion.add("Bicorp");
        arrPoblacion.add("Bocairent");
        arrPoblacion.add("Bolbaite");
        arrPoblacion.add("Bonrepòs i Mirambell");
        arrPoblacion.add("Bufali");
        arrPoblacion.add("Bugarra");
        arrPoblacion.add("Burjassot");
        arrPoblacion.add("Buñol");
        arrPoblacion.add("Bèlgida");
        arrPoblacion.add("Bétera");
        arrPoblacion.add("Calles");
        arrPoblacion.add("Camporrobles");
        arrPoblacion.add("Canals");
        arrPoblacion.add("Carcaixent");
        arrPoblacion.add("Carlet");
        arrPoblacion.add("Carrícola");
        arrPoblacion.add("Casas Altas");
        arrPoblacion.add("Casas Bajas");
        arrPoblacion.add("Casinos");
        arrPoblacion.add("Castellonet de la Conquesta");
        arrPoblacion.add("Castelló de Rugat");
        arrPoblacion.add("Castelló de la Ribera");
        arrPoblacion.add("Castielfabib");
        arrPoblacion.add("Catadau");
        arrPoblacion.add("Catarroja");
        arrPoblacion.add("Caudete de las Fuentes");
        arrPoblacion.add("Cerdà");
        arrPoblacion.add("Chella");
        arrPoblacion.add("Chelva");
        arrPoblacion.add("Chera");
        arrPoblacion.add("Cheste");
        arrPoblacion.add("Chiva");
        arrPoblacion.add("Chulilla");
        arrPoblacion.add("Cofrentes");
        arrPoblacion.add("Corbera");
        arrPoblacion.add("Cortes de Pallás");
        arrPoblacion.add("Cotes");
        arrPoblacion.add("Cullera");
        arrPoblacion.add("Càrcer");
        arrPoblacion.add("Daimús");
        arrPoblacion.add("Domeño");
        arrPoblacion.add("Dos Aguas");
        arrPoblacion.add("Emperador");
        arrPoblacion.add("Enguera");
        arrPoblacion.add("Estivella");
        arrPoblacion.add("Estubeny");
        arrPoblacion.add("Faura");
        arrPoblacion.add("Favara");
        arrPoblacion.add("Foios");
        arrPoblacion.add("Font de la Figuera (la)");
        arrPoblacion.add("Fontanars dels Alforins");
        arrPoblacion.add("Fortaleny");
        arrPoblacion.add("Fuenterrobles");
        arrPoblacion.add("Gandia");
        arrPoblacion.add("Gavarda");
        arrPoblacion.add("Genovés");
        arrPoblacion.add("Gestalgar");
        arrPoblacion.add("Gilet");
        arrPoblacion.add("Godella");
        arrPoblacion.add("Godelleta");
        arrPoblacion.add("Granja de la Costera (la)");
        arrPoblacion.add("Guadasequies");
        arrPoblacion.add("Guadassuar");
        arrPoblacion.add("Guardamar de la Safor");
        arrPoblacion.add("Higueruelas");
        arrPoblacion.add("Jalance");
        arrPoblacion.add("Jarafuel");
        arrPoblacion.add("Llanera de Ranes");
        arrPoblacion.add("Llaurí");
        arrPoblacion.add("Llocnou de Sant Jeroni");
        arrPoblacion.add("Llocnou de la Corona");
        arrPoblacion.add("Llombai");
        arrPoblacion.add("Llosa de Ranes (la)");
        arrPoblacion.add("Llutxent");
        arrPoblacion.add("Llíria");
        arrPoblacion.add("Loriguilla");
        arrPoblacion.add("Losa del Obispo");
        arrPoblacion.add("Macastre");
        arrPoblacion.add("Manises");
        arrPoblacion.add("Manuel");
        arrPoblacion.add("Marines");
        arrPoblacion.add("Masalavés");
        arrPoblacion.add("Massalfassar");
        arrPoblacion.add("Massamagrell");
        arrPoblacion.add("Massanassa");
        arrPoblacion.add("Meliana");
        arrPoblacion.add("Millares");
        arrPoblacion.add("Miramar");
        arrPoblacion.add("Mislata");
        arrPoblacion.add("Mogente");
        arrPoblacion.add("Moncada");
        arrPoblacion.add("Montaverner");
        arrPoblacion.add("Montesa");
        arrPoblacion.add("Montitxelvo");
        arrPoblacion.add("Montroy");
        arrPoblacion.add("Montserrat");
        arrPoblacion.add("Museros");
        arrPoblacion.add("Navarrés");
        arrPoblacion.add("Novelé");
        arrPoblacion.add("Náquera");
        arrPoblacion.add("Oliva");
        arrPoblacion.add("Olocau");
        arrPoblacion.add("Ontinyent");
        arrPoblacion.add("Otos");
        arrPoblacion.add("Paiporta");
        arrPoblacion.add("Palma de Gandía");
        arrPoblacion.add("Palmera");
        arrPoblacion.add("Palomar (el)");
        arrPoblacion.add("Paterna");
        arrPoblacion.add("Pedralba");
        arrPoblacion.add("Petrés");
        arrPoblacion.add("Picanya");
        arrPoblacion.add("Picassent");
        arrPoblacion.add("Piles");
        arrPoblacion.add("Pinet");
        arrPoblacion.add("Pobla Llarga (la)");
        arrPoblacion.add("Pobla de Farnals (la)");
        arrPoblacion.add("Pobla de Vallbona (la)");
        arrPoblacion.add("Pobla del Duc (la)");
        arrPoblacion.add("Polinyà de Xúquer");
        arrPoblacion.add("Potríes");
        arrPoblacion.add("Puebla de San Miguel");
        arrPoblacion.add("Puig");
        arrPoblacion.add("Puçol");
        arrPoblacion.add("Quart de Poblet");
        arrPoblacion.add("Quart de les Valls");
        arrPoblacion.add("Quartell");
        arrPoblacion.add("Quatretonda");
        arrPoblacion.add("Quesa");
        arrPoblacion.add("Rafelbuñol");
        arrPoblacion.add("Rafelcofer");
        arrPoblacion.add("Rafelguaraf");
        arrPoblacion.add("Real de Gandía");
        arrPoblacion.add("Real de Montroi");
        arrPoblacion.add("Requena");
        arrPoblacion.add("Riba-roja de Túria");
        arrPoblacion.add("Riola");
        arrPoblacion.add("Rocafort");
        arrPoblacion.add("Rotglà i Corberà");
        arrPoblacion.add("Rugat");
        arrPoblacion.add("Ráfol de Salem");
        arrPoblacion.add("Rótova");
        arrPoblacion.add("Sagunto");
        arrPoblacion.add("Salem");
        arrPoblacion.add("San Juan de Énova");
        arrPoblacion.add("Sedaví");
        arrPoblacion.add("Segart");
        arrPoblacion.add("Sellent");
        arrPoblacion.add("Sempere");
        arrPoblacion.add("Senyera");
        arrPoblacion.add("Serra");
        arrPoblacion.add("Siete Aguas");
        arrPoblacion.add("Silla");
        arrPoblacion.add("Simat de la Valldigna");
        arrPoblacion.add("Sinarcas");
        arrPoblacion.add("Sollana");
        arrPoblacion.add("Sot de Chera");
        arrPoblacion.add("Sueca");
        arrPoblacion.add("Sumacàrcer");
        arrPoblacion.add("Tavernes Blanques");
        arrPoblacion.add("Tavernes de la Valldigna");
        arrPoblacion.add("Teresa de Cofrentes");
        arrPoblacion.add("Terrateig");
        arrPoblacion.add("Titaguas");
        arrPoblacion.add("Torrebaja");
        arrPoblacion.add("Torrella");
        arrPoblacion.add("Torrent");
        arrPoblacion.add("Torres Torres");
        arrPoblacion.add("Tous");
        arrPoblacion.add("Turís");
        arrPoblacion.add("Tuéjar");
        arrPoblacion.add("Utiel");
        arrPoblacion.add("Valencia");
        arrPoblacion.add("Vallada");
        arrPoblacion.add("Vallanca");
        arrPoblacion.add("Vallés");
        arrPoblacion.add("Venta del Moro");
        arrPoblacion.add("Vilamarxant");
        arrPoblacion.add("Villalonga");
        arrPoblacion.add("Villar del Arzobispo");
        arrPoblacion.add("Villargordo del Cabriel");
        arrPoblacion.add("Vinalesa");
        arrPoblacion.add("Xeraco");
        arrPoblacion.add("Xeresa");
        arrPoblacion.add("Xirivella");
        arrPoblacion.add("Xàtiva");

        ArrayList<String> arrEmail = new ArrayList<>();
        arrEmail.add("@hotmail.com");
        arrEmail.add("@hotmail.es");
        arrEmail.add("@gmail.com");
        arrEmail.add("@yahoo.com");
        arrEmail.add("@ono.es");
        arrEmail.add("@outlook.es");
        arrEmail.add("@outlook.com");
        arrEmail.add("@gmail.es");
        arrEmail.add("@yahoo.es");
        arrEmail.add("@ono.com");

        ArrayList<String> arrValidado = new ArrayList<>();
        arrValidado.add("Si");
        arrValidado.add("No");

        ArrayList<String> arrPass = new ArrayList<>();
        arrPass.add("Perro");
        arrPass.add("Gato");
        arrPass.add("Loro");
        arrPass.add("Ballena");
        arrPass.add("Canguro");
        arrPass.add("Panda");
        arrPass.add("Elefante");
        arrPass.add("Jirafa");
        arrPass.add("Rinoceronte");
        arrPass.add("Leon");

        UserBean oUserBean = new UserBean();
        UserDao oUserDao = new UserDao(oConnection);
        oUserBean.setId(0);
        oUserBean.setName("Rafael");
        oUserBean.setSurname("Aznar");
        oUserBean.setLogin("rafael");
        oUserBean.setPassword(sha256("rafael"));
        String Via = arrVia.get(getRandomInt(0, arrVia.size() - 1));
        String Via1 = arrNombre.get(getRandomInt(0, arrNombre.size() - 1));
        String Via2 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
        String num = (String) getRandomInt(1, 100).toString();
        oUserBean.setAddress(Via + " de " + Via1 + " " + Via2 + ", nº " + num);
        oUserBean.setCity("Valencia");
        oUserBean.setZip("46" + getDigito() + getDigito() + getDigito());
        oUserBean.setState("València");
        oUserBean.setCountry("Spain");
        oUserBean.setEmail("rafaaznar@gmail.com");
        oUserBean.setPhone("6" + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito());
        oUserBean.setId_usertype(1);
        try {
            oUserDao.set(oUserBean);
        } catch (Exception e) {
            return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
        }

        int num1;
        int num2;

        for (int i = 1; i <= 100; i++) {
            oUserBean = new UserBean();
            oUserBean.setId(0);
            String Name = arrNombre.get(getRandomInt(0, arrNombre.size() - 1));
            String Surname1 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
            String Surname2 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
            oUserBean.setName(Name);
            oUserBean.setSurname(Surname1 + ' ' + Surname2);
            String Login = (Name.substring(0, 3) + Surname1.substring(0, 2) + Surname2.substring(0, 2)).toLowerCase();
            oUserBean.setLogin(Login);
            MessageDigest oDigest = MessageDigest.getInstance("SHA-256");
            oUserBean.setPassword(sha256(Login));
            Via = arrVia.get(getRandomInt(0, arrVia.size() - 1));
            Via1 = arrNombre.get(getRandomInt(0, arrNombre.size() - 1));
            Via2 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
            num = (String) getRandomInt(1, 100).toString();
            oUserBean.setAddress(Via + " de " + Via1 + " " + Via2 + ", nº " + num);
            oUserBean.setCity(arrPoblacion.get(getRandomInt(0, arrApe.size() - 1)));
            oUserBean.setZip("46" + getDigito() + getDigito() + getDigito());
            //oUserBean.setZip("46" + String.format("%0010d", Integer.parseInt(getRandomInt(1, 999).toString())));
            oUserBean.setState("València");
            oUserBean.setCountry("Spain");
            oUserBean.setEmail(Login + arrEmail.get(getRandomInt(0, arrEmail.size() - 1)));
            oUserBean.setPhone("6" + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito());
            //oUserBean.setZip("6" + String.format("%10000000d", Integer.parseInt(getRandomInt(1, 99999999).toString())));
            oUserBean.setId_usertype(getRandomInt(2, 4));

            try {
                oUserDao.set(oUserBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
            }

        }
        return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Phase 1: OK"));

//                do {
//                    num1 = 1 + (int) (Math.random() * ((200 - 1) + 1));
//                    oCompraBean.getCliente().setId(num1);
//                    oClienteDao.get(oCompraBean.getCliente());
//                } while (oCompraBean.getCliente().getId() == 0);
//
//                do {
//                    num2 = 1 + (int) (Math.random() * ((100 - 1) + 1));
//                    oCompraBean.getProducto().setId(num2);
//                    oProductoDao.get(oCompraBean.getProducto());
//                } while (oCompraBean.getProducto().getId() == 0);
//
//                oCompraBean.setCantidad(num1 + num2);
//                Date date = new Date(97, 1, 23);
//
//                oCompraBean.setFecha(date);
//
//                try {
//                    oCompraDao.set(oCompraBean);
//
//                } catch (Exception e) {
//                    throw new ServletException("CompraRellena: Update Error: Phase 1: " + e.getMessage());
//                }
//
//            }
//
//            int index;
//            int contador = 0;
//            Iterator<String> iterador = arrNombre.listIterator();
//            Random generator;
//            while (iterador.hasNext()) {
//                contador++;
//                arrNombrebre = iterador.next();
//                generator = new Random();
//                oUserBean.setId(0);
//                oUserBean.setId_usuario(0);
//
//                index = generator.nextInt(arrDni.size());
//                String randomDNI = arrDni.get(index);
//                oUserBean.setDni(contador + randomDNI);
//                generator = new Random();
//
//                index = generator.nextInt(arrExpediente.size());
//                String randomNUMEXPEDIENTE = arrExpediente.get(index);
//                oUserBean.setNumexpediente(contador + randomNUMEXPEDIENTE);
//                generator = new Random();
//
//                index = generator.nextInt(arrNombre.size());
//                String randomNOMBRE = arrNombre.get(index);
//                oUserBean.setNombre(randomNOMBRE);
//                generator = new Random();
//
//                index = generator.nextInt(arrApe.size());
//                String randomAPE1 = arrApe.get(index);
//                oUserBean.setApe(randomAPE1);
//                generator = new Random();
//
//                index = generator.nextInt(arrApe.size());
//                String randomAPE2 = arrApe.get(index);
//                oUserBean.setApe(randomAPE2);
//                generator = new Random();
//
//                index = generator.nextInt(arrSexo.size());
//                String randomSEXO = arrSexo.get(index);
//                oUserBean.setSexo(randomSEXO);
//                generator = new Random();
//
//                index = generator.nextInt(arrDomicilio.size());
//                String randomDOMICILIO = arrDomicilio.get(index);
//                oUserBean.setDomicilio(randomDOMICILIO);
//                generator = new Random();
//
//                index = generator.nextInt(arrCodpostal.size());
//                String randomCODPOSTAL = arrCodpostal.get(index);
//                oUserBean.setCodpostal(randomCODPOSTAL);
//                generator = new Random();
//
//                index = generator.nextInt(arrPoblacion.size());
//                String randomPOBLACION = arrPoblacion.get(index);
//                oUserBean.setPoblacion(randomPOBLACION);
//                generator = new Random();
//
//                index = generator.nextInt(arrProvincia.size());
//                String randomPROVINCIA = arrProvincia.get(index);
//                oUserBean.setProvincia(randomPROVINCIA);
//                generator = new Random();
//
//                index = generator.nextInt(arrTelefono.size());
//                String randomTELEFONO = arrTelefono.get(index);
//                oUserBean.setTelefono(randomTELEFONO);
//                generator = new Random();
//
//                index = generator.nextInt(arrEmail.size());
//                String randomEMAIL = arrEmail.get(index);
//                oUserBean.setEmail(randomNOMBRE + randomAPE1 + randomEMAIL);
//                generator = new Random();
//
//                index = generator.nextInt(arrValidado.size());
//                String randomVALIDADO = arrValidado.get(index);
//                oUserBean.setValidado(randomVALIDADO);
//                generator = new Random();
//
//                index = generator.nextInt(arrLogin.size());
//                String randomLOGIN = arrLogin.get(index);
//                oUserBean.getUsuario().setLogin(randomLOGIN + contador);
//                generator = new Random();
//
//                index = generator.nextInt(arrPass.size());
//                String randomPASSWORD = arrPass.get(index);
//                oUserBean.getUsuario().setPassword(randomPASSWORD + contador);
//                generator = new Random();
//
//                try {
//                    oUserDao.set(oUserBean);
//
//                } catch (Exception e) {
//                    throw new ServletException("UserController: Update Error: Phase 2: " + e.getMessage());
//                }
//            }
//
//            //producto
//            Contexto oContexto = (Contexto) request.getAttribute("contexto");
//            oContexto.setVista("jsp/mensaje.jsp");
//            ProductoBean oProductoBean = new ProductoBean();
//            ProductoDao oProductoDao = new ProductoDao(oContexto.getEnumTipoConexion());
//
//            ArrayList<String> uno = new ArrayList<>();
//            ArrayList<String> dos = new ArrayList<>();
//            ArrayList<String> tres = new ArrayList<>();
//
//            uno.add("Llave");
//            uno.add("Soldadura");
//            uno.add("Pieza");
//            uno.add("Bote");
//            uno.add("Asadura");
//            uno.add("Mecanizado");
//            uno.add("Bote");
//            uno.add("Manivela");
//            uno.add("Pasante");
//            uno.add("Rejilla");
//            uno.add("Torno");
//            uno.add("Accionamiento");
//            uno.add("Fijación");
//            uno.add("Bajante");
//            uno.add("Sujeción");
//
//            dos.add("auxiliar");
//            dos.add("manual");
//            dos.add("con rodadura");
//            dos.add("extensivo");
//            dos.add("intensivo");
//
//            tres.add("de emergencia");
//            tres.add("de repuesto");
//            tres.add("de paso");
//            tres.add("de acople");
//            tres.add("de mano");
//
//            Random generator;
//            String primero;
//            String segundo;
//            String tercero;
//            Integer contador = 0;
//            Iterator<String> iterador1 = uno.listIterator();
//            while (iterador1.hasNext()) {
//                primero = iterador1.next();
//                contador++;
//                Iterator<String> iterador2 = dos.listIterator();
//                while (iterador2.hasNext()) {
//                    segundo = iterador2.next();
//                    contador++;
//                    Iterator<String> iterador3 = tres.listIterator();
//                    while (iterador3.hasNext()) {
//                        tercero = iterador3.next();
//                        contador++;
//                        generator = new Random();
//                        oProductoBean.setId(0);
//                        oProductoBean.setCodigo(Character.toUpperCase(primero.charAt(0)) + Character.toUpperCase(segundo.charAt(0)) + contador.toString() + Character.toUpperCase(tercero.charAt(0)));
//                        oProductoBean.setDescripcion(primero + " " + segundo + " " + tercero);
//                        oProductoBean.setPrecio(Double.parseDouble(Integer.toString(generator.nextInt(2000)) + "." + Integer.toString(generator.nextInt(99))));
//                        try {
//                            oProductoDao.set(oProductoBean);
//
//                        } catch (Exception e) {
//                            throw new ServletException("ProductoController: Update Error: Phase 2: " + e.getMessage());
//                        }
//
//                    }
//                }
//            }
//
//            Contexto oContexto = (Contexto) request.getAttribute("contexto");
//            oContexto.setVista("jsp/mensaje.jsp");
//            TipoproductoBean oTipoproductoBean = new TipoproductoBean();
//            TipoproductoDao oTipoproductoDao = new TipoproductoDao(oContexto.getEnumTipoConexion());
//
//            ArrayList<String> uno = new ArrayList<>();
//            ArrayList<String> dos = new ArrayList<>();
//
//            uno.add("Herramienta");
//            uno.add("Accesorio");
//            uno.add("Producto");
//            uno.add("Artículo");
//            uno.add("Referencia");
//            uno.add("Mercancía");
//            uno.add("Género");
//
//            dos.add("manual");
//            dos.add("automático");
//            dos.add("descatalogado");
//            dos.add("inexistente");
//
//            String primero;
//            String segundo;
//
//            Integer contador = 0;
//            Iterator<String> iterador1 = uno.listIterator();
//            while (iterador1.hasNext()) {
//                primero = iterador1.next();
//                contador++;
//                Iterator<String> iterador2 = dos.listIterator();
//                while (iterador2.hasNext()) {
//                    segundo = iterador2.next();
//                    contador++;
//                    oTipoproductoBean.setId(0);
//                    oTipoproductoBean.setDescripcion(primero + " " + segundo);
//                    try {
//                        oTipoproductoDao.set(oTipoproductoBean);
//
//                    } catch (Exception e) {
//                        throw new ServletException("ProductoController: Update Error: Phase 2: " + e.getMessage());
//                    }
//
//                }
//            }
//            return "OK- información generada.";
//
//            return "OK- información generada.";
//
//            return "OK- Información Autorellena User generada.";
//
//        } catch (Exception ex) {
//            Log4j.errorLog(this.getClass().getName() + ":" + (ex.getStackTrace()[0]).getMethodName(), ex);
//            throw new Exception();
//        } finally {
//            if (oConnection != null) {
//                oConnection.close();
//            }
//            if (oDataConnectionSource != null) {
//                oDataConnectionSource.disposeConnection();
//            }
//        }
    }

    @Override
    public ReplyBean get() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ReplyBean remove() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ReplyBean set() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ReplyBean getall() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ReplyBean getpage() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ReplyBean getcount() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
