 /*******************************
 * FILENAME:      MoviePlaza.sql 
 * 
 * BRIEF:         This file contains product, customer
 *                data and realization of database for
 *                github.com/NazariyProshyn/MoviePlaza
 *
 * AUTHOR:        Nazarii Proshyn
 *
 * CONTACT:       nazariyproshyn@gmail.com
 *
 *******************************/
 
 /*
  *BRIEF: Creating of datebase
  *
  */
 CREATE DATABASE "MoviePlaza"

 /*
  *BRIEF: Creating of table User
  *
  */
 CREATE TABLE "User" (
	"UserId" serial NOT NULL,
	"Name" varchar(255) NOT NULL,
	"SecondName" varchar(255) NOT NULL,
	"BDate" DATE NOT NULL,
	"Money" money,
	CONSTRAINT "User_pk" PRIMARY KEY ("UserId")
 ) WITH (
  OIDS=FALSE
 );

 /*
  *BRIEF: Creating of table UserInformation
  *
  */
 CREATE TABLE "UserInformation" (
	"UserId" bigint NOT NULL,
	"Login" varchar(255) NOT NULL UNIQUE,
	"Password" varchar(255) NOT NULL,
	CONSTRAINT "UserInformation_pk" PRIMARY KEY ("UserId")
) WITH (
  OIDS=FALSE
);