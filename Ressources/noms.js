let liste_prenoms_habitant_homme = [
    "Bernard", 
    "Martin", 
    "Gabriel", 
    "Mathieu", 
    "Arthur", 
    "Thomas", 
    "Christian", 
    "Simon", 
    "Geralt", 
    "Alexandre", 
    "Étienne", 
    "François", 
    "Quark", 
    "Luc", 
    "Maxime"
];

let liste_prenoms_habitant_femme = [
    "Catherine", 
    "Florence", 
    "Sophia", 
    "Morgane", 
    "Rieke", 
    "Julia", 
    "Linda", 
    "Christina", 
    "Anne-Sophie", 
    "Anne-Marie", 
    "Marie-Pier", 
    "Marie", 
    "Anne", 
    "Anzhe", 
    "Anna", 
    "Rapunzel", 
    "Éloise", 
    "Elionor",
    "Samantha", 
    "Arlette", 
    "Ilona", 
    "Ida", 
    "Louise", 
    "Gabriella"
];

ressources.liste_prenoms_habitant_homme = [].concat(liste_prenoms_habitant_homme, ressources.liste_prenoms_habitant_homme)
ressources.liste_prenoms_habitant_femme = [].concat(liste_prenoms_habitant_femme, ressources.liste_prenoms_habitant_femme)

ressources.liste_prenoms_personnages_total = [].concat(ressources.liste_prenoms_habitant_homme, ressources.liste_prenoms_habitant_femme)
ressources.liste_surnom_total = [].concat(ressources.liste_de_surnom_homme, ressources.liste_de_surnom_femme)