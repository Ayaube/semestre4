# Exemple d'entrée simplifiée, sous forme de liste de tuples (p, v, a)
particules = [
    ((3, 0, 0), (2, 0, 0), (-1, 0, 0)),
    ((4, 0, 0), (0, 0, 0), (-2, 0, 0))
]

def distance_manhattan(acceleration):
    return sum(abs(a) for a in acceleration)

def particule_plus_proche(particules):
    """Identifie la particule qui restera la plus proche de <0,0,0> à long terme."""
    distances = [distance_manhattan(p[2]) for p in particules]  # Utilise l'accélération de chaque particule
    return distances.index(min(distances))

# Identification de la particule qui restera la plus proche de <0,0,0>
particule_proche = particule_plus_proche(particules)
particule_proche
