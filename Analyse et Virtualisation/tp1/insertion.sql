
INSERT INTO region (nom) VALUES ('Île-de-France'), ('Auvergne-Rhône-Alpes'), ('Nouvelle-Aquitaine');


INSERT INTO ville (nom, id_region) VALUES ('Paris', 1), ('Lyon', 2), ('Bordeaux', 3);


INSERT INTO couleur (nom) VALUES ('Rouge'), ('Bleu'), ('Vert');


INSERT INTO marque (nom) VALUES ('Chanel'), ('Dior'), ('Guerlain');


INSERT INTO client (nom, prenom, adresse, carte_bancaire) VALUES
('Dupont', 'Jean', '123 rue de Paris, Paris', 1234567890123456),
('Durand', 'Marie', '456 rue de Lyon, Lyon', 6543210987654321);


INSERT INTO magasin (nom, id_ville, adresse) VALUES
('Boutique Paris', 1, '789 rue de Paris'),
('Boutique Lyon', 2, '321 rue de Lyon');


INSERT INTO parfum (nom, id_marque, id_couleur, taille, prix) VALUES
('Eau de Vie', 1, 1, 50, 75.00),
('Aqua Fresca', 2, 2, 75, 60.00);


INSERT INTO saison (nom) VALUES ('Été'), ('Hiver'), ('Printemps'), ('Automne');


INSERT INTO date (jour, mois, annee, id_saison) VALUES
(1, 1, 2023, 2),
(15, 6, 2023, 1);


INSERT INTO transaction (id_client, id_magasin, id_date, montant) VALUES
(1, 1, 1, 150.00), -- Dupont achète à Paris le 1 Janvier
(2, 2, 2, 120.00); -- Marie achète à Lyon le 15 Juin


INSERT INTO transaction_parfum (id_transaction, id_parfum, quantite, prix_unitaire) VALUES
(1, 1, 2, 75.00), -- Dupont achète 2 "Eau de Vie" à 75€ l'unité
(2, 2, 2, 60.00); -- Marie achète 2 "Aqua Fresca" à 60€ l'unité
