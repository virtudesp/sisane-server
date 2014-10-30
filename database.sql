
-- phpMyAdmin SQL Dump
-- version 3.5.8
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Oct 27, 2014 at 04:28 AM
-- Server version: 5.5.30
-- PHP Version: 5.4.14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `openausias`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ape1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ape2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=251 ;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `ape1`, `ape2`, `email`) VALUES
(1, 'Rafael Ãngel', 'Orondon1', 'Pelota', 'rafa@rafa.es'),
(2, 'Jose Joaquín', 'Mondragón', 'Aragonés', 'pepe@pep.es'),
(10, 'Jaime', 'Lincoln', 'Garcia', 'jaimel@jjd.es'),
(14, 'Pepitiño', 'González', 'Perujo', 'pegope@gamilito.com'),
(15, 'Javier', 'Lomo', 'Toro', 'jaloto@de.es'),
(19, 'Berni', 'Rodriguez', 'Lopex', 'bern4@dde.es'),
(21, 'Ronaldo', 'Lopez', 'González', 'rologo@ron.es'),
(22, 'Rogelio', 'Caramillo', 'Gonzalo', 'rogo@gmailito.es'),
(23, 'José', 'Rogelio', 'Miranda', 'jose@rog.es'),
(25, 'Patricio', 'Esponjoso', 'Calamardinao', 'paes@bob.com'),
(31, 'Rafael', 'Sanchis', 'Valverde', 'rasava@suwebr.com'),
(33, 'Milagros', 'Viñuelas', 'Cousido', 'mivico@gorseg.com'),
(35, 'Maria', 'Vicente', 'Maldonado', 'mavido@humirty.com'),
(38, 'Lola', 'Viñuelas', 'Escorihuela', 'lovies@ausiasmarch.net'),
(39, 'Alejandra', 'Polop', 'Jovellanos', 'al@joss.es'),
(40, 'Josefa', 'Gutierrez', 'Giménez', 'GutierrezGiménez@emailito.com'),
(41, 'Josefa', 'Montoya', 'Sanchís', 'MontoyaSanchís@emailito.com'),
(42, 'Santiago', 'Fernández', 'Domínguez', 'FernándezDomínguez@emailito.com'),
(43, 'Sebastián', 'Fernández', 'Montoya', 'FernándezMontoya@emailito.com'),
(44, 'Matías', 'García', 'Domínguez', 'GarcíaDomínguez@emailito.com'),
(45, 'Mateo', 'Alvarez', 'Sancho', 'AlvarezSancho@emailito.com'),
(46, 'Nicolás', 'Gómez', 'García', 'GómezGarcía@emailito.com'),
(47, 'Alejandro', 'Sanchís', 'García', 'SanchísGarcía@emailito.com'),
(48, 'Diego', 'Perez', 'Gutierrez', 'PerezGutierrez@emailito.com'),
(49, 'Samuel', 'Perez', 'Rodríguez', 'PerezRodríguez@emailito.com'),
(50, 'Benjamín', 'Fernández', 'Sancho', 'FernándezSancho@emailito.com'),
(51, 'Daniel', 'López', 'Fernández', 'LópezFernández@emailito.com'),
(52, 'Joaquín', 'López', 'Perez', 'LópezPerez@emailito.com'),
(53, 'Lucas', 'Alvarez', 'Gómez', 'AlvarezGómez@emailito.com'),
(54, 'Tomas', 'Sanchís', 'Gutierrez', 'SanchísGutierrez@emailito.com'),
(55, 'Gabriel', 'Giménez', 'Sanchís', 'GiménezSanchís@emailito.com'),
(56, 'Martín', 'Sanchís', 'Sancho', 'SanchísSancho@emailito.com'),
(57, 'David', 'López', 'Alvarez', 'LópezAlvarez@emailito.com'),
(58, 'Emiliano', 'López', 'Sanchís', 'LópezSanchís@emailito.com'),
(59, 'Jerónimo', 'Giménez', 'Gómez', 'GiménezGómez@emailito.com'),
(60, 'Emmanuel', 'Giménez', 'Domínguez', 'GiménezDomínguez@emailito.com'),
(61, 'Agustín', 'González', 'García', 'GonzálezGarcía@emailito.com'),
(62, 'Juan Pablo', 'Gutierrez', 'Hernandez', 'GutierrezHernandez@emailito.com'),
(63, 'Juan José', 'Perez', 'García', 'PerezGarcía@emailito.com'),
(64, 'Andrés', 'García', 'Perez', 'GarcíaPerez@emailito.com'),
(65, 'Thiago', 'Sancho', 'Alvarez', 'SanchoAlvarez@emailito.com'),
(66, 'Leonardo', 'Giménez', 'Hernandez', 'GiménezHernandez@emailito.com'),
(67, 'Felipe', 'Sanchís', 'Rodríguez', 'SanchísRodríguez@emailito.com'),
(68, 'Ángel', 'González', 'González', 'GonzálezGonzález@emailito.com'),
(69, 'Maximiliano', 'Gutierrez', 'Domínguez', 'GutierrezDomínguez@emailito.com'),
(70, 'Christopher', 'Gómez', 'Gómez', 'GómezGómez@emailito.com'),
(71, 'Juan Diego', 'Rodríguez', 'Sancho', 'RodríguezSancho@emailito.com'),
(72, 'Adrián', 'Hernandez', 'Domínguez', 'HernandezDomínguez@emailito.com'),
(73, 'Pablo', 'Domínguez', 'Giménez', 'DomínguezGiménez@emailito.com'),
(74, 'Miguel Ángel', 'González', 'Perez', 'GonzálezPerez@emailito.com'),
(75, 'Rodrigo', 'Perez', 'Alvarez', 'PerezAlvarez@emailito.com'),
(76, 'Alexander', 'Gómez', 'Hernandez', 'GómezHernandez@emailito.com'),
(77, 'Ignacio', 'Perez', 'Alvarez', 'PerezAlvarez@emailito.com'),
(78, 'Emilio', 'Domínguez', 'López', 'DomínguezLópez@emailito.com'),
(79, 'Dylan', 'Hernandez', 'Gómez', 'HernandezGómez@emailito.com'),
(80, 'Bruno', 'Sancho', 'Martínez', 'SanchoMartínez@emailito.com'),
(81, 'Carlos', 'Alvarez', 'González', 'AlvarezGonzález@emailito.com'),
(82, 'Vicente', 'Fernández', 'Sanchís', 'FernándezSanchís@emailito.com'),
(83, 'Valentino', 'Giménez', 'García', 'GiménezGarcía@emailito.com'),
(84, 'Santino', 'Perez', 'Sancho', 'PerezSancho@emailito.com'),
(85, 'Julián', 'Martínez', 'García', 'MartínezGarcía@emailito.com'),
(86, 'Juan Sebastián', 'García', 'Perez', 'GarcíaPerez@emailito.com'),
(87, 'Aarón', 'Sanchís', 'Montoya', 'SanchísMontoya@emailito.com'),
(88, 'Lautaro', 'Sancho', 'Rodríguez', 'SanchoRodríguez@emailito.com'),
(89, 'Axel', 'Gómez', 'Giménez', 'GómezGiménez@emailito.com'),
(90, 'Fernando', 'Sancho', 'Domínguez', 'SanchoDomínguez@emailito.com'),
(91, 'Ian', 'Hernandez', 'Montoya', 'HernandezMontoya@emailito.com'),
(92, 'Christian', 'Gómez', 'Giménez', 'GómezGiménez@emailito.com'),
(93, 'Javier', 'Montoya', 'Domínguez', 'MontoyaDomínguez@emailito.com'),
(94, 'Manuel', 'Alvarez', 'Gutierrez', 'AlvarezGutierrez@emailito.com'),
(95, 'Luciano', 'García', 'Fernández', 'GarcíaFernández@emailito.com'),
(96, 'Francisco', 'Gómez', 'Sancho', 'GómezSancho@emailito.com'),
(97, 'Juan David', 'Rodríguez', 'García', 'RodríguezGarcía@emailito.com'),
(98, 'Íker', 'Sanchís', 'Hernandez', 'SanchísHernandez@emailito.com'),
(99, 'Facundo', 'Giménez', 'Gutierrez', 'GiménezGutierrez@emailito.com'),
(100, 'Rafael', 'Hernandez', 'Perez', 'HernandezPerez@emailito.com'),
(101, 'Alex', 'Domínguez', 'Montoya', 'DomínguezMontoya@emailito.com'),
(102, 'Franco', 'Rodríguez', 'Sanchís', 'RodríguezSanchís@emailito.com'),
(103, 'Antonio', 'Hernandez', 'Rodríguez', 'HernandezRodríguez@emailito.com'),
(104, 'Luis', 'López', 'Alvarez', 'LópezAlvarez@emailito.com'),
(105, 'Isaac', 'González', 'Hernandez', 'GonzálezHernandez@emailito.com'),
(106, 'Máximo', 'Martínez', 'Domínguez', 'MartínezDomínguez@emailito.com'),
(107, 'Pedrolo', 'Sancho', 'Perez', 'SanchoPerez@emailito.com'),
(108, 'Ricardo', 'Gómez', 'Sancho', 'GómezSancho@emailito.com'),
(109, 'Sergio', 'Sanchís', 'Gutierrez', 'SanchísGutierrez@emailito.com'),
(110, 'Eduardo', 'García', 'García', 'GarcíaGarcía@emailito.com'),
(111, 'Bautista', 'Domínguez', 'Sancho', 'DomínguezSancho@emailito.com'),
(112, 'Miguel', 'Giménez', 'Hernandez', 'GiménezHernandez@emailito.com'),
(113, 'Cristóbal', 'González', 'Hernandez', 'GonzálezHernandez@emailito.com'),
(114, 'Kevin', 'Gómez', 'Sanchís', 'GómezSanchís@emailito.com'),
(115, 'Jorge', 'González', 'Montoya', 'GonzálezMontoya@emailito.com'),
(116, 'Alonso', 'Rodríguez', 'López', 'RodríguezLópez@emailito.com'),
(117, 'Anthony', 'Domínguez', 'Fernández', 'DomínguezFernández@emailito.com'),
(118, 'Simón', 'López', 'Montoya', 'LópezMontoya@emailito.com'),
(119, 'Juan', 'Perez', 'González', 'PerezGonzález@emailito.com'),
(120, 'Joshua', 'Rodríguez', 'Gutierrez', 'RodríguezGutierrez@emailito.com'),
(121, 'Diego Alejandro', 'Gómez', 'Martínez', 'GómezMartínez@emailito.com'),
(122, 'Juan Manuel', 'Perez', 'Martínez', 'PerezMartínez@emailito.com'),
(123, 'Mario', 'Domínguez', 'Domínguez', 'DomínguezDomínguez@emailito.com'),
(124, 'Alan', 'Alvarez', 'Gutierrez', 'AlvarezGutierrez@emailito.com'),
(125, 'Josué', 'Perez', 'Martínez', 'PerezMartínez@emailito.com'),
(126, 'Gael', 'Gómez', 'Montoya', 'GómezMontoya@emailito.com'),
(127, 'Hugo', 'Montoya', 'Fernández', 'MontoyaFernández@emailito.com'),
(128, 'Matthew', 'Hernandez', 'Perez', 'HernandezPerez@emailito.com'),
(129, 'Ivan', 'Sanchís', 'Sanchís', 'SanchísSanchís@emailito.com'),
(130, 'Damián', 'Perez', 'García', 'PerezGarcía@emailito.com'),
(131, 'Lorenzo', 'Sancho', 'Alvarez', 'SanchoAlvarez@emailito.com'),
(132, 'Juan Martín', 'Domínguez', 'Giménez', 'DomínguezGiménez@emailito.com'),
(133, 'Esteban', 'Gómez', 'Fernández', 'GómezFernández@emailito.com'),
(134, 'Álvaro', 'Martínez', 'Hernandez', 'MartínezHernandez@emailito.com'),
(135, 'Valentín', 'Gómez', 'Domínguez', 'GómezDomínguez@emailito.com'),
(136, 'Dante', 'Martínez', 'Alvarez', 'MartínezAlvarez@emailito.com'),
(137, 'Jacobo', 'Sancho', 'Hernandez', 'SanchoHernandez@emailito.com'),
(138, 'Jesús', 'Hernandez', 'López', 'HernandezLópez@emailito.com'),
(139, 'Camilo', 'Sancho', 'Gutierrez', 'SanchoGutierrez@emailito.com'),
(140, 'Juan Esteban', 'García', 'García', 'GarcíaGarcía@emailito.com'),
(141, 'Elías', 'Fernández', 'Gómez', 'FernándezGómez@emailito.com'),
(142, 'Sofía', 'Giménez', 'Fernández', 'GiménezFernández@emailito.com'),
(143, 'Isabella', 'López', 'Gómez', 'LópezGómez@emailito.com'),
(144, 'Camila', 'Martínez', 'González', 'MartínezGonzález@emailito.com'),
(145, 'Valentina', 'Hernandez', 'Gutierrez', 'HernandezGutierrez@emailito.com'),
(146, 'Valeria', 'Domínguez', 'López', 'DomínguezLópez@emailito.com'),
(147, 'Mariana', 'Martínez', 'González', 'MartínezGonzález@emailito.com'),
(148, 'Luciana', 'Alvarez', 'González', 'AlvarezGonzález@emailito.com'),
(149, 'Daniela', 'Sancho', 'Domínguez', 'SanchoDomínguez@emailito.com'),
(150, 'Gabriela', 'Perez', 'Rodríguez', 'PerezRodríguez@emailito.com'),
(151, 'Victoria', 'Domínguez', 'López', 'DomínguezLópez@emailito.com'),
(152, 'Martina', 'González', 'Giménez', 'GonzálezGiménez@emailito.com'),
(153, 'Lucía', 'López', 'Sanchís', 'LópezSanchís@emailito.com'),
(154, 'Ximena/Jimena', 'Sanchís', 'Gutierrez', 'SanchísGutierrez@emailito.com'),
(155, 'Sara', 'Hernandez', 'Fernández', 'HernandezFernández@emailito.com'),
(156, 'Samantha', 'Martínez', 'Alvarez', 'MartínezAlvarez@emailito.com'),
(157, 'María José', 'González', 'Gómez', 'GonzálezGómez@emailito.com'),
(158, 'Emma', 'Hernandez', 'Sanchís', 'HernandezSanchís@emailito.com'),
(159, 'Catalina', 'Gómez', 'Sancho', 'GómezSancho@emailito.com'),
(160, 'Julieta', 'Giménez', 'González', 'GiménezGonzález@emailito.com'),
(161, 'Mía', 'Gutierrez', 'Fernández', 'GutierrezFernández@emailito.com'),
(162, 'Antonella', 'Alvarez', 'Gómez', 'AlvarezGómez@emailito.com'),
(163, 'Renata', 'García', 'Giménez', 'GarcíaGiménez@emailito.com'),
(164, 'Emilia', 'Sancho', 'Perez', 'SanchoPerez@emailito.com'),
(165, 'Natalia', 'Alvarez', 'Perez', 'AlvarezPerez@emailito.com'),
(166, 'Zoe', 'Martínez', 'Gutierrez', 'MartínezGutierrez@emailito.com'),
(167, 'Nicole', 'Montoya', 'Hernandez', 'MontoyaHernandez@emailito.com'),
(168, 'Paula', 'Gómez', 'Martínez', 'GómezMartínez@emailito.com'),
(169, 'Amanda', 'Sanchís', 'Rodríguez', 'SanchísRodríguez@emailito.com'),
(170, 'María Fernanda', 'Perez', 'Sanchís', 'PerezSanchís@emailito.com'),
(171, 'Emily', 'Gómez', 'Perez', 'GómezPerez@emailito.com'),
(172, 'Antonia', 'Giménez', 'López', 'GiménezLópez@emailito.com'),
(173, 'Alejandra', 'Montoya', 'Hernandez', 'MontoyaHernandez@emailito.com'),
(174, 'Juana', 'Alvarez', 'Perez', 'AlvarezPerez@emailito.com'),
(175, 'Andrea', 'Montoya', 'Montoya', 'MontoyaMontoya@emailito.com'),
(176, 'Manuela', 'Montoya', 'García', 'MontoyaGarcía@emailito.com'),
(177, 'Ana Sofía', 'Rodríguez', 'Gutierrez', 'RodríguezGutierrez@emailito.com'),
(178, 'Guadalupe', 'González', 'Gutierrez', 'GonzálezGutierrez@emailito.com'),
(179, 'Agustina', 'García', 'García', 'GarcíaGarcía@emailito.com'),
(180, 'Elena', 'Gutierrez', 'Fernández', 'GutierrezFernández@emailito.com'),
(181, 'María', 'Montoya', 'Giménez', 'MontoyaGiménez@emailito.com'),
(182, 'Bianca', 'Domínguez', 'Domínguez', 'DomínguezDomínguez@emailito.com'),
(183, 'Ariana', 'Montoya', 'Rodríguez', 'MontoyaRodríguez@emailito.com'),
(184, 'Ivanna', 'Perez', 'Sancho', 'PerezSancho@emailito.com'),
(185, 'Abril', 'Gómez', 'Hernandez', 'GómezHernandez@emailito.com'),
(186, 'Florencia', 'Rodríguez', 'López', 'RodríguezLópez@emailito.com'),
(187, 'Carolina', 'Gómez', 'Sanchís', 'GómezSanchís@emailito.com'),
(188, 'Maite', 'Fernández', 'Gutierrez', 'FernándezGutierrez@emailito.com'),
(189, 'Rafaela', 'Martínez', 'Sanchís', 'MartínezSanchís@emailito.com'),
(190, 'Regina', 'Fernández', 'García', 'FernándezGarcía@emailito.com'),
(191, 'Adriana', 'Fernández', 'Gutierrez', 'FernándezGutierrez@emailito.com'),
(192, 'Michelle', 'Gutierrez', 'Giménez', 'GutierrezGiménez@emailito.com'),
(193, 'Alma', 'Martínez', 'López', 'MartínezLópez@emailito.com'),
(194, 'Violeta', 'Sanchís', 'Domínguez', 'SanchísDomínguez@emailito.com'),
(195, 'Salomé', 'González', 'Hernandez', 'GonzálezHernandez@emailito.com'),
(196, 'Abigail', 'Perez', 'Giménez', 'PerezGiménez@emailito.com'),
(197, 'Juliana', 'López', 'Sancho', 'LópezSancho@emailito.com'),
(198, 'Valery', 'Hernandez', 'Rodríguez', 'HernandezRodríguez@emailito.com'),
(199, 'Isabel', 'Gutierrez', 'Gómez', 'GutierrezGómez@emailito.com'),
(200, 'Montserrat', 'García', 'González', 'GarcíaGonzález@emailito.com'),
(201, 'Allison', 'González', 'Gutierrez', 'GonzálezGutierrez@emailito.com'),
(202, 'Jazmín', 'Gutierrez', 'López', 'GutierrezLópez@emailito.com'),
(203, 'Julia', 'Rodríguez', 'Montoya', 'RodríguezMontoya@emailito.com'),
(204, 'Lola', 'Montoya', 'Fernández', 'MontoyaFernández@emailito.com'),
(205, 'Luna', 'Montoya', 'López', 'MontoyaLópez@emailito.com'),
(206, 'Ana', 'López', 'Rodríguez', 'LópezRodríguez@emailito.com'),
(207, 'Delfina', 'Gutierrez', 'Giménez', 'GutierrezGiménez@emailito.com'),
(208, 'Alessandra', 'Gómez', 'Gómez', 'GómezGómez@emailito.com'),
(209, 'Ashley', 'Gutierrez', 'Giménez', 'GutierrezGiménez@emailito.com'),
(210, 'Olivia', 'Fernández', 'Sanchís', 'FernándezSanchís@emailito.com'),
(211, 'Constanza', 'Hernandez', 'Martínez', 'HernandezMartínez@emailito.com'),
(212, 'Paulina', 'Sancho', 'Domínguez', 'SanchoDomínguez@emailito.com'),
(213, 'Rebeca', 'López', 'Martínez', 'LópezMartínez@emailito.com'),
(214, 'Carla', 'Gutierrez', 'Perez', 'GutierrezPerez@emailito.com'),
(215, 'María Paula', 'Montoya', 'Gutierrez', 'MontoyaGutierrez@emailito.com'),
(216, 'Micaela', 'Alvarez', 'Domínguez', 'AlvarezDomínguez@emailito.com'),
(217, 'Fabiana', 'Perez', 'Fernández', 'PerezFernández@emailito.com'),
(218, 'Miranda', 'González', 'García', 'GonzálezGarcía@emailito.com'),
(219, 'Josefina', 'Domínguez', 'Domínguez', 'DomínguezDomínguez@emailito.com'),
(220, 'Laura', 'Alvarez', 'Gutierrez', 'AlvarezGutierrez@emailito.com'),
(221, 'Alexa', 'Sanchís', 'Hernandez', 'SanchísHernandez@emailito.com'),
(222, 'María Alejandra', 'Gutierrez', 'López', 'GutierrezLópez@emailito.com'),
(223, 'Luana', 'Fernández', 'López', 'FernándezLópez@emailito.com'),
(224, 'Fátima', 'Sancho', 'García', 'SanchoGarcía@emailito.com'),
(225, 'Sara Sofía', 'Giménez', 'Fernández', 'GiménezFernández@emailito.com'),
(226, 'Isidora', 'Gutierrez', 'González', 'GutierrezGonzález@emailito.com'),
(227, 'Malena', 'Hernandez', 'Fernández', 'HernandezFernández@emailito.com'),
(228, 'Romina', 'Sancho', 'García', 'SanchoGarcía@emailito.com'),
(229, 'Ana Paula', 'González', 'Fernández', 'GonzálezFernández@emailito.com'),
(230, 'Mariangel', 'Perez', 'Alvarez', 'PerezAlvarez@emailito.com'),
(231, 'Amelia', 'Alvarez', 'Domínguez', 'AlvarezDomínguez@emailito.com'),
(232, 'Elizabeth', 'Giménez', 'Montoya', 'GiménezMontoya@emailito.com'),
(233, 'Aitana', 'Martínez', 'Montoya', 'MartínezMontoya@emailito.com'),
(234, 'Ariadna', 'Gómez', 'García', 'GómezGarcía@emailito.com'),
(235, 'María Camila', 'Giménez', 'Gutierrez', 'GiménezGutierrez@emailito.com'),
(236, 'Irene', 'García', 'Montoya', 'GarcíaMontoya@emailito.com'),
(237, 'Silvana', 'Perez', 'Domínguez', 'PerezDomínguez@emailito.com'),
(238, 'Clara', 'Rodríguez', 'Alvarez', 'RodríguezAlvarez@emailito.com'),
(239, 'Magdalena', 'Gómez', 'Giménez', 'GómezGiménez@emailito.com'),
(240, 'Sophie', 'Sanchís', 'Domínguez', 'SanchísDomínguez@emailito.com'),
(241, 'Josefa', 'Fernández', 'Montoya', 'FernándezMontoya@emailito.com'),
(245, 'Rafael', 'asssss', 'sddddddd', 'rrrrrrrrrrrrrrr44'),
(247, 'josefa', '222', '333', '444'),
(248, 'qqqqqqq', 'wwwwwwwwwwwww', 'eeeeeeeeeeee', 'rrrrrrrrrrrrrrrrr'),
(249, 'rfv', 'edc', 'wsx', 'qaz'),
(250, 'asdfghjk', '112233', 'hyyyyy', '34eeeeeee');

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

CREATE TABLE IF NOT EXISTS `compra` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(6) DEFAULT NULL,
  `id_producto` int(6) DEFAULT NULL,
  `cantidad` int(6) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_factura` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=193 ;

--
-- Dumping data for table `compra`
--

INSERT INTO `compra` (`id`, `id_cliente`, `id_producto`, `cantidad`, `fecha`, `id_factura`) VALUES
(2, 10, 2, 11, '2012-05-10', NULL),
(3, 188, 60, 248, '2013-08-04', NULL),
(5, 59, 44, 122, '1970-01-01', NULL),
(6, 131, 23, 154, NULL, NULL),
(7, 23, 16, 39, NULL, NULL),
(8, 77, 32, 109, NULL, NULL),
(9, 179, 27, 206, NULL, NULL),
(10, 61, 61, 122, NULL, NULL),
(11, 39, 8, 47, NULL, NULL),
(12, 49, 13, 157, '1970-01-01', NULL),
(13, 57, 92, 149, NULL, NULL),
(14, 98, 35, 133, NULL, NULL),
(15, 27, 79, 106, NULL, NULL),
(16, 9, 10, 19, NULL, NULL),
(17, 131, 63, 194, NULL, NULL),
(18, 121, 71, 192, NULL, NULL),
(19, 185, 96, 281, NULL, NULL),
(20, 173, 65, 238, NULL, NULL),
(21, 115, 34, 149, NULL, NULL),
(22, 32, 42, 74, NULL, NULL),
(23, 57, 37, 94, NULL, NULL),
(24, 144, 28, 172, NULL, NULL),
(25, 128, 91, 219, NULL, NULL),
(26, 40, 17, 57, NULL, NULL),
(27, 78, 82, 160, NULL, NULL),
(28, 59, 32, 91, NULL, NULL),
(29, 158, 51, 209, NULL, NULL),
(30, 45, 59, 104, NULL, NULL),
(31, 97, 88, 185, NULL, NULL),
(32, 187, 22, 209, '1970-01-01', NULL),
(33, 200, 74, 274, NULL, NULL),
(34, 36, 4, 40, NULL, NULL),
(35, 178, 68, 246, NULL, NULL),
(36, 104, 8, 112, NULL, NULL),
(37, 32, 17, 49, NULL, NULL),
(38, 168, 53, 221, NULL, NULL),
(39, 138, 58, 196, NULL, NULL),
(40, 165, 53, 218, NULL, NULL),
(41, 176, 85, 261, NULL, NULL),
(42, 80, 93, 173, NULL, NULL),
(43, 24, 3, 27, NULL, NULL),
(44, 59, 94, 153, NULL, NULL),
(45, 23, 69, 92, NULL, NULL),
(46, 37, 100, 137, NULL, NULL),
(47, 102, 99, 201, NULL, NULL),
(48, 65, 78, 143, NULL, NULL),
(49, 169, 85, 254, NULL, NULL),
(50, 173, 69, 242, NULL, NULL),
(51, 54, 80, 134, NULL, NULL),
(52, 98, 76, 174, NULL, NULL),
(53, 40, 31, 71, NULL, NULL),
(54, 112, 83, 195, NULL, NULL),
(55, 76, 19, 95, NULL, NULL),
(56, 45, 76, 121, NULL, NULL),
(57, 160, 41, 201, NULL, NULL),
(58, 131, 23, 154, NULL, NULL),
(59, 49, 3, 52, NULL, NULL),
(60, 1, 65, 999, '2014-01-25', 0),
(61, 28, 16, 44, NULL, NULL),
(62, 59, 70, 129, NULL, NULL),
(63, 195, 95, 290, NULL, NULL),
(64, 3, 72, 75, NULL, NULL),
(65, 67, 32, 99, NULL, NULL),
(66, 172, 53, 225, NULL, NULL),
(67, 82, 75, 157, NULL, NULL),
(68, 149, 58, 207, NULL, NULL),
(69, 113, 70, 183, NULL, NULL),
(70, 168, 45, 213, NULL, NULL),
(71, 88, 48, 136, NULL, NULL),
(72, 31, 20, 51, NULL, NULL),
(73, 193, 26, 219, NULL, NULL),
(74, 195, 20, 215, NULL, NULL),
(75, 87, 52, 139, NULL, NULL),
(76, 44, 77, 121, NULL, NULL),
(77, 179, 83, 262, NULL, NULL),
(78, 113, 11, 124, NULL, NULL),
(79, 179, 96, 275, NULL, NULL),
(80, 22, 78, 100, NULL, NULL),
(81, 154, 56, 210, NULL, NULL),
(82, 51, 28, 79, NULL, NULL),
(83, 116, 22, 138, NULL, NULL),
(84, 44, 98, 142, NULL, NULL),
(85, 179, 46, 225, NULL, NULL),
(86, 161, 45, 206, NULL, NULL),
(87, 144, 61, 205, NULL, NULL),
(88, 162, 35, 197, NULL, NULL),
(89, 197, 58, 255, NULL, NULL),
(90, 112, 53, 165, NULL, NULL),
(91, 21, 45, 66, NULL, NULL),
(92, 20, 58, 78, NULL, NULL),
(93, 74, 78, 152, NULL, NULL),
(94, 128, 30, 158, NULL, NULL),
(95, 27, 65, 92, NULL, NULL),
(96, 178, 42, 220, NULL, NULL),
(97, 32, 94, 126, NULL, NULL),
(98, 29, 18, 47, NULL, NULL),
(99, 36, 83, 119, NULL, NULL),
(100, 108, 91, 199, NULL, NULL),
(101, 172, 28, 200, NULL, NULL),
(102, 111, 70, 181, NULL, NULL),
(103, 66, 88, 154, NULL, NULL),
(104, 6, 18, 24, NULL, NULL),
(105, 7, 88, 95, NULL, NULL),
(106, 136, 12, 148, NULL, NULL),
(107, 142, 65, 207, NULL, NULL),
(108, 115, 38, 153, NULL, NULL),
(109, 135, 48, 183, NULL, NULL),
(110, 50, 19, 69, NULL, NULL),
(111, 183, 82, 265, NULL, NULL),
(112, 169, 55, 224, NULL, NULL),
(113, 22, 33, 55, NULL, NULL),
(114, 196, 15, 211, NULL, NULL),
(115, 190, 57, 247, NULL, NULL),
(116, 153, 87, 240, NULL, NULL),
(117, 131, 41, 172, NULL, NULL),
(118, 149, 10, 159, NULL, NULL),
(119, 7, 85, 92, NULL, NULL),
(120, 109, 85, 194, NULL, NULL),
(121, 200, 72, 272, NULL, NULL),
(122, 29, 62, 91, NULL, NULL),
(123, 169, 47, 216, NULL, NULL),
(124, 174, 78, 252, NULL, NULL),
(125, 75, 90, 165, NULL, NULL),
(126, 115, 78, 193, NULL, NULL),
(127, 75, 31, 106, NULL, NULL),
(128, 80, 52, 132, NULL, NULL),
(129, 140, 2, 141, '2000-01-31', 141),
(130, 24, 68, 92, NULL, NULL),
(131, 159, 60, 219, NULL, NULL),
(132, 30, 17, 47, NULL, NULL),
(133, 58, 32, 90, NULL, NULL),
(134, 152, 4, 156, NULL, NULL),
(135, 180, 20, 200, NULL, NULL),
(136, 61, 98, 159, NULL, NULL),
(137, 155, 25, 180, NULL, NULL),
(138, 161, 43, 204, NULL, NULL),
(139, 9, 30, 39, NULL, NULL),
(140, 101, 48, 149, NULL, NULL),
(141, 68, 80, 148, NULL, NULL),
(142, 118, 35, 153, NULL, NULL),
(143, 144, 89, 233, NULL, NULL),
(144, 147, 95, 242, NULL, NULL),
(145, 96, 38, 134, NULL, NULL),
(146, 132, 14, 146, NULL, NULL),
(147, 24, 98, 122, NULL, NULL),
(148, 64, 50, 114, NULL, NULL),
(149, 153, 64, 217, NULL, NULL),
(150, 42, 37, 79, NULL, NULL),
(151, 60, 47, 107, NULL, NULL),
(152, 121, 37, 158, NULL, NULL),
(153, 83, 65, 148, NULL, NULL),
(154, 70, 29, 99, NULL, NULL),
(155, 183, 94, 277, NULL, NULL),
(156, 89, 32, 121, NULL, NULL),
(157, 130, 80, 210, NULL, NULL),
(158, 95, 47, 142, NULL, NULL),
(159, 53, 29, 112, NULL, NULL),
(160, 23, 354, 2, NULL, NULL),
(161, 2, 4, 1, NULL, NULL),
(162, 1, 8, 1, '2013-10-20', 1),
(163, 1, 5, 22, NULL, NULL),
(167, 10, 5, 22, '2013-01-05', NULL),
(168, 14, 13, 2, '2013-11-10', NULL),
(169, 14, 12, 3, '2013-11-10', NULL),
(170, 22, 2, 4, '2013-11-11', NULL),
(171, 21, 1, 1, '2013-11-11', NULL),
(172, 67, 25, 22, '2013-03-11', NULL),
(173, 1, 12, 2, '2013-11-01', 2),
(174, 1, 11, 22, '2013-11-11', NULL),
(175, 22, 1, 22, '2012-02-11', NULL),
(177, 23, 5, 2, '2013-11-11', NULL),
(178, 1, 1, 2, '2013-11-11', NULL),
(179, 0, 0, 0, '2014-01-14', 0),
(180, 0, 0, 0, '2014-01-14', 0),
(181, 0, 0, 0, '2014-01-14', 0),
(182, 0, 0, 0, '2014-01-14', 0),
(183, 0, 0, 0, '2014-01-14', 0),
(184, 0, 0, 0, '2014-01-14', 0),
(185, 0, 0, 0, '2014-01-14', 0),
(186, 0, 0, 0, '2014-01-14', 0),
(187, 0, 0, 0, '2014-01-14', 0),
(188, 0, 0, 0, '2014-01-15', 0),
(189, 1, 2, 67, '2014-01-15', 67),
(190, 14, 1, 1, '2014-01-15', 1),
(191, 1, 1, 33, '2014-01-22', NULL),
(192, 2, 2, 66, '2014-01-01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `documento`
--

CREATE TABLE IF NOT EXISTS `documento` (
  `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Num.',
  `titulo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Titulo',
  `contenido` longtext COLLATE utf8_unicode_ci COMMENT 'Contenido',
  `alta` date DEFAULT NULL COMMENT 'Alta',
  `cambio` date DEFAULT NULL COMMENT 'Cambio',
  `hits` int(10) DEFAULT NULL COMMENT 'Hits',
  `id_usuario` int(6) DEFAULT NULL COMMENT 'Usuario',
  `etiquetas` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Etiquetas',
  `publicado` tinyint(1) DEFAULT NULL COMMENT 'Publicado',
  `portada` tinyint(1) DEFAULT NULL COMMENT 'Portada',
  `destacado` tinyint(1) DEFAULT NULL COMMENT 'Destacado',
  `id_tipodocumento` int(6) DEFAULT NULL COMMENT 'Tipo',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=50 ;

--
-- Dumping data for table `documento`
--

INSERT INTO `documento` (`id`, `titulo`, `contenido`, `alta`, `cambio`, `hits`, `id_usuario`, `etiquetas`, `publicado`, `portada`, `destacado`, `id_tipodocumento`) VALUES
(1, 'drdrdrttt', '%3D%20Entrega%20de%20premios%20%3D%0D%0Asffsdf%0D%0A%0D%0AIntroducci%C3%B3n%0D%0A%0D%0A%20*%20ksjdlk%0D%0A%20*%20klk%C3%B1%0D%0A%20*%20k%C3%B1lk%C3%B1l%0D%0A%0D%0A//gdfg//%0D%0Adfgdf%0D%0Adfgdf%0D%0Adfgdfg%0D%0A%0D%0Adfgdfg%0D%0Adfgdf%0D%0Agggggggggggggg%20dgdfgdfgd%0D%0Ag%20dfgdfgdfgdfgd%0D%0Adfgdgdfdd%0D%0A', '2014-10-26', '2014-10-26', 16111, 3, 'ss222', 0, 0, 0, 5),
(2, 'doc%20de%20rafa1aaa', '%3DMi%20documento%2001%3D%0D%0A%0D%0A%20...', '2014-09-21', '2014-09-21', 411, 4, 'fssszzaaaaaaaaaaaaaaa', 1, 1, 0, 2),
(3, 'wwww1111', 'ggtttqqqd%20asdasdas%20das', '2014-09-28', '2014-09-28', 22, 5, 'gfhgf', 1, 1, 0, 3),
(4, 'sss', 'www', '2014-09-11', '2014-09-11', 0, 3, 'asd', 1, 1, 0, 2),
(5, 'DFGDFG', 'HDFHDF', '2014-09-16', '2014-09-16', 1, 2, 'aasx%20ssss', 1, 1, 0, 5),
(6, 'Mi doc', '[http://github.com|Github] \r\nhola =miau= [http://intel.com|Intel] \r\n hola ====jujujuj==== [http://google.es|Google]\r\n\r\n\r\n=rafa=\r\n\r\nHolaaaaaa\r\n\r\n==segundo titulo==\r\n\r\n<table class="table">\r\n<th><td>hola</td></th>\r\n</table>', '2013-11-19', NULL, 6, 5, 'rafa', NULL, NULL, NULL, NULL),
(7, 'doc de rafa', '=Mi documento 01=\r\n\r\n[http://materialesdaw-raznar.rhcloud.com|metriales daw] de rafa', '2013-11-20', NULL, 4, 4, 'f', NULL, NULL, NULL, NULL),
(8, 'swxxa%20sss%20s%20s%20', '', '2014-09-16', '2014-09-16', 0, 5, 'gfhgf', 1, 1, 0, 0),
(9, '', 'ssdwdwdss%20sssssss', '2014-09-16', '2014-09-16', 0, 3, '', 1, 1, 0, 0),
(10, 'DFGDFG', 'HDFHDF', '2013-11-20', NULL, 1, 1, '', NULL, NULL, NULL, NULL),
(19, 'assaaaaa', 'wedaaaa%20aaaaaaaaa%20cccc0000', '2014-10-15', '2014-10-15', 161, 4, 'aqw', 1, 1, 0, 9),
(22, 'd', 'dsds', '2014-09-21', '2014-09-21', 11, 1, 'd', 0, 0, 0, 4),
(23, 'd', 'dsds', '2014-09-21', '2014-09-21', 11, 1, 'd', 0, 0, 0, 4),
(24, 'd', 'dsds', '2014-09-21', '2014-09-21', 11, 1, 'd', 0, 0, 0, 4),
(25, 'c', 'sd', '2014-09-21', '2014-09-21', 2, 2, 'das', 1, 1, 1, 7),
(26, 'c', 'sd', '2014-09-21', '2014-09-21', 2, 2, 'das', 1, 1, 1, 7),
(27, 'c', 'sd', '2014-09-21', '2014-09-21', 2, 2, 'das', 1, 1, 1, 7),
(28, 'c', 'sd', '2014-09-21', '2014-09-21', 2, 2, 'das', 1, 1, 1, 7),
(29, 'dgdfgdfgdf', 'gdf', '2014-09-21', '2014-09-21', 555, 1, '53453', 0, 0, 0, 2),
(35, 'das', 'asdasd%20asdasd', '2014-09-28', '2014-09-28', 111, 2, 'ss%20%20sss%20s%20', 1, 1, 1, 10),
(36, 'dasd', 'asdas%20', '2014-09-28', '2014-09-28', 22, 1, 'ddd', 0, 1, 0, 2),
(37, 'ads', 'asd', '2014-09-28', '2014-09-28', 2, 1, 'das', 0, 0, 0, 3),
(38, 'fd', 'fsdfsd', '2014-09-28', '2014-09-28', 2, 1, 'dasd', 0, 0, 0, 3),
(39, 'fadf', 'sdf', '2014-09-28', '2014-09-28', 2222, 1, 'fsdf', 1, 1, 0, 3),
(41, 'fsd', 'sdf', '2014-09-28', '2014-09-28', 3, 1, 'fs', 0, 0, 0, 1),
(45, 'sdf', 'sdfaaaaaaaaaa', '2014-09-30', '2014-09-30', 3333, 1, 'fdsfsdf', 1, 1, 0, 1),
(46, 'hfghf', 'hf', '2014-10-19', '2014-10-19', 4, 1, 'hfg', 1, 1, 1, 6),
(47, 'hfgh', 'fhgh', '2014-10-24', '2014-10-24', 55, 1, '12%20rrr', 1, 1, 1, 2),
(48, 'gggggggg', 'hhhhhhhhhhh', '2014-10-25', '2014-10-25', 333, 2, 'gfdgdf%20rrrr', 1, 1, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `ordenador`
--

CREATE TABLE IF NOT EXISTS `ordenador` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ordenador`
--

INSERT INTO `ordenador` (`id`, `descripcion`) VALUES
(1, 'Ordenador de rafa'),
(2, 'Ordenador de pep'),
(3, 'aaas');

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descripcion` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `precio` decimal(6,2) DEFAULT NULL,
  `id_tipoproducto` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=406 ;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id`, `codigo`, `descripcion`, `precio`, `id_tipoproducto`) VALUES
(1, '778uj8822', 'Broca gorda de paso fino', '6.22', 24),
(2, '44RR456', 'Taladro', '100.00', 1),
(3, '6RRTU3', 'Sierra de calar', '123.00', 2),
(4, 'SE2PI', 'Pincel', '23.00', 1),
(5, 'ED45E', 'Caja de cambios', '231.00', 11),
(8, '455T', 'Llave de mano', '23.50', 2),
(10, '1413D', 'Llave auxiliar de emergencia', '740.91', 1),
(11, '1414D', 'Llave auxiliar de repuesto', '864.75', 1),
(12, '1415D', 'Llave auxiliar de paso', '1269.10', 1),
(13, '1416Dss', 'Llave auxiliar de acople', '1451.25', 11),
(14, '1413D', 'Llave auxiliar de emergencia', '1733.93', 1),
(15, '1414D', 'Llave auxiliar de repuesto', '533.68', 1),
(16, '1415D', 'Llave auxiliar de paso', '150.58', 1),
(17, '1416D', 'Llave auxiliar de acople', '1860.79', 1),
(18, '1413D', 'Llave auxiliar de emergencia', '1148.52', 1),
(19, '1414D', 'Llave auxiliar de repuesto', '1021.47', 1),
(20, '1415D', 'Llave auxiliar de paso', '1510.44', 1),
(21, '1416D', 'Llave auxiliar de acople', '885.46', 1),
(22, '1417D', 'Llave auxiliar de mano', '1669.62', 1),
(23, '1413D', 'Llave auxiliar de emergencia', '832.31', 1),
(24, '1414D', 'Llave auxiliar de repuesto', '1930.30', 1),
(25, '1415D', 'Llave auxiliar de paso', '505.35', 11),
(26, '1416D', 'Llave auxiliar de acople', '104.86', 1),
(27, '1417D', 'Llave auxiliar de mano', '891.52', 10),
(28, '1413D', 'Llave auxiliar de emergencia', '521.77', 1),
(29, '1414D', 'Llave auxiliar de repuesto', '1022.15', 1),
(30, '1415D', 'Llave auxiliar de paso', '783.54', 1),
(31, '1416D', 'Llave auxiliar de acople', '505.47', 1),
(32, '1417D', 'Llave auxiliar de mano', '1386.33', 1),
(33, '1539D', 'Llave manual de emergencia', '1412.16', 1),
(34, '15310D', 'Llave manual de repuesto', '1662.15', 1),
(35, '15311D', 'Llave manual de paso', '1236.49', 1),
(36, '15312D', 'Llave manual de acople', '266.80', 1),
(37, '15313D', 'Llave manual de mano', '1234.32', 1),
(38, '14315D', 'Llave con rodadura de emergencia', '913.94', 1),
(39, '14316D', 'Llave con rodadura de repuesto', '817.18', 1),
(40, '14317D', 'Llave con rodadura de paso', '571.70', 1),
(41, '14318D', 'Llave con rodadura de acople', '139.15', 1),
(42, '14319D', 'Llave con rodadura de mano', '1343.85', 1),
(43, '14521D', 'Llave extensivo de emergencia', '1872.10', 1),
(44, '14522D', 'Llave extensivo de repuesto', '1391.89', 1),
(45, '14523D', 'Llave extensivo de paso', '390.53', 1),
(46, '14524D', 'Llave extensivo de acople', '1450.87', 1),
(47, '14525D', 'Llave extensivo de mano', '1332.32', 1),
(48, '14927D', 'Llave intensivo de emergencia', '870.55', 1),
(49, '14928D', 'Llave intensivo de repuesto', '1220.74', 1),
(50, '14929D', 'Llave intensivo de paso', '888.28', 1),
(51, '14930D', 'Llave intensivo de acople', '1022.42', 1),
(52, '14931D', 'Llave intensivo de mano', '98.60', 1),
(53, '14834D', 'Soldadura auxiliar de emergencia', '689.60', 1),
(54, '14835D', 'Soldadura auxiliar de repuesto', '72.57', 1),
(55, '14836D', 'Soldadura auxiliar de paso', '1077.83', 1),
(56, '14837D', 'Soldadura auxiliar de acople', '1181.16', 1),
(57, '14838D', 'Soldadura auxiliar de mano', '1436.36', 1),
(58, '16040D', 'Soldadura manual de emergencia', '249.31', 1),
(59, '16041D', 'Soldadura manual de repuesto', '565.62', 1),
(60, '16042D', 'Soldadura manual de paso', '1681.35', 1),
(61, '16043D', 'Soldadura manual de acople', '1965.29', 1),
(62, '16044D', 'Soldadura manual de mano', '165.41', 1),
(63, '15046D', 'Soldadura con rodadura de emergencia', '780.53', 1),
(64, '15047D', 'Soldadura con rodadura de repuesto', '275.74', 1),
(65, '15048D', 'Soldadura con rodadura de paso', '39.76', 1),
(66, '15049D', 'Soldadura con rodadura de acople', '1567.24', 1),
(67, '15050D', 'Soldadura con rodadura de mano', '1689.91', 1),
(68, '15252D', 'Soldadura extensivo de emergencia', '1943.10', 1),
(69, '15253D', 'Soldadura extensivo de repuesto', '284.44', 1),
(70, '15254D', 'Soldadura extensivo de paso', '1944.10', 1),
(71, '15255D', 'Soldadura extensivo de acople', '1679.93', 1),
(72, '15256D', 'Soldadura extensivo de mano', '480.34', 1),
(73, '15658D', 'Soldadura intensivo de emergencia', '1983.68', 1),
(74, '15659D', 'Soldadura intensivo de repuesto', '225.97', 1),
(75, '15660D', 'Soldadura intensivo de paso', '1947.44', 1),
(76, '15661D', 'Soldadura intensivo de acople', '797.92', 1),
(77, '15662D', 'Soldadura intensivo de mano', '646.47', 1),
(78, '14565D', 'Pieza auxiliar de emergencia', '1446.93', 1),
(79, '14566D', 'Pieza auxiliar de repuesto', '1931.71', 1),
(80, '14567D', 'Pieza auxiliar de paso', '41.84', 1),
(81, '14568D', 'Pieza auxiliar de acople', '1930.13', 1),
(82, '14569D', 'Pieza auxiliar de mano', '1293.80', 1),
(83, '15771D', 'Pieza manual de emergencia', '1232.41', 1),
(84, '15772D', 'Pieza manual de repuesto', '1881.50', 1),
(85, '15773D', 'Pieza manual de paso', '397.42', 1),
(86, '15774D', 'Pieza manual de acople', '348.53', 1),
(87, '15775D', 'Pieza manual de mano', '1385.89', 1),
(88, '14777D', 'Pieza con rodadura de emergencia', '474.46', 1),
(89, '14778D', 'Pieza con rodadura de repuesto', '962.18', 1),
(90, '14779D', 'Pieza con rodadura de paso', '1998.92', 1),
(91, '14780D', 'Pieza con rodadura de acople', '160.78', 1),
(92, '14781D', 'Pieza con rodadura de mano', '1075.25', 1),
(93, '14983D', 'Pieza extensivo de emergencia', '1649.80', 1),
(94, '14984D', 'Pieza extensivo de repuesto', '652.40', 1),
(95, '14985D', 'Pieza extensivo de paso', '1792.11', 1),
(96, '14986D', 'Pieza extensivo de acople', '1601.52', 1),
(97, '14987D', 'Pieza extensivo de mano', '348.46', 1),
(98, '15389D', 'Pieza intensivo de emergencia', '1940.41', 1),
(99, '15390D', 'Pieza intensivo de repuesto', '91.56', 1),
(100, '15391D', 'Pieza intensivo de paso', '995.40', 1),
(101, '15392D', 'Pieza intensivo de acople', '410.51', 1),
(102, '15393D', 'Pieza intensivo de mano', '964.93', 1),
(103, '13196D', 'Bote auxiliar de emergencia', '2.15', 1),
(104, '13197D', 'Bote auxiliar de repuesto', '1283.30', 1),
(105, '13198D', 'Bote auxiliar de paso', '1959.50', 1),
(106, '13199D', 'Bote auxiliar de acople', '494.11', 1),
(107, '131100D', 'Bote auxiliar de mano', '1492.92', 1),
(108, '143102D', 'Bote manual de emergencia', '666.22', 1),
(109, '143103D', 'Bote manual de repuesto', '1668.56', 1),
(110, '143104D', 'Bote manual de paso', '1001.27', 1),
(111, '143105D', 'Bote manual de acople', '1047.92', 1),
(112, '143106D', 'Bote manual de mano', '1918.90', 1),
(113, '133108D', 'Bote con rodadura de emergencia', '1311.16', 1),
(114, '133109D', 'Bote con rodadura de repuesto', '1462.41', 1),
(115, '133110D', 'Bote con rodadura de paso', '1853.38', 1),
(116, '133111D', 'Bote con rodadura de acople', '911.53', 1),
(117, '133112D', 'Bote con rodadura de mano', '957.85', 1),
(118, '135114D', 'Bote extensivo de emergencia', '1026.81', 1),
(119, '135115D', 'Bote extensivo de repuesto', '631.43', 1),
(120, '135116D', 'Bote extensivo de paso', '394.75', 1),
(121, '135117D', 'Bote extensivo de acople', '1816.52', 1),
(122, '135118D', 'Bote extensivo de mano', '334.24', 1),
(123, '139120D', 'Bote intensivo de emergencia', '1289.13', 1),
(124, '139121D', 'Bote intensivo de repuesto', '1593.19', 1),
(125, '139122D', 'Bote intensivo de paso', '732.10', 1),
(126, '139123D', 'Bote intensivo de acople', '1401.72', 1),
(127, '139124D', 'Bote intensivo de mano', '539.40', 1),
(128, '130127D', 'Asadura auxiliar de emergencia', '1785.92', 1),
(129, '130128D', 'Asadura auxiliar de repuesto', '1394.87', 1),
(130, '130129D', 'Asadura auxiliar de paso', '467.30', 1),
(131, '130130D', 'Asadura auxiliar de acople', '1056.51', 1),
(132, '130131D', 'Asadura auxiliar de mano', '986.16', 1),
(133, '142133D', 'Asadura manual de emergencia', '1495.18', 1),
(134, '142134D', 'Asadura manual de repuesto', '758.84', 1),
(135, '142135D', 'Asadura manual de paso', '32.81', 1),
(136, '142136D', 'Asadura manual de acople', '1090.28', 1),
(137, '142137D', 'Asadura manual de mano', '1511.29', 1),
(138, '132139D', 'Asadura con rodadura de emergencia', '911.69', 1),
(139, '132140D', 'Asadura con rodadura de repuesto', '115.90', 1),
(140, '132141D', 'Asadura con rodadura de paso', '1206.30', 1),
(141, '132142D', 'Asadura con rodadura de acople', '515.67', 1),
(142, '132143D', 'Asadura con rodadura de mano', '1396.00', 1),
(143, '134145D', 'Asadura extensivo de emergencia', '1447.87', 1),
(144, '134146D', 'Asadura extensivo de repuesto', '901.75', 1),
(145, '134147D', 'Asadura extensivo de paso', '618.88', 1),
(146, '134148D', 'Asadura extensivo de acople', '1538.53', 1),
(147, '134149D', 'Asadura extensivo de mano', '1390.19', 1),
(148, '138151D', 'Asadura intensivo de emergencia', '468.41', 1),
(149, '138152D', 'Asadura intensivo de repuesto', '923.91', 1),
(150, '138153D', 'Asadura intensivo de paso', '1386.67', 1),
(151, '138154D', 'Asadura intensivo de acople', '442.21', 1),
(152, '138155D', 'Asadura intensivo de mano', '1560.38', 1),
(153, '142158D', 'Mecanizado auxiliar de emergencia', '1718.19', 1),
(154, '142159D', 'Mecanizado auxiliar de repuesto', '1810.92', 1),
(155, '142160D', 'Mecanizado auxiliar de paso', '331.22', 1),
(156, '142161D', 'Mecanizado auxiliar de acople', '691.32', 1),
(157, '142162D', 'Mecanizado auxiliar de mano', '1981.72', 1),
(158, '154164D', 'Mecanizado manual de emergencia', '1871.10', 1),
(159, '154165D', 'Mecanizado manual de repuesto', '1016.25', 1),
(160, '154166D', 'Mecanizado manual de paso', '1819.54', 1),
(161, '154167D', 'Mecanizado manual de acople', '1278.80', 1),
(162, '154168D', 'Mecanizado manual de mano', '852.53', 1),
(163, '144170D', 'Mecanizado con rodadura de emergencia', '1722.69', 1),
(164, '144171D', 'Mecanizado con rodadura de repuesto', '1039.22', 1),
(165, '144172D', 'Mecanizado con rodadura de paso', '1928.89', 1),
(166, '144173D', 'Mecanizado con rodadura de acople', '1498.95', 1),
(167, '144174D', 'Mecanizado con rodadura de mano', '835.24', 1),
(168, '146176D', 'Mecanizado extensivo de emergencia', '714.70', 1),
(169, '146177D', 'Mecanizado extensivo de repuesto', '1822.86', 1),
(170, '146178D', 'Mecanizado extensivo de paso', '1453.82', 1),
(171, '146179D', 'Mecanizado extensivo de acople', '1259.87', 1),
(172, '146180D', 'Mecanizado extensivo de mano', '247.70', 1),
(173, '150182D', 'Mecanizado intensivo de emergencia', '1944.29', 1),
(174, '150183D', 'Mecanizado intensivo de repuesto', '773.89', 1),
(175, '150184D', 'Mecanizado intensivo de paso', '199.13', 1),
(176, '150185D', 'Mecanizado intensivo de acople', '1295.58', 1),
(177, '150186D', 'Mecanizado intensivo de mano', '1456.55', 1),
(178, '131189D', 'Bote auxiliar de emergencia', '213.80', 1),
(179, '131190D', 'Bote auxiliar de repuesto', '1930.60', 1),
(180, '131191D', 'Bote auxiliar de paso', '1559.58', 1),
(181, '131192D', 'Bote auxiliar de acople', '1998.70', 1),
(182, '131193D', 'Bote auxiliar de mano', '546.57', 1),
(183, '143195D', 'Bote manual de emergencia', '338.74', 1),
(184, '143196D', 'Bote manual de repuesto', '632.74', 1),
(185, '143197D', 'Bote manual de paso', '826.72', 1),
(186, '143198D', 'Bote manual de acople', '951.70', 1),
(187, '143199D', 'Bote manual de mano', '1981.94', 1),
(188, '133201D', 'Bote con rodadura de emergencia', '908.67', 1),
(189, '133202D', 'Bote con rodadura de repuesto', '1430.48', 1),
(190, '133203D', 'Bote con rodadura de paso', '136.16', 1),
(191, '133204D', 'Bote con rodadura de acople', '1530.48', 1),
(192, '133205D', 'Bote con rodadura de mano', '716.69', 1),
(193, '135207D', 'Bote extensivo de emergencia', '865.92', 1),
(194, '135208D', 'Bote extensivo de repuesto', '757.25', 1),
(195, '135209D', 'Bote extensivo de paso', '1545.26', 1),
(196, '135210D', 'Bote extensivo de acople', '1546.83', 1),
(197, '135211D', 'Bote extensivo de mano', '1774.47', 1),
(198, '139213D', 'Bote intensivo de emergencia', '722.52', 1),
(199, '139214D', 'Bote intensivo de repuesto', '1578.35', 1),
(200, '139215D', 'Bote intensivo de paso', '639.45', 1),
(201, '139216D', 'Bote intensivo de acople', '1765.88', 1),
(202, '139217D', 'Bote intensivo de mano', '1781.69', 1),
(203, '142220D', 'Manivela auxiliar de emergencia', '1834.30', 1),
(204, '142221D', 'Manivela auxiliar de repuesto', '118.00', 1),
(205, '142222D', 'Manivela auxiliar de paso', '242.33', 1),
(206, '142223D', 'Manivela auxiliar de acople', '64.41', 1),
(207, '142224D', 'Manivela auxiliar de mano', '347.67', 1),
(208, '154226D', 'Manivela manual de emergencia', '1699.28', 1),
(209, '154227D', 'Manivela manual de repuesto', '1059.30', 1),
(210, '154228D', 'Manivela manual de paso', '99.79', 1),
(211, '154229D', 'Manivela manual de acople', '1145.76', 1),
(212, '154230D', 'Manivela manual de mano', '1284.80', 1),
(213, '144232D', 'Manivela con rodadura de emergencia', '813.11', 1),
(214, '144233D', 'Manivela con rodadura de repuesto', '511.33', 1),
(215, '144234D', 'Manivela con rodadura de paso', '50.81', 1),
(216, '144235D', 'Manivela con rodadura de acople', '1361.83', 1),
(217, '144236D', 'Manivela con rodadura de mano', '686.65', 1),
(218, '146238D', 'Manivela extensivo de emergencia', '1950.22', 1),
(219, '146239D', 'Manivela extensivo de repuesto', '1293.73', 1),
(220, '146240D', 'Manivela extensivo de paso', '1080.26', 1),
(221, '146241D', 'Manivela extensivo de acople', '1360.38', 1),
(222, '146242D', 'Manivela extensivo de mano', '1.20', 1),
(223, '150244D', 'Manivela intensivo de emergencia', '1279.91', 1),
(224, '150245D', 'Manivela intensivo de repuesto', '1385.55', 1),
(225, '150246D', 'Manivela intensivo de paso', '176.70', 1),
(226, '150247D', 'Manivela intensivo de acople', '182.66', 1),
(227, '150248D', 'Manivela intensivo de mano', '626.15', 1),
(228, '145251D', 'Pasante auxiliar de emergencia', '1466.40', 1),
(229, '145252D', 'Pasante auxiliar de repuesto', '1450.51', 1),
(230, '145253D', 'Pasante auxiliar de paso', '1374.57', 1),
(231, '145254D', 'Pasante auxiliar de acople', '784.13', 1),
(232, '145255D', 'Pasante auxiliar de mano', '87.63', 1),
(233, '157257D', 'Pasante manual de emergencia', '657.70', 1),
(234, '157258D', 'Pasante manual de repuesto', '1387.29', 1),
(235, '157259D', 'Pasante manual de paso', '503.40', 1),
(236, '157260D', 'Pasante manual de acople', '736.14', 1),
(237, '157261D', 'Pasante manual de mano', '256.20', 1),
(238, '147263D', 'Pasante con rodadura de emergencia', '550.70', 1),
(239, '147264D', 'Pasante con rodadura de repuesto', '1695.50', 1),
(240, '147265D', 'Pasante con rodadura de paso', '1089.29', 1),
(241, '147266D', 'Pasante con rodadura de acople', '18.48', 1),
(242, '147267D', 'Pasante con rodadura de mano', '47.14', 1),
(243, '149269D', 'Pasante extensivo de emergencia', '434.14', 1),
(244, '149270D', 'Pasante extensivo de repuesto', '809.36', 1),
(245, '149271D', 'Pasante extensivo de paso', '1969.16', 1),
(246, '149272D', 'Pasante extensivo de acople', '1986.30', 1),
(247, '149273D', 'Pasante extensivo de mano', '1715.00', 1),
(248, '153275D', 'Pasante intensivo de emergencia', '298.77', 1),
(249, '153276D', 'Pasante intensivo de repuesto', '1201.33', 1),
(250, '153277D', 'Pasante intensivo de paso', '1559.80', 1),
(251, '153278D', 'Pasante intensivo de acople', '808.90', 1),
(252, '153279D', 'Pasante intensivo de mano', '243.46', 1),
(253, '147282D', 'Rejilla auxiliar de emergencia', '565.69', 1),
(254, '147283D', 'Rejilla auxiliar de repuesto', '1520.25', 1),
(255, '147284D', 'Rejilla auxiliar de paso', '947.31', 1),
(256, '147285D', 'Rejilla auxiliar de acople', '1916.62', 1),
(257, '147286D', 'Rejilla auxiliar de mano', '1054.27', 1),
(258, '159288D', 'Rejilla manual de emergencia', '1477.18', 1),
(259, '159289D', 'Rejilla manual de repuesto', '728.78', 1),
(260, '159290D', 'Rejilla manual de paso', '1065.14', 1),
(261, '159291D', 'Rejilla manual de acople', '783.56', 1),
(262, '159292D', 'Rejilla manual de mano', '1045.87', 1),
(263, '149294D', 'Rejilla con rodadura de emergencia', '521.93', 1),
(264, '149295D', 'Rejilla con rodadura de repuesto', '838.17', 1),
(265, '149296D', 'Rejilla con rodadura de paso', '388.80', 1),
(266, '149297D', 'Rejilla con rodadura de acople', '899.40', 1),
(267, '149298D', 'Rejilla con rodadura de mano', '865.31', 1),
(268, '151300D', 'Rejilla extensivo de emergencia', '1998.23', 1),
(269, '151301D', 'Rejilla extensivo de repuesto', '995.65', 2),
(270, '151302D', 'Rejilla extensivo de paso', '1295.32', 1),
(271, '151303D', 'Rejilla extensivo de acople', '95.63', 1),
(272, '151304D', 'Rejilla extensivo de mano', '1518.19', 1),
(273, '155306D', 'Rejilla intensivo de emergencia', '680.96', 1),
(274, '155307D', 'Rejilla intensivo de repuesto', '1717.10', 1),
(275, '155308D', 'Rejilla intensivo de paso', '250.20', 1),
(276, '155309D', 'Rejilla intensivo de acople', '1221.62', 1),
(277, '155310D', 'Rejilla intensivo de mano', '1445.86', 1),
(278, '149313D', 'Torno auxiliar de emergencia', '1961.79', 1),
(279, '149314D', 'Torno auxiliar de repuesto', '898.63', 1),
(280, '149315D', 'Torno auxiliar de paso', '1239.34', 1),
(281, '149316D', 'Torno auxiliar de acople', '136.44', 1),
(282, '149317D', 'Torno auxiliar de mano', '65.80', 1),
(283, '161319D', 'Torno manual de emergencia', '698.41', 1),
(284, '161320D', 'Torno manual de repuesto', '1035.24', 1),
(285, '161321D', 'Torno manual de paso', '213.48', 1),
(286, '161322D', 'Torno manual de acople', '585.84', 1),
(287, '161323D', 'Torno manual de mano', '398.21', 1),
(288, '151325D', 'Torno con rodadura de emergencia', '18.96', 1),
(289, '151326D', 'Torno con rodadura de repuesto', '605.75', 1),
(290, '151327D', 'Torno con rodadura de paso', '1281.98', 1),
(291, '151328D', 'Torno con rodadura de acople', '1307.36', 1),
(292, '151329D', 'Torno con rodadura de mano', '1942.65', 1),
(293, '153331D', 'Torno extensivo de emergencia', '1567.42', 1),
(294, '153332D', 'Torno extensivo de repuesto', '669.41', 1),
(295, '153333D', 'Torno extensivo de paso', '37.46', 1),
(296, '153334D', 'Torno extensivo de acople', '685.73', 1),
(297, '153335D', 'Torno extensivo de mano', '908.11', 1),
(298, '157337D', 'Torno intensivo de emergencia', '1322.17', 1),
(299, '157338D', 'Torno intensivo de repuesto', '526.93', 1),
(300, '157339D', 'Torno intensivo de paso', '1916.52', 1),
(301, '157340D', 'Torno intensivo de acople', '1981.40', 1),
(302, '157341D', 'Torno intensivo de mano', '118.66', 1),
(303, '130344D', 'Accionamiento auxiliar de emergencia', '937.68', 1),
(304, '130345D', 'Accionamiento auxiliar de repuesto', '736.17', 1),
(305, '130346D', 'Accionamiento auxiliar de paso', '1496.24', 1),
(306, '130347D', 'Accionamiento auxiliar de acople', '1153.94', 1),
(307, '130348D', 'Accionamiento auxiliar de mano', '990.70', 1),
(308, '142350D', 'Accionamiento manual de emergencia', '878.80', 1),
(309, '142351D', 'Accionamiento manual de repuesto', '547.44', 1),
(310, '142352D', 'Accionamiento manual de paso', '99.39', 1),
(311, '142353D', 'Accionamiento manual de acople', '726.60', 1),
(312, '142354D', 'Accionamiento manual de mano', '1911.93', 1),
(313, '132356D', 'Accionamiento con rodadura de emergencia', '448.55', 1),
(314, '132357D', 'Accionamiento con rodadura de repuesto', '1460.17', 1),
(315, '132358D', 'Accionamiento con rodadura de paso', '1021.44', 1),
(316, '132359D', 'Accionamiento con rodadura de acople', '1308.49', 1),
(317, '132360D', 'Accionamiento con rodadura de mano', '254.80', 1),
(318, '134362D', 'Accionamiento extensivo de emergencia', '667.56', 1),
(319, '134363D', 'Accionamiento extensivo de repuesto', '611.16', 1),
(320, '134364D', 'Accionamiento extensivo de paso', '1301.32', 1),
(321, '134365D', 'Accionamiento extensivo de acople', '1553.10', 1),
(322, '134366D', 'Accionamiento extensivo de mano', '1261.91', 1),
(323, '138368D', 'Accionamiento intensivo de emergencia', '104.29', 1),
(324, '138369D', 'Accionamiento intensivo de repuesto', '573.91', 1),
(325, '138370D', 'Accionamiento intensivo de paso', '1048.17', 1),
(326, '138371D', 'Accionamiento intensivo de acople', '152.52', 1),
(327, '138372D', 'Accionamiento intensivo de mano', '1018.45', 1),
(328, '135375D', 'Fijación auxiliar de emergencia', '1669.25', 1),
(329, '135376D', 'Fijación auxiliar de repuesto', '692.69', 1),
(330, '135377D', 'Fijación auxiliar de paso', '1877.19', 1),
(331, '135378D', 'Fijación auxiliar de acople', '1948.49', 1),
(332, '135379D', 'Fijación auxiliar de mano', '1690.52', 1),
(333, '147381D', 'Fijación manual de emergencia', '1170.64', 1),
(334, '147382D', 'Fijación manual de repuesto', '1849.95', 1),
(335, '147383D', 'Fijación manual de paso', '1413.25', 1),
(336, '147384D', 'Fijación manual de acople', '1712.32', 1),
(337, '147385D', 'Fijación manual de mano', '1275.20', 1),
(338, '137387D', 'Fijación con rodadura de emergencia', '147.33', 1),
(339, '137388D', 'Fijación con rodadura de repuesto', '780.14', 1),
(340, '137389D', 'Fijación con rodadura de paso', '1320.20', 1),
(341, '137390D', 'Fijación con rodadura de acople', '1645.50', 1),
(342, '137391D', 'Fijación con rodadura de mano', '1315.47', 1),
(343, '139393D', 'Fijación extensivo de emergencia', '414.45', 1),
(344, '139394D', 'Fijación extensivo de repuesto', '1371.36', 1),
(345, '139395D', 'Fijación extensivo de paso', '1531.21', 1),
(346, '139396D', 'Fijación extensivo de acople', '482.74', 1),
(347, '139397D', 'Fijación extensivo de mano', '799.93', 1),
(348, '143399D', 'Fijación intensivo de emergencia', '1098.23', 1),
(349, '143400D', 'Fijación intensivo de repuesto', '153.87', 1),
(350, '143401D', 'Fijación intensivo de paso', '758.62', 1),
(351, '143402D', 'Fijación intensivo de acople', '1044.85', 1),
(352, '143403D', 'Fijación intensivo de mano', '1499.22', 1),
(353, '131406D', 'Bajante auxiliar de emergencia', '1669.68', 1),
(354, '131407D', 'Bajante auxiliar de repuesto', '1661.85', 1),
(355, '131408D', 'Bajante auxiliar de paso', '1493.12', 1),
(356, '131409D', 'Bajante auxiliar de acople', '103.50', 1),
(357, '131410D', 'Bajante auxiliar de mano', '1405.37', 1),
(358, '143412D', 'Bajante manual de emergencia', '759.30', 1),
(359, '143413D', 'Bajante manual de repuesto', '249.28', 1),
(360, '143414D', 'Bajante manual de paso', '1807.14', 1),
(361, '143415D', 'Bajante manual de acople', '677.42', 1),
(362, '143416D', 'Bajante manual de mano', '1644.85', 1),
(363, '133418D', 'Bajante con rodadura de emergencia', '778.27', 1),
(364, '133419D', 'Bajante con rodadura de repuesto', '1797.70', 1),
(365, '133420D', 'Bajante con rodadura de paso', '1709.85', 1),
(366, '133421D', 'Bajante con rodadura de acople', '840.94', 1),
(367, '133422D', 'Bajante con rodadura de mano', '914.48', 1),
(368, '135424D', 'Bajante extensivo de emergencia', '748.47', 1),
(369, '135425D', 'Bajante extensivo de repuesto', '569.43', 1),
(370, '135426D', 'Bajante extensivo de paso', '1963.95', 1),
(371, '135427D', 'Bajante extensivo de acople', '1067.31', 1),
(372, '135428D', 'Bajante extensivo de mano', '1434.10', 1),
(373, '139430D', 'Bajante intensivo de emergencia', '506.59', 1),
(374, '139431D', 'Bajante intensivo de repuesto', '684.40', 1),
(375, '139432D', 'Bajante intensivo de paso', '1264.20', 1),
(376, '139433D', 'Bajante intensivo de acople', '568.73', 1),
(377, '139434D', 'Bajante intensivo de mano', '1227.31', 1),
(378, '148437D', 'Sujeción auxiliar de emergencia', '752.35', 1),
(379, '148438D', 'Sujeción auxiliar de repuesto', '1544.62', 1),
(380, '148439D', 'Sujeción auxiliar de paso', '1139.33', 1),
(381, '148440D', 'Sujeción auxiliar de acople', '1318.88', 1),
(382, '148441D', 'Sujeción auxiliar de mano', '1761.17', 1),
(383, '160443D', 'Sujeción manual de emergencia', '121.30', 1),
(384, '160444D', 'Sujeción manual de repuesto', '1882.49', 1),
(385, '160445D', 'Sujeción manual de paso', '983.30', 1),
(386, '160446D', 'Sujeción manual de acople', '50.97', 1),
(387, '160447D', 'Sujeción manual de mano', '1871.71', 1),
(388, '150449D', 'Sujeción con rodadura de emergencia', '57.28', 1),
(389, '150450D', 'Sujeción con rodadura de repuesto', '1026.66', 1),
(390, '150451D', 'Sujeción con rodadura de paso', '59.18', 1),
(391, '150452D', 'Sujeción con rodadura de acople', '1757.68', 1),
(392, '150453D', 'Sujeción con rodadura de mano', '476.32', 1),
(393, '152455D', 'Sujeción extensivo de emergencia', '1643.30', 1),
(394, '152456D', 'Sujeción extensivo de repuesto', '497.20', 1),
(395, '152457D', 'Sujeción extensivo de paso', '952.70', 1),
(396, '152458D', 'Sujeción extensivo de acople', '1698.40', 1),
(397, '152459D', 'Sujeción extensivo de mano', '475.37', 1),
(398, '156461D', 'Sujeción intensivo de emergencia', '1106.80', 1),
(399, '156462D', 'Sujeción intensivo de repuesto', '1995.17', 1),
(400, '156463D', 'Sujeción intensivo de paso', '813.67', 1),
(401, '156464D', 'Sujeción intensivo de acople', '738.60', 1),
(402, '156465D', 'Sujeción intensivo de mano', '448.52', 1),
(403, 'fsd', 'sdf', '1.00', 1),
(405, 'sfds', 'ghjgh', '2.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tipodocumento`
--

CREATE TABLE IF NOT EXISTS `tipodocumento` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `privado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `tipodocumento`
--

INSERT INTO `tipodocumento` (`id`, `descripcion`, `privado`) VALUES
(1, 'oferta de trabajo', 1),
(2, 'currículum', 1),
(3, 'actividad', 1),
(4, 'experencia', 1),
(5, 'formación', 1),
(6, 'valía', 1),
(7, 'inscripción', 1),
(8, 'solicitud', 1),
(9, 'bolsa de trabajo', 1),
(10, 'idiomas', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tipoproducto`
--

CREATE TABLE IF NOT EXISTS `tipoproducto` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=32 ;

--
-- Dumping data for table `tipoproducto`
--

INSERT INTO `tipoproducto` (`id`, `descripcion`) VALUES
(1, 'herramienta manual engrasada'),
(2, 'máquina electrica o electrónica'),
(4, 'Herramienta manual de precisión'),
(5, 'Herramienta automático'),
(6, 'Herramienta descatalogado'),
(7, 'Herramienta inexistente'),
(8, 'Accesorio manual'),
(9, 'Accesorio automático'),
(10, 'Accesorio descatalogado'),
(11, 'Accesorio inexistente'),
(12, 'Producto manual'),
(13, 'Producto automático'),
(14, 'Producto descatalogado'),
(15, 'Producto inexistente'),
(16, 'Artículo manual'),
(17, 'Artículo automático'),
(18, 'Artículo descatalogado'),
(19, 'Artículo inexistente'),
(20, 'Referencia manual'),
(21, 'Referencia automático'),
(22, 'Referencia descatalogado'),
(23, 'Referencia inexistente'),
(24, 'Mercancía manual'),
(25, 'Mercancía automático'),
(26, 'Mercancía descatalogado'),
(27, 'Mercancía inexistente'),
(28, 'Género manual'),
(29, 'Género automático'),
(30, 'Género descatalogado'),
(31, 'Género inexistente');

-- --------------------------------------------------------

--
-- Table structure for table `tipousuario`
--

CREATE TABLE IF NOT EXISTS `tipousuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Usuario'),
(3, 'Visitante');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',
  `login` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Nombre de usuario',
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Contraseña',
  `id_tipousuario` int(11) DEFAULT NULL COMMENT 'Tipo de usuario',
  `id_estado` int(11) DEFAULT NULL COMMENT 'Estado',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=31 ;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `login`, `password`, `id_tipousuario`, `id_estado`) VALUES
(1, 'pepe', 'pepe', 2, 1),
(2, 'juan', 'juan', 3, 3),
(3, 'maria', 'maria', 3, 6),
(4, 'antonia', 'antonia', 3, 7),
(5, 'edu', 'edu', 3, 13),
(6, 'jose', 'jose', 3, 19),
(7, 'silvia', 'silvia', 3, 6),
(8, 'pedro', 'pedro', 3, 8),
(9, 'raquel', 'raquel', 3, 15),
(10, 'daniel', 'daniel', 3, 12),
(11, 'rafael', 'rafael', 1, 17),
(12, 'juan', 'juan', 3, 14),
(13, 'elena', 'elena', 3, 19),
(14, 'luis', 'luis', 3, 4),
(15, 'alba', 'alba', 3, 5),
(16, 'amparo', 'amparo', 3, 7),
(17, 'ambrosio', 'ambrosio', 3, 8),
(18, 'luisa', 'luisa', 3, 1),
(19, 'leon', 'leon', 3, 3),
(20, 'rosa', 'rosa', 3, 2),
(21, 'capcom', 'capcom', 3, 17),
(22, 'teleco', 'teleco', 3, 18),
(23, 'mercadona', 'mercadona', 3, 13),
(24, 'vistaprint', 'vistaprint', 3, 15),
(25, 'google', 'google', 3, 16),
(26, 'konami', 'konami', 3, 6),
(27, 'orange', 'orange', 3, 7),
(28, 'samsung', 'samsung', 3, 8),
(29, 'gigabyte', 'gigabyte', 3, 10),
(30, 'microsoft', 'microsoft', 3, 10);

-- --------------------------------------------------------

--
-- Table structure for table `amigo`
--

CREATE TABLE IF NOT EXISTS `amigo` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',
  `id_usuario_1` int(11) DEFAULT NULL COMMENT 'Usuario',
  `id_usuario_2` int(11) DEFAULT NULL COMMENT 'Amigo',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `amigo`
--

INSERT INTO `amigo` (`id`, `id_usuario_1`, `id_usuario_2`) VALUES
(1, 2, 3),
(2, 2, 4),
(3, 2, 5),
(4, 3, 8),
(5, 11, 20),
(6, 14, 15),
(7, 2, 15),
(8, 3, 17),
(9, 2, 17),
(10, 3, 19),
(11, 19, 2),
(12, 19, 3),
(13, 12, 2),
(14, 13, 4),
(15, 15, 20),
(16, 5, 15),
(17, 5, 20),
(18, 7, 13),
(19, 15, 6),
(20, 15, 7);

-- --------------------------------------------------------

--
-- Table structure for table `estado`
--

CREATE TABLE IF NOT EXISTS `estado` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',
  `tipo` varchar(255) DEFAULT NULL COMMENT 'Estado',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `estado`
--

INSERT INTO `estado` (`id`, `tipo`) VALUES
(1, 'Estoy contento'),
(2, 'Estoy feliz'),
(3, 'Estoy happy'),
(4, 'Estoy triste'),
(5, 'Estoy con fiebre'),
(6, 'Tengo fiebre'),
(7, 'En el gimnasio'),
(8, 'De quintos'),
(9, 'En el cine'),
(10, 'Estudiando'),
(11, 'En el trabajo'),
(12, 'Durmiendo'),
(13, 'En el baño...'),
(14, 'En el medico'),
(15, 'De fiesta'),
(16, 'Confuso'),
(17, 'Deprimido'),
(18, 'Fantastico'),
(19, 'OP'),
(20, 'rafa es el mejor');

-- --------------------------------------------------------

--
-- Table structure for table `publicacion`
--

CREATE TABLE IF NOT EXISTS `publicacion` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',
  `contenido` varchar(255) DEFAULT NULL COMMENT 'Contenido',
  `id_usuario` int(11) DEFAULT NULL COMMENT 'Usuario',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `publicacion`
--

INSERT INTO `publicacion` (`id`, `contenido`, `id_usuario`) VALUES
(1, 'Esto no es twitter', 2),
(2, 'Peliculon que hacen en antena 3', 2),
(3, 'No tengo amigos :(', 1),
(4, 'Escribir 20 posts es una faena', 6),
(5, 'El nuevo cd de u2 tiene muchos temazos', 6),
(6, 'Mucho nuevo hay por aqui', 17),
(7, 'Hoy hace un dia de m...\r\na viciarse al lol', 3),
(8, 'El usuario numero 5 es un cachondo', 6),
(9, 'No ten go amigos y no se escrivir', 17),
(10, 'Lo que hay que leer', 20),
(11, 'Rafa seguro que es el mejor', 5),
(12, 'Tengo al pajaro molestando todo el dia', 9),
(13, 'No todos mis amigos me comprenden', 10),
(14, 'No tengo casi amigos :(', 10),
(15, 'El halloween mola, buena tarde con los colegas', 2),
(16, 'Im the first', 1),
(17, 'Menuda party hard que me acabo de pegar tete', 1),
(18, 'Rusty cole se considera un realista pero filosoficamente hablando un pesimista', 13),
(19, 'Skyler debe morir es tediosa no hay quien aguante eso', 13),
(20, 'El Pablo Motos cada dia lo veo mas alto o sera que los invitados ...', 13);



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- Base de datos: `cuestionariodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuestionario`
--

CREATE TABLE IF NOT EXISTS `cuestionario` (
`id` int(11) NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='cuestionario' AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `cuestionario`
--

INSERT INTO `cuestionario` (`id`, `tipo`) VALUES
(1, 'Deportes'),
(2, 'Viajes'),
(3, 'Coches'),
(4, 'Política'),
(5, 'Música'),
(6, 'Bebidas'),
(7, 'Restaurantes'),
(8, 'Estudios'),
(9, 'Juegos'),
(10, 'Cine'),
(11, 'Arte'),
(12, 'Compras'),
(13, 'Tecnologia'),
(14, 'Moviles'),
(15, 'Vacaciones'),
(16, 'Fin de semana'),
(17, 'Ocio'),
(18, 'Libros'),
(19, 'Redes sociales'),
(20, 'Animales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion`
--

CREATE TABLE IF NOT EXISTS `opcion` (
`id` int(11) NOT NULL,
  `valor` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_pregunta` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='opcion' AUTO_INCREMENT=257 ;

--
-- Volcado de datos para la tabla `opcion`
--

INSERT INTO `opcion` (`id`, `valor`, `id_pregunta`) VALUES
(1, 'Barcelona', 1),
(2, 'Real Madrid', 1),
(3, 'Valencia', 1),
(4, 'Sevilla', 1),
(5, 'Mucho', 2),
(6, 'Poco', 2),
(7, 'Nada', 2),
(8, 'Todos los meses', 2),
(9, 'Mas de 10 veces', 3),
(10, 'Mas de 5 veces', 3),
(11, 'Alguna vez', 3),
(12, 'No', 3),
(13, 'Avion', 4),
(14, 'Tren', 4),
(15, 'Autobus', 4),
(16, 'Coche', 4),
(17, 'Hotel', 5),
(18, 'Motel', 5),
(19, 'Apartamento', 5),
(20, 'Anden', 5),
(21, 'Futbol', 6),
(22, 'Baloncesto', 6),
(23, 'Petanca', 6),
(24, 'Deportes de riesgo', 6),
(25, 'Futbol', 7),
(26, 'Correr', 7),
(27, 'Natacion', 7),
(28, 'Otros', 7),
(29, 'Alguna vez', 8),
(30, 'Si', 8),
(31, 'No', 8),
(32, 'Nunca', 8),
(33, 'Siempre', 9),
(34, 'Si', 9),
(35, 'Alguna vez', 9),
(36, 'Nunca', 9),
(37, 'Rock', 10),
(38, 'Pop', 10),
(39, 'Bisbal', 10),
(40, 'Soy sordo', 10),
(41, '00`', 11),
(42, '90`', 11),
(43, '80`', 11),
(44, 'No me importa', 11),
(45, 'MP3', 12),
(46, 'Radio', 12),
(47, 'CD', 12),
(48, 'Nube', 12),
(49, 'Siempre', 13),
(50, 'A menudo', 13),
(51, 'En ocasiones', 13),
(52, 'Nunca', 13),
(53, 'Mas de 2', 14),
(54, 'Entre 1 y 2', 14),
(55, 'Entre 0,5 y 1', 14),
(56, 'Menos de medio litro', 14),
(57, 'Mas de 4', 15),
(58, 'Entre 3 y 2', 15),
(59, 'El fin de semana', 15),
(60, 'Nunca dejo de beber', 15),
(61, 'Mucho', 16),
(62, 'A veces', 16),
(63, 'Nunca', 16),
(64, 'No sabe/No contesta', 16),
(65, 'Siempre', 17),
(66, 'A veces', 17),
(67, 'A menudo', 17),
(68, 'Nunca', 17),
(69, 'Todas las semanas', 18),
(70, 'Todos los meses', 18),
(71, 'Cada 3 meses', 18),
(72, 'Una vez al año', 18),
(73, 'Si', 19),
(74, 'No', 19),
(75, 'Ole', 19),
(76, 'Olo', 19),
(77, 'Hamburgueseria', 20),
(78, 'Pizzeria', 20),
(79, 'Chino', 20),
(80, 'Indio', 20),
(81, 'Si', 21),
(82, 'No', 21),
(83, 'Tal fez', 21),
(84, 'Porque no', 21),
(85, 'Universidad', 22),
(86, 'Formacion Profesional', 22),
(87, 'Bachiller', 22),
(88, 'Graduado Escolar', 22),
(89, 'Si', 23),
(90, 'No', 23),
(91, 'Siempre', 23),
(92, 'A veces', 23),
(93, 'Si', 24),
(94, 'No', 24),
(95, 'Un poco', 24),
(96, 'Un mucho', 24),
(97, 'Todas las semanas', 25),
(98, 'Todos los meses', 25),
(99, 'Cada 3 meses', 25),
(100, 'Nunca', 25),
(101, 'Accion', 26),
(102, 'Comedia', 26),
(103, 'Terror', 26),
(104, 'Dibujos', 26),
(105, 'Si', 27),
(106, 'No', 27),
(107, 'Depende', 27),
(108, 'Me hace reir', 27),
(109, 'Si', 28),
(110, 'Depende', 28),
(111, 'Me hace llorar', 28),
(112, 'No', 28),
(113, 'Si', 29),
(114, 'No', 29),
(115, 'Pff', 29),
(116, 'Aiss', 29),
(117, 'Claro', 30),
(118, 'Cuando me sobra', 30),
(119, 'No, nunca', 30),
(120, 'He dicho nunca?', 30),
(121, 'Todas las semanas', 31),
(122, 'Todos los meses', 31),
(123, 'Cada 3 meses', 31),
(124, 'Nunca', 31),
(125, 'Si', 32),
(126, 'No', 32),
(127, 'Si me obliga mi mujer', 32),
(128, 'A veces', 32),
(129, 'Ropa', 33),
(130, 'Juegos', 33),
(131, 'Libros', 33),
(132, 'Electronica', 33),
(133, 'Todas las semanas', 34),
(134, 'Todos los meses', 34),
(135, 'Cada 3 meses', 34),
(136, 'Nunca', 34),
(137, 'Con compañia', 35),
(138, 'Solo', 35),
(139, 'Con mi sombra', 35),
(140, 'Alone in the dark', 35),
(141, '1', 36),
(142, '2', 36),
(143, '3', 36),
(144, 'Nunca', 36),
(145, 'Si', 37),
(146, 'No', 37),
(147, 'Tal vez', 37),
(148, 'Nunca', 37),
(149, 'En ciudad', 40),
(150, 'En espacios naturales', 40),
(151, 'En el mar', 40),
(152, 'En el sofá', 40),
(153, 'Si', 41),
(154, 'A veces', 41),
(155, 'Tal vez', 41),
(156, 'Nunca', 41),
(157, 'Siempre', 42),
(158, 'A veces', 42),
(159, 'Tal vez', 42),
(160, 'Nunca', 42),
(161, 'Siempre', 43),
(162, 'A veces', 43),
(163, 'Tal vez', 43),
(164, 'Nunca', 43),
(165, 'Si', 46),
(166, 'A veces', 46),
(167, 'Tal vez', 46),
(168, 'Nunca', 46),
(169, 'Siempre', 47),
(170, '1 por semana', 47),
(171, '2 o mas por semana', 47),
(172, 'Nunca', 47),
(173, 'Si', 48),
(174, 'A veces', 48),
(175, 'Tal vez', 48),
(176, 'Nunca', 48),
(177, '2 o mas', 49),
(178, '1', 49),
(179, 'Ninguno', 49),
(180, 'leer?', 49),
(181, 'Aventura', 50),
(182, 'Drama', 50),
(183, 'Terror', 50),
(184, 'Educativo', 50),
(185, 'Si', 51),
(186, 'A veces', 51),
(187, 'Tal vez', 51),
(188, 'No', 51),
(189, 'Si', 52),
(190, 'A veces', 52),
(191, 'Tal vez', 52),
(192, 'No', 52),
(193, 'Si', 53),
(194, 'A veces', 53),
(195, 'Tal vez', 53),
(196, 'No', 53),
(197, '1 coche', 54),
(198, '2 coches o mas', 54),
(199, '5 ferraris bitches', 54),
(200, 'Ninguno', 54),
(201, 'No estoy satisfecho', 55),
(202, 'Adios Rajoy', 55),
(203, 'Muy satisfecho', 55),
(204, 'Me encanta la politica', 55),
(205, 'Mucho', 56),
(206, 'Si', 56),
(207, 'Un poco', 56),
(208, 'No', 56),
(209, 'Mucho', 57),
(210, 'A menudo', 57),
(211, 'A veces', 57),
(212, 'nunca', 57),
(213, 'Accion', 58),
(214, 'Deportes', 58),
(215, 'Pensar', 58),
(216, 'League of Legends', 58),
(217, '20 horas', 59),
(218, '10 horas', 59),
(219, 'Enetre 1 y 10 horas', 59),
(220, 'No duermo', 59),
(221, 'Sólo las 24 horas del dia, 7 dias de la semana, 4 semanas del mes, los 12 meses al año, nada mas.', 60),
(222, 'A veces', 60),
(223, 'Soy noob', 60),
(224, 'No', 60),
(225, 'Si', 61),
(226, 'No', 61),
(227, 'Mucho', 61),
(228, 'Poco', 61),
(229, 'Mucho', 62),
(230, 'Poco', 62),
(231, 'Si', 62),
(232, 'No', 62),
(233, 'Sí', 63),
(234, 'No', 63),
(235, 'Tendré', 63),
(236, 'Nunca tendré', 63),
(237, 'Mucho', 64),
(238, 'Poco', 64),
(239, 'Nada', 64),
(240, 'A veces', 64),
(241, 'Si', 65),
(242, 'No', 65),
(243, 'Todavía no', 65),
(244, 'Tendré', 65),
(245, 'IPhone', 66),
(246, 'Nexus', 66),
(247, 'Samsung', 66),
(248, 'Sony', 66),
(249, 'Sí', 67),
(250, 'No', 67),
(251, 'Poco', 67),
(252, 'Mucho', 67),
(253, 'Si', 68),
(254, 'No', 68),
(255, 'Mucho', 68),
(256, 'Poco', 68);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE IF NOT EXISTS `pregunta` (
`id` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_cuestionario` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='pregunta' AUTO_INCREMENT=69 ;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id`, `descripcion`, `id_cuestionario`) VALUES
(1, '¿De que equipo eres?', 1),
(2, '¿Cuanto has viajado?', 2),
(3, '¿Has salido de España?', 2),
(4, '¿En que transporte has viajado?', 2),
(5, '¿Donde te sueles alojar cuando viajas?', 2),
(6, '¿Qué deporte te gusta mas?', 1),
(7, '¿Qué tipo de deporte practicas?', 1),
(8, '¿Realizas deportes al aire libre?', 1),
(9, '¿Practicas deportes en equipo?', 1),
(10, '¿Qué tipo de música escuchas?', 5),
(11, '¿De qué época?', 5),
(12, '¿Qué tipo de soporte utilizas?', 5),
(13, '¿Escuchas música muy a menudo?', 5),
(14, '¿Cuántos litros de agua bebes al día?', 6),
(15, '¿Cuántas veces a la semana consumes bebidas alcohólicas?', 6),
(16, '¿Consumes refrescos?', 6),
(17, '¿Consumes zumos?', 6),
(18, '¿Sales muy a menudo a comer/cenar en restaurantes?', 7),
(19, '¿Más de una vez al mes?', 7),
(20, '¿Qué tipo de restaurantes frecuentas más?', 7),
(21, '¿Has realizado estudios superiores?', 8),
(22, '¿Qué nivel de estudios tienes?', 8),
(23, '¿Realizas cursos en escuelas independientes?', 8),
(24, '¿Te gusta el cine?', 10),
(25, '¿Con qué frecuencia vas al cine?', 10),
(26, '¿Qué género de cine te gusta?', 10),
(27, '¿Te gusta el cine español?', 10),
(28, '¿Te gusta el arte?', 11),
(29, '¿Sueles ir a exposiciones?', 11),
(30, '¿Inviertes en obras de arte?', 11),
(31, '¿Con qué frecuencia vas a museos?', 11),
(32, '¿Te gusta ir de compras?', 12),
(33, '¿Qué tipo de artículos compras?', 12),
(34, '¿Con qué frecuencia vas?', 12),
(35, '¿Sueles ir solo o en compañía?', 12),
(36, '¿Cuántas veces al año te tomas vacaciones?', 15),
(37, '¿Sueles viajar cuando estás de vacaciones?', 15),
(40, '¿Prefieres pasar tus vacaciones en la ciudad o en espacios naturales?', 15),
(41, '¿Trabajas los fines de semana?', 16),
(42, '¿Sueles salir de noche los fines de semana?', 16),
(43, '¿Realizas muchas actividades de ocio?', 16),
(46, '¿Realizas muchas actividades de ocio?', 17),
(47, '¿Con qué frecuencia?', 17),
(48, 'Actualmente, ¿lees algún libro?', 18),
(49, '¿Cuántos libros al mes sueles leer?', 18),
(50, '¿Qué género literario te gusta leer?', 18),
(51, '¿Te gustan los animales?', 20),
(52, '¿Tienes algún animal?', 20),
(53, '¿Tienes coche?', 3),
(54, '¿Cuántos coches tienes?', 3),
(55, '¿ Como de satisfecho estás con el sistema político de nuestro país?', 4),
(56, '¿Te consideras un ciudadano activamente político?', 4),
(57, '¿Juegas mucho a las videoconsolas?', 9),
(58, '¿Que tipos de juegos te gustan?', 9),
(59, '¿Cuánto tiempo le dedicas a jugar a la semana?', 9),
(60, '¿Juegas al League Of Legends?', 9),
(61, '¿Tiene un aparato electrónico en casa?', 13),
(62, '¿Utilizar mucho el ordenador?', 13),
(63, '¿Tienes tablet?', 13),
(64, '¿Cuánto tiempo le dedicas a la tecnología?', 13),
(65, '¿Tienes smartphone?', 14),
(66, '¿Que marca de smartphone?', 14),
(67, '¿Usas las Redes Sociales?', 19),
(68, '¿Usas Tuenti? ', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE IF NOT EXISTS `respuesta` (
`id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='respuesta' AUTO_INCREMENT=2 ;


--
-- Estructura de tabla para la tabla `usuariocuestionario`
--

CREATE TABLE IF NOT EXISTS `usuariocuestionario` (
  `id_cuestionario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `opcion`
--
ALTER TABLE `opcion`
 ADD PRIMARY KEY (`id`,`id_pregunta`), ADD KEY `fk_opcion_pregunta1_idx` (`id_pregunta`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
 ADD PRIMARY KEY (`id`,`id_cuestionario`), ADD KEY `fk_pregunta_cuestionario1_idx` (`id_cuestionario`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
 ADD PRIMARY KEY (`id`,`id_opcion`,`id_pregunta`,`id_usuario`), ADD KEY `fk_respuesta_usuario1_idx` (`id_usuario`), ADD KEY `fk_respuesta_pregunta1_idx` (`id_pregunta`), ADD KEY `fk_respuesta_opcion1_idx` (`id_opcion`);


-- Indices de la tabla `usuariocuestionario`
--
ALTER TABLE `usuariocuestionario`
 ADD PRIMARY KEY (`id_cuestionario`,`id_usuario`), ADD KEY `fk_cuestionario_has_usuario_usuario1_idx` (`id_usuario`), ADD KEY `fk_cuestionario_has_usuario_cuestionario_idx` (`id_cuestionario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `opcion`
--
ALTER TABLE `opcion`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=257;
--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
--
-- Filtros para la tabla `opcion`
--
ALTER TABLE `opcion`
ADD CONSTRAINT `fk_opcion_pregunta1` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
ADD CONSTRAINT `fk_pregunta_cuestionario1` FOREIGN KEY (`id_cuestionario`) REFERENCES `cuestionario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
ADD CONSTRAINT `fk_respuesta_opcion1` FOREIGN KEY (`id_opcion`) REFERENCES `opcion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_respuesta_pregunta1` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_respuesta_usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuariocuestionario`
--
ALTER TABLE `usuariocuestionario`
ADD CONSTRAINT `fk_cuestionario_has_usuario_cuestionario` FOREIGN KEY (`id_cuestionario`) REFERENCES `cuestionario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_cuestionario_has_usuario_usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;




