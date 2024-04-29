-- On suit un modèle en étoile pour notre entrepôt de données.
-- Ici je crée mes tables dimensions et mes tables de faits.


-- Ici je crée ma table de dimension pour les dates, on y ajoute la donnée 'semestre'.
CREATE TABLE dim_temps (
    idTemps SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    annee INT NOT NULL,
    semestre INT NOT NULL,
    mois INT NOT NULL,
    jour INT NOT NULL
);

-- Ici je crée ma table de dimension pour les étudiants et les athlètes.
CREATE TABLE dim_etudiant_athlete (
    idEtudAthlete SERIAL PRIMARY KEY,
    nom VARCHAR(32),
    prenom VARCHAR(32),
    groupe VARCHAR(12) NULL, -- NULL pour les athlètes
    pays VARCHAR(32) NULL -- NULL pour les étudiants
);

-- Ici je crée ma table de dimension pour les disciplines.
CREATE TABLE dim_ressource_discipline (
    idRessourceDiscipline SERIAL PRIMARY KEY,
    nom VARCHAR(128),
    semestre INT NULL, -- NULL pour les disciplines athlétiques
    type VARCHAR(32) -- 'Académique' ou 'Athlétique'
);

-- Ici je crée ma table de dimension pour les enseignants.
CREATE TABLE dim_enseignant (
    idEns SERIAL PRIMARY KEY,
    nom VARCHAR(32),
    prenom VARCHAR(32),
    dept VARCHAR(32) NULL
);

-- Ici je crée mes tables de faits pour les notes.
CREATE TABLE fait_notes (
    idEtudAthlete INT,
    idTemps INT,
    idRessourceDiscipline INT,
    idEns INT,
    note FLOAT,
    FOREIGN KEY (idEtudAthlete) REFERENCES dim_etudiant_athlete(idEtudAthlete),
    FOREIGN KEY (idTemps) REFERENCES dim_temps(idTemps),
    FOREIGN KEY (idRessourceDiscipline) REFERENCES dim_ressource_discipline(idRessourceDiscipline),
    FOREIGN KEY (idEns) REFERENCES dim_enseignant(idEns)
);


-- Ici je crée mes tables de faits pour les performances athlétiques.
CREATE TABLE fait_performances_athletiques (
    idEtudAthlete INT,
    idTemps INT,
    idDiscipline INT,
    temps TIME,
    classement INT,
    FOREIGN KEY (idEtudAthlete) REFERENCES dim_etudiant_athlete(idEtudAthlete),
    FOREIGN KEY (idTemps) REFERENCES dim_temps(idTemps),
    FOREIGN KEY (idDiscipline) REFERENCES dim_ressource_discipline(idRessourceDiscipline)
);


-- ici quelques insertions pour tester

INSERT INTO dim_temps (date, annee, semestre, mois, jour)
VALUES
    ('2021-09-01', 2021, 1, 9, 1),
    ('2022-01-01', 2022, 1, 1, 1),
    ('2022-09-01', 2022, 2, 9, 1);


INSERT INTO dim_enseignant (nom, prenom, dept)
VALUES
    ('Rety', 'Jean-Hugues', 'INFO'),
    ('Lamolle', 'Myriam', 'INFO'),
    ('Homps', 'Marc', 'INFO'),
    ('Simonot', 'Marianne', 'INFO'),
    ('Ricordeau', 'Anne', 'INFO'),
    ('Georges', 'Rémi', 'INFO'),
    ('Delmas', 'Guylain', 'INFO'),
    ('Nauwynck', 'Nédra', 'INFO'),
    ('Bonnot', 'Philippe', 'INFO'),
    ('Clément-Comparot', 'Véronique', 'INFO'),
    ('Bossard', 'Aurélien', 'INFO'),
    ('Cataldi', 'Mario', 'INFO'),
    ('Golven', 'Amélie', 'INFO'),
    ('Ballay-Dally', 'Charlotte', 'QLIO'),
    ('Groff', 'Geoffrey', 'INFO'),
    ('Bellabes', 'Sihem', 'INFO'),
    ('Chebbi', 'Imen', NULL),
    ('Tobbelem', 'Jocelin', NULL),
    ('Mockel', 'Mehdi', NULL),
    ('Mourel', 'Frédéric', NULL),
    ('Nyzam', 'Valentin', NULL),
    ('Kamal', 'Rachida', NULL);


INSERT INTO dim_etudiant_athlete (nom, prenom, groupe, pays)
VALUES
    ('Turing', 'Michel', 'A1', NULL),
    ('Roning', 'Ada', 'A2', NULL),
    ('Barty', 'Charles', 'B1', NULL),
    ('Abdi', 'Bashir', 'A1', NULL);

INSERT INTO dim_etudiant_athlete (nom, prenom, groupe, pays)
VALUES
    ('Jacobs', 'Marcell', NULL, 'Italie'),
    ('Kerley', 'Fred', NULL, 'États-Unis'),
    ('Warholm', 'Karsten', NULL, 'Norvège'),
    ('Duplantis', 'Armand', NULL, 'Suède'),
    ('Thompson-Herah', 'Elaine', NULL, 'Jamaïque'),
    ('McLaughlin', 'Sydney', NULL, 'États-Unis'),
    ('Kipyegon', 'Faith', NULL, 'Kenya'),
    ('Dos Santos', 'Alison', NULL, 'Brésil'),
    ('Alison', 'Dos Santos', NULL, 'Brésil');


INSERT INTO dim_ressource_discipline (nom, semestre, type)
VALUES
    ('Initiation au développement', 1, 'Académique'),
    ('Développement d interfaces web', 1, 'Académique'),
    ('Exploitation d une base de données', 2, 'Académique');

INSERT INTO dim_ressource_discipline (nom, semestre, type)
VALUES
    ('100 mètres', NULL, 'Athlétique'),
    ('200 mètres', NULL, 'Athlétique'),
    ('400m haies', NULL, 'Athlétique');

-- Exemple d'insertion dans fait_notes
INSERT INTO fait_notes (idEtudAthlete, idTemps, idRessourceDiscipline, idEns, note)
VALUES
    (1, 1, 1, 1, 15.5),
    (2, 1, 2, 2, 14.0);

-- Exemple d'insertion dans fait_performances_athletiques
INSERT INTO fait_performances_athletiques (idEtudAthlete, idTemps, idDiscipline, temps, classement)
VALUES
    (8, 2, 3, '00:00:45.94', 1),
    (9, 3, 1, '00:00:09.80', 1);





