def calculer_affranchissement(poids):
    if poids < 10:
        return 2.0
    elif poids > 100:
        return 6.0
    else:
        return 3.5

poids = float(input("Entrez le poids de la lettre en grammes : "))
cout = calculer_affranchissement(poids)
print(f"Le coût d'affranchissement est de {cout}€.")
