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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-144835438';

--
-- Table structure for table `problema_catalogo`
--

DROP TABLE IF EXISTS `problema_catalogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problema_catalogo` (
  `id_problema` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `link` varchar(200) NOT NULL,
  PRIMARY KEY (`id_problema`)
) ENGINE=InnoDB AUTO_INCREMENT=123488 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problema_catalogo`
--

LOCK TABLES `problema_catalogo` WRITE;
/*!40000 ALTER TABLE `problema_catalogo` DISABLE KEYS */;
INSERT INTO `problema_catalogo` VALUES (1,'Take Two Stones','https://open.kattis.com/problems/twostones'),(2,'Chessboard','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=19&page=show_problem&problem=1692'),(3,'Bubble Sort','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=242&page=show_problem&problem=3155'),(4,'Lucky Thief','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=862&page=show_problem&problem=4797'),(5,'Average Speed','https://open.kattis.com/problems/averagespeed'),(6,'Bishops','https://open.kattis.com/problems/bishops'),(7,'Crne','https://open.kattis.com/problems/crne'),(8,'Ant on a Chessboard','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=13&page=show_problem&problem=1102'),(9,'How Many O\'s?','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=22&page=show_problem&problem=1979'),(10,'Black and white painting','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2172'),(11,'Fantasy of a Summation','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=117&page=show_problem&problem=2765'),(12,'Useless Tile Packers','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=12&page=show_problem&problem=1006'),(13,'Walking on a Grid','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=21&page=show_problem&problem=1854'),(14,'Cats, with or without Hats','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=16&page=show_problem&problem=1434'),(15,'R U Kidding Mr. Feynman?','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=17&page=show_problem&problem=1450'),(16,'The Eurocup is Here!','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1607'),(17,'Traffic Volume','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1634'),(18,'Chinese Shuffle','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=19&page=show_problem&problem=1651'),(19,'Koerner\'s Pub','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=20&page=show_problem&problem=1823'),(20,'Big Chocolate','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=21&page=show_problem&problem=1911'),(123456,'testProb','https://google.com'),(123457,'testProb','https://google.com'),(123458,'asdasdsadsadas','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1634'),(123459,'asdasdsadsadas','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1634'),(123460,'qqqqqqqqqqqqqq','https://ubiq.co/database-blog/mysql-drop-foreign-key-constraints/#:~:text=Here%20are%20the%20steps%20to,key%2C%20in%20place%20of%20table_name.'),(123461,'asdsad','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1634'),(123462,'xdxdxd','https://ubiq.co/database-blog/mysql-drop-foreign-key-constraints/#:~:text=Here%20are%20the%20steps%20to,key%2C%20in%20place%20of%20table_name.'),(123463,'testProb','https://google.com'),(123464,'categ prob','https://www.google.com/'),(123465,'cateprob2','https://www.google.com/'),(123466,'asdsadasdsadasd','https://www.google.com/'),(123467,'Take Two Stones','https://open.kattis.com/problems/twostones'),(123468,'Chessboard','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=19&page=show_problem&problem=1692'),(123469,'Bubble Sort','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=242&page=show_problem&problem=3155'),(123470,'Lucky Thief','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=862&page=show_problem&problem=4797'),(123471,'Average Speed','https://open.kattis.com/problems/averagespeed'),(123472,'Bishops','https://open.kattis.com/problems/bishops'),(123473,'Crne','https://open.kattis.com/problems/crne'),(123474,'Ant on a Chessboard','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=13&page=show_problem&problem=1102'),(123475,'How Many O\'s?','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=22&page=show_problem&problem=1979'),(123476,'Black and white painting','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2172'),(123477,'Fantasy of a Summation','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=117&page=show_problem&problem=2765'),(123478,'Useless Tile Packers','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=12&page=show_problem&problem=1006'),(123479,'Walking on a Grid','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=21&page=show_problem&problem=1854'),(123480,'Cats, with or without Hats','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=16&page=show_problem&problem=1434'),(123481,'R U Kidding Mr. Feynman?','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=17&page=show_problem&problem=1450'),(123482,'The Eurocup is Here!','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1607'),(123483,'Traffic Volume','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=18&page=show_problem&problem=1634'),(123484,'Chinese Shuffle','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=19&page=show_problem&problem=1651'),(123485,'Koerner\'s Pub','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=20&page=show_problem&problem=1823'),(123486,'Big Chocolate','https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=21&page=show_problem&problem=1911'),(123487,'test','www.google.com');
/*!40000 ALTER TABLE `problema_catalogo` ENABLE KEYS */;
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

-- Dump completed on 2022-06-17  2:45:18
