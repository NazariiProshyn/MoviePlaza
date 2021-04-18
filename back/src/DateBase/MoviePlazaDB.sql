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
 *                      "Filmdata",     "Comments",
 *                      "FilmGanres"
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
 * "FilmGanres":        This table contains information about
 *                      film ganres.
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
	"FirstName"  varchar(255) NOT NULL,
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
	"UserId"    serial       NOT NULL,
	"Login"     varchar(255) NOT NULL UNIQUE,
	"Password"  varchar(255) NOT NULL,
	"userImage" varchar(255) NOT NULL,
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
CREATE TABLE "FavouriteGenres" (
	"UserId"   int NOT NULL,
	"GenresId" int NOT NULL,
	CONSTRAINT "FavouriteGenres_pk" PRIMARY KEY ("UserId","GenresId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table FilmGanres
  *
  */
CREATE TABLE "FilmGenres" (
	"FilmId"   int NOT NULL,
	"GenresId" int NOT NULL,
	CONSTRAINT "FilmGenres_pk" PRIMARY KEY ("FilmId","GenresId")
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
	"FilmId"        serial        NOT NULL,
	"Filmreference" varchar(255)  NOT NULL,
	"Filmimage"     varchar(255)  NOT NULL,
	"Dateofrelease" date,
	"Duration"      int,
	CONSTRAINT "Filmdata_pk" PRIMARY KEY ("FilmId")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Creating of table Reits
  *
  */
CREATE TABLE "Rating" (
	"FilmId"      serial NOT NULL,
	"NumofVoices" bigint NOT NULL,
	"Rate"        float8 NOT NULL,
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
	"Comment" varchar(255) NOT NULL,
	"UserId"  int          NOT NULL
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
	"RoomKey"   varchar(255) NOT NULL,
	"Film"      varchar(255),
	"Time"      int,
	CONSTRAINT "RoomInformation_pk" PRIMARY KEY ("RoomKey")
) WITH (
  OIDS = FALSE
);

 /*
  *BRIEF: Addind foreign keys
  *
  */
ALTER TABLE "BoughtFilms"     ADD CONSTRAINT "BoughtFilms_fk0"     FOREIGN KEY ("UserId")    REFERENCES "User"("UserId");

ALTER TABLE "BoughtFilms"     ADD CONSTRAINT "BoughtFilms_fk1"     FOREIGN KEY ("UserId")    REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "RoomInformation" ADD CONSTRAINT "RoomInformation_fk0" FOREIGN KEY ("CreatorId") REFERENCES "User"("UserId");

ALTER TABLE "TransactDetails" ADD CONSTRAINT "TransactDetails_fk0" FOREIGN KEY ("UserId")    REFERENCES "User"("UserId");

ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_fk0" FOREIGN KEY ("UserId")    REFERENCES "User"("UserId");

ALTER TABLE "TransactDetails" ADD CONSTRAINT "TypesOfTransact_fk0" FOREIGN KEY ("TypeId")    REFERENCES "TypesOfTransact"("TypeId");

ALTER TABLE "FavouriteGenres" ADD CONSTRAINT "FavouriteGenres_fk0" FOREIGN KEY ("UserId")    REFERENCES "User"("UserId");

ALTER TABLE "FavouriteGenres" ADD CONSTRAINT "FavouriteGenres_fk1" FOREIGN KEY ("GenresId")  REFERENCES "Genres"("GenreId");

ALTER TABLE "Comments"        ADD CONSTRAINT "Comments_fk1"        FOREIGN KEY ("FilmId")    REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "Rating"          ADD CONSTRAINT "Reits_fk1"           FOREIGN KEY ("FilmId")    REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "Filmdata"        ADD CONSTRAINT "Filmdata_fk1"        FOREIGN KEY ("FilmId")    REFERENCES "FilmInfo"("FilmId");
 
ALTER TABLE "FilmGenres"      ADD CONSTRAINT "FilmGenres_fk0"      FOREIGN KEY ("FilmId")    REFERENCES "FilmInfo"("FilmId");

ALTER TABLE "FilmGenres"      ADD CONSTRAINT "FilmGenres_fk1"      FOREIGN KEY ("GenresId")  REFERENCES "Genres"("GenreId");

ALTER TABLE "Comments"        ADD CONSTRAINT "Comments_fk2"        FOREIGN KEY ("UserId")    REFERENCES "User"("UserId");


 /*
 *
 * @brief: adding info in tables
 *
 */

SELECT * FROM "User"

/*
 * @brief: Insert in "User"
 */
INSERT INTO "User" ("FirstName", "SecondName", "BDate", "Money")
    VALUES ('Nazarii', 'Proshyn', '2001-10-05','100000');
	
INSERT INTO "User" ("FirstName", "SecondName", "BDate", "Money")
    VALUES ('Bogdan', 'Khersonskii', '2001-12-07','100000');
	
INSERT INTO "User" ("FirstName", "SecondName", "BDate", "Money")
    VALUES ('Dmytro', 'Ukrainets', '2001-07-07','100000');
	
INSERT INTO "User" ("FirstName", "SecondName", "BDate", "Money")
    VALUES ('Natzu', 'Dragnil', '777-07-07','77777');
	
INSERT INTO "User" ("FirstName", "SecondName", "BDate", "Money")
    VALUES ('Asta', 'KingOfMags', '1001-11-15','0');

SELECT * FROM "UserInformation"
/*
 * @brief: Insert in "UserInformation"
 */
INSERT INTO "UserInformation" ("Login", "Password", "userImage")
    VALUES ('nproshyn', 'qwerty1', 'user.png');
	
INSERT INTO "UserInformation" ("Login", "Password", "userImage")
    VALUES ('bkhersonskii', 'qwerty2', 'user.png');
	
INSERT INTO "UserInformation" ("Login", "Password", "userImage")
    VALUES ('dukrainets', 'qwerty3', 'user.png');
	
INSERT INTO "UserInformation" ("Login", "Password", "userImage")
    VALUES ('ndragnil', 'qwerty4', 'user.png');
	
INSERT INTO "UserInformation" ("Login", "Password", "userImage")
    VALUES ('akingofmags', 'qwerty5', 'user.png');
	
/*
 * @brief: Insert in "Genres"
 */
 INSERT INTO "Genres" ("Genre")
    VALUES ('Comedy');
	
/*
 * @brief: Insert in "FavouriteGenres"
 */
  INSERT INTO "FavouriteGenres" ("UserId","GenresId")
    VALUES (1,1),
	       (2,1),
		   (3,1),
		   (4,1),
		   (5,1);
	        
		   
/*
 * @brief: Insert in "FilmInfo"
 */	   
 
  INSERT INTO "FilmInfo" ("FilmName","Price","InformationAboutFilm")
    VALUES ('FilmName1',5.7,'Description-Lorem FilmName1 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
	       ('FilmName2',4  ,'Description-Lorem FilmName2 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName3',2.1,'Description-Lorem FilmName3 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName4',2.4,'Description-Lorem FilmName4 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName5',9.3,'Description-Lorem FilmName5 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName6',3.3,'Description-Lorem FilmName6 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName7',1.2,'Description-Lorem FilmName7 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName8',0.1,'Description-Lorem FilmName8 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName9',0  ,'Description-Lorem FilmName9 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.'),
		   ('FilmName10',7.7,'Description-Lorem FilmName10 ipsum dolor sit amet,tempor incididunt ut labore et dolore magna aliqua.');
		   
  INSERT INTO "Filmdata"("Filmreference", "Filmimage", "Dateofrelease", "Duration")
  	VALUES   ('FilmName1', 'film.png','2001-07-02', 25),
	         ('FilmName2', 'film.png','2002-07-02', 125),
			 ('FilmName3', 'film.png','2001-04-02', 45),
			 ('FilmName4', 'film.png','2001-07-03', 20),
			 ('FilmName5', 'film.png','2005-04-01', 80),
			 ('FilmName6', 'film.png','1999-04-03', 120),
			 ('FilmName7', 'film.png','1975-10-10', 141),
			 ('FilmName8', 'film.png','2021-04-12', 321),
			 ('FilmName9', 'film.png','2020-12-12', 12),
			 ('FilmName10', 'film.png','2017-05-02', 15);
		   
   INSERT INTO "Rating"("NumofVoices","Rate")
     VALUES    (10,3.3),
	           (42,4.2),
			   (1,5),
			   (23,3.3),
			   (100,3.3),
			   (19,3.3),
			   (35,3.3),
			   (21,3.3),
			   (7,3.3),
			   (52,3.3);
			  
   INSERT INTO "Comments"("FilmId","Comment","UserId")
      VALUES   (1, 'good1', 1),  (1, 'norm1', 9), (1, 'bored1', 2),
	           (2, 'good2', 4),  (2, 'norm2', 6), (2, 'bored2', 2),
			   (3, 'good3', 7),  (3, 'norm3', 3), (3, 'bored3', 5),
			   (4, 'good4', 3),  (4, 'norm4', 4), (4, 'bored4', 6),
			   (5, 'good5', 2),  (5, 'norm5', 6), (5, 'bored5', 8),
			   (6, 'good6', 1),  (6, 'norm6', 6), (6, 'bored6', 4),
			   (7, 'good7', 3),  (7, 'norm7', 7), (7, 'bored7', 2),
			   (8, 'good8', 6),  (8, 'norm8', 3), (8, 'bored8', 7),
			   (9, 'good9', 4),  (9, 'norm9', 2), (9, 'bored9', 6),
			   (10,'good10',3),  (10,'norm10',4), (10,'bored1', 6);
			   
   