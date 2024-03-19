# -*- coding: utf-8 -*-
"""
Created on Fri Mar 17 14:41:21 2023

@author: ricord
"""

import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

plt.close('all')


X = np.arange(-5, 5, 0.25)
Y = np.arange(-5, 5, 0.25)

# Grille de lissage faite pour toutes les valeurs de X et Y

X, Y = np.meshgrid(X, Y)

Z = X*X + Y*Y

# Affichage de la nappe

fig = plt.figure()
ax = fig.gca(projection='3d')
ax.set_xlabel('X')
ax.set_ylabel('Y')

surface = ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap="plasma",
                          linewidth=0, antialiased=False, alpha = 0.5)
fig.colorbar(surface, shrink=0.5, aspect=5)


def fonction(a, b):
    return a**2 + b**2


# le vecteur gradient :
def gradient(a, b):
    grad = np.array( ?????? )
    return grad


alpha = 0.1

ainit = -3
binit = 3
paraminit = np.array([[ainit],
                      [binit]])

kmax = 15
param = paraminit

for k in range(kmax):
    a = param[0, 0]
    b = param[1, 0]
    ax.scatter(a, b, fonction(a, b), c='black', s=40)  # s=40 #taille
    # nouvelles valeurs pour a et b :
    param = ???????

ax.scatter(ainit, binit, fonction(ainit, binit), c='red', s=40)

plt.show()
