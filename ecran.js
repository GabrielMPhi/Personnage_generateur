document.getElementById("btn_generer").addEventListener("click", function(e){

    let personnage_factory = new PersonnageFactory()
    personnage = personnage_factory.creer_personnage()

    document.getElementById("nom_personnage").innerHTML = personnage.nom
    document.getElementById("prenom_personnage").innerHTML = personnage.prenom
    document.getElementById("surnom_personnage").innerHTML = personnage.surnom
    document.getElementById("taille_personnage").innerHTML = personnage.taille + " cm"
    document.getElementById("age_personnage").innerHTML = personnage.age + " ans"
    document.getElementById("carriere_personnage").innerHTML = personnage.nom_carriere
    document.getElementById("richesse_personnage").innerHTML = personnage.carriere.revenu + " pièces"
    document.getElementById("image_armoirie").innerHTML = "<img src='https://armoria.herokuapp.com/?size=300&format=png' alt='Armoirie' />"
    
    document.getElementById("propriete_personnage").innerHTML = ""
    personnage._propriete.forEach(propriete => {

        let div_box_propriete = document.createElement("div")
        div_box_propriete.className = "box"
        let nom_propriete = document.createElement("p");
        nom_propriete.innerHTML = propriete;
        div_box_propriete.appendChild(nom_propriete);               
        

        document.getElementById("propriete_personnage").appendChild(div_box_propriete);
    });






})

