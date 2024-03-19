from collections import Counter

def calculer_checksum(fichier):
    deux_fois = 0
    trois_fois = 0

    with open(fichier, 'r') as f:
        for ligne in f:
            ligne = ligne.strip()  # Enlève les espaces et retours à la ligne
            freq = Counter(ligne)  # Compte la fréquence de chaque lettre dans l'ID

            # Vérifie si un caractère apparaît exactement deux ou trois fois
            if 2 in freq.values():
                deux_fois += 1
            if 3 in freq.values():
                trois_fois += 1

    # Calcul du checksum
    checksum = deux_fois * trois_fois
    return checksum

# Appel de la fonction et impression du résultat
checksum = calculer_checksum('input.txt')
print(f'Le checksum est: {checksum}')

def trouver_ids_similaires(fichier):
    with open(fichier, 'r') as f:
        ids = [ligne.strip() for ligne in f]

    for i in range(len(ids)):
        for j in range(i + 1, len(ids)):
            differences = [k for k in range(len(ids[i])) if ids[i][k] != ids[j][k]]

            # Si les deux IDs diffèrent exactement par un caractère
            if len(differences) == 1:
                diff_index = differences[0]
                # Retourne les caractères communs en enlevant le caractère différent
                return ids[i][:diff_index] + ids[i][diff_index+1:]

# Appel de la fonction et affichage du résultat
resultat = trouver_ids_similaires('input.txt')
print(f'Les lettres communes entre les deux IDs corrects sont : {resultat}')
