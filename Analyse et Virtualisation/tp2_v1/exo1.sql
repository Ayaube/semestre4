
-- On crée la base de données en suivant le modèle en étoile vu en cours

CREATE TABLE DimDate (
    DateKey SERIAL PRIMARY KEY,
    Date DATE NOT NULL,
    Day INT,
    Month INT,
    Year INT,
    Semester INT,
    Quarter INT,
    WeekDayName VARCHAR(10),
    IsWeekend BOOLEAN
);

CREATE TABLE DimEtudiant (
    EtudiantKey SERIAL PRIMARY KEY,
    IdEtud INT,
    Nom VARCHAR(32),
    Prenom VARCHAR(32),
    Groupe VARCHAR(12)
);

CREATE TABLE DimEnseignant (
    EnseignantKey SERIAL PRIMARY KEY,
    IdEns INT,
    Nom VARCHAR(32),
    Prenom VARCHAR(32),
    Dept VARCHAR(32)
);


CREATE TABLE DimRessource (
    RessourceKey SERIAL PRIMARY KEY,
    IdRes VARCHAR(8),
    Nom VARCHAR(128),
    Semestre INT,
    Coef FLOAT,
    EnseignantKey INT,
    FOREIGN KEY (EnseignantKey) REFERENCES DimEnseignant(EnseignantKey)
);


CREATE TABLE DimGroupe (
    GroupeKey SERIAL PRIMARY KEY,
    NomGroupe VARCHAR(12)
);

CREATE TABLE DimAthlete (
    AthleteKey SERIAL PRIMARY KEY,
    IdAthlete INT,
    Nom VARCHAR(32),
    Prenom VARCHAR(32),
    DateNaissance DATE,
    PaysKey INT,
    FOREIGN KEY (PaysKey) REFERENCES DimPays(PaysKey)
);

CREATE TABLE DimDiscipline (
    DisciplineKey SERIAL PRIMARY KEY,
    IdDiscipline INT,
    Nom VARCHAR(32),
    RecordMonde TIME
);


CREATE TABLE DimPays (
    PaysKey SERIAL PRIMARY KEY,
    Nom VARCHAR(32),
    Budget INT
);




CREATE TABLE FaitNotesEtudiants (
    NoteKey SERIAL PRIMARY KEY,
    EtudiantKey INT,
    RessourceKey INT,
    DateKey INT,
    Note FLOAT,
    FOREIGN KEY (EtudiantKey) REFERENCES DimEtudiant(EtudiantKey),
    FOREIGN KEY (RessourceKey) REFERENCES DimRessource(RessourceKey),
    FOREIGN KEY (DateKey) REFERENCES DimDate(DateKey)
);

CREATE TABLE FaitPerformancesAthletes (
    PerformanceKey SERIAL PRIMARY KEY,
    AthleteKey INT,
    DisciplineKey INT,
    DateKey INT,
    Temps TIME,
    Classement INT,
    Annee INT,
    FOREIGN KEY (AthleteKey) REFERENCES DimAthlete(AthleteKey),
    FOREIGN KEY (DisciplineKey) REFERENCES DimDiscipline(DisciplineKey),
    FOREIGN KEY (DateKey) REFERENCES DimDate(DateKey)
);



-- On ajoute les données dans les tables de dimension

    INSERT INTO DimEtudiant (IdEtud, Nom, Prenom, Groupe)
SELECT idetud, nom, prenom, groupe FROM iut.etudiant;

INSERT INTO DimEnseignant (IdEns, Nom, Prenom, Dept)
SELECT idEns, nom, prenom, dept FROM iut.enseignant;

INSERT INTO DimRessource (IdRes, Nom, Semestre, Coef, EnseignantKey)
SELECT idRes, nom, semestre, coef, e.EnseignantKey
FROM iut.ressource r
JOIN DimEnseignant e ON r.responsable = e.IdEns;

INSERT INTO DimAthlete (IdAthlete, Nom, Prenom, DateNaissance, PaysKey)
SELECT
    a.idAthlete,
    a.nom,
    a.prenom,
    a.dateNaissance,
    p.PaysKey
FROM athletisme.athlete a
JOIN DimPays p ON a.pays = p.Nom;


INSERT INTO DimDiscipline (IdDiscipline, Nom, RecordMonde)
SELECT
    idDiscipline,
    nom,
    recordMonde
FROM athletisme.discipline;


INSERT INTO DimPays (Nom, Budget)
SELECT
    nom,
    budget
FROM athletisme.pays;







-- Pour ajouter les notes

INSERT INTO FaitNotesEtudiants (EtudiantKey, RessourceKey, DateKey, Note)
SELECT
    e.EtudiantKey,
    r.RessourceKey,
    d.DateKey,
    n.note
FROM
    iut.notes n
JOIN
    DimEtudiant e ON n.idetud = e.IdEtud
JOIN
    DimRessource r ON n.idres = r.IdRes
JOIN
    DimDate d ON n.datenote = d.Date;

