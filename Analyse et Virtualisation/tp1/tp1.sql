

CREATE TABLE client (
    id_client SERIAL PRIMARY KEY,
    nom VARCHAR,
    prenom VARCHAR NOT NULL,
    adresse VARCHAR NOT NULL,
    carte_bancaire BIGINT
);

CREATE TABLE parfum (
    id_parfum int PRIMARY KEY,
    nom VARCHAR,
    marque VARCHAR,
    taille INT,
    prix DECIMAL
);

CREATE TABLE magasin (
    id_magasin INT PRIMARY KEY,
    nom VARCHAR,
    ville VARCHAR,
    region VARCHAR
);

CREATE TABLE saison (
    id_saison SERIAL PRIMARY KEY,
    nom VARCHAR
);

CREATE TABLE date (
    id_date SERIAL PRIMARY KEY,
    id_saison INT references saison(id_saison),
    jour INT CHECK ( 0 < jour AND jour < 32 ),
    mois INT check ( 0 < mois AND mois < 13),
    annee INT check ( 2019 < annee AND annee < 2030)
);
CREATE TABLE transaction (
    id SERIAL PRIMARY KEY,
    id_client INT references client(id_client),
    id_magasin INT references magasin(id_magasin),
    id_date INT references date(id_date),
    montant DECIMAL
);

CREATE TABLE transaction_parfum (
    id_transaction INT,
    id_parfum INT,
    quantite INT,
    prix_unitaire DECIMAL,
    PRIMARY KEY (id_transaction, id_parfum),
    FOREIGN KEY (id_transaction) REFERENCES transaction (id),
    FOREIGN KEY (id_parfum) REFERENCES parfum (id_parfum)
);




