def reduire_instructions_et_compter(fichier):
    # Compter les occurrences de chaque instruction
    compteur = {"n": 0, "s": 0, "ne": 0, "nw": 0, "se": 0, "sw": 0}

    with open(fichier, 'r') as file:
        instructions = file.read().strip().split(",")

    for instruction in instructions:
        compteur[instruction] += 1

    # Appliquer la logique d'annulation
    # Pour chaque paire d'instructions opposées, soustraire le minimum des deux du total pour chacune
    paires_opposees = [("n", "s"), ("ne", "sw"), ("nw", "se"), ("se", "nw"), ("sw", "ne"), ("s", "n")]

    for direction1, direction2 in paires_opposees:
        min_occurrence = min(compteur[direction1], compteur[direction2])
        compteur[direction1] -= min_occurrence
        compteur[direction2] -= min_occurrence

    # Calculer le nombre total d'instructions restantes
    nombre_instructions_restantes = sum(compteur.values())

    return nombre_instructions_restantes


# Exemple d'utilisation
nombre_instructions_restantes = reduire_instructions_et_compter('input.txt')
print(f"Nombre d'instructions restantes après annulations : {nombre_instructions_restantes}")
