-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: bjwrle7upim7d52gz4hq-mysql.services.clever-cloud.com    Database: bjwrle7upim7d52gz4hq
-- ------------------------------------------------------
-- Server version	8.0.22-13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-144835423';

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `nombre_usuario` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido1` varchar(50) NOT NULL,
  `apellido2` varchar(50) DEFAULT NULL,
  `correo` varchar(200) NOT NULL,
  `password` varchar(300) NOT NULL,
  `id_tipo_usuario` int NOT NULL,
  PRIMARY KEY (`nombre_usuario`),
  UNIQUE KEY `nombre_usuario_UNIQUE` (`nombre_usuario`),
  KEY `fk_id_tipo_de_usuario_idx` (`id_tipo_usuario`),
  CONSTRAINT `fk_id_tipo_de_usuario` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_de_usuario` (`id_tipo_de_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('adalovelace','Ada','Lovelace','Lovelace','adalovelace@gmail.com','$2a$10$m5PRovMQr52IWcyOZJSYzeHaW1wZEYHhDvBi6fv3nqgbX6y0A4hBS',1),('admin','admin','admin','admin','admin@gmail.com','$2a$10$Dms0mVwuh6DRGiWeV/TD9ODqhQwPXQLFpMF0ccLZmzPCy9XwwhczG',2),('ajio','ajio','ajio','ajio','ajio@gmail.com','$2a$10$IEFT7yKoRJ52QUD6b/kR/OleV9MVlkOhkxF8NfhqUYwQlRLKpCFOe',1),('Ale','Ale','R','A','Ale@gmail.com','$2a$10$190usYLOz//Vu5d81IfhVONFPxvafwqfyj.fjq86JyE6WDrEGprzi',1),('alita0901','Alita','Rivera','Alvarado','alita@gmail.com','$2a$10$HWzI7zcuyVsomoz6pAovweh8HexU.9pDG/nT.vwKDOx3W0v0qF8pa',1),('Alita91','Alita','Rivera','Alvarado','alita@gmail.com','$2a$10$MVbp23H1EtrMHjpL2WZbOuV14kuVxX/OkXmzuOpV1H9bL02oAydH6',1),('Alita_de_Pollo','Alejandra','Rivera','Alvarado','alejandrariveraalvarado@gmail.com','$2a$10$xQ6y0mSeYaGfKli8mippUO/vKML1VFOdDNyU/w20hhfJfejVMWdNG',1),('allanturin','Allan ','Turin','Turin','allanturin@gmail.com','$2a$10$tblmJMSXM8Nn8AHFSCZZ4uF9yegeDc8raZ0MAICukOjrLQdU0wt2W',1),('asd','asd','asd','asd','asd@gmail.com','$2a$10$mk4k/DjUxvERo.cNetNLO.o4LEXvI01NnWkYGa27BibRKXTev91ai',1),('dijkstra','Edsger ','Dijkstra','Dijkstra','Dijkstra@gmail.com','$2a$10$KyvwzNSUH/LTCJVaFReP6.bjLj20KLaohH0YMh2T.kKabiOl48rii',1),('EddyRJ','Eddy','Ramírez','Jiménez','Eddyrj@hotmail.com','$2a$10$CfDE8h85DbuVYGUGO3QzUO/Chl142DjCvLhNxWoDhMWSl9Jdy3bJK',1),('hoare','Charles','Hoare','Hoare','Hoare@gmail.com','$2a$10$zY6Wx.gcW5qp3HKfbXauo.Bqgh51F/BNxrD5UtoEmG9jUGnw.qGFy',1),('hola','hola','hola','hola','hola@gmail.com','$2a$10$vm76ufZasAAlqPfu4BHC3uYBqOFkezzLKKXOu78J2XTeHgUQTRloy',1),('JoseRR','Jose','Ramírez','Ramírez','JoseR@gmail.com','$2a$10$adGiDtVWmqWxaLg/m/56/uWuUA.hOwxKxJ5QbGCidWT2k3noIUMyO',1),('lesah','dario','gut','cat','darioag18@gmail.com','$2a$10$q4BjmTGlR8svFYbzc/i9fOwJROj8AqY32A3u0z3VA5Y5UQkXpiePG',1),('moore','Gordon','Moore','Moore','moore@gmail.com','$2a$10$0jCktVGAlMcqB1yJ3nc0meyn3dHLDT2y.y1MAOQlWcp4Xsr9KvHYm',1),('nu1','n1','a11','a21','nu1@gmail.com','$2a$10$j99Qj6VhwYCON3L2MwhJe.Mw0tfnuN94g5GqAROoW/VHFOifT4dwu',1),('nu2','n2','a12','a22','nu2@gmail.com','$2a$10$nOEM/kPh38vww2vqrwBH1ea3t4NymWTe27ivDW0Z.LKSiZTWp3xWa',1),('nu3','n3','a13','a23','nu3@gmail.com','$2a$10$h3E3RLqh6Iy39s4UFZ3X1uorXRLsjxnbGYfVZiNR2e6RlrAHtZ46W',1),('nu4','n4','a14','a24','nu4@gmail.com','$2a$10$N8YcauFlc8nfhjtVFPK5HeaxcHGHFKHLB48FKU2j9MHBt9BLL3q2y',1),('nu5','n5','a15','a25','nu5@gmail.com','$2a$10$vPa75y/n41sfUkghb83UmO70/HOjhnZ0UzkpfeOZMTimgjimf2M9a',1),('test10','test10','test10','test10','test10@gmail.com','$2a$10$Gf/lTF80p1plUOZmXKjrgOujPLLVLkKARz13mqxbIbfR1Ym7Pmp62',1),('test11','test11','test11','test11','test11@gmail.com','$2a$10$eLssSb.3ewALIg/uTuaGf.ayan76TqvX8ehLtKs/Qfv2muxMIw2d2',1),('test12','test12','test12','test12','test12@gmail.com','$2a$10$JBAgigH5hQc12iROLAoV/.8iH47tGpwstM7euRl6jqBWh3vWvOSl6',1),('test2','test2','test2','test2','test2@gmail.com','test2',1),('test3','test3','test3','test3','test3@gmail.com','test3',1),('test4','test4','test4','test4','test4@gmail.com','test4',1),('test5','test5','test5','test5','test5@gmail.com','test5',1),('test6','test6','test6','test6','test6@gmail.com','$2a$10$3EywD.FATqlbR4aMMf6Hx.dD1M.5kU.pnAAHjjssvwULyL97wuiAK',1),('test7','test7','test7','test7','test7@gmail.com','$2a$10$15kqdfT/LysdLopin5p0TOK69eRreXnw42MQUQOAVN7u3YCv8ga9.',1),('test8','test8','test8','test8','test8@gmail.com','$2a$10$ObzILPqh16Qc/f61IcFj/OSWxdBrk6HzaFbkGIURU/3THCglNsd..',1),('userr','user','user','user','user@gmail.com','$2a$10$eHdAg8xe2zGcwmw8Y1eDQeNVp.J85MaaUzH31X8leElFq28RFfCoK',1),('usuario','usuario','usuario','usuario','usuario@gmail.com','$2a$10$NiGtStWSbFpKO4hqo6nLAugU8rX5doXbU.Fdk8381HGvkjzk7EDRW',1),('xdxdxd','xdxdxd','xdxdxd','xdxdxd','xdxdxd@gmail.com','$2a$10$Xw.NhfjMFKWRSpxUaimxLeC.R.VKB.eIFFqzAEe2ACp9EqZVcvKdS',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-17  2:45:13
