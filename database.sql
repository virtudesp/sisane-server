-- phpMyAdmin SQL Dump
-- version 4.4.13.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-10-2015 a las 03:25:00
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.5.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `openausias2015`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE IF NOT EXISTS `estado` (
  `id` int(11) NOT NULL COMMENT 'Identificador',
  `tipo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Estado'
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE IF NOT EXISTS `tipousuario` (
  `id` int(11) NOT NULL COMMENT 'Identificador',
  `descripcion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descripción'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Usuario'),
(3, 'Visitante');

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
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
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'Identificador',AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
