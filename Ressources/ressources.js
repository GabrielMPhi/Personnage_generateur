let ressources = {
    liste_prenoms_habitant_homme: ["Bernard", "Martin", "Gabriel", "Mathieu", "Arthur", "Thomas", "Christian", "Simon", "Geralt", "Alexandre", "Étienne", "François", "Quark", "Luc", "Maxime"],
    liste_prenoms_habitant_femme: ["Catherine", "Florence", "Sophia", "Morgane", "Rieke", "Julia", "Linda", "Christina", "Anne-Sophie", "Anne-Marie", "Marie-Pier", "Marie", "Anne", "Anzhe", "Anna", "Rapunzel", "Éloise", "Elionor", "Samantha", "Arlette", "Ilona", "Ida", "Louise"],
    liste_prenoms_personnages_total: [],
    noms_famille_personnages: ["Monette", "Ducharme", "Carel", "Dax", "Rideout", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté", "Gingras", "Delorme", "Picard", "Sisko", "Janeway", "Pratte", "Séguin", "Gagné", "Turpin", "Bouras", "De Rivia", "Côté", "Gingras", "Jorkunite"],
    liste_genre : ["Homme", "Femme", "Homme", "Femme", "Homme", "Femme", "Non-binaire"],
    liste_de_surnom_homme: ["Sharp", "Le gros", "Le juste", "Toujours perdu", "Le sauvage", "Le fêtard", "Doigts crochus", "Oeil de lynx", "Le ténébreux", "Le Beau", "le monstre", "le courtisan"],
    liste_de_surnom_femme: ["La juste", "L'orgueilleuse", "L'intriguante", "La naine", "la traîtresse", "La grande", "La fourbe", "L'érudite", "La sage", "La grande", "la subtile"],
    liste_surnom_total: [],
    liste_intrigues_et_mystere : ["Aime les démons", "Fait de la philosophie"],
    liste_des_carrieres_possible : [],
    liste_des_vertus : ["courage", "espoir", "générosité"],
    liste_des_vices : ["envie", "paresse"],
}

ressources.liste_prenoms_personnages_total = [].concat(ressources.liste_prenoms_habitant_homme, ressources.liste_prenoms_habitant_femme)
ressources.liste_surnom_total = [].concat(ressources.liste_de_surnom_homme, ressources.liste_de_surnom_femme)



let NormalrandNum = function creer_rand_num(){
    return (Math.random() + Math.random() + Math.random()) / 3
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomNormalInt(max) {
    return Math.floor(NormalrandNum() * Math.floor(max));
    }
