-- On suit un modèle en constellation, avec une table de faits pour les notes et une autre pour les performances athlétiques

-- Préparation de l'environnement
DROP SCHEMA IF EXISTS dw CASCADE;
CREATE SCHEMA dw;

SET search_path TO dw, public;

-- Table de dimension Temps
CREATE TABLE dw.dim_temps (
    idTemps SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    annee INT NOT NULL,
    semestre INT REFERENCES dw.dim_semestre(idSemestre),
    mois INT NOT NULL,
    jour INT NOT NULL
);

-- Table dimension Personne
CREATE TABLE dw.dim_personne (
    idPersonne SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    dateNaissance DATE NOT NULL,
    idGroupe INT,
    idPays VARCHAR(50),
    FOREIGN KEY (idGroupe) REFERENCES dw.dim_groupe(idGroupe),
    FOREIGN KEY (idPays) REFERENCES dw.dim_pays(nom)
);

-- Table dimension Groupe
CREATE TABLE dw.dim_groupe (
    idGroupe SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);

-- Table dimension Pays
CREATE TABLE dw.dim_pays (
    nom VARCHAR(50) PRIMARY KEY,
    budget INT
);

-- Table dimension Semestre
CREATE TABLE dw.dim_semestre (
    idSemestre SERIAL PRIMARY KEY,
    semestre INT NOT NULL
);

-- Table dimension Discipline
CREATE TABLE dw.dim_discipline (
    idDiscipline SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    recordMonde TIME,
    type VARCHAR(50) -- 'Course', 'Lancer', 'Saut', etc.
);

-- Table dimension Ressource
CREATE TABLE dw.dim_ressource (
    idRessource SERIAL PRIMARY KEY,
    nom VARCHAR(128) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'Académique' ou 'Athlétique'
    idSemestre INT,
    FOREIGN KEY (idSemestre) REFERENCES dw.dim_semestre(idSemestre)
);

-- Table de faits Notes
CREATE TABLE dw.fait_notes (
    idNote SERIAL,
    idPersonne INT NOT NULL,
    idTemps INT NOT NULL,
    idRessource INT NOT NULL,
    note FLOAT,
    PRIMARY KEY (idPersonne, idTemps, idRessource),
    FOREIGN KEY (idPersonne) REFERENCES dw.dim_personne(idPersonne),
    FOREIGN KEY (idTemps) REFERENCES dw.dim_temps(idTemps),
    FOREIGN KEY (idRessource) REFERENCES dw.dim_ressource(idRessource)
);

-- Table de faits Performances Athlétiques
CREATE TABLE dw.fait_performances_athletiques (
    idPerformance SERIAL,
    idPersonne INT NOT NULL,
    idTemps INT NOT NULL,
    idDiscipline INT NOT NULL,
    performance TIME, -- Temps réalisé ou distance, selon le type de discipline
    classement INT,
    PRIMARY KEY (idPersonne, idTemps, idDiscipline),
    FOREIGN KEY (idPersonne) REFERENCES dw.dim_personne(idPersonne),
    FOREIGN KEY (idTemps) REFERENCES dw.dim_temps(idTemps),
    FOREIGN KEY (idDiscipline) REFERENCES dw.dim_discipline(idDiscipline) -- Clé étrangère mise à jour
);
