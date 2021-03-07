function evenements_au_debut(personnage){
    utilisation_de_la_richesse(personnage)
}

function utilisation_de_la_richesse(personnage){
    if (personnage.richesse >= 15){
        personnage.richesse=personnage.richesse - 15
        personnage.propriete.push("Navire")
    } 
}