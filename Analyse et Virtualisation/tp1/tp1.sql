CREATE TABLE region (
    id_region SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL
);

CREATE TABLE ville (
    id_ville SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL,
    id_region INT REFERENCES region(id_region)
);

CREATE TABLE couleur (
    id_couleur SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL
);

CREATE TABLE marque (
    id_marque SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL
);

CREATE TABLE client (
    id_client SERIAL PRIMARY KEY,
    nom VARCHAR,
    prenom VARCHAR NOT NULL,
    adresse VARCHAR NOT NULL,
    carte_bancaire BIGINT
);

CREATE TABLE magasin (
    id_magasin SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL,
    id_ville INT REFERENCES ville(id_ville),
    adresse VARCHAR NOT NULL
);

CREATE TABLE parfum (
    id_parfum SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL,
    id_marque INT REFERENCES marque(id_marque),
    id_couleur INT REFERENCES couleur(id_couleur),
    taille INT,
    prix DECIMAL NOT NULL
);

CREATE TABLE saison (
    id_saison SERIAL PRIMARY KEY,
    nom VARCHAR NOT NULL
);

CREATE TABLE date (
    id_date SERIAL PRIMARY KEY,
    jour INT CHECK (jour > 0 AND jour <= 31),
    mois INT CHECK (mois > 0 AND mois <= 12),
    annee INT CHECK (annee > 2019 AND annee < 2030),
    id_saison INT REFERENCES saison(id_saison)
);

CREATE TABLE transaction (
    id_transaction SERIAL PRIMARY KEY,
    id_client INT REFERENCES client(id_client),
    id_magasin INT REFERENCES magasin(id_magasin),
    id_date INT REFERENCES date(id_date),
    montant DECIMAL NOT NULL
);

CREATE TABLE transaction_parfum (
    id_transaction INT REFERENCES transaction(id_transaction),
    id_parfum INT REFERENCES parfum(id_parfum),
    quantite INT CHECK (quantite > 0),
    prix_unitaire DECIMAL NOT NULL,
    PRIMARY KEY (id_transaction, id_parfum)
);
