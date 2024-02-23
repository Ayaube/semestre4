-- 1) Visualisez les moyennes globales de tous les groupes et celle de chaque étudiant de chaque groupe pour l’année 2021.

        -- Moyenne globale par groupe pour 2021
        SELECT
            e.groupe,
            AVG(n.note) AS moyenne_globale
        FROM
            fait_notes n
        JOIN
            dim_etudiant_athlete e ON n.idEtudAthlete = e.idEtudAthlete
        JOIN
            dim_temps t ON n.idTemps = t.idTemps
        WHERE
            t.annee = 2021
        GROUP BY
            e.groupe;

        -- Moyenne de chaque étudiant par groupe pour 2021
        SELECT
            e.groupe,
            e.nom,
            e.prenom,
            AVG(n.note) AS moyenne_etudiant
        FROM
            fait_notes n
        JOIN
            dim_etudiant_athlete e ON n.idEtudAthlete = e.idEtudAthlete
        JOIN
            dim_temps t ON n.idTemps = t.idTemps
        WHERE
            t.annee = 2021
        GROUP BY
            e.groupe, e.nom, e.prenom;


-- 2) Visualisez les moyennes globale relative à chaque semestre (toute ressource/étudiant confondu) et celles relatives à chaque enseignant (toute ressource/étudiant confondu).


        -- Moyenne globale par semestre
        SELECT
            t.semestre,
            AVG(n.note) AS moyenne_globale
        FROM
            fait_notes n
        JOIN
            dim_temps t ON n.idTemps = t.idTemps
        GROUP BY
            t.semestre;

        -- Moyenne globale par enseignant
        SELECT
            e.nom,
            e.prenom,
            AVG(n.note) AS moyenne_enseignant
        FROM
            fait_notes n
        JOIN
            dim_enseignant e ON n.idEns = e.idEns
        GROUP BY
            e.nom, e.prenom;


-- 3) Visualisez le classement moyen (tout étudiant/année confondu), le classement moyen par année (toute étudiant confondu) et le classement moyen de chaque étudiant par année.

        -- Classement moyen global
        SELECT
            AVG(c.classement) AS classement_moyen_global
        FROM
            fait_performances_athletiques c;

        -- Classement moyen par année
        SELECT
            t.annee,
            AVG(c.classement) AS classement_moyen_annuel
        FROM
            fait_performances_athletiques c
        JOIN
            dim_temps t ON c.idTemps = t.idTemps
        GROUP BY
            t.annee;

        -- Classement moyen de chaque étudiant par année
        SELECT
            t.annee,
            e.nom,
            e.prenom,
            AVG(c.classement) AS classement_moyen_etudiant
        FROM
            fait_performances_athletiques c
        JOIN
            dim_temps t ON c.idTemps = t.idTemps
        JOIN
            dim_etudiant_athlete e ON c.idEtudAthlete = e.idEtudAthlete
        GROUP BY
            t.annee, e.nom, e.prenom;


-- 4) Visualisez le nombre total de compétitions différentes (tout étudiant/année confondu), le nombre total de compétitions différentes par étudiant (toute année confondue) et le nombre total de compétitions différentes par étudiant par année.

        -- Total de compétitions différentes (tout étudiant/année confondu)
        SELECT
            COUNT(DISTINCT idDiscipline) AS total_competitions
        FROM
            fait_performances_athletiques;

        -- Total de compétitions par étudiant (toute année confondue)
        SELECT
            e.nom,
            e.prenom,
            COUNT(DISTINCT idDiscipline) AS competitions_par_etudiant
        FROM
            fait_performances_athletiques c
        JOIN
            dim_etudiant_athlete e ON c.idEtudAthlete = e.idEtudAthlete
        GROUP BY
            e.nom, e.prenom;

        -- Total de compétitions par étudiant par année
        SELECT
            t.annee,
            e.nom,
            e.prenom,
            COUNT(DISTINCT c.idDiscipline) AS competitions_par_etudiant_annuel
        FROM
            fait_performances_athletiques c
        JOIN
            dim_temps t ON c.idTemps = t.idTemps
        JOIN
            dim_etudiant_athlete e ON c.idEtudAthlete = e.idEtudAthlete
        GROUP BY
            t.annee, e.nom, e.prenom;


-- 5) Visualisez le nombre de compétitions auxquelles chaque étudiant a participé ent total. De plus, visualisez le total de compétitions par année tout étudiant confondu.

        -- Total de compétitions auxquelles chaque étudiant a participé
        SELECT
            e.nom,
            e.prenom,
            COUNT(*) AS total_competitions
        FROM
            fait_performances_athletiques c
        JOIN
            dim_etudiant_athlete e ON c.idEtudAthlete = e.idEtudAthlete
        GROUP BY
            e.nom, e.prenom;

        -- Total de compétitions par année tout étudiant confondu
        SELECT
            t.annee,
            COUNT(*) AS total_competitions_annuel
        FROM
            fait_performances_athletiques c
        JOIN
            dim_temps t ON c.idTemps = t.idTemps
        GROUP BY
            t.annee;


-- 6) Visualisez les moyennes relatives à chaque semestre, chaque enseignant (indépendamment des semestre et des étudiants) et chaque étudiant (indépendamment des semestres et des enseignants).

        -- Moyenne relative à chaque semestre
        SELECT
            t.semestre,
            AVG(f.note) AS moyenne_semestre
        FROM
            fait_notes f
        JOIN
            dim_temps t ON f.idTemps = t.idTemps
        GROUP BY
            t.semestre;

        -- Moyenne relative à chaque enseignant
        SELECT
            e.nom,
            e.prenom,
            AVG(f.note) AS moyenne_enseignant
        FROM
            fait_notes f
        JOIN
            dim_enseignant e ON f.idEns = e.idEns
        GROUP BY
            e.nom, e.prenom;


        -- moyenne relative à chaque étudiant
        SELECT
            ea.nom,
            ea.prenom,
            AVG(f.note) AS moyenne_etudiant
        FROM
            fait_notes f
        JOIN
            dim_etudiant_athlete ea ON f.idEtudAthlete = ea.idEtudAthlete
        GROUP BY
            ea.nom, ea.prenom;


-- 7) Visualisez la moyenne globale e chaque étudiant athlète (étudiant ayant participé à au moins une competition) et celle des sédentaires ( étudiants qui n’ont jamais fait des compétitions).

        -- Moyenne globale de chaque étudiant athlète
        SELECT
            ea.nom,
            ea.prenom,
            AVG(fn.note) AS moyenne_globale
        FROM
            dim_etudiant_athlete ea
        JOIN
            fait_notes fn ON ea.idEtudAthlete = fn.idEtudAthlete
        WHERE
            EXISTS (
                SELECT 1
                FROM fait_performances_athletiques fpa
                WHERE fpa.idEtudAthlete = ea.idEtudAthlete
            )
        GROUP BY
            ea.nom, ea.prenom;

        -- moyenne globale des sédentaires
        SELECT
            ea.nom,
            ea.prenom,
            AVG(fn.note) AS moyenne_globale
        FROM
            dim_etudiant_athlete ea
        JOIN
            fait_notes fn ON ea.idEtudAthlete = fn.idEtudAthlete
        WHERE
            NOT EXISTS (
                SELECT 1
                FROM fait_performances_athletiques fpa
                WHERE fpa.idEtudAthlete = ea.idEtudAthlete
            )
        GROUP BY
            ea.nom, ea.prenom;
