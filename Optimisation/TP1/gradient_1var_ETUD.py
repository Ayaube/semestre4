# -*- coding: utf-8 -*-

import numpy as np
import matplotlib.pyplot as plt

plt.close('all')


def fonction(x):
    return 2 * x * x * np.cos(x) - 5 * x


def derfonction(x):
    return ?????


# tracer la fonction F(x) :

xmin = -5
xmax = 5
plt.figure()
x = np.linspace(xmin, xmax, 150)
plt.plot(x, fonction(x), 'b-', linewidth=1.5)

# Algorithme du Gradient avec visualisation :

alpha = ?????

xinit = ?????
xsuite = [xinit]

kmax = ?????

for k in range(kmax):
    # plt.plot(x, fonction(x), 'b-', linewidth=1.5)

    plt.plot(xsuite[k], fonction(xsuite[k]), 'ro', alpha=0.5)
    plt.pause(0.8)  # pause avec duree en secondes

    # la valeur suivante :
    slope = derfonction(xsuite[k])
    xsuite.append( ??????????????? )


# si besoin visu sans animation :
# xsuite = np.array(xsuite)
# plt.plot( xsuite[0], fonction(xsuite[0]), 'ro')
# plt.plot( xsuite, fonction(xsuite), 'r-')
# plt.plot( xsuite, fonction(xsuite), 'k.')
