/*
 * SCRIPT: "iut.js"
 * AUTEUR: Théo SZANTO
 * DATE: 26/03/2020
 * MODELE: Script "iut2019.sql" par Myriam LAMOLLE
 */

// Récupération de la base de données "iut"
db = db.getSiblingDB("iut");

// Nettoyage des collections
db.departement.drop();
db.personnel.drop();
db.enseignant.drop();
db.etudiant.drop();
db.module.drop();

// Insertion des départements
db.departement.insertMany([
	{"_id":"INFO","titre":"Informatique"},
	{"_id":"QLIO","titre":"Qualité, Logistique Industrielle et Organisation"},
	{"_id":"INFOCOM","titre":"Information et Communication"},
	{"_id":"GACO","titre":"Gestion des Administrations et Commerce"}
]);

// Insertion du personnel
db.personnel.insertMany([
	{"_id":1,"nom":"Boulanger","prenom":"Max","fonction":"Directeur"},
	{"_id":2,"nom":"Flauraud","prenom":"Khamphou","fonction":"Responsable d'administration"},
	{"_id":3,"nom":"Hassoun","prenom":"Abdallah","fonction":"Responsable CCRI"},
	{"_id":4,"nom":"Filoche","prenom":"Eddy","fonction":"Responsable HygiÃ¨ne et Sécurité"},
	{"_id":30,"nom":"Kamal","prenom":"Rachida","fonction":"Chargé de mission"},
	{"_id":6,"nom":"Bayoud","prenom":"Khadija","fonction":"Secrétaire Informatique","dept":"INFO"},
	{"_id":7,"nom":"Lamolle","prenom":"Myriam","fonction":"Cheffe de département","dept":"INFO"},
	{"_id":200,"nom":"Dafaoui","prenom":"El Mouloudi","fonction":"Chef de département","dept":"QLIO"},
	{"_id":300,"nom":"Baboulall","prenom":"Marielle","fonction":"Cheffe de département","dept":"GACO"},
	{"_id":400,"nom":"Kaiser","prenom":"Marc","fonction":"Chef de département","dept":"INFOCOM"},
	{"_id":15,"nom":"Bonnot","prenom":"Philippe","fonction":"Directreur des études 1A","dept":"INFO"},
	{"_id":10,"nom":"Ricordeau","prenom":"Anne","fonction":"Responsable Apprentissage DUT","dept":"INFO"},
	{"_id":11,"nom":"Georges","prenom":"Rémi","fonction":"Responsable stage","dept":"INFO"},
	{"_id":19,"nom":"Cataldi","prenom":"Mario","fonction":"Responsable licence prof. CIM","dept":"INFO"},
	{"_id":5,"nom":"Rety","prenom":"Jean-Hugues","fonction":"Responsable licence prof. CSID","dept":"INFO"},
	{"_id":14,"nom":"Emonides","prenom":"Mireille","fonction":"Responsable Contrat Apprentissage","dept":"INFO"},
]);

// Insertion des enseignants
db.enseignant.insertMany([
	{"_id":5,"nom":"Rety","prenom":"Jean-Hugues","titulaire":true,"dept":"INFO"},
	{"_id":7,"nom":"Lamolle","prenom":"Myriam","titulaire":true,"dept":"INFO"},
	{"_id":8,"nom":"Homps","prenom":"Marc","titulaire":true,"dept":"INFO"},
	{"_id":9,"nom":"Simonot","prenom":"Marianne","titulaire":true,"dept":"INFO"},
	{"_id":10,"nom":"Ricordeau","prenom":"Anne","titulaire":true,"dept":"INFO"},
	{"_id":11,"nom":"Georges","prenom":"Rémi","titulaire":true,"dept":"INFO"},
	{"_id":12,"nom":"Delmas","prenom":"Guylain","titulaire":true,"dept":"INFO"},
	{"_id":13,"nom":"Nauwynck","prenom":"Nédra","titulaire":true,"dept":"INFO"},
	{"_id":15,"nom":"Bonnot","prenom":"Philippe","titulaire":true,"dept":"INFO"},
	{"_id":16,"nom":"Clément-Comparot","prenom":"Véronique","titulaire":true,"dept":"INFO"},
	{"_id":17,"nom":"Le Duc","prenom":"Chan","titulaire":true,"dept":"INFO"},
	{"_id":18,"nom":"Bossard","prenom":"Aurélien","titulaire":true,"dept":"INFO"},
	{"_id":19,"nom":"Cataldi","prenom":"Mario","titulaire":true,"dept":"INFO"},
	{"_id":20,"nom":"Golven","prenom":"Amélie","titulaire":true,"dept":"INFO"},
	{"_id":21,"nom":"Ballay-Dally","prenom":"Charlotte","titulaire":true,"dept":"QLIO"},
	{"_id":23,"nom":"Groff","prenom":"Geoffrey","titulaire":true,"dept":"INFO"},
	{"_id":22,"nom":"Chebbi","prenom":"Imen","titulaire":false},
	{"_id":24,"nom":"Tobbelem","prenom":"Jocelin","titulaire":false},
	{"_id":25,"nom":"Mockel","prenom":"Mehdi","titulaire":false},
	{"_id":26,"nom":"Mourel","prenom":"Frédéric","titulaire":false},
	{"_id":27,"nom":"Nyzam","prenom":"Valentin","titulaire":false},
	{"_id":30,"nom":"Kamal","prenom":"Rachida","titulaire":false},
]);

// Insertion des étudiants
db.etudiant.insertMany([
	{"nom":"Charles","prenom":"Glenn","classe":"S3"},
	{"nom":"Barton","prenom":"Sellers","classe":"S1"},
	{"nom":"Marion","prenom":"Contreras","classe":"S2"},
	{"nom":"Pearson","prenom":"Santos","classe":"S1"},
	{"nom":"Bradshaw","prenom":"Kennedy","classe":"S3"},
	{"nom":"Carissa","prenom":"Garcia","classe":"S4"},
	{"nom":"Rosalind","prenom":"Lawrence","classe":"S1"},
	{"nom":"Finch","prenom":"Wooten","classe":"S4"},
	{"nom":"Trudy","prenom":"Pace","classe":"S3"},
	{"nom":"Vinson","prenom":"Ayers","classe":"S2"},
	{"nom":"Keith","prenom":"Booker","classe":"S1"},
	{"nom":"Petty","prenom":"Brewer","classe":"S1"},
	{"nom":"Lowery","prenom":"Gordon","classe":"S3"},
	{"nom":"Kayla","prenom":"Rogers","classe":"S1"},
	{"nom":"Jessica","prenom":"Joyce","classe":"S2"},
	{"nom":"Burt","prenom":"Foster","classe":"S3"},
	{"nom":"Chen","prenom":"Reilly","classe":"S3"},
	{"nom":"Mclean","prenom":"Ortega","classe":"S1"},
	{"nom":"Whitney","prenom":"Best","classe":"S4"},
	{"nom":"Olivia","prenom":"Steele","classe":"S4"},
	{"nom":"Caldwell","prenom":"Dunn","classe":"S3"},
	{"nom":"Marietta","prenom":"Francis","classe":"S2"},
	{"nom":"Stokes","prenom":"Valdez","classe":"S1"},
	{"nom":"Swanson","prenom":"Langley","classe":"S2"},
	{"nom":"Boyd","prenom":"Wilcox","classe":"S3"},
	{"nom":"Selma","prenom":"Klein","classe":"S2"},
	{"nom":"Vonda","prenom":"Cole","classe":"S4"},
	{"nom":"Sweeney","prenom":"Guy","classe":"S3"},
	{"nom":"Pennington","prenom":"Tyson","classe":"S1"},
	{"nom":"Katharine","prenom":"Gutierrez","classe":"S2"},
	{"nom":"Tammy","prenom":"Burks","classe":"S1"},
	{"nom":"Sawyer","prenom":"Mckinney","classe":"S4"},
	{"nom":"Goodman","prenom":"Velazquez","classe":"S2"},
	{"nom":"Hubbard","prenom":"Donovan","classe":"S1"},
	{"nom":"Brenda","prenom":"Benson","classe":"S3"},
	{"nom":"Barbra","prenom":"Spencer","classe":"S1"}
]);

// Insertion des modules
// Attribution des responsables des modules via leur _id.
db.module.insertMany([
	// M11xx
	{"_id":"M1101","intitule":"Introduction aux systÃ¨mes informatiques","classe":"S1","coef":3.5,"ens":12},
	{"_id":"M1102","intitule":"Introduction Ã  l'algorithmique et Ã  la programmation","classe":"S1","coef":3.5,"ens":5},
	{"_id":"M1103","intitule":"Structures de données et algorithmes fondamentaux","classe":"S1","coef":2.5,"ens":5},
	{"_id":"M1104","intitule":"Introduction aux bases de données","classe":"S1","coef":3.5,"ens":7},
	{"_id":"M1105","intitule":"Conception de documents et d'interfaces numériques","classe":"S1","coef":2.5,"ens":5},
	{"_id":"M1106","intitule":"Projet Tutoré - Découverte","classe":"S1","coef":1.5,"ens":5},
	
	// M12xx
	{"_id":"M1201","intitule":"Mathématiques discrÃ¨tes","classe":"S1","coef":2.5,"ens":8},
	{"_id":"M1202","intitule":"AlgÃ¨bre linéaire","classe":"S1","coef":2.0,"ens":15},
	{"_id":"M1203","intitule":"Environnement économique","classe":"S1","coef":1.5,"ens":16},
	{"_id":"M1204","intitule":"Fonctionnement des organisations","classe":"S1","coef":2.5,"ens":15},
	{"_id":"M1205","intitule":"Expression communication - Fondamentaux de la communication","classe":"S1","coef":2.0,"ens":20},
	{"_id":"M1206","intitule":"Anglais et Informatique","classe":"S1","coef":1.5,"ens":20},
	{"_id":"M1207","intitule":"PPP - ConnaÃ®tre le monde professionnel","classe":"S1","coef":1.0,"ens":20},
	
	// M21xx
	{"_id":"M2101","intitule":"Architecture et programmation des mécanismes de base d'un systÃ¨me informatique","classe":"S2","coef":1.5,"ens":17},
	{"_id":"M2102","intitule":"Architecture des réseaux","classe":"S2","coef":1.5,"ens":12},
	{"_id":"M2103","intitule":"Base de la programmation orientée objet","classe":"S2","coef":3.5,"ens":5},
	{"_id":"M2104","intitule":"Base de la conception orientée objet","classe":"S2","coef":2.5,"ens":9},
	{"_id":"M2105","intitule":"Introduction aux interfaces Homme-Machine (IHM)","classe":"S2","coef":2.5,"ens":5},
	{"_id":"M2106","intitule":"Programmation et administration des bases de données","classe":"S2","coef":2.5,"ens":7},
	{"_id":"M2107","intitule":"Projet tutoré - Description et planification de projet","classe":"S2","coef":2.0,"ens":11},
	
	// M22xx
	{"_id":"M2201","intitule":"Graphes et langages","classe":"S2","coef":2.5,"ens":8},
	{"_id":"M2202","intitule":"Anlyse et méthodes numériques","classe":"S2","coef":2.0,"ens":15},
	{"_id":"M2203","intitule":"Environnement comptable, financier, juridique et social","classe":"S2","coef":3.0,"ens":16},
	{"_id":"M2204","intitule":"Gestion de projet informatique","classe":"S2","coef":1.5,"ens":11},
	{"_id":"M2205","intitule":"Expression-Communication - Communication, information et argumentation","classe":"S2","coef":1.5,"ens":20},
	{"_id":"M2206","intitule":"Communiquer en anglais","classe":"S2","coef":2.5,"ens":20},
	{"_id":"M2207","intitule":"PPP - Identifier ses compétences","classe":"S2","coef":1.0,"ens":20},
	
	// M31xx
	{"_id":"M3101","intitule":"Principe des systÃ¨mes d'exploitation","classe":"S3","coef":2.5,"ens":17},
	{"_id":"M3102","intitule":"Services réseaux","classe":"S3","coef":1.5,"ens":13},
	{"_id":"M3103","intitule":"Algorithmique avancée","classe":"S3","coef":1.5,"ens":5},
	{"_id":"M3104","intitule":"Programmation Web cÃ´té serveur","classe":"S3","coef":2.5,"ens":18},
	{"_id":"M3105","intitule":"Conception et programmation objet avancées","classe":"S3","coef":2.5,"ens":9},
	{"_id":"M3106C","intitule":"Bases de données avancées","classe":"S3","coef":1.5,"ens":7},
	
	// M32xx
	{"_id":"M3201","intitule":"Probabilités et statistiques","classe":"S3","coef":2.5,"ens":8},
	{"_id":"M3202C","intitule":"Modélisations mathématiques","classe":"S3","coef":1.5,"ens":10},
	{"_id":"M3203","intitule":"Droit des technologies de l'information et de la communication (TIC)","classe":"S3","coef":1.5,"ens":16},
	{"_id":"M3204","intitule":"Gestion des systÃ¨mes d'information","classe":"S3","coef":2.5,"ens":7},
	{"_id":"M3205","intitule":"Expression-Communication - Communication, professionnelle","classe":"S3","coef":1.5,"ens":20},
	{"_id":"M3206","intitule":"Collaborer en anglais","classe":"S3","coef":2.5,"ens":20},
	
	// M33xx
	{"_id":"M3301","intitule":"Méthodologies de la production d'applications","classe":"S3","coef":3.0,"ens":11},
	{"_id":"M3302","intitule":"Projet tutoré - Mise en situation professionnelle","classe":"S3","coef":2.0,"ens":11},
	{"_id":"M3303","intitule":"PPP - Préciser son projet","classe":"S3","coef":1.0,"ens":20},
	
	// M41xx (optionnel)
	{"_id":"M4101","intitule":"XML","classe":"S4","coef":2.0,"ens":7}
]);

// Sélection aléatoire de 12 interrogations par attribution d'un coefficient (entre 0.5 et 3.5, de 0.5 et 0.5) et d'un module
var interList = [];
db.module.aggregate({ // Appliquer une fonction d'aggregation Ã  la collection
	$sample: { // Cette fonction retourne "size" éléments aléatoires depuis la collection
		size: 12
	}
}).forEach(m => { // Application d'une fonction Ã  chaque éléments choisi
	interList.push({ // Ajout de l'interro Ã  la liste
		"module": m._id,
		"coef": (Math.trunc(Math.random() * 7) + 1) * 0.5 // Choix du coefficient
	});
});

// Ajout d'un nombre aléatoire de notes (entre 7 et 10), elles-mÃªmes randomisées (entre 0 et 20, deux décimales) aux étudiants pour les interro sélectionnés
db.etudiant.find().forEach(etud => {
	var inter = interList.slice(); // Copie de la liste des tests
	var notes = [];
	// Choix du nombre de d'interro
	var nb = 10 - Math.random() * 4;
	for (var i = 0; i < nb; i++)
		// Extraction d'une interro de la liste et génération d'une note
		notes.push({
			"inter": inter.splice(Math.trunc(Math.random() * inter.length), 1)[0],
			"note": gaussianRandom(0, 2001, 3) / 100
		});
	
	// Mise Ã  jour de l'étudiant pour ajouter ses notes
	db.etudiant.updateOne(etud, {
		"$set": { // Défini la valeur du champ "notes" si il existe déjÃ  ou le crée dans le cas contraire
			"notes": notes
		}
	});
});

// GénÃ¨re un nombre aléatoire selon une courbe de Gauss, entre min et max avec un coefficient de Gauss g
function gaussianRandom(min, max, g) {
	var r = 0;
	for (var i = 0; i < g; i++)
		r += Math.random();
	return Math.trunc((r / g) * (max - min + 1));
}

