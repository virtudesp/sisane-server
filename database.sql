-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 19-12-2014 a las 07:39:58
-- Versión del servidor: 5.5.39
-- Versión de PHP: 5.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ausiasyield2014`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE IF NOT EXISTS `actividad` (
`id` int(11) NOT NULL COMMENT 'Numero',
  `enunciado` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Enunciado',
  `fecha` date DEFAULT NULL COMMENT 'Fecha Actividad',
  `evaluacion` int(11) DEFAULT NULL COMMENT 'Evaluacion',
  `activo` tinyint(1) DEFAULT NULL COMMENT '¿ Activo ?'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`id`, `enunciado`, `fecha`, `evaluacion`, `activo`) VALUES
(1, 'Actividad 01', '2014-10-09', 1, 1),
(2, 'Actividad 02', '2014-11-12', 1, 0),
(3, 'Actividad 03', '2014-11-05', 2, 1),
(4, 'Actividad 04', '2014-11-18', 2, 1),
(5, 'Actividad 05', '2014-11-02', 3, 1),
(6, 'Actividad 06', '2014-11-28', 3, 1),
(7, 'Actividad 07', '2014-10-03', 1, 1),
(8, 'Actividad 08', '2014-12-03', 1, 1),
(9, 'Actividad 09', '2014-11-03', 1, 1),
(10, 'Actividad 10', '2014-12-08', 1, 1),
(11, 'Actividad 11', '2014-12-13', 2, 1),
(12, 'Actividad 12', '2014-12-13', 2, 1),
(13, 'Actividad 13', '2014-12-05', 3, 1),
(14, 'Actividad 14', '2014-12-24', 3, 1),
(15, 'Actividad 15', '2014-12-18', 3, 1),
(16, 'Actividad 16', '2014-12-09', 2, 1),
(17, 'Actividad 17', '2014-08-03', 2, 1),
(18, 'Actividad 18', '2014-12-21', 3, 1),
(19, 'Actividad 19', '2014-11-21', 2, 1),
(21, 'Actividad 20', '2014-11-06', 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amistad`
--

CREATE TABLE IF NOT EXISTS `amistad` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `id_usuario_1` int(11) DEFAULT NULL COMMENT 'Usuario',
  `id_usuario_2` int(11) DEFAULT NULL COMMENT 'Amigo'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `amistad`
--

INSERT INTO `amistad` (`id`, `id_usuario_1`, `id_usuario_2`) VALUES
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
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
`id` int(6) NOT NULL COMMENT 'Identificador',
  `nombre` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Nombre',
  `ape1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Primer Apellido',
  `ape2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Segundo Apellido',
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Correo Electronico'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=251 ;

--
-- Volcado de datos para la tabla `cliente`
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
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE IF NOT EXISTS `comentario` (
`id` int(11) NOT NULL COMMENT 'Num de comentario',
  `contenido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Contenido',
  `id_usuario` int(11) DEFAULT NULL COMMENT 'Num de Usuario',
  `id_propuesta` int(11) DEFAULT NULL COMMENT 'Num propuesta'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=33 ;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id`, `contenido`, `id_usuario`, `id_propuesta`) VALUES
(1, 'Claro, ¡así quedaria genial!', 5, 1),
(2, 'No me gustan los margenes, me parece algo obsoleto.', 4, 1),
(3, 'En el index no le veo utilidad', 12, 2),
(4, 'Estaria bien usarlo en el index', 10, 2),
(5, 'Yo me apunto, es una gran herramienta', 8, 3),
(6, 'No le veo demasiada utilidad, pero tengo curiosidad', 9, 3),
(7, 'Yo me apunto, es una gran herramienta', 1, 4),
(8, 'No la conozco, pero siempre esta bien aprender cosas nuevas', 7, 4),
(9, 'Me apunto!, almorzamos en el bar de siempre?', 3, 5),
(10, 'Yo no podre acudir pero disfrutad por mi!', 6, 5),
(11, 'Yo tnego vacaciones! donde nos vamos?', 5, 6),
(12, 'Vamonos a esquiar que yo nunca he ido!', 10, 6),
(13, 'Prueba Libros web, suele tener mucha información de todo tipo', 9, 7),
(14, 'A mi me gusta mas mc Libre, échale un ojo a ver si te ayuda', 2, 7),
(15, 'Java4Dummies está muy bien', 5, 8),
(16, 'Yo use sobre todo internet, pero en la biblioteca municipal hay bastantes libros', 10, 8),
(17, 'Prueba Libros web, suele tener mucha información de todo tipo', 8, 9),
(18, 'A mi me gusta mas mc Libre, échale un ojo a ver si te ayuda', 12, 9),
(19, 'Php4Dummies está muy bien', 1, 10),
(20, 'Yo use sobre todo internet, pero en la biblioteca municipal hay bastantes libros sobre php', 5, 10),
(21, 'Prueba Libros web, suele tener mucha información de todo tipo', 6, 11),
(22, 'A mi me gusta mas mc Libre, échale un ojo a ver si te ayuda', 11, 11),
(23, 'Django4Dummies está muy bien', 7, 12),
(24, 'Yo use sobre todo internet, pero en la biblioteca municipal hay bastantes libros sobre Django', 12, 12),
(25, 'Prueba Libros web, suele tener mucha información de todo tipo', 8, 13),
(26, 'A mi me gusta mas mc Libre, échale un ojo a ver si te ayuda', 6, 13),
(27, 'Visualbasic4Dummies está muy bien', 1, 14),
(28, 'Yo use sobre todo internet, pero en la biblioteca municipal hay bastantes libros sobre Visualbasic', 5, 14),
(29, 'Prueba Libros web, suele tener mucha información de todo tipo', 7, 15),
(30, 'A mi me gusta mas mc Libre, échale un ojo a ver si te ayuda', 10, 15),
(31, 'Ruby4Dummies está muy bien', 2, 16),
(32, 'Yo use sobre todo internet, pero en la biblioteca municipal hay bastantes libros sobre Ruby', 7, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE IF NOT EXISTS `compra` (
`id` int(6) NOT NULL,
  `id_cliente` int(6) DEFAULT NULL,
  `id_producto` int(6) DEFAULT NULL,
  `cantidad` int(6) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_factura` int(6) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=193 ;

--
-- Volcado de datos para la tabla `compra`
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
-- Estructura de tabla para la tabla `cuestionario`
--

CREATE TABLE IF NOT EXISTS `cuestionario` (
`id` int(11) NOT NULL COMMENT 'id',
  `tipo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Tipo'
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
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE IF NOT EXISTS `detalle_pedido` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `cantidad` int(11) DEFAULT NULL COMMENT 'Cantidad',
  `id_pedido` int(11) NOT NULL DEFAULT '0' COMMENT 'Id Pedido',
  `id_producto` int(11) NOT NULL DEFAULT '0' COMMENT 'Id Producto'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=47 ;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

INSERT INTO `detalle_pedido` (`id`, `cantidad`, `id_pedido`, `id_producto`) VALUES
(1, 272, 21, 337),
(2, 340, 15, 8),
(3, 621, 10, 279),
(4, 601, 5, 101),
(5, 591, 6, 389),
(6, 427, 12, 102),
(7, 568, 6, 298),
(8, 171, 12, 284),
(9, 567, 1, 25),
(10, 456, 21, 178),
(11, 130, 1, 49),
(12, 475, 14, 22),
(13, 292, 16, 301),
(14, 159, 3, 324),
(15, 20, 7, 299),
(16, 408, 5, 239),
(17, 593, 2, 61),
(18, 451, 22, 12),
(19, 330, 7, 328),
(20, 561, 21, 83),
(21, 578, 21, 95),
(22, 333, 8, 263),
(23, 182, 6, 219),
(24, 98, 4, 379),
(25, 461, 22, 262),
(26, 68, 12, 194),
(27, 75, 18, 343),
(28, 563, 7, 272),
(29, 321, 22, 337),
(30, 62, 2, 302),
(31, 592, 10, 59),
(32, 327, 8, 238),
(33, 265, 19, 179),
(34, 679, 4, 330),
(35, 577, 18, 313),
(36, 133, 12, 363),
(37, 386, 7, 305),
(38, 676, 9, 365),
(39, 178, 12, 161),
(40, 674, 10, 69),
(41, 281, 20, 341),
(42, 65, 16, 225),
(43, 8, 9, 130),
(44, 191, 2, 274),
(45, 623, 1, 340),
(46, 195, 18, 85);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documento`
--

CREATE TABLE IF NOT EXISTS `documento` (
`id` int(6) NOT NULL COMMENT 'Num.',
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
  `id_tipodocumento` int(6) DEFAULT NULL COMMENT 'Tipo'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=50 ;

--
-- Volcado de datos para la tabla `documento`
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
-- Estructura de tabla para la tabla `entrega`
--

CREATE TABLE IF NOT EXISTS `entrega` (
`id` int(11) NOT NULL COMMENT 'Id',
  `nota` int(2) DEFAULT NULL COMMENT 'Nota',
  `fecha` date DEFAULT NULL COMMENT 'Fecha Entrega',
  `id_documento` int(11) DEFAULT NULL COMMENT 'Num Documento',
  `id_actividad` int(11) DEFAULT NULL COMMENT 'Num Actividad'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `entrega`
--

INSERT INTO `entrega` (`id`, `nota`, `fecha`, `id_documento`, `id_actividad`) VALUES
(1, 5, '2014-10-09', 1, 1),
(2, 4, '2014-10-15', 2, 2),
(3, 5, '2014-10-07', 3, 3),
(4, 4, '2014-10-16', 4, 4),
(5, 5, '2014-10-15', 5, 5),
(6, 6, '2014-10-16', 6, 6),
(7, 7, '2014-10-17', 7, 7),
(8, 6, '2014-01-15', 8, 8),
(9, 9, '2014-11-15', 9, 9),
(10, 4, '2014-10-05', 10, 10),
(11, 4, '2014-10-12', 11, 11),
(12, 4, '2014-10-15', 12, 12),
(13, 4, '2014-05-15', 13, 13),
(14, 4, '2014-06-15', 14, 14),
(15, 4, '2014-10-08', 15, 15),
(16, 4, '2014-10-13', 16, 16),
(17, 5, '2014-07-17', 17, 17),
(18, 4, '2014-03-15', 18, 18),
(19, 4, '2014-02-02', 19, 19),
(20, 7, '2014-04-25', 20, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE IF NOT EXISTS `estado` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `tipo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Estado'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `estado`
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
-- Estructura de tabla para la tabla `estadotarea`
--

CREATE TABLE IF NOT EXISTS `estadotarea` (
`id` int(11) NOT NULL COMMENT 'ID',
  `descripcion` varchar(255) DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `estadotarea`
--

INSERT INTO `estadotarea` (`id`, `descripcion`) VALUES
(1, 'Diseño'),
(2, 'Sin empezar'),
(3, 'En proceso'),
(4, 'Terminada'),
(5, 'Validada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impuesto`
--

CREATE TABLE IF NOT EXISTS `impuesto` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Impuesto',
  `valor` decimal(4,2) DEFAULT NULL COMMENT 'Valor Impuesto'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=23 ;

--
-- Volcado de datos para la tabla `impuesto`
--

INSERT INTO `impuesto` (`id`, `nombre`, `valor`) VALUES
(1, 'iva 1', '1.00'),
(2, 'iva 2', '2.00'),
(3, 'iva 3', '3.00'),
(4, 'iva 4', '4.00'),
(5, 'iva 5', '5.00'),
(6, 'iva 6', '6.00'),
(7, 'iva 7', '7.00'),
(8, 'iva 8', '8.00'),
(9, 'iva 9', '9.00'),
(10, 'iva 10', '10.00'),
(11, 'iva 11', '11.00'),
(12, 'iva 12', '12.00'),
(13, 'iva 13', '13.00'),
(14, 'iva 14', '14.00'),
(15, 'iva 15', '15.00'),
(16, 'iva 16', '16.00'),
(17, 'iva 17', '17.00'),
(18, 'iva 18', '18.00'),
(19, 'iva 19', '19.00'),
(20, 'iva 20', '20.00'),
(21, 'iva 21', '21.00'),
(22, 'iva 22', '22.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajeprivado`
--

CREATE TABLE IF NOT EXISTS `mensajeprivado` (
`id` int(6) NOT NULL COMMENT 'ID',
  `fechaenvio` datetime DEFAULT NULL COMMENT 'Fecha de envío',
  `id_usuario_1` int(6) DEFAULT NULL COMMENT 'ID Usuario envía',
  `id_usuario_2` int(6) DEFAULT NULL COMMENT 'ID Usuario recibe',
  `asunto` varchar(255) DEFAULT NULL COMMENT 'Asunto',
  `mensaje` longtext COMMENT 'Mensaje'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `mensajeprivado`
--

INSERT INTO `mensajeprivado` (`id`, `fechaenvio`, `id_usuario_1`, `id_usuario_2`, `asunto`, `mensaje`) VALUES
(1, '2014-11-11 08:33:19', 1, 29, 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
(2, '2014-11-04 06:45:15', 4, 23, 'Donec quam felis', 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'),
(3, '2014-11-10 07:57:13', 2, 7, 'Nullam dictum felis eu pede mollis pretium', 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.'),
(4, '2014-11-03 12:08:32', 15, 16, 'Phasellus viverra nulla ut metus varius laoreet', 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'),
(5, '2014-11-14 08:38:25', 8, 9, 'Maecenas tempus, tellus eget condimentum rhoncus', 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.'),
(6, '2014-11-19 05:24:42', 18, 12, 'Donec vitae sapien ut libero venenatis faucibus', 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, '),
(7, '2014-11-16 12:32:12', 11, 6, 'Sed consequat, leo eget bibendum sodales', 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.'),
(8, '2014-11-12 12:27:30', 30, 29, 'Maecenas nec odio et ante tincidunt tempus', 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'),
(9, '2014-11-19 04:24:21', 13, 14, 'Aenean imperdiet. Etiam ultricies nisi vel augue', 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'),
(10, '2014-11-14 08:30:05', 6, 5, 'Vivamus elementum semper nisi', 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.'),
(11, '2014-11-01 06:35:22', 19, 24, 'Nulla consequat massa quis enim', 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.'),
(12, '2014-11-09 05:08:21', 24, 23, 'Vestibulum ante ipsum primis in faucibus', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut '),
(13, '2014-11-17 17:21:30', 17, 15, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'),
(14, '2014-11-15 00:22:28', 15, 9, 'Quis autem vel eum iure reprehenderit', 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'),
(15, '2014-11-12 23:17:59', 3, 27, 'At vero eos et accusamus et iusto odio', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'),
(16, '2014-11-02 21:13:40', 25, 29, 'Nam libero tempore, cum soluta nobis est eligendi', 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'),
(17, '2014-11-13 10:39:10', 6, 1, 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet', 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'),
(18, '2014-11-14 15:13:34', 17, 11, 'Buenas tardes', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'),
(19, '2014-11-17 08:36:28', 22, 21, 'Sed ut perspiciatis unde omnis iste natus error', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'),
(20, '2014-11-09 09:43:32', 28, 29, 'Y, viéndole don Quijote de aquella manera', 'Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metadocumento`
--

CREATE TABLE IF NOT EXISTS `metadocumento` (
`id` int(11) NOT NULL COMMENT 'Id',
  `titulo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Tiulo Documento',
  `fecha` date DEFAULT NULL COMMENT 'Fecha Documento'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `metadocumento`
--

INSERT INTO `metadocumento` (`id`, `titulo`, `fecha`) VALUES
(1, 'Victor', '2013-11-29'),
(2, 'Cristian', '2013-11-29'),
(3, 'Enrique', '2013-11-28'),
(4, 'Jordi', '2013-11-26'),
(5, 'Alvaro', '2013-11-30'),
(6, 'Jacobo', '2013-11-19'),
(7, 'Pilar', '2014-10-07'),
(8, 'Pablo', '2013-11-12'),
(9, 'Pedro', '2013-11-13'),
(10, 'Juancarlos', '2013-10-14'),
(11, 'Andres', '2013-10-15'),
(12, 'Raul', '2013-10-16'),
(13, 'Cristina', '2013-10-17'),
(14, 'Antonio', '2013-10-18'),
(15, 'Jose', '2013-10-19'),
(16, 'Ramon', '2013-10-20'),
(17, 'Andrea', '2013-10-21'),
(18, 'Laura', '2013-10-22'),
(19, 'Marta', '2013-10-23'),
(20, 'Silvia', '2013-10-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metadocumentos`
--

CREATE TABLE IF NOT EXISTS `metadocumentos` (
`id` int(11) NOT NULL COMMENT 'Id Documento',
  `orden` int(11) DEFAULT NULL COMMENT 'Orden Documento',
  `id_documento` int(11) DEFAULT NULL COMMENT 'Numero de Documento',
  `id_metadocumento` int(11) DEFAULT NULL COMMENT 'Numero de Metadocumento'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `metadocumentos`
--

INSERT INTO `metadocumentos` (`id`, `orden`, `id_documento`, `id_metadocumento`) VALUES
(1, 8, 1, 1),
(2, 8, 2, 2),
(3, 8, 3, 3),
(4, 7, 4, 4),
(5, 8, 5, 5),
(6, 7, 6, 6),
(7, 8, 7, 7),
(8, 7, 8, 8),
(9, 8, 9, 9),
(10, 7, 10, 10),
(11, 8, 11, 11),
(12, 7, 12, 12),
(13, 8, 13, 13),
(14, 7, 14, 14),
(15, 8, 15, 15),
(16, 7, 16, 16),
(17, 8, 17, 17),
(18, 7, 18, 18),
(19, 8, 19, 19),
(20, 7, 20, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objeto`
--

CREATE TABLE IF NOT EXISTS `objeto` (
  `id` int(6) NOT NULL COMMENT 'ID Objeto',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `objeto`
--

INSERT INTO `objeto` (`id`, `descripcion`) VALUES
(1, 'actividad'),
(2, 'amistad'),
(3, 'cliente'),
(4, 'comentario'),
(5, 'compra'),
(6, 'cuestionario'),
(7, 'detalle_pedido'),
(8, 'documento'),
(9, 'entrega'),
(10, 'estado'),
(11, 'impuesto'),
(12, 'mensajeprivado'),
(13, 'metadocumento'),
(14, 'metadocumentos'),
(15, 'objeto'),
(16, 'opcion'),
(17, 'operacion'),
(18, 'ordenador'),
(19, 'pedido'),
(20, 'permiso'),
(21, 'post'),
(22, 'pregunta'),
(23, 'producto'),
(24, 'propuesta'),
(25, 'proveedor'),
(26, 'publicacion'),
(27, 'respuesta'),
(28, 'tema'),
(29, 'tipodocumento'),
(30, 'tipooperacion'),
(31, 'tipoproducto'),
(32, 'tipopropuesta'),
(33, 'tipotema'),
(34, 'tipousuario'),
(35, 'usuario'),
(36, 'trabajo'),
(37, 'tipotarea'),
(38, 'estadotarea'),
(39, 'proyecto'),
(40, 'documentobonito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion`
--

CREATE TABLE IF NOT EXISTS `opcion` (
`id` int(11) NOT NULL COMMENT 'id',
  `valor` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Valor',
  `id_pregunta` int(11) DEFAULT NULL COMMENT 'Pregunta'
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
-- Estructura de tabla para la tabla `operacion`
--

CREATE TABLE IF NOT EXISTS `operacion` (
`id` int(6) NOT NULL COMMENT 'ID Operación',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción',
  `id_objeto` int(6) DEFAULT NULL COMMENT 'ID Objeto',
  `id_tipooperacion` int(6) DEFAULT NULL COMMENT 'ID Tipo Operación'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=460 ;

--
-- Volcado de datos para la tabla `operacion`
--

INSERT INTO `operacion` (`id`, `descripcion`, `id_objeto`, `id_tipooperacion`) VALUES
(1, 'get', 1, 1),
(2, 'getaggregateviewone', 1, 1),
(3, 'getprettycolumns', 1, 1),
(4, 'getcolumns', 1, 1),
(5, 'getpage', 1, 1),
(6, 'getpages', 1, 1),
(7, 'getregisters', 1, 1),
(8, 'getaggregateviewsome', 1, 1),
(9, 'remove', 1, 2),
(10, 'set', 1, 2),
(11, 'updateOne', 1, 2),
(23, 'get', 2, 1),
(24, 'getaggregateviewone', 2, 1),
(25, 'getprettycolumns', 2, 1),
(26, 'getcolumns', 2, 1),
(27, 'getpage', 2, 1),
(28, 'getpages', 2, 1),
(29, 'getregisters', 2, 1),
(30, 'getaggregateviewsome', 2, 1),
(31, 'remove', 2, 2),
(32, 'set', 2, 2),
(33, 'updateOne', 2, 2),
(34, 'get', 3, 1),
(35, 'getaggregateviewone', 3, 1),
(36, 'getprettycolumns', 3, 1),
(37, 'getcolumns', 3, 1),
(38, 'getpage', 3, 1),
(39, 'getpages', 3, 1),
(40, 'getregisters', 3, 1),
(41, 'getaggregateviewsome', 3, 1),
(42, 'remove', 3, 2),
(43, 'set', 3, 2),
(44, 'updateOne', 3, 2),
(45, 'get', 4, 1),
(46, 'getaggregateviewone', 4, 1),
(47, 'getprettycolumns', 4, 1),
(48, 'getcolumns', 4, 1),
(49, 'getpage', 4, 1),
(50, 'getpages', 4, 1),
(51, 'getregisters', 4, 1),
(52, 'getaggregateviewsome', 4, 1),
(53, 'remove', 4, 2),
(54, 'set', 4, 2),
(55, 'updateOne', 4, 2),
(56, 'get', 5, 1),
(57, 'getaggregateviewone', 5, 1),
(58, 'getprettycolumns', 5, 1),
(59, 'getcolumns', 5, 1),
(60, 'getpage', 5, 1),
(61, 'getpages', 5, 1),
(62, 'getregisters', 5, 1),
(63, 'getaggregateviewsome', 5, 1),
(64, 'remove', 5, 2),
(65, 'set', 5, 2),
(66, 'updateOne', 5, 2),
(67, 'get', 6, 1),
(68, 'getaggregateviewone', 6, 1),
(69, 'getprettycolumns', 6, 1),
(70, 'getcolumns', 6, 1),
(71, 'getpage', 6, 1),
(72, 'getpages', 6, 1),
(73, 'getregisters', 6, 1),
(74, 'getaggregateviewsome', 6, 1),
(75, 'remove', 6, 2),
(76, 'set', 6, 2),
(77, 'updateOne', 6, 2),
(78, 'get', 7, 1),
(79, 'getaggregateviewone', 7, 1),
(80, 'getprettycolumns', 7, 1),
(81, 'getcolumns', 7, 1),
(82, 'getpage', 7, 1),
(83, 'getpages', 7, 1),
(84, 'getregisters', 7, 1),
(85, 'getaggregateviewsome', 7, 1),
(86, 'remove', 7, 2),
(87, 'set', 7, 2),
(88, 'updateOne', 7, 2),
(89, 'get', 8, 1),
(90, 'getaggregateviewone', 8, 1),
(91, 'getprettycolumns', 8, 1),
(92, 'getcolumns', 8, 1),
(93, 'getpage', 8, 1),
(94, 'getpages', 8, 1),
(95, 'getregisters', 8, 1),
(96, 'getaggregateviewsome', 8, 1),
(97, 'remove', 8, 2),
(98, 'set', 8, 2),
(99, 'updateOne', 8, 2),
(100, 'get', 9, 1),
(101, 'getaggregateviewone', 9, 1),
(102, 'getprettycolumns', 9, 1),
(103, 'getcolumns', 9, 1),
(104, 'getpage', 9, 1),
(105, 'getpages', 9, 1),
(106, 'getregisters', 9, 1),
(107, 'getaggregateviewsome', 9, 1),
(108, 'remove', 9, 2),
(109, 'set', 9, 2),
(110, 'updateOne', 9, 2),
(111, 'get', 10, 1),
(112, 'getaggregateviewone', 10, 1),
(113, 'getprettycolumns', 10, 1),
(114, 'getcolumns', 10, 1),
(115, 'getpage', 10, 1),
(116, 'getpages', 10, 1),
(117, 'getregisters', 10, 1),
(118, 'getaggregateviewsome', 10, 1),
(119, 'remove', 10, 2),
(120, 'set', 10, 2),
(121, 'updateOne', 10, 2),
(122, 'get', 11, 1),
(123, 'getaggregateviewone', 11, 1),
(124, 'getprettycolumns', 11, 1),
(125, 'getcolumns', 11, 1),
(126, 'getpage', 11, 1),
(127, 'getpages', 11, 1),
(128, 'getregisters', 11, 1),
(129, 'getaggregateviewsome', 11, 1),
(130, 'remove', 11, 2),
(131, 'set', 11, 2),
(132, 'updateOne', 11, 2),
(133, 'get', 12, 1),
(134, 'getaggregateviewone', 12, 1),
(135, 'getprettycolumns', 12, 1),
(136, 'getcolumns', 12, 1),
(137, 'getpage', 12, 1),
(138, 'getpages', 12, 1),
(139, 'getregisters', 12, 1),
(140, 'getaggregateviewsome', 12, 1),
(141, 'remove', 12, 2),
(142, 'set', 12, 2),
(143, 'updateOne', 12, 2),
(144, 'get', 13, 1),
(145, 'getaggregateviewone', 13, 1),
(146, 'getprettycolumns', 13, 1),
(147, 'getcolumns', 13, 1),
(148, 'getpage', 13, 1),
(149, 'getpages', 13, 1),
(150, 'getregisters', 13, 1),
(151, 'getaggregateviewsome', 13, 1),
(152, 'remove', 13, 2),
(153, 'set', 13, 2),
(154, 'updateOne', 13, 2),
(155, 'get', 14, 1),
(156, 'getaggregateviewone', 14, 1),
(157, 'getprettycolumns', 14, 1),
(158, 'getcolumns', 14, 1),
(159, 'getpage', 14, 1),
(160, 'getpages', 14, 1),
(161, 'getregisters', 14, 1),
(162, 'getaggregateviewsome', 14, 1),
(163, 'remove', 14, 2),
(164, 'set', 14, 2),
(165, 'updateOne', 14, 2),
(166, 'get', 15, 1),
(167, 'getaggregateviewone', 15, 1),
(168, 'getprettycolumns', 15, 1),
(169, 'getcolumns', 15, 1),
(170, 'getpage', 15, 1),
(171, 'getpages', 15, 1),
(172, 'getregisters', 15, 1),
(173, 'getaggregateviewsome', 15, 1),
(174, 'remove', 15, 2),
(175, 'set', 15, 2),
(176, 'updateOne', 15, 2),
(177, 'get', 16, 1),
(178, 'getaggregateviewone', 16, 1),
(179, 'getprettycolumns', 16, 1),
(180, 'getcolumns', 16, 1),
(181, 'getpage', 16, 1),
(182, 'getpages', 16, 1),
(183, 'getregisters', 16, 1),
(184, 'getaggregateviewsome', 16, 1),
(185, 'remove', 16, 2),
(186, 'set', 16, 2),
(187, 'updateOne', 16, 2),
(188, 'get', 17, 1),
(189, 'getaggregateviewone', 17, 1),
(190, 'getprettycolumns', 17, 1),
(191, 'getcolumns', 17, 1),
(192, 'getpage', 17, 1),
(193, 'getpages', 17, 1),
(194, 'getregisters', 17, 1),
(195, 'getaggregateviewsome', 17, 1),
(196, 'remove', 17, 2),
(197, 'set', 17, 2),
(198, 'updateOne', 17, 2),
(199, 'get', 18, 1),
(200, 'getaggregateviewone', 18, 1),
(201, 'getprettycolumns', 18, 1),
(202, 'getcolumns', 18, 1),
(203, 'getpage', 18, 1),
(204, 'getpages', 18, 1),
(205, 'getregisters', 18, 1),
(206, 'getaggregateviewsome', 18, 1),
(207, 'remove', 18, 2),
(208, 'set', 18, 2),
(209, 'updateOne', 18, 2),
(210, 'get', 19, 1),
(211, 'getaggregateviewone', 19, 1),
(212, 'getprettycolumns', 19, 1),
(213, 'getcolumns', 19, 1),
(214, 'getpage', 19, 1),
(215, 'getpages', 19, 1),
(216, 'getregisters', 19, 1),
(217, 'getaggregateviewsome', 19, 1),
(218, 'remove', 19, 2),
(219, 'set', 19, 2),
(220, 'updateOne', 19, 2),
(221, 'get', 20, 1),
(222, 'getaggregateviewone', 20, 1),
(223, 'getprettycolumns', 20, 1),
(224, 'getcolumns', 20, 1),
(225, 'getpage', 20, 1),
(226, 'getpages', 20, 1),
(227, 'getregisters', 20, 1),
(228, 'getaggregateviewsome', 20, 1),
(229, 'remove', 20, 2),
(230, 'set', 20, 2),
(231, 'updateOne', 20, 2),
(232, 'get', 21, 1),
(233, 'getaggregateviewone', 21, 1),
(234, 'getprettycolumns', 21, 1),
(235, 'getcolumns', 21, 1),
(236, 'getpage', 21, 1),
(237, 'getpages', 21, 1),
(238, 'getregisters', 21, 1),
(239, 'getaggregateviewsome', 21, 1),
(240, 'remove', 21, 2),
(241, 'set', 21, 2),
(242, 'updateOne', 21, 2),
(243, 'get', 22, 1),
(244, 'getaggregateviewone', 22, 1),
(245, 'getprettycolumns', 22, 1),
(246, 'getcolumns', 22, 1),
(247, 'getpage', 22, 1),
(248, 'getpages', 22, 1),
(249, 'getregisters', 22, 1),
(250, 'getaggregateviewsome', 22, 1),
(251, 'remove', 22, 2),
(252, 'set', 22, 2),
(253, 'updateOne', 22, 2),
(254, 'get', 23, 1),
(255, 'getaggregateviewone', 23, 1),
(256, 'getprettycolumns', 23, 1),
(257, 'getcolumns', 23, 1),
(258, 'getpage', 23, 1),
(259, 'getpages', 23, 1),
(260, 'getregisters', 23, 1),
(261, 'getaggregateviewsome', 23, 1),
(262, 'remove', 23, 2),
(263, 'set', 23, 2),
(264, 'updateOne', 23, 2),
(265, 'get', 24, 1),
(266, 'getaggregateviewone', 24, 1),
(267, 'getprettycolumns', 24, 1),
(268, 'getcolumns', 24, 1),
(269, 'getpage', 24, 1),
(270, 'getpages', 24, 1),
(271, 'getregisters', 24, 1),
(272, 'getaggregateviewsome', 24, 1),
(273, 'remove', 24, 2),
(274, 'set', 24, 2),
(275, 'updateOne', 24, 2),
(276, 'get', 25, 1),
(277, 'getaggregateviewone', 25, 1),
(278, 'getprettycolumns', 25, 1),
(279, 'getcolumns', 25, 1),
(280, 'getpage', 25, 1),
(281, 'getpages', 25, 1),
(282, 'getregisters', 25, 1),
(283, 'getaggregateviewsome', 25, 1),
(284, 'remove', 25, 2),
(285, 'set', 25, 2),
(286, 'updateOne', 25, 2),
(287, 'get', 26, 1),
(288, 'getaggregateviewone', 26, 1),
(289, 'getprettycolumns', 26, 1),
(290, 'getcolumns', 26, 1),
(291, 'getpage', 26, 1),
(292, 'getpages', 26, 1),
(293, 'getregisters', 26, 1),
(294, 'getaggregateviewsome', 26, 1),
(295, 'remove', 26, 2),
(296, 'set', 26, 2),
(297, 'updateOne', 26, 2),
(298, 'get', 27, 1),
(299, 'getaggregateviewone', 27, 1),
(300, 'getprettycolumns', 27, 1),
(301, 'getcolumns', 27, 1),
(302, 'getpage', 27, 1),
(303, 'getpages', 27, 1),
(304, 'getregisters', 27, 1),
(305, 'getaggregateviewsome', 27, 1),
(306, 'remove', 27, 2),
(307, 'set', 27, 2),
(308, 'updateOne', 27, 2),
(309, 'get', 28, 1),
(310, 'getaggregateviewone', 28, 1),
(311, 'getprettycolumns', 28, 1),
(312, 'getcolumns', 28, 1),
(313, 'getpage', 28, 1),
(314, 'getpages', 28, 1),
(315, 'getregisters', 28, 1),
(316, 'getaggregateviewsome', 28, 1),
(317, 'remove', 28, 2),
(318, 'set', 28, 2),
(319, 'updateOne', 28, 2),
(320, 'get', 29, 1),
(321, 'getaggregateviewone', 29, 1),
(322, 'getprettycolumns', 29, 1),
(323, 'getcolumns', 29, 1),
(324, 'getpage', 29, 1),
(325, 'getpages', 29, 1),
(326, 'getregisters', 29, 1),
(327, 'getaggregateviewsome', 29, 1),
(328, 'remove', 29, 2),
(329, 'set', 29, 2),
(330, 'updateOne', 29, 2),
(331, 'get', 30, 1),
(332, 'getaggregateviewone', 30, 1),
(333, 'getprettycolumns', 30, 1),
(334, 'getcolumns', 30, 1),
(335, 'getpage', 30, 1),
(336, 'getpages', 30, 1),
(337, 'getregisters', 30, 1),
(338, 'getaggregateviewsome', 30, 1),
(339, 'remove', 30, 2),
(340, 'set', 30, 2),
(341, 'updateOne', 30, 2),
(342, 'get', 31, 1),
(343, 'getaggregateviewone', 31, 1),
(344, 'getprettycolumns', 31, 1),
(345, 'getcolumns', 31, 1),
(346, 'getpage', 31, 1),
(347, 'getpages', 31, 1),
(348, 'getregisters', 31, 1),
(349, 'getaggregateviewsome', 31, 1),
(350, 'remove', 31, 2),
(351, 'set', 31, 2),
(352, 'updateOne', 31, 2),
(353, 'get', 32, 1),
(354, 'getaggregateviewone', 32, 1),
(355, 'getprettycolumns', 32, 1),
(356, 'getcolumns', 32, 1),
(357, 'getpage', 32, 1),
(358, 'getpages', 32, 1),
(359, 'getregisters', 32, 1),
(360, 'getaggregateviewsome', 32, 1),
(361, 'remove', 32, 2),
(362, 'set', 32, 2),
(363, 'updateOne', 32, 2),
(364, 'get', 33, 1),
(365, 'getaggregateviewone', 33, 1),
(366, 'getprettycolumns', 33, 1),
(367, 'getcolumns', 33, 1),
(368, 'getpage', 33, 1),
(369, 'getpages', 33, 1),
(370, 'getregisters', 33, 1),
(371, 'getaggregateviewsome', 33, 1),
(372, 'remove', 33, 2),
(373, 'set', 33, 2),
(374, 'updateOne', 33, 2),
(375, 'get', 34, 1),
(376, 'getaggregateviewone', 34, 1),
(377, 'getprettycolumns', 34, 1),
(378, 'getcolumns', 34, 1),
(379, 'getpage', 34, 1),
(380, 'getpages', 34, 1),
(381, 'getregisters', 34, 1),
(382, 'getaggregateviewsome', 34, 1),
(383, 'remove', 34, 2),
(384, 'set', 34, 2),
(385, 'updateOne', 34, 2),
(386, 'get', 35, 1),
(387, 'getaggregateviewone', 35, 1),
(388, 'getprettycolumns', 35, 1),
(389, 'getcolumns', 35, 1),
(390, 'getpage', 35, 1),
(391, 'getpages', 35, 1),
(392, 'getregisters', 35, 1),
(393, 'getaggregateviewsome', 35, 1),
(394, 'remove', 35, 2),
(395, 'set', 35, 2),
(396, 'updateOne', 35, 2),
(397, 'get', 36, 1),
(398, 'getaggregateviewone', 36, 1),
(399, 'getprettycolumns', 36, 1),
(400, 'getcolumns', 36, 1),
(401, 'getpage', 36, 1),
(402, 'getpages', 36, 1),
(403, 'getregisters', 36, 1),
(404, 'getaggregateviewsome', 36, 1),
(405, 'remove', 36, 2),
(406, 'set', 36, 2),
(407, 'updateOne', 36, 2),
(408, 'get', 37, 1),
(409, 'getaggregateviewone', 37, 1),
(410, 'getprettycolumns', 37, 1),
(411, 'getcolumns', 37, 1),
(412, 'getpage', 37, 1),
(413, 'getpages', 37, 1),
(414, 'getregisters', 37, 1),
(415, 'getaggregateviewsome', 37, 1),
(416, 'remove', 37, 2),
(417, 'set', 37, 2),
(418, 'updateOne', 37, 2),
(419, 'get', 38, 1),
(420, 'getaggregateviewone', 38, 1),
(421, 'getprettycolumns', 38, 1),
(422, 'getcolumns', 38, 1),
(423, 'getpage', 38, 1),
(424, 'getpages', 38, 1),
(425, 'getregisters', 38, 1),
(426, 'getaggregateviewsome', 38, 1),
(427, 'remove', 38, 2),
(428, 'set', 38, 2),
(429, 'updateOne', 38, 2),
(430, 'get', 39, 1),
(431, 'getaggregateviewone', 39, 1),
(432, 'getprettycolumns', 39, 1),
(433, 'getcolumns', 39, 1),
(434, 'getpage', 39, 1),
(435, 'getpages', 39, 1),
(436, 'getregisters', 39, 1),
(437, 'getaggregateviewsome', 39, 1),
(438, 'remove', 39, 2),
(439, 'set', 39, 2),
(440, 'updateOne', 39, 2),
(441, 'get', 40, 1),
(442, 'getaggregateviewone', 40, 1),
(443, 'getprettycolumns', 40, 1),
(444, 'getcolumns', 40, 1),
(445, 'getpage', 40, 1),
(446, 'getpages', 40, 1),
(447, 'getregisters', 40, 1),
(448, 'getaggregateviewsome', 40, 1),
(449, 'remove', 40, 2),
(450, 'set', 40, 2),
(451, 'updateOne', 40, 2),
(452, 'getAllPreguntas', 6, 1),
(453, 'setForm', 27, 2),
(454, 'agregaramigo', 2, 2),
(455, 'removeamigo', 2, 2),
(456, 'existeamigo', 2, 1),
(457, 'duplicate', 26, 2),
(458, 'getcomentarioamigo', 26, 1),
(459, 'getpagescomentarioamigo', 26, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenador`
--

CREATE TABLE IF NOT EXISTS `ordenador` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `ordenador`
--

INSERT INTO `ordenador` (`id`, `descripcion`) VALUES
(1, 'Ordenador de rafa'),
(2, 'Ordenador de pep'),
(3, 'aaas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE IF NOT EXISTS `pedido` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `fecha` date DEFAULT NULL COMMENT 'Fecha Pedido',
  `observaciones` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Observaciones',
  `id_usuario` int(11) NOT NULL DEFAULT '0' COMMENT 'Id Usuario'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=24 ;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `fecha`, `observaciones`, `id_usuario`) VALUES
(1, '2014-07-10', NULL, 1),
(2, '2013-11-06', 'Reclamación cliente', 2),
(3, '2014-02-15', NULL, 3),
(4, '2012-05-01', NULL, 4),
(5, '2014-12-18', NULL, 5),
(6, '2014-02-20', NULL, 6),
(7, '2013-09-11', 'Entrega atrasada', 7),
(8, '2014-07-07', 'Cliente se declara insolvente', 8),
(9, '2011-08-02', NULL, 9),
(10, '2012-06-16', 'Reclamación cliente', 10),
(11, '2014-11-26', NULL, 24),
(12, '2013-08-31', NULL, 12),
(13, '2014-02-22', NULL, 13),
(14, '2013-01-03', NULL, 14),
(15, '2011-03-12', 'Reclamación cliente', 15),
(16, '2013-06-30', NULL, 16),
(17, '2014-07-28', NULL, 17),
(18, '2014-09-11', 'Reclamación cliente', 18),
(19, '2011-09-04', 'Reclamación cliente', 19),
(20, '2011-02-07', NULL, 20),
(21, '2014-01-13', NULL, 21),
(22, '2012-10-17', NULL, 22),
(23, '2014-04-12', 'Reclamación cliente', 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permiso`
--

CREATE TABLE IF NOT EXISTS `permiso` (
`id` int(6) NOT NULL COMMENT 'ID Permiso',
  `id_tipousuario` int(6) DEFAULT NULL COMMENT 'ID Tipo de usuario',
  `id_tipooperacion` int(6) DEFAULT NULL COMMENT 'ID Tipo Operación',
  `permitido` tinyint(1) DEFAULT NULL COMMENT 'Permitido'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `permiso`
--

INSERT INTO `permiso` (`id`, `id_tipousuario`, `id_tipooperacion`, `permitido`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 2, 1, 1),
(4, 2, 2, 1),
(5, 3, 1, 1),
(6, 2, 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE IF NOT EXISTS `post` (
`id` int(6) NOT NULL COMMENT 'ID',
  `titulo` varchar(255) DEFAULT NULL COMMENT 'Título',
  `mensaje` longtext COMMENT 'Mensaje',
  `fechacreacion` datetime DEFAULT NULL COMMENT 'Fecha Creación',
  `fechamodificacion` datetime DEFAULT NULL COMMENT 'Fecha Modificación',
  `id_tema` int(6) DEFAULT NULL COMMENT 'ID Tema',
  `id_usuario` int(6) DEFAULT NULL COMMENT 'ID Usuario'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36 ;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id`, `titulo`, `mensaje`, `fechacreacion`, `fechamodificacion`, `id_tema`, `id_usuario`) VALUES
(1, 'Peter Lim, ¿Estafa o no?', 'Qué os parece el nuevo dueño del Valencia CF, ¿os parece un timador?\r\n\r\nSé que a mucha gente no le causa mucha confianza.', '2014-10-30 09:43:02', '2014-10-30 09:45:02', 1, 2),
(2, 'Peter Lim, ¿Estafa o no?', 'Es campechano como el Juanca', '2014-10-30 09:43:55', '2014-10-30 09:43:55', 1, 15),
(3, 'Ranking películas de terror', 'Aquí tenéis mi ranking de películas de terror:\r\n\r\n1.- El grito\r\n2.- Scream\r\n3.- La señal', '2014-10-20 12:35:00', '2014-10-20 12:35:00', 2, 10),
(4, 'Ranking películas de terror', 'No estoy de acuerdo, Scream es una película del montón', '2014-10-20 13:30:05', '2014-10-20 13:30:05', 2, 15),
(5, '¿Que os parece este ordenador?', 'No sé si comprarme el Acer R34765', '2014-10-23 14:20:10', '2014-10-23 14:20:10', 3, 14),
(6, '¿Que os parece este ordenador?', 'Si pones las especificaciones mejor', '2014-10-23 14:25:10', '2014-10-23 14:25:10', 3, 2),
(7, '¿Xbox One, PC o Ps4?', '¿Cuál os parece la mejor plataforma?', '2014-10-30 13:17:50', '2014-10-30 13:17:50', 4, 16),
(8, '¿Xbox One, PC o Ps4?', 'XBOX ONE claramente, y sino PC con Windows', '2014-10-30 13:19:50', '2014-10-30 13:19:50', 4, 29),
(9, 'Comparación Audi tt y BMW serie 1', 'Me gusta más la carrocería del BMW, pero el motor del Audi me parece más potente', '2014-09-15 08:02:00', '2014-09-15 08:03:00', 5, 1),
(10, 'Como montar una estantería fácilmente', 'https://www.youtube.com/watch?v=I7cfajBGDAo', '2014-10-30 14:27:50', '2014-10-30 14:27:50', 6, 29),
(11, 'Como montar una estantería fácilmente', 'Muy útil, gracias.', '2014-10-30 14:28:50', '2014-10-30 14:28:50', 6, 28),
(12, 'Especificaciones GoPro3', 'Los amantes de las cámaras de acción tienen un nuevo modelo a tener en el punto de mira, GoPro HERO3, una nueva gama que acaba de ser presentada con el objetivo de hacernos olvidar modelos anteriores, gracias a la rebaja de dimensiones, y mejora en especificaciones.Aparece en tres versiones, Black, Silver, y White. Externamente mantienen unas líneas de diseño que ya son reconocibles, como icono de mercado. El nuevo modelo es un 30&#37; más delgado, y pesa un 25&#37; menos.Todos los modelos cuentan con conectividad WiFi como novedad, un aspecto que supone un plus, y que se aprovecha en el modelo Black con la incorporación de un control remoto que permite operar con la cámara a distancia. Con el mando se pueden controlar hasta 50 cámaras a la vez, y es sumergible.', '2014-05-05 04:10:52', '2014-05-05 04:10:52', 7, 8),
(13, 'Especificaciones GoPro3', 'Está muy bien se la recomendaría a mis amigos', '2014-05-05 04:15:52', '2014-05-05 04:15:52', 7, 6),
(14, 'Sorteo entrada para el cine ABC El Saler', 'Los que queráis participar escribid en el hilo', '2014-01-30 18:15:17', '2014-01-30 18:15:17', 8, 8),
(15, 'Sorteo entrada para el cine ABC El Saler', 'Me apunto', '2014-01-30 18:18:17', '2014-01-30 18:18:17', 8, 21),
(16, 'Sorteo entrada para el cine ABC El Saler', 'Yo también', '2014-01-30 18:18:28', '2014-01-30 18:18:28', 8, 17),
(17, 'Consulta sobre hongos en los pies', 'Que medicamento me recomendáis para tratar los hongos en los pies', '2014-07-29 09:46:10', '2014-07-29 09:46:10', 9, 4),
(18, 'Consulta sobre hongos en los pies', 'Silvisil cura hongos', '2014-07-29 11:46:10', '2014-07-29 14:46:10', 9, 15),
(19, 'Duda convalidaciones de FOL', 'Como puedo convalidarme la asignatura', '2014-05-07 19:54:00', '2014-05-07 19:54:00', 10, 5),
(20, 'Duda convalidaciones de FOL', 'Tienes que haber cursado un modulo similar o de las mismas caracteristicas', '2014-05-07 20:34:00', '2014-05-07 21:54:00', 10, 10),
(21, 'Viajes a Malaysia', 'Con qué agencia de viajes me recomendariais viajar a Malaysia?', '2014-10-28 06:46:54', '2014-10-28 06:46:54', 11, 9),
(22, 'Viajes a Malaysia', 'RyanAir que es de bajo coste y alta seguridad', '2014-10-28 18:46:54', '2014-10-28 18:46:54', 11, 1),
(23, 'Receta-Tarta de limón', 'Tipo de receta: Postre\r\n\r\nNúmero de partes: 3 porciones\r\n\r\nTiempo de preparación: 15 Minutos\r\nTiempo de cocción: 6 Horas\r\nListos en: 6 h, 15 m\r\nDificultad: Fácil\r\n500 grms, queso fresco de untar\r\n500 ml. Nata de montar ( crema de leche )\r\n200 ml. Leche condensada\r\n150 ml Zumo de limón ( como dos limones )\r\n2 sobres de gelatina de limon\r\n\r\nPara la base\r\n1 rulo de galletas maria\r\n4 cucharadas de mantequilla\r\n100 grms avellanas\r\n1 cucharadita de canela', '2014-09-20 11:50:01', '2014-09-20 11:50:01', 12, 10),
(24, 'Receta-Tarta de limón', 'La probaré tu tranquilo que para la proxima saldra mejor', '2014-09-20 11:52:01', '2014-09-20 12:50:01', 12, 2),
(25, 'Pasarela Cibeles 2015', 'Osea, guay, hay pasarela suuuuper larga, jijiji :P', '2014-10-28 21:23:54', '2014-10-28 21:23:54', 13, 13),
(26, 'Pasarela Cibeles 2015', 'Me esperaba algo de informacion', '2014-10-28 22:23:55', '2014-10-28 23:19:56', 13, 22),
(27, 'Concierto Luz Casal en Burjassot', 'Se sabe algo sobre artistas invitados?', '2014-06-20 12:05:40', '2014-06-20 12:09:40', 14, 16),
(28, 'Concierto Luz Casal en Burjassot', 'Todavia no hemos recibido esa informacion', '2014-06-21 12:05:40', '2014-06-21 12:05:40', 14, 18),
(29, 'Me falla la impresora-AYUDA', 'Porque mi impresora no hace pizzas?', '2014-10-23 13:10:52', '2014-10-23 13:10:52', 15, 15),
(30, 'Me falla la impresora-AYUDA', 'Prueba a romperla y luego comertela', '2014-10-23 14:10:52', '2014-10-23 14:10:52', 15, 11),
(31, '¿Iphone 6 es un timo o no?', 'Creeis que el iPhone 6 se dobla como dicen?', '2014-09-24 09:59:02', '2014-09-24 09:59:02', 16, 23),
(32, 'Conferencia Stephen Hawking', 'https://www.youtube.com/watch?v=r8q4Hun7FMA', '2014-10-30 09:12:08', '2014-10-30 09:12:08', 17, 17),
(33, '¿Cuál es el mejor museo de carruajes de Europa?', 'Cual me recomendais visitar?', '2014-10-30 10:22:18', '2014-10-30 10:22:18', 18, 4),
(34, 'Vendo Ford Fiesta rosa en perfectas condiciones (Valencia)', 'Pues eso', '2014-08-15 16:11:22', '2014-08-16 20:15:22', 19, 9),
(35, '¿Bleach o Naruto?-Cuidado SPOILERS', 'Que serie os parece mejor? en ambas mueren todos al final', '2014-10-12 09:14:18', '2014-10-21 10:15:18', 20, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE IF NOT EXISTS `pregunta` (
`id` int(11) NOT NULL COMMENT 'id',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripcion',
  `id_cuestionario` int(11) DEFAULT NULL COMMENT 'Cuestionario'
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
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `codigo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Codigo',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripcion',
  `precio` decimal(6,2) DEFAULT NULL COMMENT 'Precio',
  `id_tipoproducto` int(11) NOT NULL DEFAULT '0' COMMENT 'Id Tipo Producto',
  `id_proveedor` int(11) NOT NULL DEFAULT '0' COMMENT 'Id Proveedor',
  `path` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'imagen'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=406 ;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `codigo`, `descripcion`, `precio`, `id_tipoproducto`, `id_proveedor`, `path`) VALUES
(1, '778uj8822', 'Broca gorda de paso fino', '6.22', 24, 9, 'images/broca.jpg'),
(2, '44RR456', 'Taladro', '100.00', 1, 18, 'images/taladro.jpg'),
(3, '6RRTU3', 'Sierra de calar', '123.00', 2, 3, 'images/sierra.jpg'),
(4, 'SE2PI', 'Pincel', '23.00', 1, 2, 'images/pincel.jpg'),
(5, 'ED45E', 'Caja de cambios', '231.00', 11, 1, 'images/caja.jpg'),
(8, '455T', 'Llave de mano', '23.50', 2, 20, 'images/llave.jpg'),
(10, '1413D', 'Llave auxiliar de emergencia', '740.91', 1, 13, 'images/llave2.jpg'),
(11, '1414D', 'Llave auxiliar de repuesto', '864.75', 1, 4, 'images/llave3.jpg'),
(12, '1415D', 'Llave auxiliar de paso', '1269.10', 1, 4, 'images/llave5.jpg'),
(13, '1416Dss', 'Llave auxiliar de acople', '1451.25', 11, 7, 'images/llave4.jpg'),
(14, '1413D', 'Llave auxiliar de emergencia', '1733.93', 1, 1, 'images/noimagen.jpg'),
(15, '1414D', 'Llave auxiliar de repuesto', '533.68', 1, 4, 'images/noimagen.jpg'),
(16, '1415D', 'Llave auxiliar de paso', '150.58', 1, 17, 'images/noimagen.jpg'),
(17, '1416D', 'Llave auxiliar de acople', '1860.79', 1, 11, 'images/noimagen.jpg'),
(18, '1413D', 'Llave auxiliar de emergencia', '1148.52', 1, 4, 'images/noimagen.jpg'),
(19, '1414D', 'Llave auxiliar de repuesto', '1021.47', 1, 9, 'images/noimagen.jpg'),
(20, '1415D', 'Llave auxiliar de paso', '1510.44', 1, 12, 'images/noimagen.jpg'),
(21, '1416D', 'Llave auxiliar de acople', '885.46', 1, 10, 'images/noimagen.jpg'),
(22, '1417D', 'Llave auxiliar de mano', '1669.62', 1, 15, 'images/noimagen.jpg'),
(23, '1413D', 'Llave auxiliar de emergencia', '832.31', 1, 2, 'images/noimagen.jpg'),
(24, '1414D', 'Llave auxiliar de repuesto', '1930.30', 1, 7, 'images/noimagen.jpg'),
(25, '1415D', 'Llave auxiliar de paso', '505.35', 11, 8, 'images/noimagen.jpg'),
(26, '1416D', 'Llave auxiliar de acople', '104.86', 1, 9, 'images/noimagen.jpg'),
(27, '1417D', 'Llave auxiliar de mano', '891.52', 10, 18, 'images/noimagen.jpg'),
(28, '1413D', 'Llave auxiliar de emergencia', '521.77', 1, 4, 'images/noimagen.jpg'),
(29, '1414D', 'Llave auxiliar de repuesto', '1022.15', 1, 10, 'images/noimagen.jpg'),
(30, '1415D', 'Llave auxiliar de paso', '783.54', 1, 14, 'images/noimagen.jpg'),
(31, '1416D', 'Llave auxiliar de acople', '505.47', 1, 18, 'images/noimagen.jpg'),
(32, '1417D', 'Llave auxiliar de mano', '1386.33', 1, 21, 'images/noimagen.jpg'),
(33, '1539D', 'Llave manual de emergencia', '1412.16', 1, 21, 'images/noimagen.jpg'),
(34, '15310D', 'Llave manual de repuesto', '1662.15', 1, 20, 'images/noimagen.jpg'),
(35, '15311D', 'Llave manual de paso', '1236.49', 1, 15, 'images/noimagen.jpg'),
(36, '15312D', 'Llave manual de acople', '266.80', 1, 18, 'images/noimagen.jpg'),
(37, '15313D', 'Llave manual de mano', '1234.32', 1, 2, 'images/noimagen.jpg'),
(38, '14315D', 'Llave con rodadura de emergencia', '913.94', 1, 20, 'images/noimagen.jpg'),
(39, '14316D', 'Llave con rodadura de repuesto', '817.18', 1, 11, 'images/noimagen.jpg'),
(40, '14317D', 'Llave con rodadura de paso', '571.70', 1, 15, 'images/noimagen.jpg'),
(41, '14318D', 'Llave con rodadura de acople', '139.15', 1, 21, 'images/noimagen.jpg'),
(42, '14319D', 'Llave con rodadura de mano', '1343.85', 1, 17, 'images/noimagen.jpg'),
(43, '14521D', 'Llave extensivo de emergencia', '1872.10', 1, 3, 'images/noimagen.jpg'),
(44, '14522D', 'Llave extensivo de repuesto', '1391.89', 1, 4, 'images/noimagen.jpg'),
(45, '14523D', 'Llave extensivo de paso', '390.53', 1, 12, 'images/noimagen.jpg'),
(46, '14524D', 'Llave extensivo de acople', '1450.87', 1, 7, 'images/noimagen.jpg'),
(47, '14525D', 'Llave extensivo de mano', '1332.32', 1, 17, 'images/noimagen.jpg'),
(48, '14927D', 'Llave intensivo de emergencia', '870.55', 1, 5, 'images/noimagen.jpg'),
(49, '14928D', 'Llave intensivo de repuesto', '1220.74', 1, 12, 'images/noimagen.jpg'),
(50, '14929D', 'Llave intensivo de paso', '888.28', 1, 6, 'images/noimagen.jpg'),
(51, '14930D', 'Llave intensivo de acople', '1022.42', 1, 15, 'images/noimagen.jpg'),
(52, '14931D', 'Llave intensivo de mano', '98.60', 1, 16, 'images/noimagen.jpg'),
(53, '14834D', 'Soldadura auxiliar de emergencia', '689.60', 1, 12, 'images/noimagen.jpg'),
(54, '14835D', 'Soldadura auxiliar de repuesto', '72.57', 1, 11, 'images/noimagen.jpg'),
(55, '14836D', 'Soldadura auxiliar de paso', '1077.83', 1, 18, 'images/noimagen.jpg'),
(56, '14837D', 'Soldadura auxiliar de acople', '1181.16', 1, 17, 'images/noimagen.jpg'),
(57, '14838D', 'Soldadura auxiliar de mano', '1436.36', 1, 9, 'images/noimagen.jpg'),
(58, '16040D', 'Soldadura manual de emergencia', '249.31', 1, 14, 'images/noimagen.jpg'),
(59, '16041D', 'Soldadura manual de repuesto', '565.62', 1, 2, 'images/noimagen.jpg'),
(60, '16042D', 'Soldadura manual de paso', '1681.35', 1, 10, 'images/noimagen.jpg'),
(61, '16043D', 'Soldadura manual de acople', '1965.29', 1, 1, 'images/noimagen.jpg'),
(62, '16044D', 'Soldadura manual de mano', '165.41', 1, 19, 'images/noimagen.jpg'),
(63, '15046D', 'Soldadura con rodadura de emergencia', '780.53', 1, 5, 'images/noimagen.jpg'),
(64, '15047D', 'Soldadura con rodadura de repuesto', '275.74', 1, 12, 'images/noimagen.jpg'),
(65, '15048D', 'Soldadura con rodadura de paso', '39.76', 1, 2, 'images/noimagen.jpg'),
(66, '15049D', 'Soldadura con rodadura de acople', '1567.24', 1, 17, 'images/noimagen.jpg'),
(67, '15050D', 'Soldadura con rodadura de mano', '1689.91', 1, 15, 'images/noimagen.jpg'),
(68, '15252D', 'Soldadura extensivo de emergencia', '1943.10', 1, 4, 'images/noimagen.jpg'),
(69, '15253D', 'Soldadura extensivo de repuesto', '284.44', 1, 16, 'images/noimagen.jpg'),
(70, '15254D', 'Soldadura extensivo de paso', '1944.10', 1, 7, 'images/noimagen.jpg'),
(71, '15255D', 'Soldadura extensivo de acople', '1679.93', 1, 8, 'images/noimagen.jpg'),
(72, '15256D', 'Soldadura extensivo de mano', '480.34', 1, 18, 'images/noimagen.jpg'),
(73, '15658D', 'Soldadura intensivo de emergencia', '1983.68', 1, 4, 'images/noimagen.jpg'),
(74, '15659D', 'Soldadura intensivo de repuesto', '225.97', 1, 7, 'images/noimagen.jpg'),
(75, '15660D', 'Soldadura intensivo de paso', '1947.44', 1, 3, 'images/noimagen.jpg'),
(76, '15661D', 'Soldadura intensivo de acople', '797.92', 1, 2, 'images/noimagen.jpg'),
(77, '15662D', 'Soldadura intensivo de mano', '646.47', 1, 12, 'images/noimagen.jpg'),
(78, '14565D', 'Pieza auxiliar de emergencia', '1446.93', 1, 9, 'images/noimagen.jpg'),
(79, '14566D', 'Pieza auxiliar de repuesto', '1931.71', 1, 12, 'images/noimagen.jpg'),
(80, '14567D', 'Pieza auxiliar de paso', '41.84', 1, 10, 'images/noimagen.jpg'),
(81, '14568D', 'Pieza auxiliar de acople', '1930.13', 1, 16, 'images/noimagen.jpg'),
(82, '14569D', 'Pieza auxiliar de mano', '1293.80', 1, 6, 'images/noimagen.jpg'),
(83, '15771D', 'Pieza manual de emergencia', '1232.41', 1, 2, 'images/noimagen.jpg'),
(84, '15772D', 'Pieza manual de repuesto', '1881.50', 1, 14, 'images/noimagen.jpg'),
(85, '15773D', 'Pieza manual de paso', '397.42', 1, 2, 'images/noimagen.jpg'),
(86, '15774D', 'Pieza manual de acople', '348.53', 1, 10, 'images/noimagen.jpg'),
(87, '15775D', 'Pieza manual de mano', '1385.89', 1, 21, 'images/noimagen.jpg'),
(88, '14777D', 'Pieza con rodadura de emergencia', '474.46', 1, 11, 'images/noimagen.jpg'),
(89, '14778D', 'Pieza con rodadura de repuesto', '962.18', 1, 14, 'images/noimagen.jpg'),
(90, '14779D', 'Pieza con rodadura de paso', '1998.92', 1, 18, 'images/noimagen.jpg'),
(91, '14780D', 'Pieza con rodadura de acople', '160.78', 1, 6, 'images/noimagen.jpg'),
(92, '14781D', 'Pieza con rodadura de mano', '1075.25', 1, 16, 'images/noimagen.jpg'),
(93, '14983D', 'Pieza extensivo de emergencia', '1649.80', 1, 19, 'images/noimagen.jpg'),
(94, '14984D', 'Pieza extensivo de repuesto', '652.40', 1, 5, 'images/noimagen.jpg'),
(95, '14985D', 'Pieza extensivo de paso', '1792.11', 1, 11, 'images/noimagen.jpg'),
(96, '14986D', 'Pieza extensivo de acople', '1601.52', 1, 18, 'images/noimagen.jpg'),
(97, '14987D', 'Pieza extensivo de mano', '348.46', 1, 18, 'images/noimagen.jpg'),
(98, '15389D', 'Pieza intensivo de emergencia', '1940.41', 1, 12, 'images/noimagen.jpg'),
(99, '15390D', 'Pieza intensivo de repuesto', '91.56', 1, 8, 'images/noimagen.jpg'),
(100, '15391D', 'Pieza intensivo de paso', '995.40', 1, 5, 'images/noimagen.jpg'),
(101, '15392D', 'Pieza intensivo de acople', '410.51', 1, 1, 'images/noimagen.jpg'),
(102, '15393D', 'Pieza intensivo de mano', '964.93', 1, 9, 'images/noimagen.jpg'),
(103, '13196D', 'Bote auxiliar de emergencia', '2.15', 1, 3, 'images/noimagen.jpg'),
(104, '13197D', 'Bote auxiliar de repuesto', '1283.30', 1, 7, 'images/noimagen.jpg'),
(105, '13198D', 'Bote auxiliar de paso', '1959.50', 1, 3, 'images/noimagen.jpg'),
(106, '13199D', 'Bote auxiliar de acople', '494.11', 1, 18, 'images/noimagen.jpg'),
(107, '131100D', 'Bote auxiliar de mano', '1492.92', 1, 19, 'images/noimagen.jpg'),
(108, '143102D', 'Bote manual de emergencia', '666.22', 1, 17, 'images/noimagen.jpg'),
(109, '143103D', 'Bote manual de repuesto', '1668.56', 1, 7, 'images/noimagen.jpg'),
(110, '143104D', 'Bote manual de paso', '1001.27', 1, 5, 'images/noimagen.jpg'),
(111, '143105D', 'Bote manual de acople', '1047.92', 1, 6, 'images/noimagen.jpg'),
(112, '143106D', 'Bote manual de mano', '1918.90', 1, 16, 'images/noimagen.jpg'),
(113, '133108D', 'Bote con rodadura de emergencia', '1311.16', 1, 17, 'images/noimagen.jpg'),
(114, '133109D', 'Bote con rodadura de repuesto', '1462.41', 1, 17, 'images/noimagen.jpg'),
(115, '133110D', 'Bote con rodadura de paso', '1853.38', 1, 11, 'images/noimagen.jpg'),
(116, '133111D', 'Bote con rodadura de acople', '911.53', 1, 6, 'images/noimagen.jpg'),
(117, '133112D', 'Bote con rodadura de mano', '957.85', 1, 20, 'images/noimagen.jpg'),
(118, '135114D', 'Bote extensivo de emergencia', '1026.81', 1, 16, 'images/noimagen.jpg'),
(119, '135115D', 'Bote extensivo de repuesto', '631.43', 1, 1, 'images/noimagen.jpg'),
(120, '135116D', 'Bote extensivo de paso', '394.75', 1, 20, 'images/noimagen.jpg'),
(121, '135117D', 'Bote extensivo de acople', '1816.52', 1, 11, 'images/noimagen.jpg'),
(122, '135118D', 'Bote extensivo de mano', '334.24', 1, 16, 'images/noimagen.jpg'),
(123, '139120D', 'Bote intensivo de emergencia', '1289.13', 1, 5, 'images/noimagen.jpg'),
(124, '139121D', 'Bote intensivo de repuesto', '1593.19', 1, 19, 'images/noimagen.jpg'),
(125, '139122D', 'Bote intensivo de paso', '732.10', 1, 17, 'images/noimagen.jpg'),
(126, '139123D', 'Bote intensivo de acople', '1401.72', 1, 8, 'images/noimagen.jpg'),
(127, '139124D', 'Bote intensivo de mano', '539.40', 1, 9, 'images/noimagen.jpg'),
(128, '130127D', 'Asadura auxiliar de emergencia', '1785.92', 1, 2, 'images/noimagen.jpg'),
(129, '130128D', 'Asadura auxiliar de repuesto', '1394.87', 1, 4, 'images/noimagen.jpg'),
(130, '130129D', 'Asadura auxiliar de paso', '467.30', 1, 14, 'images/noimagen.jpg'),
(131, '130130D', 'Asadura auxiliar de acople', '1056.51', 1, 17, 'images/noimagen.jpg'),
(132, '130131D', 'Asadura auxiliar de mano', '986.16', 1, 19, 'images/noimagen.jpg'),
(133, '142133D', 'Asadura manual de emergencia', '1495.18', 1, 5, 'images/noimagen.jpg'),
(134, '142134D', 'Asadura manual de repuesto', '758.84', 1, 9, 'images/noimagen.jpg'),
(135, '142135D', 'Asadura manual de paso', '32.81', 1, 7, 'images/noimagen.jpg'),
(136, '142136D', 'Asadura manual de acople', '1090.28', 1, 10, 'images/noimagen.jpg'),
(137, '142137D', 'Asadura manual de mano', '1511.29', 1, 8, 'images/noimagen.jpg'),
(138, '132139D', 'Asadura con rodadura de emergencia', '911.69', 1, 9, 'images/noimagen.jpg'),
(139, '132140D', 'Asadura con rodadura de repuesto', '115.90', 1, 1, 'images/noimagen.jpg'),
(140, '132141D', 'Asadura con rodadura de paso', '1206.30', 1, 20, 'images/noimagen.jpg'),
(141, '132142D', 'Asadura con rodadura de acople', '515.67', 1, 13, 'images/noimagen.jpg'),
(142, '132143D', 'Asadura con rodadura de mano', '1396.00', 1, 5, 'images/noimagen.jpg'),
(143, '134145D', 'Asadura extensivo de emergencia', '1447.87', 1, 6, 'images/noimagen.jpg'),
(144, '134146D', 'Asadura extensivo de repuesto', '901.75', 1, 17, 'images/noimagen.jpg'),
(145, '134147D', 'Asadura extensivo de paso', '618.88', 1, 3, 'images/noimagen.jpg'),
(146, '134148D', 'Asadura extensivo de acople', '1538.53', 1, 7, 'images/noimagen.jpg'),
(147, '134149D', 'Asadura extensivo de mano', '1390.19', 1, 6, 'images/noimagen.jpg'),
(148, '138151D', 'Asadura intensivo de emergencia', '468.41', 1, 8, 'images/noimagen.jpg'),
(149, '138152D', 'Asadura intensivo de repuesto', '923.91', 1, 2, 'images/noimagen.jpg'),
(150, '138153D', 'Asadura intensivo de paso', '1386.67', 1, 6, 'images/noimagen.jpg'),
(151, '138154D', 'Asadura intensivo de acople', '442.21', 1, 2, 'images/noimagen.jpg'),
(152, '138155D', 'Asadura intensivo de mano', '1560.38', 1, 16, 'images/noimagen.jpg'),
(153, '142158D', 'Mecanizado auxiliar de emergencia', '1718.19', 1, 8, 'images/noimagen.jpg'),
(154, '142159D', 'Mecanizado auxiliar de repuesto', '1810.92', 1, 15, 'images/noimagen.jpg'),
(155, '142160D', 'Mecanizado auxiliar de paso', '331.22', 1, 9, 'images/noimagen.jpg'),
(156, '142161D', 'Mecanizado auxiliar de acople', '691.32', 1, 2, 'images/noimagen.jpg'),
(157, '142162D', 'Mecanizado auxiliar de mano', '1981.72', 1, 16, 'images/noimagen.jpg'),
(158, '154164D', 'Mecanizado manual de emergencia', '1871.10', 1, 15, 'images/noimagen.jpg'),
(159, '154165D', 'Mecanizado manual de repuesto', '1016.25', 1, 5, 'images/noimagen.jpg'),
(160, '154166D', 'Mecanizado manual de paso', '1819.54', 1, 3, 'images/noimagen.jpg'),
(161, '154167D', 'Mecanizado manual de acople', '1278.80', 1, 1, 'images/noimagen.jpg'),
(162, '154168D', 'Mecanizado manual de mano', '852.53', 1, 12, 'images/noimagen.jpg'),
(163, '144170D', 'Mecanizado con rodadura de emergencia', '1722.69', 1, 18, 'images/noimagen.jpg'),
(164, '144171D', 'Mecanizado con rodadura de repuesto', '1039.22', 1, 10, 'images/noimagen.jpg'),
(165, '144172D', 'Mecanizado con rodadura de paso', '1928.89', 1, 20, 'images/noimagen.jpg'),
(166, '144173D', 'Mecanizado con rodadura de acople', '1498.95', 1, 6, 'images/noimagen.jpg'),
(167, '144174D', 'Mecanizado con rodadura de mano', '835.24', 1, 10, 'images/noimagen.jpg'),
(168, '146176D', 'Mecanizado extensivo de emergencia', '714.70', 1, 13, 'images/noimagen.jpg'),
(169, '146177D', 'Mecanizado extensivo de repuesto', '1822.86', 1, 16, 'images/noimagen.jpg'),
(170, '146178D', 'Mecanizado extensivo de paso', '1453.82', 1, 16, 'images/noimagen.jpg'),
(171, '146179D', 'Mecanizado extensivo de acople', '1259.87', 1, 13, 'images/noimagen.jpg'),
(172, '146180D', 'Mecanizado extensivo de mano', '247.70', 1, 17, 'images/noimagen.jpg'),
(173, '150182D', 'Mecanizado intensivo de emergencia', '1944.29', 1, 4, 'images/noimagen.jpg'),
(174, '150183D', 'Mecanizado intensivo de repuesto', '773.89', 1, 13, 'images/noimagen.jpg'),
(175, '150184D', 'Mecanizado intensivo de paso', '199.13', 1, 7, 'images/noimagen.jpg'),
(176, '150185D', 'Mecanizado intensivo de acople', '1295.58', 1, 20, 'images/noimagen.jpg'),
(177, '150186D', 'Mecanizado intensivo de mano', '1456.55', 1, 17, 'images/noimagen.jpg'),
(178, '131189D', 'Bote auxiliar de emergencia', '213.80', 1, 4, 'images/noimagen.jpg'),
(179, '131190D', 'Bote auxiliar de repuesto', '1930.60', 1, 9, 'images/noimagen.jpg'),
(180, '131191D', 'Bote auxiliar de paso', '1559.58', 1, 14, 'images/noimagen.jpg'),
(181, '131192D', 'Bote auxiliar de acople', '1998.70', 1, 19, 'images/noimagen.jpg'),
(182, '131193D', 'Bote auxiliar de mano', '546.57', 1, 13, 'images/noimagen.jpg'),
(183, '143195D', 'Bote manual de emergencia', '338.74', 1, 7, 'images/noimagen.jpg'),
(184, '143196D', 'Bote manual de repuesto', '632.74', 1, 16, 'images/noimagen.jpg'),
(185, '143197D', 'Bote manual de paso', '826.72', 1, 20, 'images/noimagen.jpg'),
(186, '143198D', 'Bote manual de acople', '951.70', 1, 7, 'images/noimagen.jpg'),
(187, '143199D', 'Bote manual de mano', '1981.94', 1, 17, 'images/noimagen.jpg'),
(188, '133201D', 'Bote con rodadura de emergencia', '908.67', 1, 21, 'images/noimagen.jpg'),
(189, '133202D', 'Bote con rodadura de repuesto', '1430.48', 1, 12, 'images/noimagen.jpg'),
(190, '133203D', 'Bote con rodadura de paso', '136.16', 1, 20, 'images/noimagen.jpg'),
(191, '133204D', 'Bote con rodadura de acople', '1530.48', 1, 20, 'images/noimagen.jpg'),
(192, '133205D', 'Bote con rodadura de mano', '716.69', 1, 20, 'images/noimagen.jpg'),
(193, '135207D', 'Bote extensivo de emergencia', '865.92', 1, 19, 'images/noimagen.jpg'),
(194, '135208D', 'Bote extensivo de repuesto', '757.25', 1, 16, 'images/noimagen.jpg'),
(195, '135209D', 'Bote extensivo de paso', '1545.26', 1, 20, 'images/noimagen.jpg'),
(196, '135210D', 'Bote extensivo de acople', '1546.83', 1, 12, 'images/noimagen.jpg'),
(197, '135211D', 'Bote extensivo de mano', '1774.47', 1, 1, 'images/noimagen.jpg'),
(198, '139213D', 'Bote intensivo de emergencia', '722.52', 1, 11, 'images/noimagen.jpg'),
(199, '139214D', 'Bote intensivo de repuesto', '1578.35', 1, 9, 'images/noimagen.jpg'),
(200, '139215D', 'Bote intensivo de paso', '639.45', 1, 11, 'images/noimagen.jpg'),
(201, '139216D', 'Bote intensivo de acople', '1765.88', 1, 9, 'images/noimagen.jpg'),
(202, '139217D', 'Bote intensivo de mano', '1781.69', 1, 10, 'images/noimagen.jpg'),
(203, '142220D', 'Manivela auxiliar de emergencia', '1834.30', 1, 1, 'images/noimagen.jpg'),
(204, '142221D', 'Manivela auxiliar de repuesto', '118.00', 1, 20, 'images/noimagen.jpg'),
(205, '142222D', 'Manivela auxiliar de paso', '242.33', 1, 10, 'images/noimagen.jpg'),
(206, '142223D', 'Manivela auxiliar de acople', '64.41', 1, 12, 'images/noimagen.jpg'),
(207, '142224D', 'Manivela auxiliar de mano', '347.67', 1, 9, 'images/noimagen.jpg'),
(208, '154226D', 'Manivela manual de emergencia', '1699.28', 1, 9, 'images/noimagen.jpg'),
(209, '154227D', 'Manivela manual de repuesto', '1059.30', 1, 18, 'images/noimagen.jpg'),
(210, '154228D', 'Manivela manual de paso', '99.79', 1, 1, 'images/noimagen.jpg'),
(211, '154229D', 'Manivela manual de acople', '1145.76', 1, 14, 'images/noimagen.jpg'),
(212, '154230D', 'Manivela manual de mano', '1284.80', 1, 2, 'images/noimagen.jpg'),
(213, '144232D', 'Manivela con rodadura de emergencia', '813.11', 1, 13, 'images/noimagen.jpg'),
(214, '144233D', 'Manivela con rodadura de repuesto', '511.33', 1, 16, 'images/noimagen.jpg'),
(215, '144234D', 'Manivela con rodadura de paso', '50.81', 1, 19, 'images/noimagen.jpg'),
(216, '144235D', 'Manivela con rodadura de acople', '1361.83', 1, 4, 'images/noimagen.jpg'),
(217, '144236D', 'Manivela con rodadura de mano', '686.65', 1, 5, 'images/noimagen.jpg'),
(218, '146238D', 'Manivela extensivo de emergencia', '1950.22', 1, 14, 'images/noimagen.jpg'),
(219, '146239D', 'Manivela extensivo de repuesto', '1293.73', 1, 12, 'images/noimagen.jpg'),
(220, '146240D', 'Manivela extensivo de paso', '1080.26', 1, 19, 'images/noimagen.jpg'),
(221, '146241D', 'Manivela extensivo de acople', '1360.38', 1, 18, 'images/noimagen.jpg'),
(222, '146242D', 'Manivela extensivo de mano', '1.20', 1, 12, 'images/noimagen.jpg'),
(223, '150244D', 'Manivela intensivo de emergencia', '1279.91', 1, 7, 'images/noimagen.jpg'),
(224, '150245D', 'Manivela intensivo de repuesto', '1385.55', 1, 19, 'images/noimagen.jpg'),
(225, '150246D', 'Manivela intensivo de paso', '176.70', 1, 9, 'images/noimagen.jpg'),
(226, '150247D', 'Manivela intensivo de acople', '182.66', 1, 12, 'images/noimagen.jpg'),
(227, '150248D', 'Manivela intensivo de mano', '626.15', 1, 12, 'images/noimagen.jpg'),
(228, '145251D', 'Pasante auxiliar de emergencia', '1466.40', 1, 1, 'images/noimagen.jpg'),
(229, '145252D', 'Pasante auxiliar de repuesto', '1450.51', 1, 14, 'images/noimagen.jpg'),
(230, '145253D', 'Pasante auxiliar de paso', '1374.57', 1, 1, 'images/noimagen.jpg'),
(231, '145254D', 'Pasante auxiliar de acople', '784.13', 1, 7, 'images/noimagen.jpg'),
(232, '145255D', 'Pasante auxiliar de mano', '87.63', 1, 10, 'images/noimagen.jpg'),
(233, '157257D', 'Pasante manual de emergencia', '657.70', 1, 10, 'images/noimagen.jpg'),
(234, '157258D', 'Pasante manual de repuesto', '1387.29', 1, 19, 'images/noimagen.jpg'),
(235, '157259D', 'Pasante manual de paso', '503.40', 1, 1, 'images/noimagen.jpg'),
(236, '157260D', 'Pasante manual de acople', '736.14', 1, 10, 'images/noimagen.jpg'),
(237, '157261D', 'Pasante manual de mano', '256.20', 1, 5, 'images/noimagen.jpg'),
(238, '147263D', 'Pasante con rodadura de emergencia', '550.70', 1, 18, 'images/noimagen.jpg'),
(239, '147264D', 'Pasante con rodadura de repuesto', '1695.50', 1, 9, 'images/noimagen.jpg'),
(240, '147265D', 'Pasante con rodadura de paso', '1089.29', 1, 14, 'images/noimagen.jpg'),
(241, '147266D', 'Pasante con rodadura de acople', '18.48', 1, 20, 'images/noimagen.jpg'),
(242, '147267D', 'Pasante con rodadura de mano', '47.14', 1, 16, 'images/noimagen.jpg'),
(243, '149269D', 'Pasante extensivo de emergencia', '434.14', 1, 1, 'images/noimagen.jpg'),
(244, '149270D', 'Pasante extensivo de repuesto', '809.36', 1, 20, 'images/noimagen.jpg'),
(245, '149271D', 'Pasante extensivo de paso', '1969.16', 1, 18, 'images/noimagen.jpg'),
(246, '149272D', 'Pasante extensivo de acople', '1986.30', 1, 4, 'images/noimagen.jpg'),
(247, '149273D', 'Pasante extensivo de mano', '1715.00', 1, 9, 'images/noimagen.jpg'),
(248, '153275D', 'Pasante intensivo de emergencia', '298.77', 1, 13, 'images/noimagen.jpg'),
(249, '153276D', 'Pasante intensivo de repuesto', '1201.33', 1, 17, 'images/noimagen.jpg'),
(250, '153277D', 'Pasante intensivo de paso', '1559.80', 1, 3, 'images/noimagen.jpg'),
(251, '153278D', 'Pasante intensivo de acople', '808.90', 1, 8, 'images/noimagen.jpg'),
(252, '153279D', 'Pasante intensivo de mano', '243.46', 1, 10, 'images/noimagen.jpg'),
(253, '147282D', 'Rejilla auxiliar de emergencia', '565.69', 1, 5, 'images/noimagen.jpg'),
(254, '147283D', 'Rejilla auxiliar de repuesto', '1520.25', 1, 15, 'images/noimagen.jpg'),
(255, '147284D', 'Rejilla auxiliar de paso', '947.31', 1, 20, 'images/noimagen.jpg'),
(256, '147285D', 'Rejilla auxiliar de acople', '1916.62', 1, 11, 'images/noimagen.jpg'),
(257, '147286D', 'Rejilla auxiliar de mano', '1054.27', 1, 17, 'images/noimagen.jpg'),
(258, '159288D', 'Rejilla manual de emergencia', '1477.18', 1, 10, 'images/noimagen.jpg'),
(259, '159289D', 'Rejilla manual de repuesto', '728.78', 1, 13, 'images/noimagen.jpg'),
(260, '159290D', 'Rejilla manual de paso', '1065.14', 1, 11, 'images/noimagen.jpg'),
(261, '159291D', 'Rejilla manual de acople', '783.56', 1, 15, 'images/noimagen.jpg'),
(262, '159292D', 'Rejilla manual de mano', '1045.87', 1, 18, 'images/noimagen.jpg'),
(263, '149294D', 'Rejilla con rodadura de emergencia', '521.93', 1, 5, 'images/noimagen.jpg'),
(264, '149295D', 'Rejilla con rodadura de repuesto', '838.17', 1, 13, 'images/noimagen.jpg'),
(265, '149296D', 'Rejilla con rodadura de paso', '388.80', 1, 6, 'images/noimagen.jpg'),
(266, '149297D', 'Rejilla con rodadura de acople', '899.40', 1, 14, 'images/noimagen.jpg'),
(267, '149298D', 'Rejilla con rodadura de mano', '865.31', 1, 8, 'images/noimagen.jpg'),
(268, '151300D', 'Rejilla extensivo de emergencia', '1998.23', 1, 4, 'images/noimagen.jpg'),
(269, '151301D', 'Rejilla extensivo de repuesto', '995.65', 2, 17, 'images/noimagen.jpg'),
(270, '151302D', 'Rejilla extensivo de paso', '1295.32', 1, 3, 'images/noimagen.jpg'),
(271, '151303D', 'Rejilla extensivo de acople', '95.63', 1, 5, 'images/noimagen.jpg'),
(272, '151304D', 'Rejilla extensivo de mano', '1518.19', 1, 16, 'images/noimagen.jpg'),
(273, '155306D', 'Rejilla intensivo de emergencia', '680.96', 1, 2, 'images/noimagen.jpg'),
(274, '155307D', 'Rejilla intensivo de repuesto', '1717.10', 1, 5, 'images/noimagen.jpg'),
(275, '155308D', 'Rejilla intensivo de paso', '250.20', 1, 20, 'images/noimagen.jpg'),
(276, '155309D', 'Rejilla intensivo de acople', '1221.62', 1, 4, 'images/noimagen.jpg'),
(277, '155310D', 'Rejilla intensivo de mano', '1445.86', 1, 4, 'images/noimagen.jpg'),
(278, '149313D', 'Torno auxiliar de emergencia', '1961.79', 1, 21, 'images/noimagen.jpg'),
(279, '149314D', 'Torno auxiliar de repuesto', '898.63', 1, 7, 'images/noimagen.jpg'),
(280, '149315D', 'Torno auxiliar de paso', '1239.34', 1, 12, 'images/noimagen.jpg'),
(281, '149316D', 'Torno auxiliar de acople', '136.44', 1, 1, 'images/noimagen.jpg'),
(282, '149317D', 'Torno auxiliar de mano', '65.80', 1, 7, 'images/noimagen.jpg'),
(283, '161319D', 'Torno manual de emergencia', '698.41', 1, 15, 'images/noimagen.jpg'),
(284, '161320D', 'Torno manual de repuesto', '1035.24', 1, 9, 'images/noimagen.jpg'),
(285, '161321D', 'Torno manual de paso', '213.48', 1, 1, 'images/noimagen.jpg'),
(286, '161322D', 'Torno manual de acople', '585.84', 1, 20, 'images/noimagen.jpg'),
(287, '161323D', 'Torno manual de mano', '398.21', 1, 12, 'images/noimagen.jpg'),
(288, '151325D', 'Torno con rodadura de emergencia', '18.96', 1, 1, 'images/noimagen.jpg'),
(289, '151326D', 'Torno con rodadura de repuesto', '605.75', 1, 9, 'images/noimagen.jpg'),
(290, '151327D', 'Torno con rodadura de paso', '1281.98', 1, 2, 'images/noimagen.jpg'),
(291, '151328D', 'Torno con rodadura de acople', '1307.36', 1, 5, 'images/noimagen.jpg'),
(292, '151329D', 'Torno con rodadura de mano', '1942.65', 1, 17, 'images/noimagen.jpg'),
(293, '153331D', 'Torno extensivo de emergencia', '1567.42', 1, 7, 'images/noimagen.jpg'),
(294, '153332D', 'Torno extensivo de repuesto', '669.41', 1, 6, 'images/noimagen.jpg'),
(295, '153333D', 'Torno extensivo de paso', '37.46', 1, 9, 'images/noimagen.jpg'),
(296, '153334D', 'Torno extensivo de acople', '685.73', 1, 6, 'images/noimagen.jpg'),
(297, '153335D', 'Torno extensivo de mano', '908.11', 1, 2, 'images/noimagen.jpg'),
(298, '157337D', 'Torno intensivo de emergencia', '1322.17', 1, 15, 'images/noimagen.jpg'),
(299, '157338D', 'Torno intensivo de repuesto', '526.93', 1, 4, 'images/noimagen.jpg'),
(300, '157339D', 'Torno intensivo de paso', '1916.52', 1, 16, 'images/noimagen.jpg'),
(301, '157340D', 'Torno intensivo de acople', '1981.40', 1, 5, 'images/noimagen.jpg'),
(302, '157341D', 'Torno intensivo de mano', '118.66', 1, 20, 'images/noimagen.jpg'),
(303, '130344D', 'Accionamiento auxiliar de emergencia', '937.68', 1, 20, 'images/noimagen.jpg'),
(304, '130345D', 'Accionamiento auxiliar de repuesto', '736.17', 1, 19, 'images/noimagen.jpg'),
(305, '130346D', 'Accionamiento auxiliar de paso', '1496.24', 1, 16, 'images/noimagen.jpg'),
(306, '130347D', 'Accionamiento auxiliar de acople', '1153.94', 1, 21, 'images/noimagen.jpg'),
(307, '130348D', 'Accionamiento auxiliar de mano', '990.70', 1, 14, 'images/noimagen.jpg'),
(308, '142350D', 'Accionamiento manual de emergencia', '878.80', 1, 10, 'images/noimagen.jpg'),
(309, '142351D', 'Accionamiento manual de repuesto', '547.44', 1, 5, 'images/noimagen.jpg'),
(310, '142352D', 'Accionamiento manual de paso', '99.39', 1, 19, 'images/noimagen.jpg'),
(311, '142353D', 'Accionamiento manual de acople', '726.60', 1, 14, 'images/noimagen.jpg'),
(312, '142354D', 'Accionamiento manual de mano', '1911.93', 1, 13, 'images/noimagen.jpg'),
(313, '132356D', 'Accionamiento con rodadura de emergencia', '448.55', 1, 2, 'images/noimagen.jpg'),
(314, '132357D', 'Accionamiento con rodadura de repuesto', '1460.17', 1, 14, 'images/noimagen.jpg'),
(315, '132358D', 'Accionamiento con rodadura de paso', '1021.44', 1, 21, 'images/noimagen.jpg'),
(316, '132359D', 'Accionamiento con rodadura de acople', '1308.49', 1, 21, 'images/noimagen.jpg'),
(317, '132360D', 'Accionamiento con rodadura de mano', '254.80', 1, 20, 'images/noimagen.jpg'),
(318, '134362D', 'Accionamiento extensivo de emergencia', '667.56', 1, 15, 'images/noimagen.jpg'),
(319, '134363D', 'Accionamiento extensivo de repuesto', '611.16', 1, 18, 'images/noimagen.jpg'),
(320, '134364D', 'Accionamiento extensivo de paso', '1301.32', 1, 4, 'images/noimagen.jpg'),
(321, '134365D', 'Accionamiento extensivo de acople', '1553.10', 1, 5, 'images/noimagen.jpg'),
(322, '134366D', 'Accionamiento extensivo de mano', '1261.91', 1, 16, 'images/noimagen.jpg'),
(323, '138368D', 'Accionamiento intensivo de emergencia', '104.29', 1, 21, 'images/noimagen.jpg'),
(324, '138369D', 'Accionamiento intensivo de repuesto', '573.91', 1, 14, 'images/noimagen.jpg'),
(325, '138370D', 'Accionamiento intensivo de paso', '1048.17', 1, 9, 'images/noimagen.jpg'),
(326, '138371D', 'Accionamiento intensivo de acople', '152.52', 1, 7, 'images/noimagen.jpg'),
(327, '138372D', 'Accionamiento intensivo de mano', '1018.45', 1, 17, 'images/noimagen.jpg'),
(328, '135375D', 'Fijación auxiliar de emergencia', '1669.25', 1, 2, 'images/noimagen.jpg'),
(329, '135376D', 'Fijación auxiliar de repuesto', '692.69', 1, 1, 'images/noimagen.jpg'),
(330, '135377D', 'Fijación auxiliar de paso', '1877.19', 1, 20, 'images/noimagen.jpg'),
(331, '135378D', 'Fijación auxiliar de acople', '1948.49', 1, 13, 'images/noimagen.jpg'),
(332, '135379D', 'Fijación auxiliar de mano', '1690.52', 1, 4, 'images/noimagen.jpg'),
(333, '147381D', 'Fijación manual de emergencia', '1170.64', 1, 3, 'images/noimagen.jpg'),
(334, '147382D', 'Fijación manual de repuesto', '1849.95', 1, 3, 'images/noimagen.jpg'),
(335, '147383D', 'Fijación manual de paso', '1413.25', 1, 8, 'images/noimagen.jpg'),
(336, '147384D', 'Fijación manual de acople', '1712.32', 1, 6, 'images/noimagen.jpg'),
(337, '147385D', 'Fijación manual de mano', '1275.20', 1, 10, 'images/noimagen.jpg'),
(338, '137387D', 'Fijación con rodadura de emergencia', '147.33', 1, 8, 'images/noimagen.jpg'),
(339, '137388D', 'Fijación con rodadura de repuesto', '780.14', 1, 10, 'images/noimagen.jpg'),
(340, '137389D', 'Fijación con rodadura de paso', '1320.20', 1, 7, 'images/noimagen.jpg'),
(341, '137390D', 'Fijación con rodadura de acople', '1645.50', 1, 4, 'images/noimagen.jpg'),
(342, '137391D', 'Fijación con rodadura de mano', '1315.47', 1, 20, 'images/noimagen.jpg'),
(343, '139393D', 'Fijación extensivo de emergencia', '414.45', 1, 4, 'images/noimagen.jpg'),
(344, '139394D', 'Fijación extensivo de repuesto', '1371.36', 1, 2, 'images/noimagen.jpg'),
(345, '139395D', 'Fijación extensivo de paso', '1531.21', 1, 20, 'images/noimagen.jpg'),
(346, '139396D', 'Fijación extensivo de acople', '482.74', 1, 11, 'images/noimagen.jpg'),
(347, '139397D', 'Fijación extensivo de mano', '799.93', 1, 14, 'images/noimagen.jpg'),
(348, '143399D', 'Fijación intensivo de emergencia', '1098.23', 1, 17, 'images/noimagen.jpg'),
(349, '143400D', 'Fijación intensivo de repuesto', '153.87', 1, 2, 'images/noimagen.jpg'),
(350, '143401D', 'Fijación intensivo de paso', '758.62', 1, 2, 'images/noimagen.jpg'),
(351, '143402D', 'Fijación intensivo de acople', '1044.85', 1, 3, 'images/noimagen.jpg'),
(352, '143403D', 'Fijación intensivo de mano', '1499.22', 1, 9, 'images/noimagen.jpg'),
(353, '131406D', 'Bajante auxiliar de emergencia', '1669.68', 1, 15, 'images/noimagen.jpg'),
(354, '131407D', 'Bajante auxiliar de repuesto', '1661.85', 1, 8, 'images/noimagen.jpg'),
(355, '131408D', 'Bajante auxiliar de paso', '1493.12', 1, 14, 'images/noimagen.jpg'),
(356, '131409D', 'Bajante auxiliar de acople', '103.50', 1, 2, 'images/noimagen.jpg'),
(357, '131410D', 'Bajante auxiliar de mano', '1405.37', 1, 13, 'images/noimagen.jpg'),
(358, '143412D', 'Bajante manual de emergencia', '759.30', 1, 17, 'images/noimagen.jpg'),
(359, '143413D', 'Bajante manual de repuesto', '249.28', 1, 3, 'images/noimagen.jpg'),
(360, '143414D', 'Bajante manual de paso', '1807.14', 1, 7, 'images/noimagen.jpg'),
(361, '143415D', 'Bajante manual de acople', '677.42', 1, 5, 'images/noimagen.jpg'),
(362, '143416D', 'Bajante manual de mano', '1644.85', 1, 5, 'images/noimagen.jpg'),
(363, '133418D', 'Bajante con rodadura de emergencia', '778.27', 1, 11, 'images/noimagen.jpg'),
(364, '133419D', 'Bajante con rodadura de repuesto', '1797.70', 1, 16, 'images/noimagen.jpg'),
(365, '133420D', 'Bajante con rodadura de paso', '1709.85', 1, 8, 'images/noimagen.jpg'),
(366, '133421D', 'Bajante con rodadura de acople', '840.94', 1, 10, 'images/noimagen.jpg'),
(367, '133422D', 'Bajante con rodadura de mano', '914.48', 1, 5, 'images/noimagen.jpg'),
(368, '135424D', 'Bajante extensivo de emergencia', '748.47', 1, 19, 'images/noimagen.jpg'),
(369, '135425D', 'Bajante extensivo de repuesto', '569.43', 1, 15, 'images/noimagen.jpg'),
(370, '135426D', 'Bajante extensivo de paso', '1963.95', 1, 17, 'images/noimagen.jpg'),
(371, '135427D', 'Bajante extensivo de acople', '1067.31', 1, 20, 'images/noimagen.jpg'),
(372, '135428D', 'Bajante extensivo de mano', '1434.10', 1, 8, 'images/noimagen.jpg'),
(373, '139430D', 'Bajante intensivo de emergencia', '506.59', 1, 20, 'images/noimagen.jpg'),
(374, '139431D', 'Bajante intensivo de repuesto', '684.40', 1, 14, 'images/noimagen.jpg'),
(375, '139432D', 'Bajante intensivo de paso', '1264.20', 1, 11, 'images/noimagen.jpg'),
(376, '139433D', 'Bajante intensivo de acople', '568.73', 1, 14, 'images/noimagen.jpg'),
(377, '139434D', 'Bajante intensivo de mano', '1227.31', 1, 15, 'images/noimagen.jpg'),
(378, '148437D', 'Sujeción auxiliar de emergencia', '752.35', 1, 12, 'images/noimagen.jpg'),
(379, '148438D', 'Sujeción auxiliar de repuesto', '1544.62', 1, 15, 'images/noimagen.jpg'),
(380, '148439D', 'Sujeción auxiliar de paso', '1139.33', 1, 20, 'images/noimagen.jpg'),
(381, '148440D', 'Sujeción auxiliar de acople', '1318.88', 1, 10, 'images/noimagen.jpg'),
(382, '148441D', 'Sujeción auxiliar de mano', '1761.17', 1, 13, 'images/noimagen.jpg'),
(383, '160443D', 'Sujeción manual de emergencia', '121.30', 1, 12, 'images/noimagen.jpg'),
(384, '160444D', 'Sujeción manual de repuesto', '1882.49', 1, 2, 'images/noimagen.jpg'),
(385, '160445D', 'Sujeción manual de paso', '983.30', 1, 17, 'images/noimagen.jpg'),
(386, '160446D', 'Sujeción manual de acople', '50.97', 1, 13, 'images/noimagen.jpg'),
(387, '160447D', 'Sujeción manual de mano', '1871.71', 1, 17, 'images/noimagen.jpg'),
(388, '150449D', 'Sujeción con rodadura de emergencia', '57.28', 1, 3, 'images/noimagen.jpg'),
(389, '150450D', 'Sujeción con rodadura de repuesto', '1026.66', 1, 6, 'images/noimagen.jpg'),
(390, '150451D', 'Sujeción con rodadura de paso', '59.18', 1, 1, 'images/noimagen.jpg'),
(391, '150452D', 'Sujeción con rodadura de acople', '1757.68', 1, 5, 'images/noimagen.jpg'),
(392, '150453D', 'Sujeción con rodadura de mano', '476.32', 1, 2, 'images/noimagen.jpg'),
(393, '152455D', 'Sujeción extensivo de emergencia', '1643.30', 1, 16, 'images/noimagen.jpg'),
(394, '152456D', 'Sujeción extensivo de repuesto', '497.20', 1, 12, 'images/noimagen.jpg'),
(395, '152457D', 'Sujeción extensivo de paso', '952.70', 1, 12, 'images/noimagen.jpg'),
(396, '152458D', 'Sujeción extensivo de acople', '1698.40', 1, 2, 'images/noimagen.jpg'),
(397, '152459D', 'Sujeción extensivo de mano', '475.37', 1, 15, 'images/noimagen.jpg'),
(398, '156461D', 'Sujeción intensivo de emergencia', '1106.80', 1, 7, 'images/noimagen.jpg'),
(399, '156462D', 'Sujeción intensivo de repuesto', '1995.17', 1, 12, 'images/noimagen.jpg'),
(400, '156463D', 'Sujeción intensivo de paso', '813.67', 1, 17, 'images/noimagen.jpg'),
(401, '156464D', 'Sujeción intensivo de acople', '738.60', 1, 8, 'images/noimagen.jpg'),
(402, '156465D', 'Sujeción intensivo de mano', '448.52', 1, 11, 'images/noimagen.jpg'),
(403, 'fsd', 'sdf', '1.00', 1, 7, 'images/noimagen.jpg'),
(405, 'sfds', 'ghjgh', '2.00', 1, 3, 'images/noimagen.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propuesta`
--

CREATE TABLE IF NOT EXISTS `propuesta` (
`id` int(11) NOT NULL COMMENT 'Num_propuesta',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripcion',
  `fecha` date DEFAULT NULL COMMENT 'Fecha_Propuesta',
  `puntuacion` int(11) DEFAULT NULL COMMENT 'Puntuacion',
  `id_tipopropuesta` int(11) DEFAULT NULL COMMENT 'Num del Tipo de Propuesta',
  `id_usuario` int(11) DEFAULT NULL COMMENT 'Num de Usuario'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `propuesta`
--

INSERT INTO `propuesta` (`id`, `descripcion`, `fecha`, `puntuacion`, `id_tipopropuesta`, `id_usuario`) VALUES
(1, '¿Aplicamos margenes a todos los documentos?', '2014-11-12', 0, 1, 1),
(2, 'Los aplicamos solo en el index.', '2014-11-10', 0, 1, 2),
(3, '¿Aprendemos bootstrap?', '2014-11-18', 0, 2, 3),
(4, '¿Aprendemos Angular?', '2014-11-19', 0, 2, 4),
(5, '¿Quedamos el dia 4 de diciembre por la mañama?', '2014-11-11', 0, 3, 5),
(6, '¿Quedamos el puente de diciembre?', '2014-11-28', 0, 3, 6),
(7, 'Paginas para aprender java', '2014-11-10', 0, 4, 7),
(8, 'Libros para aprender java', '2014-11-19', 0, 4, 8),
(9, 'Paginas para aprender php', '2014-11-05', 0, 5, 9),
(10, 'Libros para aprender php', '2014-11-20', 0, 5, 10),
(11, 'Paginas para aprender django', '2014-12-08', 0, 6, 11),
(12, 'Libros para aprender django', '2014-12-02', 0, 6, 12),
(13, 'Paginas para aprender Visual Basic', '2014-12-07', 0, 7, 13),
(14, 'Libros para aprender Visual Basic', '2014-12-15', 0, 7, 14),
(15, 'Paginas para aprender Ruby', '2014-12-17', 0, 8, 15),
(16, 'Libros para aprender Ruby', '2014-11-19', 0, 8, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE IF NOT EXISTS `proveedor` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `nia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'CIF',
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Nombre Proveedor',
  `telefono` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Telefono Proveedor',
  `direccion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Dirección Proveedor',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Correo Electronico',
  `web` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Sitio web',
  `fax` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Número Fax',
  `localidad` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Localidad'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`id`, `nia`, `nombre`, `telefono`, `direccion`, `email`, `web`, `fax`, `localidad`) VALUES
(1, '00.000.001-B', 'Ferretería Dols', '963913534', 'C/ Quart 64', 'info@ferreteriadols.com', 'www.ferreteriadols.com', '963913534', 'VALENCIA'),
(2, '00.000.002-B', 'García Sanjaime SL', '963310195', 'Avenida del Puerto 326 46024', 'info@sanjaime.es', 'www.sanjaime.es', '123143432653', 'VALENCIA'),
(3, '00.000.003-B', 'Ferretería Almar', '963412661', 'Calle de Albacete 17 46007', 'info@ferralmar.biz', 'www.ferralmar.biz', '4534536587', 'VALENCIA'),
(4, '00.000.004-B', 'Imcoinsa', '946810721', '48220 ABADIÑO', 'info@imcoinsa.es', 'www.imcoinsa.es', '946200460', 'VIZCAIA'),
(5, '00.000.005-B', 'Alquibalat', '902702247', 'Calle Belgrado-0 Pol. Ind Ras de Tous 46185', 'info@balat.es', 'www.balat.es', '34243464457', ' LA POBLA DE VALLBONA (VALENCIA)'),
(6, '00.000.006-B', 'Aft A Forged Tool SA', '', '', 'info@aftgrupo.com', 'www.aftgrupo.com', '86786768666', 'GRANADA'),
(7, '00.000.007-B', 'García Servicios y Suministros Industriales', '', 'Carretera de Malilla 77 - Bajo 46026', 'info@comercialgarcia.es', 'www.comercialgarcia.es', '453464365345', 'VALENCIA'),
(8, '00.000.008-B', 'Coeltra Sum', '', '', 'info@coeltra.com', 'www.coeltra.com', '2344356132', ''),
(9, '00.000.009-B', 'Ferreteria Hnos. Salavert', '96 130 15 95', 'Avenida Seminari 16 46113', 'info@ferreteriahnossalavert.com', 'www.ferreteriahnossalavert.com', '23432342234', 'Moncada (VALENCIA)'),
(10, '00.000.010-B', 'Ferretería R. García', '963477067', 'Calle de Rascaña 10 46015', 'info@rgarcia.lol', 'www.rgarcia.lol', '4353645453345', 'VALENCIA'),
(11, '00.000.011-B', 'Herrajes Serra', '963941131', 'Calle Linterna 28 46001', 'info@herrajeserra.com', 'www.herrajeserra.com', '435346464356', 'VALENCIA'),
(12, '00.000.012-B', 'Ferretería La Estrella', '', 'Calle 29 s/n (Parcela 23) 46470', 'info@ferreterialaestrella.com', 'www.ferreterialaestrella.com', '088645643545', 'CATARROJA (VALENCIA)'),
(13, '00.000.013-B', 'Manufacturas Vervi', '962150657', 'Avenida DE LA PISTA 34 36 46470', 'info@vervi.com', 'www.vervi.com', '23446677645', 'Massanasa (VALENCIA)'),
(14, '00.000.014-B', 'Ferretería Y Electrodomésticos Juan Vidal SL', '', 'Avinguda LA PAU 69 46690', 'info@juanvidalsl.com', 'www.juanvidalsl.com', '564342234', 'ALCUDIA DE CRESPINS (VALENCIA)'),
(15, '00.000.015-B', 'Ferretería El Globo', '963917267', 'Plaza Ciudad de Brujas 5 46001', '', '', '876565546', 'VALENCIA'),
(16, '00.000.016-B', 'Arco-reg', '962440697', 'Avenida Valencia 54 bajo 46611', 'info@arcoreg.com', 'www.arcoreg.com', '324434656', 'Benimuslem (VALENCIA)'),
(17, '22.665.338-B', 'Ferretería Arvi', '963922627', 'Calle Los Derechos 3 Izquierda 46001', 'info@ferreteriaarvi.com', 'www.ferreteriaarvi.com', '34 963922627', 'VALENCIA'),
(18, '00.000.017-B', 'Ferretería Plaça Major', '962421916', 'Carrer de la Muntanya 15 46680', 'infoferre@hotmail.es', 'www.ferreteriaplasamajor.com', '234442323', ' Algemesi (VALENCIA)'),
(19, '', 'Ferretería Pla', '962907224', 'Calle Major 33 46890', 'info@armeriapla.com', 'www.armeriapla.com', '963246532', 'Argullent (VALENCIA)'),
(20, '00.000.018-B', 'Moreno Suministros Industriales', '93699336', 'Carretera de Terrassa 106 08191', 'comercial@ferreteriamoreno.com', 'www.ferreteriamoreno.com', '936999092', 'Rubí (Barcelona)'),
(21, '00.000.004-B', 'Ferrokey', '917280377', 'Herrera Oria 63 segunda planta 28034', 'info@ferroket.com', 'www.ferroket.com', '913580421', 'MADRID');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE IF NOT EXISTS `proyecto` (
`id` int(11) NOT NULL COMMENT 'id',
  `descripcion` varchar(250) DEFAULT NULL COMMENT 'descripción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `descripcion`) VALUES
(1, 'Gesti%C3%B3n%20de%20proyectos'),
(2, 'Foro'),
(3, 'Blog'),
(4, 'Tienda virtual'),
(5, 'Red social'),
(6, 'Actividades'),
(7, 'Noticias sociales'),
(8, 'Facturación'),
(9, 'Cuestionarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE IF NOT EXISTS `publicacion` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `contenido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Contenido',
  `id_usuario` int(11) DEFAULT NULL COMMENT 'Usuario',
  `fechacreacion` datetime DEFAULT NULL COMMENT 'Fecha de creación'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id`, `contenido`, `id_usuario`, `fechacreacion`) VALUES
(1, 'Esto no es twitter', 2, '2014-11-13 15:15:27'),
(2, 'Peliculon que hacen en antena 3', 2, '2014-11-18 05:30:12'),
(3, 'No tengo amigos :(', 1, '2014-11-12 07:25:26'),
(4, 'Escribir 20 posts es una faena', 6, '2014-11-11 03:38:17'),
(5, 'El nuevo cd de u2 tiene muchos temazos', 6, '2014-11-04 10:18:23'),
(6, 'Mucho nuevo hay por aqui', 17, '2014-11-06 19:12:59'),
(7, 'Hoy hace un dia de m...\r\na viciarse al lol', 3, '2014-11-16 00:37:20'),
(8, 'El usuario numero 5 es un cachondo', 6, '2014-11-01 23:59:00'),
(9, 'No ten go amigos y no se escrivir', 17, '2014-11-21 00:00:59'),
(10, 'Lo que hay que leer', 20, '2014-11-19 10:46:09'),
(11, 'Rafa seguro que es el mejor', 5, '2014-11-17 04:07:04'),
(12, 'Tengo al pajaro molestando todo el dia', 9, '2014-11-12 23:21:18'),
(13, 'No todos mis amigos me comprenden', 10, '2014-11-11 15:11:52'),
(14, 'No tengo casi amigos :(', 10, '2014-11-05 17:59:59'),
(15, 'El halloween mola, buena tarde con los colegas', 2, '2014-11-19 08:13:05'),
(16, 'Im the first', 1, '2014-11-13 23:40:22'),
(17, 'Menuda party hard que me acabo de pegar tete', 1, '2014-11-14 17:14:22'),
(18, 'Rusty cole se considera un realista pero filosoficamente hablando un pesimista', 13, '2014-11-07 06:59:10'),
(19, 'Skyler debe morir es tediosa no hay quien aguante eso', 13, '2014-11-10 10:08:06'),
(20, 'El Pablo Motos cada dia lo veo mas alto o sera que los invitados ...', 13, '2014-11-22 15:40:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE IF NOT EXISTS `respuesta` (
`id` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL COMMENT 'Id. Usuario',
  `id_pregunta` int(11) DEFAULT NULL COMMENT 'Id. Pregunta',
  `id_opcion` int(11) DEFAULT NULL COMMENT 'Id. Opción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='respuesta' AUTO_INCREMENT=7 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tema`
--

CREATE TABLE IF NOT EXISTS `tema` (
`id` int(6) NOT NULL COMMENT 'Id',
  `nombre` varchar(255) DEFAULT NULL COMMENT 'Título del tema',
  `fechacreacion` datetime DEFAULT NULL COMMENT 'Fecha de creación',
  `id_tipotema` int(6) DEFAULT NULL COMMENT 'Categoría',
  `id_usuario` int(6) DEFAULT NULL COMMENT 'Creador del tema'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `tema`
--

INSERT INTO `tema` (`id`, `nombre`, `fechacreacion`, `id_tipotema`, `id_usuario`) VALUES
(1, 'Peter Lim, ¿Estafa o no?', '2014-10-30 09:43:02', 1, 2),
(2, 'Ranking películas de terror', '2014-10-20 12:35:00', 2, 10),
(3, '¿Que os parece este ordenador?', '2014-10-23 14:20:10', 3, 14),
(4, '¿Xbox One, PC o Ps4?', '2014-10-30 13:17:50', 4, 16),
(5, 'Comparación Audi tt y BMW serie 1', '2014-09-15 08:02:00', 5, 1),
(6, 'Como montar una estantería fácilmente', '2014-10-30 14:27:50', 6, 29),
(7, 'Especificaciones GoPro3', '2014-05-05 04:10:52', 7, 8),
(8, 'Sorteo entrada para el cine ABC El Saler', '2014-01-30 18:15:17', 8, 8),
(9, 'Consulta sobre hongos en los pies', '2014-07-29 09:46:10', 9, 4),
(10, 'Duda convalidaciones de FOL', '2014-05-07 19:54:00', 10, 5),
(11, 'Viajes a Malaysia', '2014-10-28 06:46:54', 11, 9),
(12, 'Receta-Tarta de limón', '2014-09-20 11:50:01', 12, 10),
(13, 'Pasarela Cibeles 2015', '2014-10-28 21:23:54', 13, 13),
(14, 'Concierto Luz Casal en Burjassot', '2014-06-20 12:05:40', 14, 16),
(15, 'Me falla la impresora-AYUDA', '2014-10-23 13:10:52', 15, 15),
(16, '¿Iphone 6 es un timo o no?', '2014-09-24 09:59:02', 16, 23),
(17, 'Conferencia Stephen Hawking', '2014-10-30 09:12:08', 17, 17),
(18, '¿Cuál es el mejor museo de carruajes de Europa?', '2014-10-30 10:22:18', 18, 4),
(19, 'Vendo Ford Fiesta rosa en perfectas condiciones (Valencia)', '2014-08-15 16:11:22', 19, 9),
(20, '¿Bleach o Naruto?-Cuidado SPOILERS', '2014-10-12 09:14:18', 20, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocumento`
--

CREATE TABLE IF NOT EXISTS `tipodocumento` (
`id` int(6) NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `privado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `tipodocumento`
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
-- Estructura de tabla para la tabla `tipooperacion`
--

CREATE TABLE IF NOT EXISTS `tipooperacion` (
`id` int(6) NOT NULL COMMENT 'Identificador',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `tipooperacion`
--

INSERT INTO `tipooperacion` (`id`, `descripcion`) VALUES
(1, 'lectura'),
(2, 'escritura'),
(3, 'alta'),
(4, 'modificación'),
(5, 'borrado'),
(6, 'rellenar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE IF NOT EXISTS `tipoproducto` (
`id` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción',
  `id_impuesto` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=32 ;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`id`, `descripcion`, `id_impuesto`) VALUES
(1, 'herramienta manual engrasada', 9),
(2, 'máquina electrica o electrónica', 18),
(4, 'Herramienta manual de precisión', 3),
(5, 'Herramienta automático', 2),
(6, 'Herramienta descatalogado', 1),
(7, 'Herramienta inexistente', 20),
(8, 'Accesorio manual', 13),
(9, 'Accesorio automático', 4),
(10, 'Accesorio descatalogado', 4),
(11, 'Accesorio inexistente', 7),
(12, 'Producto manual', 1),
(13, 'Producto automático', 4),
(14, 'Producto descatalogado', 17),
(15, 'Producto inexistente', 11),
(16, 'Artículo manual', 4),
(17, 'Artículo automático', 9),
(18, 'Artículo descatalogado', 12),
(19, 'Artículo inexistente', 10),
(20, 'Referencia manual', 15),
(21, 'Referencia automático', 2),
(22, 'Referencia descatalogado', 7),
(23, 'Referencia inexistente', 8),
(24, 'Mercancía manual', 7),
(25, 'Mercancía automático', 18),
(26, 'Mercancía descatalogado', 4),
(27, 'Mercancía inexistente', 10),
(28, 'Género manual', 14),
(29, 'Género automático', 3),
(30, 'Género descatalogado', 21),
(31, 'Género inexistente', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipopropuesta`
--

CREATE TABLE IF NOT EXISTS `tipopropuesta` (
`id` int(11) NOT NULL COMMENT 'Num del tipo de propuesta',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripcion'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `tipopropuesta`
--

INSERT INTO `tipopropuesta` (`id`, `descripcion`) VALUES
(1, 'Aplicar margenes'),
(2, 'Aprender un framwork'),
(3, 'Quedadas'),
(4, 'Aprender java'),
(5, 'Aprender php'),
(6, 'Aprender django'),
(7, 'Aprender Visual Basic'),
(8, 'Aprender ruby');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipotarea`
--

CREATE TABLE IF NOT EXISTS `tipotarea` (
`id` int(11) NOT NULL COMMENT 'Id',
  `descripcion` varchar(250) DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `tipotarea`
--

INSERT INTO `tipotarea` (`id`, `descripcion`) VALUES
(1, 'diseño de la base de datos'),
(2, 'diseño del programa'),
(3, 'diseño del interface'),
(4, 'programación del cliente'),
(5, 'programación del servidor'),
(6, 'reparación de error en cliente'),
(7, 'reparación de error en servidor'),
(8, 'documentación'),
(9, 'gestión de permisos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipotema`
--

CREATE TABLE IF NOT EXISTS `tipotema` (
`id` int(6) NOT NULL COMMENT 'ID Categoría',
  `nombre` varchar(255) DEFAULT NULL COMMENT 'Nombre categoría'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `tipotema`
--

INSERT INTO `tipotema` (`id`, `nombre`) VALUES
(1, 'Deportes'),
(2, 'Cine'),
(3, 'Informática'),
(4, 'Videojuegos'),
(5, 'Motor'),
(6, 'Bricolaje'),
(7, 'Fotografía'),
(8, 'Sorteos'),
(9, 'Salud'),
(10, 'Educación'),
(11, 'Viajes'),
(12, 'Gastronomía'),
(13, 'Moda'),
(14, 'Música'),
(15, 'Tecnología'),
(16, 'Móviles'),
(17, 'Ciencia'),
(18, 'Arte'),
(19, 'Compra venta'),
(20, 'Series');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE IF NOT EXISTS `tipousuario` (
`id` int(11) NOT NULL COMMENT 'Identificador',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Usuario'),
(3, 'Visitante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajo`
--

CREATE TABLE IF NOT EXISTS `trabajo` (
`id` int(11) NOT NULL COMMENT 'Id',
  `descripcion` varchar(255) DEFAULT NULL COMMENT 'Descripción',
  `fechaentrega` datetime DEFAULT NULL COMMENT 'Fecha Entrega',
  `id_usuario` int(6) DEFAULT NULL COMMENT 'ID Usuario',
  `id_tipotarea` int(6) DEFAULT NULL COMMENT 'ID Tipo tarea',
  `id_estadotarea` int(6) DEFAULT NULL COMMENT 'ID Estado tarea'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Volcado de datos para la tabla `trabajo`
--

INSERT INTO `trabajo` (`id`, `descripcion`, `fechaentrega`, `id_usuario`, `id_tipotarea`, `id_estadotarea`) VALUES
(1, 'diseño de la base de datos', '2014-12-17 15:16:27', 1, 3, 1),
(2, 'programación de un mantenimiento', '2015-03-18 06:11:35', 2, 4, 2),
(3, 'programación de una clave ajena', '2014-12-10 10:17:40', 3, 5, 3),
(4, 'gestión de permisos', '2015-05-15 13:00:00', 4, 6, 4),
(5, 'gestión de permisos', '2014-06-17 06:16:16', 5, 7, 5),
(6, 'programación de una clave ajena', '2014-11-11 00:00:00', 6, 8, 5),
(7, 'programación de un mantenimiento', '2014-07-31 09:33:45', 7, 9, 4),
(8, 'diseño de la base de datos', '2014-08-21 13:35:30', 8, 9, 3),
(9, 'programación de una clave ajena', '2014-09-02 00:30:29', 9, 8, 2),
(10, 'gestión de permisos', '2014-05-30 11:29:30', 10, 7, 1),
(11, 'programación de un mantenimiento', '2014-10-22 00:00:00', 11, 6, 1),
(12, 'diseño de la base de datos', NULL, 12, 5, 2),
(13, 'programación de un mantenimiento', '2014-03-04 13:25:11', 13, 4, 3),
(14, 'gestión de permisos', '2014-12-08 07:12:00', 14, 3, 4),
(15, 'diseño de la base de datos', '2014-10-14 20:48:00', 15, 2, 5),
(16, 'programación de un mantenimiemto', '2014-12-02 09:16:00', 16, 1, 5),
(17, 'programación de una clave ajena', '2014-12-15 00:00:00', 17, 1, 4),
(18, 'gestión de permisos', '2014-12-08 00:00:00', 18, 2, 3),
(19, 'diseño de la base de datos', '2014-01-08 00:00:00', 19, 3, 2),
(20, 'programación de un mantenimiemto', '2014-09-11 16:29:42', 20, 4, 1),
(21, 'programación de una clave ajena', '2014-02-06 08:21:47', 21, 5, 4),
(22, 'gestión de permisos', '2014-08-13 05:42:00', 22, 6, 2),
(23, 'programación de un mantenimiento', '2014-09-17 08:21:00', 23, 7, 3),
(24, 'programacion de una clave ajena', '2014-09-02 13:00:00', 24, 8, 4),
(25, 'diseño de la base de datos', '2014-07-16 11:18:00', 25, 9, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
`id` int(6) NOT NULL COMMENT 'Identificador',
  `login` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Nombre de usuario',
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Contraseña',
  `id_tipousuario` int(11) DEFAULT NULL COMMENT 'Tipo de usuario',
  `id_estado` int(11) DEFAULT NULL COMMENT 'Estado',
  `ciudad` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Ciudad',
  `firma` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Firma',
  `skin` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Plantilla'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=31 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `login`, `password`, `id_tipousuario`, `id_estado`, `ciudad`, `firma`, `skin`) VALUES
(1, 'pepe', 'pepe', 2, 1, 'Valencia', 'is my life and do what I want', 'main'),
(2, 'juan', 'juan', 3, 3, 'Madrid', 'http://criticalandia.com críticas de entretenimiento, listas, opiniones...', 'main'),
(3, 'maria', 'maria', 3, 6, 'Barcelona', 'If you love something, set it free. Unless it''''s a tiger.', 'main'),
(4, 'antonia', 'antonia', 3, 7, 'Sevilla', '"El único límite a nuestros logros de mañana está en nuestras dudas de hoy."', 'main'),
(5, 'edu', 'edu', 3, 13, 'Zaragoza', 'Plataforma: ORGULLLO CADISTA no.58', 'main'),
(6, 'jose', 'jose', 3, 19, 'Teruel', 'Ironía: Figura literaria mediante la cual se da a entender lo contrario de lo que se dice.', 'main'),
(7, 'silvia', 'silvia', 3, 6, 'Huesca', 'Paso de firmas', 'main'),
(8, 'pedro', 'pedro', 3, 8, 'Alicante', 'Camisetas y calzado www.pedidoshicks.com', 'main'),
(9, 'raquel', 'raquel', 3, 15, 'Castellón', 'PEÑA COLCHONERA Socio número 629', 'main'),
(10, 'daniel', 'daniel', 3, 12, 'Almería', '"Obsesionado es tan sólo la palabra que usan los perezosos para describir a los dedicados"', 'main'),
(11, 'rafael', 'rafael', 1, 17, 'A Coruña', 'Ista ye a mia tierra, a mia fabla', 'main'),
(12, 'juan', 'juan', 3, 14, 'Barcelona', 'No todos los catalanes somos independentistas', 'main'),
(13, 'elena', 'elena', 3, 19, 'Bilbao', 'Buenas tardes', 'main'),
(14, 'luis', 'luis', 3, 4, 'Lugo', 'Preparado para cualquier combate', 'main'),
(15, 'alba', 'alba', 3, 5, 'Cuenca', 'Si tienes un Ibiza o un Cordoba, este es tu club: www.clubseatcordoba.com', 'main'),
(16, 'amparo', 'amparo', 3, 7, 'Ciudad Real', 'No hay dos sin tres', 'main'),
(17, 'ambrosio', 'ambrosio', 3, 8, 'Guadalajara', 'Tesis+Antítesis=Síntesis. Problema+Acción = Solución.', 'main'),
(18, 'luisa', 'luisa', 3, 1, 'Huelva', 'Y yo me iré. y se quedará mi huerto con su verde árbol, y con su pozo blanco. Y yo me iré.. Y se quedarán los pájaros cantando', 'main'),
(19, 'leon', 'leon', 3, 3, 'Granada', 'La Infanta no sabía nada y punto.', 'main'),
(20, 'rosa', 'rosa', 3, 2, 'Cádiz', 'Viva España', 'main'),
(21, 'capcom', 'capcom', 3, 17, 'Jerez', 'La gente cree que soy una mala persona, pero no es cierto, yo tengo el corazón de un niño...en un frasco con formol encima de mi escritorio.', 'main'),
(22, 'teleco', 'teleco', 3, 18, 'Vallecas', 'Foreros de la Comunidad de Madrid Nº25', 'main'),
(23, 'mercadona', 'mercadona', 3, 13, 'Jaén', 'Y veréis el resurgir poderoso del guerrero, sin miedo a leyes ni a nostalgias.', 'main'),
(24, 'vistaprint', 'vistaprint', 3, 15, 'Valencia', 'Codeados.com Diseño y Desarrollo web, Imagen Corporativa, SEO, Marketing Digital', 'main'),
(25, 'google', 'google', 3, 16, 'California', 'Viva google +', 'main'),
(26, 'konami', 'konami', 3, 6, 'Tokio', 'Viva Castolo, Minanda y Ximelez', 'main'),
(27, 'orange', 'orange', 3, 7, 'París', 'Viva movistar', 'main'),
(28, 'samsung', 'samsung', 3, 8, 'Cuenca', 'Viva el iPhone 6', 'main'),
(29, 'gigabyte', 'gigabyte', 3, 10, 'Oviedo', 'Viva gigabyte', 'main'),
(30, 'microsoft', 'microsoft', 3, 10, 'Albacete', 'La xbox ONE es la MEJOR CONSOLA', 'main');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `amistad`
--
ALTER TABLE `amistad`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
 ADD PRIMARY KEY (`id`,`id_pedido`,`id_producto`);

--
-- Indices de la tabla `documento`
--
ALTER TABLE `documento`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entrega`
--
ALTER TABLE `entrega`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estadotarea`
--
ALTER TABLE `estadotarea`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `impuesto`
--
ALTER TABLE `impuesto`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajeprivado`
--
ALTER TABLE `mensajeprivado`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `metadocumento`
--
ALTER TABLE `metadocumento`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `metadocumentos`
--
ALTER TABLE `metadocumentos`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `opcion`
--
ALTER TABLE `opcion`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `operacion`
--
ALTER TABLE `operacion`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ordenador`
--
ALTER TABLE `ordenador`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
 ADD PRIMARY KEY (`id`,`id_usuario`);

--
-- Indices de la tabla `permiso`
--
ALTER TABLE `permiso`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
 ADD PRIMARY KEY (`id`,`id_tipoproducto`,`id_proveedor`);

--
-- Indices de la tabla `propuesta`
--
ALTER TABLE `propuesta`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tema`
--
ALTER TABLE `tema`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipooperacion`
--
ALTER TABLE `tipooperacion`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
 ADD PRIMARY KEY (`id`,`id_impuesto`);

--
-- Indices de la tabla `tipopropuesta`
--
ALTER TABLE `tipopropuesta`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipotarea`
--
ALTER TABLE `tipotarea`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipotema`
--
ALTER TABLE `tipotema`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajo`
--
ALTER TABLE `trabajo`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Numero',AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT de la tabla `amistad`
--
ALTER TABLE `amistad`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=251;
--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Num de comentario',AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=193;
--
-- AUTO_INCREMENT de la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT de la tabla `documento`
--
ALTER TABLE `documento`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Num.',AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT de la tabla `entrega`
--
ALTER TABLE `entrega`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `estadotarea`
--
ALTER TABLE `estadotarea`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `impuesto`
--
ALTER TABLE `impuesto`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `mensajeprivado`
--
ALTER TABLE `mensajeprivado`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'ID',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `metadocumento`
--
ALTER TABLE `metadocumento`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `metadocumentos`
--
ALTER TABLE `metadocumentos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id Documento',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `opcion`
--
ALTER TABLE `opcion`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=257;
--
-- AUTO_INCREMENT de la tabla `operacion`
--
ALTER TABLE `operacion`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'ID Operación',AUTO_INCREMENT=460;
--
-- AUTO_INCREMENT de la tabla `ordenador`
--
ALTER TABLE `ordenador`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT de la tabla `permiso`
--
ALTER TABLE `permiso`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'ID Permiso',AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'ID',AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=406;
--
-- AUTO_INCREMENT de la tabla `propuesta`
--
ALTER TABLE `propuesta`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Num_propuesta',AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `tema`
--
ALTER TABLE `tema`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Id',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `tipooperacion`
--
ALTER TABLE `tipooperacion`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de la tabla `tipopropuesta`
--
ALTER TABLE `tipopropuesta`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Num del tipo de propuesta',AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `tipotarea`
--
ALTER TABLE `tipotarea`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `tipotema`
--
ALTER TABLE `tipotema`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'ID Categoría',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `trabajo`
--
ALTER TABLE `trabajo`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
