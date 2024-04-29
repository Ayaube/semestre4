# -*- coding: utf-8 -*-

import numpy as np
import matplotlib.pyplot as plt

plt.close('all')

def moyenne(data):
    return np.mean(data)

def variance(data):
    return moyenne(data ** 2) - moyenne(data) ** 2

def covariance(dataX, dataY):
    return moyenne(dataX * dataY) - moyenne(dataX) * moyenne(dataY)

def correlation(dataX, dataY):
    return covariance(dataX, dataY) / np.sqrt(variance(dataX) * variance(dataY))

def visu_histo(data, title):
    moy = moyenne(data)
    sig = np.sqrt(variance(data))
    plt.figure()
    plt.hist(data, bins=20, density=True, edgecolor='k')
    plt.title(f'Histogramme de {title}, moy = {moy:.3f}, σ = {sig:.3f}')

def droiteRegression(dataX, dataY, style='k-'):
    ca = covariance(dataX, dataY) / variance(dataX)
    cb = moyenne(dataY) - ca * moyenne(dataX)
    xmin, xmax = np.min(dataX), np.max(dataX)
    plt.plot([xmin, xmax], [ca * xmin + cb, ca * xmax + cb], style)
    plt.title(f'a = {ca:.3f}, b = {cb:.3f}')

def visu_droite(dataX, a, b, style):
    xmin, xmax = np.min(dataX), np.max(dataX)
    plt.plot([xmin, xmax], [a * xmin + b, a * xmax + b], style)

def gradient(dataX, dataY, a, b):
    y_pred = a * dataX + b
    errors = dataY - y_pred
    dFda = -2 * np.sum(dataX * errors) / len(dataX)
    dFdb = -2 * np.sum(errors) / len(dataX)
    return np.array([dFda, dFdb])

nombre = 100
dataX = np.linspace(0, 1, nombre)
bruit = np.random.normal(0, 0.1, nombre)
dataY = 2 * dataX + 1 + bruit

visu_histo(bruit, 'bruit')
visu_histo(dataY, 'dataY')

plt.figure()
plt.scatter(dataX, dataY)
plt.title('Données et régression linéaire')
droiteRegression(dataX, dataY)

alpha = 0.1  # Learning rate
a_init, b_init = 0.0, 0.0
param = np.array([a_init, b_init])

kmax = 1000
eps = 1e-6

for k in range(kmax):
    grad = gradient(dataX, dataY, param[0], param[1])
    param -= alpha * grad
    if np.linalg.norm(grad) < eps:
        print(f'Convergence atteinte après {k} itérations.')
        break

visu_droite(dataX, param[0], param[1], 'r-')
plt.show()
