
INSERT INTO client (nom, prenom, adresse, carte_bancaire) VALUES
('Dupont', 'Jean', '123 rue de Paris', 1234567890123456),
('Martin', 'Alice', '456 avenue des Champs', 2345678901234567),
('Durand', 'Sophie', '789 boulevard de la Liberté', 3456789012345678);


INSERT INTO parfum (id_parfum, nom, marque, taille, prix) VALUES
(1, 'Eau de Cologne', 'Chanel', 50, 70.00),
(2, 'Jasmine', 'Dior', 30, 85.50),
(3, 'Rose de Nuit', 'Guerlain', 100, 120.00);


INSERT INTO magasin (id_magasin, nom, ville, region) VALUES
(1, 'Parfumerie Centrale', 'Paris', 'Île-de-France'),
(2, 'Senteurs du Sud', 'Nice', 'Provence-Alpes-Côte d Azur'),
(3, 'L Arôme du Nord', 'Lille', 'Hauts-de-France');


INSERT INTO saison (nom) VALUES
('Printemps'),
('Été'),
('Automne'),
('Hiver');


INSERT INTO date (id_saison, jour, mois, annee) VALUES
(1, 15, 3, 2021),
(2, 21, 6, 2021),
(3, 10, 10, 2021),
(4, 5, 12, 2021);


INSERT INTO transaction (id_client, id_magasin, id_date, montant) VALUES
(1, 1, 1, 150.00),
(2, 2, 2, 85.50),
(3, 3, 3, 240.00);


INSERT INTO transaction_parfum (id_transaction, id_parfum, quantite, prix_unitaire) VALUES
(1, 1, 2, 70.00),
(1, 2, 1, 85.50),
(2, 3, 2, 120.00);
