import numpy as np
import matplotlib.pyplot as plt
import matplotlib; matplotlib.use('TkAgg')

plt.close('all')

def fonction(x):
    return x * x

def derfonction(x):
    return 2 * x

xmin = -5
xmax = 5
plt.figure()
x = np.linspace(xmin, xmax, 150)
plt.plot(x, fonction(x), 'b-', linewidth=1.5)

alpha = 0.2
xinit = 4
xsuite = [xinit]
kmax = 15

for k in range(kmax):
    plt.plot(xsuite[k], fonction(xsuite[k]), 'ro', alpha=0.5)
    plt.pause(0.8)

    slope = derfonction(xsuite[k])
    xsuite.append(xsuite[k] - alpha * slope)

plt.show()