import numpy as np
import matplotlib.pyplot as plt

# Définir la fonction et ses dérivées
def f(x):
    return (1/3)*x**3 - 2*x

def f_prime(x):
    return x**2 - 2

def f_double_prime(x):
    return 2*x

# Générer des points x pour le tracé
x = np.linspace(-5, 5, 400)
y = f(x)

# Création du tracé
plt.figure(figsize=(8, 6))
plt.plot(x, y, label="f(x) = (1/3)x^3 - 2x")
plt.title("Graphique de la fonction f(x)")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.axhline(0, color='black',linewidth=0.5)
plt.axvline(0, color='black',linewidth=0.5)
plt.grid(color = 'gray', linestyle = '--', linewidth = 0.5)
plt.legend()
plt.show()
