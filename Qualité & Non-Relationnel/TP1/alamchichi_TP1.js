// A) Requêtes sur documents "plats"


    //  1. Donner la liste des enseignants.

    db.enseignant.find()

            /*[
           {
            "_id": 5,
            "dept": "INFO",
            "nom": "Rety",
            "prenom": "Jean-Hugues",
            "titulaire": true
          },
          {
            "_id": 7,
            "dept": "INFO",
            "nom": "Lamolle",
            "prenom": "Myriam",
            "titulaire": true
          },
          {
            "_id": 8,
            "dept": "INFO",
            "nom": "Homps",
            "prenom": "Marc",
            "titulaire": true
          },
          {
            "_id": 9,
            "dept": "INFO",
            "nom": "Simonot",
            "prenom": "Marianne",
            "titulaire": true
          }
        ] et encore plein d'autres */


    //  2. Quel est le premier enseignant de la collection ?

    db.enseignant.find().limit(1)

         /*    [
          {
            "_id": 5,
            "dept": "INFO",
            "nom": "Rety",
            "prenom": "Jean-Hugues",
            "titulaire": true
          }
        ] */


    //  3. Quel sont les cinq premiers enseignants de la collection ?

    db.enseignant.find().limit(5)

            /*     [
              {
                "_id": 5,
                "dept": "INFO",
                "nom": "Rety",
                "prenom": "Jean-Hugues",
                "titulaire": true
              },
              {
                "_id": 7,
                "dept": "INFO",
                "nom": "Lamolle",
                "prenom": "Myriam",
                "titulaire": true
              },
              {
                "_id": 8,
                "dept": "INFO",
                "nom": "Homps",
                "prenom": "Marc",
                "titulaire": true
              },
              {
                "_id": 9,
                "dept": "INFO",
                "nom": "Simonot",
                "prenom": "Marianne",
                "titulaire": true
              },
              {
                "_id": 10,
                "dept": "INFO",
                "nom": "Ricordeau",
                "prenom": "Anne",
                "titulaire": true
              }
            ] */


    //  4. Quels sont les enseignants du département INFO ?

    db.enseignant.find({"dept": "INFO"})

        /*     [
          {
            "_id": 5,
            "dept": "INFO",
            "nom": "Rety",
            "prenom": "Jean-Hugues",
            "titulaire": true
          },
          {
            "_id": 7,
            "dept": "INFO",
            "nom": "Lamolle",
            "prenom": "Myriam",
            "titulaire": true
          },
          {
            "_id": 8,
            "dept": "INFO",
            "nom": "Homps",
            "prenom": "Marc",
            "titulaire": true
          },
          {
            "_id": 9,
            "dept": "INFO",
            "nom": "Simonot",
            "prenom": "Marianne",
            "titulaire": true
          },
          {
            "_id": 10,
            "dept": "INFO",
            "nom": "Ricordeau",
            "prenom": "Anne",
            "titulaire": true
          },
          {
            "_id": 11,
            "dept": "INFO",
            "nom": "Georges",
            "prenom": "R�mi",
            "titulaire": true
          },
          {
            "_id": 12,
            "dept": "INFO",
            "nom": "Delmas",
            "prenom": "Guylain",
            "titulaire": true
          },
          {
            "_id": 13,
            "dept": "INFO",
            "nom": "Nauwynck",
            "prenom": "N�dra",
            "titulaire": true
          },
          {
            "_id": 15,
            "dept": "INFO",
            "nom": "Bonnot",
            "prenom": "Philippe",
            "titulaire": true
          },
          {
            "_id": 16,
            "dept": "INFO",
            "nom": "Cl�ment-Comparot",
            "prenom": "V�ronique",
            "titulaire": true
          },
          {
            "_id": 17,
            "dept": "INFO",
            "nom": "Le Duc",
            "prenom": "Chan",
            "titulaire": true
          },
          {
            "_id": 18,
            "dept": "INFO",
            "nom": "Bossard",
            "prenom": "Aur�lien",
            "titulaire": true
          },
          {
            "_id": 19,
            "dept": "INFO",
            "nom": "Cataldi",
            "prenom": "Mario",
            "titulaire": true
          },
          {
            "_id": 20,
            "dept": "INFO",
            "nom": "Golven",
            "prenom": "Am�lie",
            "titulaire": true
          },
          {
            "_id": 23,
            "dept": "INFO",
            "nom": "Groff",
            "prenom": "Geoffrey",
            "titulaire": true
          }
        ] */

    //  5. Quel est l’enseignant ayant l’identifiant 7 (_id équivalent clé primaire) ?

    db.enseignant.find({"_id": 7})

        /*     [
          {
            "_id": 7,
            "dept": "INFO",
            "nom": "Lamolle",
            "prenom": "Myriam",
            "titulaire": true
          }
        ] */

    //  6. Quels sont les enseignants dont le nom commence par L ? Utiliser $regex : et pour
    //  comparer le début d’une chaîne de caractère utiliser le symbole ∧.

    db.enseignant.find({"nom": {$regex: "^L"}})

        /*     [
          {
            "_id": 7,
            "dept": "INFO",
            "nom": "Lamolle",
            "prenom": "Myriam",
            "titulaire": true
          },
          {
            "_id": 17,
            "dept": "INFO",
            "nom": "Le Duc",
            "prenom": "Chan",
            "titulaire": true
          }
        ] */






// B) Requêtes sur documents intégrés (notion de champs multivalués


    //  1. Donner la liste des étudiants. Attention, la structure est différente ici du modèle
    //  relationnel utilisé sur Postgres en BUT1.

    db.etudiant.find() // j'en ecris 1 mais il y a 20 Noms

        /* [
          {
            "_id": {"$oid": "65e72759c17ef10bc21500e6"},
            "classe": "S3",
            "nom": "Charles",
            "notes": [
              {
                "inter": {
                  "module": "M2105",
                  "coef": 2
                },
                "note": 1.93
              },
              {
                "inter": {
                  "module": "M1206",
                  "coef": 2.5
                },
                "note": 4.41
              },
              {
                "inter": {
                  "module": "M1205",
                  "coef": 1
                },
                "note": 10.16
              },
              {
                "inter": {
                  "module": "M1101",
                  "coef": 1.5
                },
                "note": 6.5
              },
              {
                "inter": {
                  "module": "M3302",
                  "coef": 1.5
                },
                "note": 14.73
              },
              {
                "inter": {
                  "module": "M2201",
                  "coef": 1
                },
                "note": 10.18
              },
              {
                "inter": {
                  "module": "M3301",
                  "coef": 0.5
                },
                "note": 7.79
              },
              {
                "inter": {
                  "module": "M3102",
                  "coef": 2
                },
                "note": 13.33
              }
            ],
            "prenom": "Glenn"
          }
        ] */



    //  2. Quels sont les noms et prénoms des étudiants en S3 ?

    db.etudiant.find({"classe": "S3"}, {"nom": 1, "prenom": 1, "_id": 0})

        /*     [
          {
            "nom": "Charles",
            "prenom": "Glenn"
          },
          {
            "nom": "Bradshaw",
            "prenom": "Kennedy"
          },
          {
            "nom": "Trudy",
            "prenom": "Pace"
          },
          {
            "nom": "Lowery",
            "prenom": "Gordon"
          },
          {
            "nom": "Burt",
            "prenom": "Foster"
          },
          {
            "nom": "Chen",
            "prenom": "Reilly"
          },
          {
            "nom": "Caldwell",
            "prenom": "Dunn"
          },
          {
            "nom": "Boyd",
            "prenom": "Wilcox"
          },
          {
            "nom": "Sweeney",
            "prenom": "Guy"
          },
          {
            "nom": "Brenda",
            "prenom": "Benson"
          }
        ] */

    //  3. Quels sont les noms et prénoms des étudiants en S4 triés selon leur prénom ?

    db.etudiant.find({"classe": "S4"}, {"nom": 1, "prenom": 1, "_id": 0}).sort({"prenom": 1})

        /*     [
          {
            "nom": "Whitney",
            "prenom": "Best"
          },
          {
            "nom": "Vonda",
            "prenom": "Cole"
          },
          {
            "nom": "Carissa",
            "prenom": "Garcia"
          },
          {
            "nom": "Sawyer",
            "prenom": "Mckinney"
          },
          {
            "nom": "Olivia",
            "prenom": "Steele"
          },
          {
            "nom": "Finch",
            "prenom": "Wooten"
          }
        ] */

    //  4. Quels sont les noms et prénoms des étudiants en S2 ou S4 ? Trier selon la classe. ( j'en ecris 4 sur 14)

    db.etudiant.find({"classe": {$in: ["S2", "S4"]}}, {"nom": 1, "prenom": 1, "_id": 0, "classe": 1}).sort({"classe": 1})

        /*     [
          {
            "classe": "S2",
            "nom": "Marion",
            "prenom": "Contreras"
          },
          {
            "classe": "S2",
            "nom": "Vinson",
            "prenom": "Ayers"
          },
          {
            "classe": "S2",
            "nom": "Jessica",
            "prenom": "Joyce"
          },
          {
            "classe": "S2",
            "nom": "Marietta",
            "prenom": "Francis"
          }
        ] */

    //  5. Quels sont les étudiants en S4 qui ont eu une note inférieure strictement à 6 ?

    db.etudiant.find({"classe": "S4", "notes.note": {$lt: 6}}, {"nom": 1, "prenom": 1, "_id": 0})

        /*     [
          {
            "nom": "Carissa",
            "prenom": "Garcia"
          },
          {
            "nom": "Finch",
            "prenom": "Wooten"
          },
          {
            "nom": "Whitney",
            "prenom": "Best"
          },
          {
            "nom": "Olivia",
            "prenom": "Steele"
          }
        ] */

    //  6. Quels sont les étudiants en S4 qui ont eu une note supérieure ou égale à 8 et inférieure
    //  strictement à 10 ?

    db.etudiant.find({"classe": "S4", "notes.note": {$gte: 8, $lt: 10}}, {"nom": 1, "prenom": 1, "_id": 0})

        /*     [
          {
            "nom": "Carissa",
            "prenom": "Garcia"
          },
          {
            "nom": "Finch",
            "prenom": "Wooten"
          },
          {
            "nom": "Whitney",
            "prenom": "Best"
          },
          {
            "nom": "Olivia",
            "prenom": "Steele"
          },
          {
            "nom": "Vonda",
            "prenom": "Cole"
          },
          {
            "nom": "Sawyer",
            "prenom": "Mckinney"
          }
        ] */



// 2) BD Restaurants

// Exercice 2 (Requêtes simples)
    // 1. Quels sont les restaurants situés dans Manhattan ? Combien y en a-t-il ?

    db.restaurants.find({"borough": "Manhattan"}).count() // resulat = 10258

    // 2. Parmi eux, quels sont ceux qui proposent de la cuisine italienne ? Combien y en a-t-il ?

    db.restaurants.find({"borough": "Manhattan", "cuisine": "Italian"}).count() // resultat = 621

    // 3. Parmi ces derniers, quels sont ceux qui sont sur la 5° avenue ? Combien y en a-t-il ?

    db.restaurants.find({
      "borough": "Manhattan",
      "cuisine": "Italian",
      "address.street": "5 Avenue"
    })

    // En voici un mais il y en a 6 au total
        /* [
          {
            "_id": {"$oid": "65e8376605b6d4a02a481dab"},
            "address": {
              "building": "781",
              "coord": {
                "type": "Point",
                "coordinates": [-73.9724963, 40.764332]
              },
              "street": "5 Avenue",
              "zipcode": "10022"
            },
            "borough": "Manhattan",
            "cuisine": "Italian",
            "grades": [
              {
                "date": {
                  "$date": 1405900800000
                },
                "grade": "A",
                "score": 8
              },
              {
                "date": {
                  "$date": 1392249600000
                },
                "grade": "A",
                "score": 13
              },
              {
                "date": {
                  "$date": 1375315200000
                },
                "grade": "A",
                "score": 7
              },
              {
                "date": {
                  "$date": 1360281600000
                },
                "grade": "A",
                "score": 13
              },
              {
                "date": {
                  "$date": 1326931200000
                },
                "grade": "A",
                "score": 11
              }
            ],
            "name": "Harry Cipriani",
            "restaurant_id": "41264944"
          }
        ] */


    // 4. On ne souhaite retourner que le nom, c’est-à-dire faire une projection, comment faut-il s’y prendre ?

    db.restaurants.find({}, {"name": 1, "_id": 0})

        /*     [
          {
            "name": "Morris Park Bake Shop"
          },
          {
            "name": "Wendy'S"
          },
          {
            "name": "Dj Reynolds Pub And Restaurant"
          },
          {
            "name": "Riviera Caterer"
          },
          {
            "name": "Tov Kosher Kitchen"
          }
        ] */

        // au total il y en a 20

    // 5. On cherche parmi ceux-ci ceux qui ont un nom qui comporte le mot pizza ou Pizza.

    db.restaurants.find({
      "borough": "Manhattan",
      "cuisine": "Italian",
      "name": /pizza/i  // Le 'i' ici permet de chercher 'pizza' dans n'importe quelle combinaison de majuscules et minuscules
    }, {
      "name": 1, "_id": 0
    })

        /*     [
          {
            "name": "Tre Giovani Pizza & Pasta"
          },
          {
            "name": "La Pizza Fresca"
          },
          {
            "name": "Serafina Fabulous Pizza"
          },
          {
            "name": "Adrienne'S Pizza Bar"
          }
        ] */

        // il y en a 16 au total


// Exercice 3 (Filtrages)
    // 2. Quel est le nom et l’adresse des restaurants de Manhattan qui ont obtenu le grade "A" lors de la dernière inspection ?

    db.restaurants.find(
      {"borough": "Manhattan", "grades.0.grade": "A"},
      {"name": 1, "address": 1, "_id": 0}
    )
        /* [
          {
            "address": {
              "building": "351",
              "coord": {
                "type": "Point",
                "coordinates": [-73.98513559999999, 40.7676919]
              },
              "street": "West   57 Street",
              "zipcode": "10019"
            },
            "name": "Dj Reynolds Pub And Restaurant"
          },
          {
            "address": {
              "building": "1",
              "coord": {
                "type": "Point",
                "coordinates": [-73.96926909999999, 40.7685235]
              },
              "street": "East   66 Street",
              "zipcode": "10065"
            },
            "name": "1 East 66Th Street Kitchen"
          }
        ] */

        // il y en a 20 au total


    // 3. Parmi ces derniers, quels sont ceux qui ont eu une note (score) inférieure à 10 ?

    db.restaurants.find(
      {"borough": "Manhattan", "grades.0.grade": "A", "grades.0.score": {$lt: 10}},
      {"name": 1, "address": 1, "_id": 0}
    )

        /*     [
          {
            "address": {
              "building": "351",
              "coord": {
                "type": "Point",
                "coordinates": [-73.98513559999999, 40.7676919]
              },
              "street": "West   57 Street",
              "zipcode": "10019"
            },
            "name": "Dj Reynolds Pub And Restaurant"
          },
          {
            "address": {
              "building": "1",
              "coord": {
                "type": "Point",
                "coordinates": [-73.96926909999999, 40.7685235]
              },
              "street": "East   66 Street",
              "zipcode": "10065"
            },
            "name": "1 East 66Th Street Kitchen"
          }
        ] */
        // Il y en a 20 au total


    // 4. On voudrait affiner un peu et trouver ceux qui n’ont jamais eu de score supérieur à 10.

    db.restaurants.find(
      {"borough": "Manhattan", "grades.score": {$not: {$gt: 10}}},
      {"name": 1, "address": 1, "_id": 0}
    )

        /*     [
          {
            "address": {
              "building": "1",
              "coord": {
                "type": "Point",
                "coordinates": [-73.96926909999999, 40.7685235]
              },
              "street": "East   66 Street",
              "zipcode": "10065"
            },
            "name": "1 East 66Th Street Kitchen"
          },
          {
            "address": {
              "building": "225",
              "coord": {
                "type": "Point",
                "coordinates": [-73.96485799999999, 40.761899]
              },
              "street": "East   60 Street",
              "zipcode": "10022"
            },
            "name": "Serendipity 3"
          }
        ] */
        // Toujours 20 :)

    // 5. Cherchez les noms des restaurants qui ont le grade "C" mais avec un score inférieur à 40, et ceci lors de la même évaluation.

    db.restaurants.find(
      {"grades": {$elemMatch: {"grade": "C", "score": {$lt: 40}}}},
      {"name": 1, "_id": 0}
    )

        /*
        [
          {
            "name": "Terminal Cafe/Yankee Clipper"
          },
          {
            "name": "B & M Hot Bagel & Grocery"
          },
          {
            "name": "Old Town Bar & Restaurant"
          },
          {
            "name": "Nyac Main Dining Room"
          },
          {
            "name": "Tout Va Bien"
          }
        ] */

        // Il y en a 20 au total
