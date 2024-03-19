import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

plt.close('all')

X = np.arange(-5, 5, 0.25)
Y = np.arange(-5, 5, 0.25)
X, Y = np.meshgrid(X, Y)
Z = X**2 + Y**2

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

ax.set_xlabel('X')
ax.set_ylabel('Y')
surface = ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap="plasma", linewidth=0, antialiased=False, alpha=0.5)
fig.colorbar(surface, shrink=0.5, aspect=5)

def fonction(a, b):
    return a**2 + b**2

def gradient(a, b):
    grad = np.array([2*a, 2*b])
    return grad

alpha = 0.1
ainit = -3
binit = 3
paraminit = np.array([ainit, binit])

kmax = 15
param = paraminit

for k in range(kmax):
    grad = gradient(param[0], param[1])
    param = param - alpha * grad
    ax.scatter(param[0], param[1], fonction(param[0], param[1]), c='black', s=40)

ax.scatter(ainit, binit, fonction(ainit, binit), c='red', s=40)

plt.show()