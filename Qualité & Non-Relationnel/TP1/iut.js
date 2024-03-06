/*
 * SCRIPT: "iut.js"
 * AUTEUR: Th�o SZANTO
 * DATE: 26/03/2020
 * MODELE: Script "iut2019.sql" par Myriam LAMOLLE
 */

// R�cup�ration de la base de donn�es "iut"
db = db.getSiblingDB("iut");

// Nettoyage des collections
db.departement.drop();
db.personnel.drop();
db.enseignant.drop();
db.etudiant.drop();
db.module.drop();

// Insertion des d�partements
db.departement.insertMany([
	{"_id":"INFO","titre":"Informatique"},
	{"_id":"QLIO","titre":"Qualit�, Logistique Industrielle et Organisation"},
	{"_id":"INFOCOM","titre":"Information et Communication"},
	{"_id":"GACO","titre":"Gestion des Administrations et Commerce"}
]);

// Insertion du personnel
db.personnel.insertMany([
	{"_id":1,"nom":"Boulanger","prenom":"Max","fonction":"Directeur"},
	{"_id":2,"nom":"Flauraud","prenom":"Khamphou","fonction":"Responsable d'administration"},
	{"_id":3,"nom":"Hassoun","prenom":"Abdallah","fonction":"Responsable CCRI"},
	{"_id":4,"nom":"Filoche","prenom":"Eddy","fonction":"Responsable Hygiène et S�curit�"},
	{"_id":30,"nom":"Kamal","prenom":"Rachida","fonction":"Charg� de mission"},
	{"_id":6,"nom":"Bayoud","prenom":"Khadija","fonction":"Secr�taire Informatique","dept":"INFO"},
	{"_id":7,"nom":"Lamolle","prenom":"Myriam","fonction":"Cheffe de d�partement","dept":"INFO"},
	{"_id":200,"nom":"Dafaoui","prenom":"El Mouloudi","fonction":"Chef de d�partement","dept":"QLIO"},
	{"_id":300,"nom":"Baboulall","prenom":"Marielle","fonction":"Cheffe de d�partement","dept":"GACO"},
	{"_id":400,"nom":"Kaiser","prenom":"Marc","fonction":"Chef de d�partement","dept":"INFOCOM"},
	{"_id":15,"nom":"Bonnot","prenom":"Philippe","fonction":"Directreur des �tudes 1A","dept":"INFO"},
	{"_id":10,"nom":"Ricordeau","prenom":"Anne","fonction":"Responsable Apprentissage DUT","dept":"INFO"},
	{"_id":11,"nom":"Georges","prenom":"R�mi","fonction":"Responsable stage","dept":"INFO"},
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
	{"_id":11,"nom":"Georges","prenom":"R�mi","titulaire":true,"dept":"INFO"},
	{"_id":12,"nom":"Delmas","prenom":"Guylain","titulaire":true,"dept":"INFO"},
	{"_id":13,"nom":"Nauwynck","prenom":"N�dra","titulaire":true,"dept":"INFO"},
	{"_id":15,"nom":"Bonnot","prenom":"Philippe","titulaire":true,"dept":"INFO"},
	{"_id":16,"nom":"Cl�ment-Comparot","prenom":"V�ronique","titulaire":true,"dept":"INFO"},
	{"_id":17,"nom":"Le Duc","prenom":"Chan","titulaire":true,"dept":"INFO"},
	{"_id":18,"nom":"Bossard","prenom":"Aur�lien","titulaire":true,"dept":"INFO"},
	{"_id":19,"nom":"Cataldi","prenom":"Mario","titulaire":true,"dept":"INFO"},
	{"_id":20,"nom":"Golven","prenom":"Am�lie","titulaire":true,"dept":"INFO"},
	{"_id":21,"nom":"Ballay-Dally","prenom":"Charlotte","titulaire":true,"dept":"QLIO"},
	{"_id":23,"nom":"Groff","prenom":"Geoffrey","titulaire":true,"dept":"INFO"},
	{"_id":22,"nom":"Chebbi","prenom":"Imen","titulaire":false},
	{"_id":24,"nom":"Tobbelem","prenom":"Jocelin","titulaire":false},
	{"_id":25,"nom":"Mockel","prenom":"Mehdi","titulaire":false},
	{"_id":26,"nom":"Mourel","prenom":"Fr�d�ric","titulaire":false},
	{"_id":27,"nom":"Nyzam","prenom":"Valentin","titulaire":false},
	{"_id":30,"nom":"Kamal","prenom":"Rachida","titulaire":false},
]);

// Insertion des �tudiants
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
	{"_id":"M1101","intitule":"Introduction aux systèmes informatiques","classe":"S1","coef":3.5,"ens":12},
	{"_id":"M1102","intitule":"Introduction à l'algorithmique et à la programmation","classe":"S1","coef":3.5,"ens":5},
	{"_id":"M1103","intitule":"Structures de donn�es et algorithmes fondamentaux","classe":"S1","coef":2.5,"ens":5},
	{"_id":"M1104","intitule":"Introduction aux bases de donn�es","classe":"S1","coef":3.5,"ens":7},
	{"_id":"M1105","intitule":"Conception de documents et d'interfaces num�riques","classe":"S1","coef":2.5,"ens":5},
	{"_id":"M1106","intitule":"Projet Tutor� - D�couverte","classe":"S1","coef":1.5,"ens":5},
	
	// M12xx
	{"_id":"M1201","intitule":"Math�matiques discrètes","classe":"S1","coef":2.5,"ens":8},
	{"_id":"M1202","intitule":"Algèbre lin�aire","classe":"S1","coef":2.0,"ens":15},
	{"_id":"M1203","intitule":"Environnement �conomique","classe":"S1","coef":1.5,"ens":16},
	{"_id":"M1204","intitule":"Fonctionnement des organisations","classe":"S1","coef":2.5,"ens":15},
	{"_id":"M1205","intitule":"Expression communication - Fondamentaux de la communication","classe":"S1","coef":2.0,"ens":20},
	{"_id":"M1206","intitule":"Anglais et Informatique","classe":"S1","coef":1.5,"ens":20},
	{"_id":"M1207","intitule":"PPP - Connaître le monde professionnel","classe":"S1","coef":1.0,"ens":20},
	
	// M21xx
	{"_id":"M2101","intitule":"Architecture et programmation des m�canismes de base d'un système informatique","classe":"S2","coef":1.5,"ens":17},
	{"_id":"M2102","intitule":"Architecture des r�seaux","classe":"S2","coef":1.5,"ens":12},
	{"_id":"M2103","intitule":"Base de la programmation orient�e objet","classe":"S2","coef":3.5,"ens":5},
	{"_id":"M2104","intitule":"Base de la conception orient�e objet","classe":"S2","coef":2.5,"ens":9},
	{"_id":"M2105","intitule":"Introduction aux interfaces Homme-Machine (IHM)","classe":"S2","coef":2.5,"ens":5},
	{"_id":"M2106","intitule":"Programmation et administration des bases de donn�es","classe":"S2","coef":2.5,"ens":7},
	{"_id":"M2107","intitule":"Projet tutor� - Description et planification de projet","classe":"S2","coef":2.0,"ens":11},
	
	// M22xx
	{"_id":"M2201","intitule":"Graphes et langages","classe":"S2","coef":2.5,"ens":8},
	{"_id":"M2202","intitule":"Anlyse et m�thodes num�riques","classe":"S2","coef":2.0,"ens":15},
	{"_id":"M2203","intitule":"Environnement comptable, financier, juridique et social","classe":"S2","coef":3.0,"ens":16},
	{"_id":"M2204","intitule":"Gestion de projet informatique","classe":"S2","coef":1.5,"ens":11},
	{"_id":"M2205","intitule":"Expression-Communication - Communication, information et argumentation","classe":"S2","coef":1.5,"ens":20},
	{"_id":"M2206","intitule":"Communiquer en anglais","classe":"S2","coef":2.5,"ens":20},
	{"_id":"M2207","intitule":"PPP - Identifier ses comp�tences","classe":"S2","coef":1.0,"ens":20},
	
	// M31xx
	{"_id":"M3101","intitule":"Principe des systèmes d'exploitation","classe":"S3","coef":2.5,"ens":17},
	{"_id":"M3102","intitule":"Services r�seaux","classe":"S3","coef":1.5,"ens":13},
	{"_id":"M3103","intitule":"Algorithmique avanc�e","classe":"S3","coef":1.5,"ens":5},
	{"_id":"M3104","intitule":"Programmation Web côt� serveur","classe":"S3","coef":2.5,"ens":18},
	{"_id":"M3105","intitule":"Conception et programmation objet avanc�es","classe":"S3","coef":2.5,"ens":9},
	{"_id":"M3106C","intitule":"Bases de donn�es avanc�es","classe":"S3","coef":1.5,"ens":7},
	
	// M32xx
	{"_id":"M3201","intitule":"Probabilit�s et statistiques","classe":"S3","coef":2.5,"ens":8},
	{"_id":"M3202C","intitule":"Mod�lisations math�matiques","classe":"S3","coef":1.5,"ens":10},
	{"_id":"M3203","intitule":"Droit des technologies de l'information et de la communication (TIC)","classe":"S3","coef":1.5,"ens":16},
	{"_id":"M3204","intitule":"Gestion des systèmes d'information","classe":"S3","coef":2.5,"ens":7},
	{"_id":"M3205","intitule":"Expression-Communication - Communication, professionnelle","classe":"S3","coef":1.5,"ens":20},
	{"_id":"M3206","intitule":"Collaborer en anglais","classe":"S3","coef":2.5,"ens":20},
	
	// M33xx
	{"_id":"M3301","intitule":"M�thodologies de la production d'applications","classe":"S3","coef":3.0,"ens":11},
	{"_id":"M3302","intitule":"Projet tutor� - Mise en situation professionnelle","classe":"S3","coef":2.0,"ens":11},
	{"_id":"M3303","intitule":"PPP - Pr�ciser son projet","classe":"S3","coef":1.0,"ens":20},
	
	// M41xx (optionnel)
	{"_id":"M4101","intitule":"XML","classe":"S4","coef":2.0,"ens":7}
]);

// S�lection al�atoire de 12 interrogations par attribution d'un coefficient (entre 0.5 et 3.5, de 0.5 et 0.5) et d'un module
var interList = [];
db.module.aggregate({ // Appliquer une fonction d'aggregation à la collection
	$sample: { // Cette fonction retourne "size" �l�ments al�atoires depuis la collection
		size: 12
	}
}).forEach(m => { // Application d'une fonction à chaque �l�ments choisi
	interList.push({ // Ajout de l'interro à la liste
		"module": m._id,
		"coef": (Math.trunc(Math.random() * 7) + 1) * 0.5 // Choix du coefficient
	});
});

// Ajout d'un nombre al�atoire de notes (entre 7 et 10), elles-mêmes randomis�es (entre 0 et 20, deux d�cimales) aux �tudiants pour les interro s�lectionn�s
db.etudiant.find().forEach(etud => {
	var inter = interList.slice(); // Copie de la liste des tests
	var notes = [];
	// Choix du nombre de d'interro
	var nb = 10 - Math.random() * 4;
	for (var i = 0; i < nb; i++)
		// Extraction d'une interro de la liste et g�n�ration d'une note
		notes.push({
			"inter": inter.splice(Math.trunc(Math.random() * inter.length), 1)[0],
			"note": gaussianRandom(0, 2001, 3) / 100
		});
	
	// Mise à jour de l'�tudiant pour ajouter ses notes
	db.etudiant.updateOne(etud, {
		"$set": { // D�fini la valeur du champ "notes" si il existe d�jà ou le cr�e dans le cas contraire
			"notes": notes
		}
	});
});

// G�nère un nombre al�atoire selon une courbe de Gauss, entre min et max avec un coefficient de Gauss g
function gaussianRandom(min, max, g) {
	var r = 0;
	for (var i = 0; i < g; i++)
		r += Math.random();
	return Math.trunc((r / g) * (max - min + 1));
}

