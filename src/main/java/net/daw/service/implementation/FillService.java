/*
 * Copyright (c) 2016 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * sisane-server: Helps you to develop easily AJAX web applications 
 *                   by copying and modifying this Java Server.
 *
 * Sources at https://github.com/rafaelaznar/sisane-server
 * 
 * sisane-server is distributed under the MIT License (MIT)
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
import java.util.Iterator;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.implementation.DocumentBean;
import net.daw.bean.implementation.DocumenttypeBean;
import net.daw.bean.implementation.PostBean;
import net.daw.bean.implementation.ProductBean;
import net.daw.bean.implementation.ProducttypeBean;
import net.daw.bean.implementation.PurchaseBean;
import net.daw.bean.implementation.PuserBean;
import net.daw.bean.implementation.ReplyBean;
import net.daw.bean.implementation.UserBean;
import net.daw.bean.implementation.UsertypeBean;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.implementation.DocumentDao;
import net.daw.dao.implementation.DocumenttypeDao;
import net.daw.dao.implementation.PostDao;
import net.daw.dao.implementation.ProductDao;
import net.daw.dao.implementation.ProducttypeDao;
import net.daw.dao.implementation.PurchaseDao;
import net.daw.dao.implementation.UserDao;
import net.daw.dao.implementation.UsertypeDao;
import net.daw.data.implementation.MysqlData;
import static net.daw.helper.statics.AppConfigurationHelper.getSourceConnection;
import net.daw.helper.statics.JsonMessage;
import net.daw.service.publicinterface.TableServiceInterface;
import net.daw.service.publicinterface.ViewServiceInterface;

public class FillService implements TableServiceInterface, ViewServiceInterface {

    protected HttpServletRequest oRequest = null;

    private Boolean checkpermission(String strMethodName) throws Exception {
        PuserBean oPuserBean = (PuserBean) oRequest.getSession().getAttribute("userBean");
        if (oPuserBean != null) {
            return true;
        } else {
            return false;
        }
    }

    public FillService(HttpServletRequest request) {
        oRequest = request;
    }

    public Integer getRandomInt(int min, int max) {

        Random rand = new Random();
        int randomNum = rand.nextInt((max - min) + 1) + min;
        return randomNum;
    }

    public String getText(Integer sentences) {
        String discurso = "";
        String SacaPedazo1 = null, SacaPedazo2 = null, SacaPedazo3 = null, SacaPedazo4 = null;
        for (int i = 1; i <= sentences; i++) {

            switch (getRandomInt(1, 14)) {
                case 1:
                    SacaPedazo1 = "No obstante ";
                    break;
                case 2:
                    SacaPedazo1 = "Por otra parte, ";
                    break;
                case 3:
                    SacaPedazo1 = "Asimismo, ";
                    break;
                case 4:
                    SacaPedazo1 = "Sin embargo no hemos de olvidar que ";
                    break;
                case 5:
                    SacaPedazo1 = "De igual manera, ";
                    break;
                case 6:
                    SacaPedazo1 = "La práctica prueba que ";
                    break;
                case 7:
                    SacaPedazo1 = "Y no es menos cierto que ";
                    break;
                case 8:
                    SacaPedazo1 = "Las experiencias, ricas y diversas, muestran que, ";
                    break;
                case 9:
                    SacaPedazo1 = "Y aún así ";
                    break;
                case 10:
                    SacaPedazo1 = "No obstante ";
                    break;
                case 11:
                    SacaPedazo1 = "Incluso, bien pudiéramos atrevernos a sugerir que ";
                    break;
                case 12:
                    SacaPedazo1 = "Es obvio señalar que, ";
                    break;
                case 13:
                    SacaPedazo1 = "De hecho, ";
                    break;
                case 14:
                    SacaPedazo1 = "También cabe añadir en este punto que ";
                    break;

            }
            switch (getRandomInt(1, 14)) {
                case 1:
                    SacaPedazo2 = "la realización de las premisas del programa ";
                    break;
                case 2:
                    SacaPedazo2 = "la complejidad de los estudios de los dirigentes ";
                    break;
                case 3:
                    SacaPedazo2 = "el aumento constante, en cantidad y en extensión, de nuestra actividad ";
                    break;
                case 4:
                    SacaPedazo2 = "la estructura actual de la organización ";
                    break;
                case 5:
                    SacaPedazo2 = "el nuevo modelo de actividad de la organización, ";
                    break;
                case 6:
                    SacaPedazo2 = "el desarrollo continuo de distintas formas de actividad ";
                    break;
                case 7:
                    SacaPedazo2 = "nuestra actividad de información y propaganda ";
                    break;
                case 8:
                    SacaPedazo2 = "el reforzamiento y desarrollo de las estructuras ";
                    break;
                case 9:
                    SacaPedazo2 = "la consulta con los numerosos militantes ";
                    break;
                case 10:
                    SacaPedazo2 = "el inicio de la acción general de formación de las actitudes ";
                    break;
                case 11:
                    SacaPedazo2 = "un relanzamiento específico de todos los sectores implicados ";
                    break;
                case 12:
                    SacaPedazo2 = "la superación de experiencias periclitadas ";
                    break;
                case 13:
                    SacaPedazo2 = "una aplicación indiscriminada de los factores confluyentes ";
                    break;
                case 14:
                    SacaPedazo2 = "el proceso consensuado de unas y otras aplicaciones concurrentes ";
                    break;
            }
            switch (getRandomInt(1, 14)) {
                case 1:
                    SacaPedazo3 = "nos obliga a un exhaustivo análisis ";
                    break;
                case 2:
                    SacaPedazo3 = "cumple un rol esencial en la formación ";
                    break;
                case 3:
                    SacaPedazo3 = "exige la precisión y la determinación ";
                    break;
                case 4:
                    SacaPedazo3 = "ayuda a la preparación y a la realización ";
                    break;
                case 5:
                    SacaPedazo3 = "garantiza la participación de un grupo importante en la formación ";
                    break;
                case 6:
                    SacaPedazo3 = "cumple deberes importantes en la determinación ";
                    break;
                case 7:
                    SacaPedazo3 = "facilita la creación ";
                    break;
                case 8:
                    SacaPedazo3 = "obstaculiza la apreciación de la importancia ";
                    break;
                case 9:
                    SacaPedazo3 = "ofrece un ensayo interesante de verificación ";
                    break;
                case 10:
                    SacaPedazo3 = "implica el proceso de reestructuración y modernización ";
                    break;
                case 11:
                    SacaPedazo3 = "habrá de significar un auténtico y eficaz punto de partida ";
                    break;
                case 12:
                    SacaPedazo3 = "permite en todo caso explicitar las razones fundamentales ";
                    break;
                case 13:
                    SacaPedazo3 = "asegura, en todo caso, un proceso muy sensible de inversión ";
                    break;
                case 14:
                    SacaPedazo3 = "deriva de una indirecta incidencia superadora ";
                    break;
            }
            switch (getRandomInt(1, 14)) {
                case 1:
                    SacaPedazo4 = "de las condiciones financieras y administrativas existentes. ";
                    break;
                case 2:
                    SacaPedazo4 = "de las directivas de desarrollo para el futuro. ";
                    break;
                case 3:
                    SacaPedazo4 = "del sistema de participación general. ";
                    break;
                case 4:
                    SacaPedazo4 = "de las actitudes de los miembros hacia sus deberes ineludibles. ";
                    break;
                case 5:
                    SacaPedazo4 = "de las nuevas proposiciones. ";
                    break;
                case 6:
                    SacaPedazo4 = "de las direcciones educativas en el sentido del progreso. ";
                    break;
                case 7:
                    SacaPedazo4 = "del sistema de formación de cuadros que corresponda a las necesidades. ";
                    break;
                case 8:
                    SacaPedazo4 = "de las condiciones de las actividades apropiadas. ";
                    break;
                case 9:
                    SacaPedazo4 = "del modelo de desarrollo. ";
                    break;
                case 10:
                    SacaPedazo4 = "de las formas de acción. ";
                    break;
                case 11:
                    SacaPedazo4 = "de las básicas premisas adoptadas. ";
                    break;
                case 12:
                    SacaPedazo4 = "de toda una casuística de amplio espectro. ";
                    break;
                case 13:
                    SacaPedazo4 = "de los elementos generadores. ";
                    break;
                case 14:
                    SacaPedazo4 = "de toda una serie de criterios ideológicamente sistematizados en un frente común de actuación regeneradora. ";
                    break;
            }
            if (i == 1) {
                SacaPedazo2 = Character.toUpperCase(SacaPedazo2.charAt(0)) + SacaPedazo2.substring(1);
                discurso += SacaPedazo2 + SacaPedazo3 + SacaPedazo4;
            } else {
                discurso += SacaPedazo1 + SacaPedazo2 + SacaPedazo3 + SacaPedazo4;
            }
        }
        return discurso;
    }

    public String getLabels(Integer labels) {
        String labelstext = "";

        ArrayList<String> arrLabels = new ArrayList<>();

        arrLabels.add("Mejora, ");
        arrLabels.add("Descuento, ");
        arrLabels.add("Anticrisis, ");
        arrLabels.add("Calidad, ");
        arrLabels.add("Esfuerzo, ");
        arrLabels.add("Práctica, ");
        arrLabels.add("Servicio, ");
        arrLabels.add("Experiencia, ");
        arrLabels.add("Innovavión, ");
        arrLabels.add("Tecnología, ");
        arrLabels.add("Programa, ");
        arrLabels.add("Complejidad, ");
        arrLabels.add("Actividades, ");
        arrLabels.add("Estructura, ");
        arrLabels.add("Organización, ");
        arrLabels.add("Desarrollo, ");
        arrLabels.add("Información, ");
        arrLabels.add("Estructuras, ");
        arrLabels.add("Actitudes, ");
        arrLabels.add("Relanzamiento, ");
        arrLabels.add("Sectores, ");
        arrLabels.add("Aplicación, ");
        arrLabels.add("Proceso, ");
        for (int i = 1; i <= labels; i++) {
            labelstext += arrLabels.get(getRandomInt(0, arrLabels.size() - 1));
        }
        return labelstext;
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

    public ReplyBean fill() throws Exception {
        if (this.checkpermission("fill")) {
            String data = null;

            Connection oConnection = null;
            ConnectionInterface oDataConnectionSource = null;
            oDataConnectionSource = getSourceConnection();
            oConnection = oDataConnectionSource.newConnection();

            MysqlData oMysqlData = new MysqlData(oConnection);

            oMysqlData.truncateTable("document");
            oMysqlData.truncateTable("documenttype");
            oMysqlData.truncateTable("post");
            oMysqlData.truncateTable("product");
            oMysqlData.truncateTable("producttype");
            oMysqlData.truncateTable("purchase");
            oMysqlData.truncateTable("user");
            oMysqlData.truncateTable("usertype");

            UsertypeBean oUsertypeBean = new UsertypeBean();
            UsertypeDao oUsertypeDao = new UsertypeDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));

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

            PuserBean oPuserBean = new PuserBean();
            UserDao oUserDao = new UserDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));
            oPuserBean.setId(0);
            oPuserBean.setName("Rafael Angel");
            oPuserBean.setSurname("Aznar Aparici");
            oPuserBean.setLogin("rafael");
            oPuserBean.setPassword(sha256("rafael"));
            String Via = arrVia.get(getRandomInt(0, arrVia.size() - 1));
            String Via1 = arrNombre.get(getRandomInt(0, arrNombre.size() - 1));
            String Via2 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
            String num = (String) getRandomInt(1, 100).toString();
            oPuserBean.setAddress(Via + " de " + Via1 + " " + Via2 + ", nº " + num);
            oPuserBean.setCity("Valencia");
            oPuserBean.setZip("46" + getDigito() + getDigito() + getDigito());
            oPuserBean.setState("València");
            oPuserBean.setCountry("Spain");
            oPuserBean.setEmail("rafaaznar@gmail.com");
            oPuserBean.setPhone("6" + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito());
            oPuserBean.setId_usertype(1);
            try {
                oUserDao.setP(oPuserBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
            }

            int num1;
            int num2;

            for (int i = 1; i <= 100; i++) {
                oPuserBean = new PuserBean();
                oPuserBean.setId(0);
                String Name = arrNombre.get(getRandomInt(0, arrNombre.size() - 1));
                String Surname1 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
                String Surname2 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
                oPuserBean.setName(Name);
                oPuserBean.setSurname(Surname1 + ' ' + Surname2);
                String Login = (Name.substring(0, 3) + Surname1.substring(0, 2) + Surname2.substring(0, 2)).toLowerCase();
                oPuserBean.setLogin(Login);
                MessageDigest oDigest = MessageDigest.getInstance("SHA-256");
                oPuserBean.setPassword(sha256(Login));
                Via = arrVia.get(getRandomInt(0, arrVia.size() - 1));
                Via1 = arrNombre.get(getRandomInt(0, arrNombre.size() - 1));
                Via2 = arrApe.get(getRandomInt(0, arrApe.size() - 1));
                num = (String) getRandomInt(1, 100).toString();
                oPuserBean.setAddress(Via + " de " + Via1 + " " + Via2 + ", nº " + num);
                oPuserBean.setCity(arrPoblacion.get(getRandomInt(0, arrApe.size() - 1)));
                oPuserBean.setZip("46" + getDigito() + getDigito() + getDigito());
                //oUserBean.setZip("46" + String.format("%0010d", Integer.parseInt(getRandomInt(1, 999).toString())));
                oPuserBean.setState("València");
                oPuserBean.setCountry("Spain");
                oPuserBean.setEmail(Login + arrEmail.get(getRandomInt(0, arrEmail.size() - 1)));
                oPuserBean.setPhone("6" + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito() + getDigito());
                //oUserBean.setZip("6" + String.format("%10000000d", Integer.parseInt(getRandomInt(1, 99999999).toString())));
                oPuserBean.setId_usertype(getRandomInt(2, 4));

                try {
                    oUserDao.setP(oPuserBean);
                } catch (Exception e) {
                    return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 1: " + e.getMessage()));
                }
            }
            ArrayList<String> uno = new ArrayList<>();
            ArrayList<String> dos = new ArrayList<>();

            uno.add("Herramienta");
            uno.add("Accesorio");
            uno.add("Producto");
            uno.add("Artículo");
            uno.add("Referencia");
            uno.add("Mercancía");
            uno.add("Género");

            dos.add("manual");
            dos.add("automático");
            dos.add("descatalogado");
            dos.add("preferente");

            String primero;
            String segundo;

            ProducttypeBean oProducttypeBean = new ProducttypeBean();
            ProducttypeDao oProducttypeDao = new ProducttypeDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));

            Integer contador = 0;
            Iterator<String> iterador1 = uno.listIterator();
            while (iterador1.hasNext()) {
                primero = iterador1.next();
                contador++;
                Iterator<String> iterador2 = dos.listIterator();
                while (iterador2.hasNext()) {
                    segundo = iterador2.next();
                    contador++;
                    oProducttypeBean.setId(0);
                    oProducttypeBean.setDescription(primero + " " + segundo);
                    oProducttypeBean.setDiscount(getRandomInt(0, 5).doubleValue());
                    try {
                        oProducttypeDao.set(oProducttypeBean);

                    } catch (Exception e) {
                        return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 2: " + e.getMessage()));
                    }

                }
            }

            //-----------
            uno = new ArrayList<>();
            dos = new ArrayList<>();
            ArrayList<String> tres = new ArrayList<>();

            uno.add("Llave");
            uno.add("Soldador");
            uno.add("Pieza");
            uno.add("Herramienta");
            uno.add("Asadura");
            uno.add("Mecanizador");
            uno.add("Bote");
            uno.add("Manivela");
            uno.add("Pasante");
            uno.add("Rejilla");
            uno.add("Torno");
            uno.add("Accionamiento");
            uno.add("Fijación");
            uno.add("Bajante");
            uno.add("Sujeción");

            dos.add("auxiliar");
            dos.add("manual");
            dos.add("con rodadura");
            dos.add("extensivo");
            dos.add("intensivo");

            tres.add("de emergencia");
            tres.add("de repuesto");
            tres.add("de paso");
            tres.add("de acople");
            tres.add("de mano");

            ProductBean oProductBean = new ProductBean();
            ProductDao oProductDao = new ProductDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));
            String tercero;
            contador = 0;
            iterador1 = uno.listIterator();
            while (iterador1.hasNext()) {
                primero = iterador1.next();
                contador++;
                Iterator<String> iterador2 = dos.listIterator();
                while (iterador2.hasNext()) {
                    segundo = iterador2.next();
                    contador++;
                    Iterator<String> iterador3 = tres.listIterator();
                    while (iterador3.hasNext()) {
                        tercero = iterador3.next();
                        contador++;
                        Random generator = new Random();
                        oProductBean.setId(0);
                        oProductBean.setCode(Character.toUpperCase(primero.charAt(0)) + Character.toUpperCase(segundo.charAt(0)) + contador.toString() + Character.toUpperCase(tercero.charAt(0)));
                        oProductBean.setDescription(primero + " " + segundo + " " + tercero);
                        oProductBean.setPrice(Double.parseDouble(Integer.toString(generator.nextInt(2000)) + "." + Integer.toString(generator.nextInt(99))));
                        oProductBean.setId_producttype(getRandomInt(1, 28));
                        oProductBean.setStock(getRandomInt(1, 2000));
                        try {
                            oProductDao.set(oProductBean);
                        } catch (Exception e) {
                            return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 3: " + e.getMessage()));
                        }
                    }
                }
            }

            DocumenttypeBean oDocumenttypeBean = new DocumenttypeBean();
            DocumenttypeDao oDocumenttypeDao = new DocumenttypeDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));

            oDocumenttypeBean.setId(0);
            oDocumenttypeBean.setDescription("Pendiente");
            try {
                oDocumenttypeDao.set(oDocumenttypeBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 6a: " + e.getMessage()));
            }
            oDocumenttypeBean.setId(0);
            oDocumenttypeBean.setDescription("Cobrado");
            try {
                oDocumenttypeDao.set(oDocumenttypeBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 6b: " + e.getMessage()));
            }
            oDocumenttypeBean.setId(0);
            oDocumenttypeBean.setDescription("Pendiente de remesar");
            try {
                oDocumenttypeDao.set(oDocumenttypeBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 6c: " + e.getMessage()));
            }
            oDocumenttypeBean.setId(0);
            oDocumenttypeBean.setDescription("Remesado");
            try {
                oDocumenttypeDao.set(oDocumenttypeBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 6d: " + e.getMessage()));
            }
            oDocumenttypeBean.setId(0);
            oDocumenttypeBean.setDescription("Devuelto");
            try {
                oDocumenttypeDao.set(oDocumenttypeBean);
            } catch (Exception e) {
                return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 6: " + e.getMessage()));
            }

            //---------DOCUMENT----------
            DocumentBean oDocumentBean = new DocumentBean();
            DocumentDao oDocumentDao = new DocumentDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));
            for (int i = 1; i <= 100; i++) {
                oDocumentBean.setId(0);
                oDocumentBean.setDescription("Factura");
                oDocumentBean.setCreation(getRandDate(getRandomInt(0, 5000)));
                oDocumentBean.setFreezed(Boolean.FALSE);
                oDocumentBean.setId_documenttype(getRandomInt(1, 5));
                oDocumentBean.setId_user(getRandomInt(1, 100));
                try {
                    oDocumentDao.set(oDocumentBean);
                } catch (Exception e) {
                    return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 7: " + e.getMessage()));
                }

            }
            //---------PURCHASE----------
            PurchaseBean oPurchaseBean = new PurchaseBean();
            PurchaseDao oPurchaseDao = new PurchaseDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));
            for (int i = 1; i <= 3000; i++) {
                oPurchaseBean.setId(0);
                oPurchaseBean.setDate(getRandDate(getRandomInt(0, 5000)));
                oPurchaseBean.setId_document(getRandomInt(1, 100));
                oPurchaseBean.setId_user(getRandomInt(1, 100));
                oPurchaseBean.setId_product(getRandomInt(1, 370));
                oPurchaseBean.setQuantity(getRandomInt(1, 20));
                try {
                    oPurchaseDao.set(oPurchaseBean);
                } catch (Exception e) {
                    return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 8: " + e.getMessage()));
                }

            }

            //---------POST----------
            PostBean oPostBean = new PostBean();
            PostDao oPostDao = new PostDao(oConnection, (PuserBean) oRequest.getSession().getAttribute("userBean"));
            for (int i = 1; i <= 3000; i++) {
                oPostBean.setId(0);
                oPostBean.setTitle(getText(1));
                oPostBean.setContent(getText(getRandomInt(3, 15)));
                oPostBean.setCreation(getRandDate(getRandomInt(0, 5000)));
                oPostBean.setHits(0);
                oPostBean.setLabels(getLabels(getRandomInt(1, 4)));
                oPostBean.setId_user(getRandomInt(1, 100));
                oPostBean.setPublished(Boolean.TRUE);
                oPostBean.setEmphasized(Boolean.FALSE);
                oPostBean.setFrontpaged(Boolean.TRUE);
                try {
                    oPostDao.set(oPostBean);
                } catch (Exception e) {
                    return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: Update Error: Phase 8: " + e.getMessage()));
                }

            }
        }
        return new ReplyBean(500, JsonMessage.getJsonMsg(500, "Fill: OK"));
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
