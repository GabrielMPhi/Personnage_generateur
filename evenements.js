










function evenements_au_debut(personnage){
    utilisation_de_la_richesse(personnage)
    personnage.amis = generer_amis()
}

function utilisation_de_la_richesse(personnage){
    if (personnage.richesse >= 15){
        personnage.richesse=personnage.richesse - 15
        personnage.propriete.push("Navire")
    } 
}


function generer_amis(){
    let chance_avoir_ami = getRandomInt(3);
    let nombre_damis = 0;
    let amis_du_personnage = [];
    let factory_damis = new PersonnageFactory()
    if (chance_avoir_ami >= 1){
        nombre_damis = getRandomInt(7)
    } else {
        nombre_damis = 0
    }
    if (nombre_damis > 0){
        for (let i = 0; i < nombre_damis; i++){
            amis_du_personnage.push(factory_damis.creer_personnage())
            };
        }

    return amis_du_personnage
}