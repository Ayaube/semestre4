def calculer_severite(pare_feu):
    """Calcule la sévérité totale de traverser le pare-feu."""
    severite_totale = 0
    for profondeur, portee in pare_feu.items():
        periode = (portee - 1) * 2
        # Si le scanner est en haut au moment où le paquet atteint la couche
        if profondeur % periode == 0:
            severite_totale += profondeur * portee
    return severite_totale


pare_feu_exemple = {
    0: 3,
    1: 2,
    4: 4,
    6: 4
}

# Calcul de la sévérité pour l'exemple donné
severite = calculer_severite(pare_feu_exemple)
severite
