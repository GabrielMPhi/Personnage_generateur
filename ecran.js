document.getElementById("btn_generer").addEventListener("click", function(e){

    let personnage_factory = new PersonnageFactory()
    personnage = personnage_factory.creer_personnage()    

    evenements_au_debut(personnage)

const affichage_personnage_nom = document.querySelector("#nom_personnage")
const affichage_personnage_prenom = document.getElementById("prenom_personnage")
const affichage_personnage_surnom = document.getElementById("surnom_personnage")
const affichage_personnage_taille = document.getElementById("taille_personnage")
const affichage_personnage_age = document.getElementById("age_personnage")
const affichage_personnage_carriere = document.getElementById("carriere_personnage")
const affichage_personnage_richesse = document.getElementById("richesse_personnage")
const affichage_personnage_image_armoirie = document.getElementById("image_armoirie")
const affichage_personnage_propriete = document.getElementById("propriete_personnage")
const affichage_personnage_historique = document.getElementById("historique_personnage")
const affichage_personnage_amis = document.getElementById("amis_personnage")


affichage_personnage_nom.innerHTML = personnage.nom
affichage_personnage_prenom.innerHTML = personnage.prenom
affichage_personnage_surnom.innerHTML = personnage.surnom
affichage_personnage_taille.innerHTML = personnage.taille + " cm"
affichage_personnage_age.innerHTML = personnage.age + " ans"
affichage_personnage_carriere.innerHTML = personnage.nom_carriere
affichage_personnage_richesse.innerHTML = personnage.carriere.revenu + " pièces"
affichage_personnage_image_armoirie.innerHTML = "<img src='https://armoria.herokuapp.com/?size=300&format=png' alt='Armoirie' />"
affichage_personnage_propriete.innerHTML = ""
affichage_personnage_historique.innerHTML = ""
affichage_personnage_amis.innerHTML = ""
    
    personnage._propriete.forEach(propriete => {

        let div_box_propriete = document.createElement("div")
        div_box_propriete.className = "box"
        let nom_propriete = document.createElement("p");
        nom_propriete.innerHTML = propriete;
        div_box_propriete.appendChild(nom_propriete);               
        

        affichage_personnage_propriete.appendChild(div_box_propriete);
    });

    
    
    personnage._historique.forEach(historique => {
        let div_box_historique = document.createElement("div")
        div_box_historique.className = "box"
        let nom_historique = document.createElement("p");
        nom_historique.innerHTML = historique.descriptif;
        div_box_historique.appendChild(nom_historique);               
        

        affichage_personnage_historique.appendChild(div_box_historique);
    });

    let affichage_amis = ""
    affichage_personnage_amis.innerHTML = affichage_amis
    if (personnage.amis.length == 0){
        affichage_amis = personnage.prenom + " " + personnage.nom + " n'a pas d'amis"
        affichage_personnage_amis.innerHTML = affichage_amis
    }   else {
        personnage._amis.forEach(amis => {
            let div_box_amis = document.createElement("div")
            div_box_amis.className = "box"
            let nom_amis = document.createElement("p");
            nom_amis.innerHTML = amis.nom;
            div_box_amis.appendChild(nom_amis);

            affichage_personnage_amis.appendChild(div_box_amis);
        })
    }

    

})

