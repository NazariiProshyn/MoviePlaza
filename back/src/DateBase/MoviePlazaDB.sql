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
 *                      "BoughtFilms"   "TransactDetails"    
 *                      "Genres",       "RoomInformation" 
 *                      "Reits",        "TypesOfTransact"  
 *                      "Filmdata",     "Comments"
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
 * "TransactDetails":   This table contains the main information
 *                      about the transaction - customer, amount, date.
 *
 * "Genres":            This table contains information about genres 
 *                      which site "MoviePlaza" has. The "GenreId"
 *                      column is taken as the primary key.
 *
 * "Filmdata":          This table contains main films information:
 *                      films images and films.The "FilmId"
 *                      column is taken as the primary key.
 *
 * "Reits":             This table contains information about
 *                      the movie rating - the number of votes
 *                      and the overall rating. The "FilmId"
 *                      column is taken as the primary key.
 *
 * "Comments":          This table contains viewers comments
 *                      for different films and other comments.
 *
 * "TypesOfTransact":   This table lists the possible types of
 *                      transactions provided by the site "MoviePlaza".
 *
 * "RoomInformation":   This table contains the main information
 *                      about the room - who created it and
 *                      the key to this room.
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
	"UserId"     serial       NOT NULL,
	"Name"       varchar(255) NOT NULL,
	"SecondName" varchar(255) NOT NULL,
	"BDate"      DATE         NOT NULL,
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
	"UserId"   bigint       NOT NULL,
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
	"FilmId"   serial NOT NULL,
	"GenreId"  bigint NOT NULL,
	"FilmName" varchar(255) NOT NULL UNIQUE,
	"Price"    int,
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
	"UserId" int NOT NULL,
	"FilmId" int NOT NULL,
	CONSTRAINT "BoughtFilms_pk" PRIMARY KEY ("UserId","FilmId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table FavouriteGanres
  *
  */
CREATE TABLE "FavouriteGanres" (
	"UserId"   int NOT NULL,
	"GenresId" int NOT NULL
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table TransactDetails
  *
  */
CREATE TABLE "TransactDetails" (
	"UserId"        int    NOT NULL,
	"TypeId"        bigint NOT NULL,
	"DateofPayment" DATE   NOT NULL,
	"Amount"        int,
	"Number"        int    
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table Genres
  *
  */
CREATE TABLE "Genres" (
	"GenreId" serial       NOT NULL,
	"Genre"   varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "Genres_pk" PRIMARY KEY ("GenreId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table Filmdata
  *
  */
CREATE TABLE "Filmdata" (
	"FilmId"        int  NOT NULL,
	"Filmreference" path NOT NULL,
	"Filmimage"     path NOT NULL,
	CONSTRAINT "Filmdata_pk" PRIMARY KEY ("FilmId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table Reits
  *
  */
CREATE TABLE "Reits" (
	"FilmId"      int    NOT NULL,
	"NumofVoices" bigint NOT NULL,
	"Rait"        float8 NOT NULL,
	CONSTRAINT "Reits_pk" PRIMARY KEY ("FilmId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table Comments
  *
  */
CREATE TABLE "Comments" (
	"FilmId"  int          NOT NULL,
	"Comment" varchar(255) NOT NULL
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table TypesOfTransact
  *
  */
CREATE TABLE "TypesOfTransact" (
	"TypeId" bigint NOT NULL,
	"Type"   serial NOT NULL,
	CONSTRAINT "TypesOfTransact_pk" PRIMARY KEY ("TypeId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table TypesOfTransact
  *
  */
CREATE TABLE "RoomInformation" (
	"CreatorId" int          NOT NULL,
	"RoomKey"   varchar(255) NOT NULL
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Addind foreign keys
  *
  */
ALTER TABLE "BoughtFilms" ADD CONSTRAINT "BoughtFilms_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("UserId");

ALTER TABLE "BoughtFilms" ADD CONSTRAINT "BoughtFilms_fk1" FOREIGN KEY ("UserId") REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "RoomInformation" ADD CONSTRAINT "RoomInformation_fk0" FOREIGN KEY ("CreatorId") REFERENCES "User"("UserId");

ALTER TABLE "TransactDetails" ADD CONSTRAINT "TransactDetails_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("UserId");

ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("UserId");

ALTER TABLE "TypesOfTransact" ADD CONSTRAINT "TypesOfTransact_fk0" FOREIGN KEY ("TypeId") REFERENCES "TransactDetails"("TypeId");

ALTER TABLE "FavouriteGanres" ADD CONSTRAINT "FavouriteGanres_fk0" FOREIGN KEY ("UserId") REFERENCES "User"("UserId");

ALTER TABLE "FavouriteGanres" ADD CONSTRAINT "FavouriteGanres_fk1" FOREIGN KEY ("UserId") REFERENCES "Genres"("GenreId");

ALTER TABLE "Comments" ADD CONSTRAINT "Comments_fk1" FOREIGN KEY ("FilmId") REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "Reits" ADD CONSTRAINT "Reits_fk1" FOREIGN KEY ("FilmId") REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "FilmInfo" ADD CONSTRAINT "Genres_fk1" FOREIGN KEY ("GenreId") REFERENCES "Genres"("GenreId");

ALTER TABLE "Filmdata" ADD CONSTRAINT "Filmdata_fk1" FOREIGN KEY ("FilmId") REFERENCES "FilmInfo"("FilmId");
