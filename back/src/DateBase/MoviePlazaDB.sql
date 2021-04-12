 /*******************************
 *
 * FILENAME:         MoviePlaza.sql 
 * 
 * BRIEF:            This file contains product, customer
 *                   data and realization of database for
 *                   github.com/NazariyProshyn/MoviePlaza
 *
 * AUTHOR:           Nazarii Proshyn
 *
 * CONTACT:          nazariyproshyn@gmail.com
 *
 *******************************/
 
 
 /******************************
 *
 * DB name:             MoviePlaza
 *
 * BRIEF:               Contains information about
 *                      customers, films, transactions
 *                      of "MoviePlaza" service
 *
 * TABLES:              "User",         "UserInformation"
 *                      "FilmInfo",     "FavouriteGanres"
 *                      "BoughtFilms"        
 *
 * Description:
 * "User":              This table stores the main    
 *                      information about the client-
 *                      date of birth, name, surname,
 *                      money in the account.The "UserId"
 *                      column is taken as the primary key.
 *
 * "UserInformation":   This table has information about the
 *                      client's account - his login and 
 *                      password.The "UserId" column is taken
 *                      as the primary key.
 *
 * "FilmInfo":          This table contains the main information
 *                      about the film - its title, price,
 *                      genre and description.The "FilmId" column is taken
 *                      as the primary key.
 *
 * "BoughtFilms":       This table contains information about
 *                      movies purchased by different customers.
 *                      "UserId" and "FilmId" columns are 
 *                      taken as a composite primary key
 *
 * "FavouriteGanres":   This table contains information about
 *                      favourite ganres of clients.The "UserId", 
 *                      "GenresId" column is taken as the primary key.
 *
 ******************************/
 
 
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
	"UserId"     serial NOT NULL,
	"Name"       varchar(255) NOT NULL,
	"SecondName" varchar(255) NOT NULL,
	"BDate"      DATE NOT NULL,
	"Money"      money,
	CONSTRAINT "User_pk" PRIMARY KEY ("UserId")
 ) WITH (
  OIDS = FALSE
 );

 /*
  *BRIEF: Creating of table UserInformation
  *
  */
 CREATE TABLE "UserInformation" (
	"UserId"   bigint NOT NULL,
	"Login"    varchar(255) NOT NULL UNIQUE,
	"Password" varchar(255) NOT NULL,
	CONSTRAINT "UserInformation_pk" PRIMARY KEY ("UserId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table FilmInfo
  *
  */
CREATE TABLE "FilmInfo" (
	"FilmId" serial NOT NULL,
	"GenreId" bigint NOT NULL,
	"FilmName" varchar(255) NOT NULL UNIQUE,
	"Price" int,
	"InformationAboutFilm" varchar(255) NOT NULL,
	CONSTRAINT "FilmInfo_pk" PRIMARY KEY ("FilmId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table BoughtFilms
  *
  */
CREATE TABLE "BoughtFilms" (
	"UserId" serial NOT NULL,
	"FilmId" serial NOT NULL,
	CONSTRAINT "BoughtFilms_pk" PRIMARY KEY ("UserId","FilmId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table FavouriteGanres
  *
  */
CREATE TABLE "FavouriteGanres" (
	"UserId" serial NOT NULL,
	"GenresId" serial NOT NULL
) WITH (
  OIDS = FALSE
);
