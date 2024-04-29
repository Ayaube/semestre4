-- Cette table stocke les différents genres de films.

CREATE TABLE DimGenre (
    idGenre SERIAL PRIMARY KEY,
    genre VARCHAR(255) NOT NULL
);

-- Cette table stocke les différentes années de sortie des films.

CREATE TABLE DimAnnee (
    idAnnee SERIAL PRIMARY KEY,
    annee INT NOT NULL
);

-- Cette table stocke les faits concernant les films.
-- Elle relie les films à leur genre et à leur année de sortie grace aux tables DimGenre et DimAnnee.

CREATE TABLE FaitsFilms (
    idFilm INT PRIMARY KEY,
    idGenre INT,
    idAnnee INT,
    FOREIGN KEY (idGenre) REFERENCES DimGenre(idGenre),
    FOREIGN KEY (idAnnee) REFERENCES DimAnnee(idAnnee)
);

-- Cette requête permet de récupérer le nombre de films par genre et par année.

SELECT
    g.genre,
    a.annee,
    COUNT(f.idFilm) AS nbr_de_films
FROM
    FaitsFilms f
JOIN
    DimGenre g ON f.idGenre = g.idGenre
JOIN
    DimAnnee a ON f.idAnnee = a.idAnnee
GROUP BY
    g.genre, a.annee
ORDER BY
    a.annee DESC, g.genre;

