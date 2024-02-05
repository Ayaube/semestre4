def generateur_A(valeur_de_depart):
    """Générateur pour le générateur A."""
    facteur = 16807
    while True:
        valeur_de_depart = (valeur_de_depart * facteur) % 2147483647
        yield valeur_de_depart

def generateur_B(valeur_de_depart):
    """Générateur pour le générateur B."""
    facteur = 48271
    while True:
        valeur_de_depart = (valeur_de_depart * facteur) % 2147483647
        yield valeur_de_depart

def compter_correspondances(valeur_de_depart_A, valeur_de_depart_B, nombre_de_comparaisons):
    """Compte le nombre de fois que les 16 bits les plus bas des générateurs A et B correspondent."""
    gen_A = generateur_A(valeur_de_depart_A)
    gen_B = generateur_B(valeur_de_depart_B)
    correspondances = 0
    for _ in range(nombre_de_comparaisons):
        if (next(gen_A) & 0xFFFF) == (next(gen_B) & 0xFFFF):
            correspondances += 1
    return correspondances

# Notez que cet appel peut prendre un certain temps à exécuter en raison du grand nombre de comparaisons.

print(compter_correspondances(65, 8921, 40000000))
