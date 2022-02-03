-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: employees
-- ------------------------------------------------------
-- Server version	8.0.25

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

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `Idnumber` varchar(500) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Surname` varchar(500) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `DateofBirth` date NOT NULL,
  `Position` varchar(500) NOT NULL,
  `Mail` varchar(500) NOT NULL,
  `Department` varchar(500) NOT NULL,
  `Dayoffpreference` varchar(500) DEFAULT NULL,
  `Dayoffpreferencetwo` varchar(500) DEFAULT NULL,
  `Crew` varchar(500) DEFAULT NULL,
  `Assignedoffday` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`Idnumber`),
  UNIQUE KEY `Idnumber_UNIQUE` (`Idnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('120000021','LeBron','James','$2b$10$euMmbq80qglCJro9nx2ZEuxqPEY/Rv7fX9y4adUp5F.4x9O0f9iQS','2021-06-01','Employee','lbj@gmail.com','Department 1','Fri','Tue','',''),('120302066','Ben','Simmons','$2b$10$O45S1yNM0BWRkYZT8Ka8cuwRvh9JvTEAcLPAkjfH9ssXcIrRCukle','2021-06-01','Employee','simmons@gmail.com','Department 1','Mon','Tue','',''),('120302566','Kyrie','Irving','$2b$10$OhKPHhaP1TEIvmN2GLW9S.DNsjGnSp7v2DxVLkMDA1ZBO8Ipc4RjO','2021-06-01','Employee','kIrving@gmail.com','Department 1','Tue','Fri','',''),('130021132','Michael','Jordan','$2b$10$t4udjkhckqprNMiUOHCGq.CFUTcUyUwAYNBh2bxzRjXVEEk8.boKy','2021-06-01','Employee','mj23@gmail.com','Department 1','Tue','Fri','',''),('150308013','Emre Can',' Simsek','$2b$10$cBWnqy71Pm4giYt0hGzbfuOp8Pn9aB4BmBNqrWpfiI8LLKCV68JkG','1997-07-10','Admin','emre.w97@hotmail.com','-','','','',''),('157789999','Luka','Doncic','$2b$10$/yeteX2JA.iBMWZLyQT9re1xjNhVofTyrRyfetmZHNIHainNqK1IO','2021-06-01','Employee','lDomcic@hotmail.com','Department 1','Tue','Tue','',''),('158789654','Devin','Booker','$2b$10$yxs38L46eMXBJEhytx9V2edQZV88XSLioc3BjhGwhgNmdqh8Ls7nu','2021-06-01','Employee','dbooker4@hotmail.com','Department 1','Mon','Fri','',''),('158888999','Steph','Curry','$2b$10$pkP5CjgQTXSyq6wEAUZ79eC.7Vr65OFjHxtj5siDRGU36HfMn5xb6','2021-06-01','Employee','chefcurry@gmail.com','Department 1','Mon','Tue','',''),('160302007','Nikola','Jokic','$2b$10$gc2TxdAk/URHYl/hC0xztOcItGC6JIORf/car.kIHYDCI7gbLVoB.','2021-06-01','Employee','Jokic@hotmail.com','Department 1','Thu','Fri','',''),('160302033','Cihat Mete','Gül','$2b$10$ZSwKIe8M6imqkLE4/Tz.8.LJXnznuSZRPlaLewvfHR/voYCMAjlYG','1998-07-10','Department Manager','mete@hotmail.com','Department 1','Tue','Tue','',''),('160302088','Kawhi','Leonard','$2b$10$2yuYScG6HRLThYZ8fVRpnu4zUaJAwsZXOy6ZzAEPw9yazdh/YQ2x.','2021-06-01','Employee','kleo@gmail.com','Department 1','Tue','Mon','',''),('185203655','Trae','Young','$2b$10$oab89xJXJf0KHARSoZbZSenhnDKyI8hRkpNV7mSmJS75yAu8h2hLq','2021-06-14','Employee','tYoung@gmail.com','Department 1','Tue','Tue','',NULL),('189654789','Kevin','Durant','$2b$10$3fqEaXZzpgm2le7ZcXlo5euC9wO3l2oKxLtQ94ZHVNGe71/5gYs42','2021-06-01','Employee','kd56@gmail.com','Department 1','Mon','Mon','',''),('190000036','James','Harden','$2b$10$sa6O.R0j0mnVq1bXt90MvOQVnZPKGUFwhjFOtWz4REydDzeYpjNXC','2021-06-23','Employee','jHarden@gmail.com','Department 1','Mon','Tue','',''),('202020366','Dame','Lillard','$2b$10$3hB9i5msiuho3dHm43Sh9Ocm/QmhmNUD42OVMywCZo7xauz7oz4Py','2021-06-01','Employee','daLi4@gmail.com','Department 1','Tue','Tue','',''),('202212222','Bradley','Beal','$2b$10$WBJaURcXgnSHiSpdnKJm3OnvDRB5dKGBsIh5cxZuuacnEkRhzn1AC','2021-06-01','Employee','bbeL4@gmail.com','Department 1','Wed','Tue','',''),('212232699','Jimmy ','Butler','$2b$10$adwyymhLxo4UD5N5Jsffte.RnDAoxKbnpRZOhQPjKmaN1Yl8PWKiu','2021-06-01','Employee','Butler34@gmail.com','Department 1','Tue','Wed','',''),('220302033','Karl Anthony','Towns','$2b$10$uaqB6RqtTsFtGRbjAMYOHe0TFYwLhrl4FoScGzm9458ijHgEERvOe','2021-06-01','Employee','Towns43@gmail.com','Department 1','Mon','Wed','',''),('232321111','Chris','Paul','$2b$10$WzL0VSEHcg0s.QGqkEybtOueP/hqcLAXWu.E3QKWF2xN/AxqJF1Yq','2021-06-01','Employee','Paul343@gmail.com','Department 1','Mon','Fri','',''),('240302055','Rudy','Gobert','$2b$10$v1ZeCJaneo2sOmWkB6Shae90e89P.dZQGfbjxV3qSL4Iv5j.qlzdq','2021-06-01','Employee','Gobert54@gmail.com','Department 1','Mon','Wed','',''),('250000992','Tim','Duncan','$2b$10$jJBBQA9Pmd/qWwwXNqI0DedNiAvdy4Oy9N70vFZAVPbpjysAmOLqq','2021-06-01','Employee','Duncan545@hotmail.com','Department 1','Tue','Fri','',''),('263222222','Shaquille','ONeal','$2b$10$0tSt52y8fnSFtUuof6xYXez2yBxYLN8KlT3dmP7pKDivzYsMEAz7O','2021-06-01','Employee','shq33@gmail.com','Department 1','Tue','Wed','',''),('270202222','Larry','Bird','$2b$10$DY0J..rFhk2bNa4QrQeZReXfXxMzALvwI08W9R/84hJzWatm2fQeq','2021-06-01','Employee','Birdlarry@gmail.com','Department 1','Tue','Fri','',''),('280302697','Bill','Russell','$2b$10$YEERA7fNfPVfX8vMgj.rgen9EVxfnfKuP/Wbg4z2UKFYDvbp8qk6u','2021-06-01','Employee','Russell4@gmail.com','Department 1','Mon','Wed','',''),('291589433','Oscar','Robertson','$2b$10$5Tp1H4S8Houz6QsWTLlhl.1KxjH5Zy06NfnH0dU4cJ5PheTmX1Xp6','2021-06-01','Employee','OscarRobertson3@gmail.com','Department 1','Tue','Thu','',''),('301468422','Wilt','Chamberlain','$2b$10$RmiMAFiFDpjRsFjgAE.QWeHJoLmZkHJgWdvCZ958ufA5RpRnDaWpm','2021-06-01','Employee','Wilt4Chamberlain@hotmail.com','Department 1','Mon','Fri','',''),('335795322','Magic','Johnson','$2b$10$EH/7U0S46zZNwwxZpTS8e.4UNBfNkmU1YHqQCR5CK4jb4y5WkbYFO','2021-06-01','Employee','Magic55Johnson@gmail.com','Department 1','Wed','Thu','',''),('414679654','Julius','Erving','$2b$10$dX.QshbQSrejWQwU8qpg2OCLFMiXcIsQYdE.qUol6mtrAxp1OfFAa','2021-06-23','Employee','Erving@gmail.com','Department 1','Thu','Fri','',''),('533457344','Isiah','Thomas','$2b$10$O3uVWMNAN5mE9NT0Rm9SFOjd9/OkGJhkoRA6JrN.zwCZbKTIt4LlC','2021-06-23','Employee','Isiah7Thomas@gmail.com','Department 1','Thu','Thu','',''),('552346765','Scottie Pippen','Scottie Pippen','$2b$10$diYCr5hw59/VAj34XRpM9OkfGsAmaBkARAk2L2Qzi0vdKvCjlgN6.','2021-06-01','Admin','ScottiePippen@gmail.com','-','','','',''),('634576534','Karl','Karl Malone','$2b$10$hWjzxgd5BJ7adyKx.M9rqOugxotx9uYwnXCoAkh0al9.CkzaF6ge6','2021-06-23','Admin','km4@gmail.com','-','','','',''),('734567533','Nate','Archibald','$2b$10$c9ogcpvRICvGdzWzCwzo.erTM1av66dtW4KFhWfOFO8lsl1pAzWYS','2021-06-01','Employee','Nate7Archibald@gmail.com','Department 1','Wed','Thu','',''),('834555345','Elgin','Baylor','$2b$10$hdfw0fBI9M8AcDEuBoRTwez4xL4UC2OJxKAhbXEjaik/zYQj57Msu','2021-06-01','Employee','Elgin7Baylor@gmail.com','Department 1','Wed','Mon','',''),('934555344','Billy','Cunningham','$2b$10$sn0mksP/2W4B/mpbhAO.pOnUgGz5i9Ds7zBEx7gf0mUZ.aY.dJmom','2021-06-01','Employee','BillyCunningham@gmail.com','Department 1','Wed','Mon','','');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-30 21:36:37
