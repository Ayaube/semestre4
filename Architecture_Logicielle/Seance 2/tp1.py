# Développement du générateur de nombres premiers

def est_premier(n):
    """Vérifie si un nombre est premier."""
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def generateur_nombres_premiers(debut, fin, pas):
    """Génère des nombres premiers"""
    for n in range(debut, fin + 1, pas):
        if est_premier(n):
            yield n


def generateur_fibonacci(debut, fin, pas):
    """Génère la suite de Fibonacci dans un intervalle avec un pas spécifié."""
    a, b = 0, 1
    for index in range(fin + 1):
        if index >= debut and (index - debut) % pas == 0:
            yield a
        a, b = b, a + b


print(list(generateur_nombres_premiers(0, 50, 1)))
print(list(generateur_fibonacci(0, 10, 2)))
