class PersonnageFactory{

    constructor(){}

    creer_personnage(){
        let genre=this.generer_genre();
        let nom=this.generer_random_nom();
        let prenom=this.generer_random_prenom(genre);
        let surnom=this.generer_random_surnom(genre);
        let age=this.generer_age();
        let taille=this.generer_taille(genre);
        let carriere=this.generer_la_carriere();
        let nom_carriere=this.trouver_nom_carriere_selon_genre(genre, carriere);
        let richesse= this.generer_richesse(carriere);
        let vertu=this.generer_la_vertu();
        let vice=this.generer_le_vice();
        let propriete= this.generer_propriete(carriere);

        surnom = this.verifier_surnom_genre_taille(genre,taille, surnom)

        return new Personnage(genre, nom, prenom, surnom, age, taille, carriere, nom_carriere, richesse, vertu, vice, propriete)
    }

    generer_genre (){
        var choix_genre = ressources.liste_genre[Math.floor(Math.random() * ressources.liste_genre.length)]
        return choix_genre
    }

    generer_random_nom(){
        
        let choix_nom = ressources.noms_famille_personnages[Math.floor(Math.random() * ressources.noms_famille_personnages.length)]
        return choix_nom
    }

    generer_random_prenom(genre){
        
        let prenom_genere = "Bob"
        switch (genre){
        case "Homme":
            prenom_genere = ressources.liste_prenoms_habitant_homme[Math.floor(Math.random() * ressources.liste_prenoms_habitant_homme.length)]
            break; 
        case "Femme": 
            prenom_genere = ressources.liste_prenoms_habitant_femme[Math.floor(Math.random() * ressources.liste_prenoms_habitant_femme.length)]
            break; 
        case "Non-binaire":
            prenom_genere = ressources.liste_prenoms_personnages_total[Math.floor(Math.random() * ressources.liste_prenoms_personnages_total.length)]
            break;
        }
        
        return prenom_genere
    }

    generer_random_surnom(genre){
        
        let surnom_genere = "Le sans surnom"
        const probabilite_avoir_un_surnom = 90;   
        if((Math.floor(Math.random() * 100) < probabilite_avoir_un_surnom )){
        
            switch (genre){
                case "Homme":
                    surnom_genere = ressources.liste_de_surnom_homme[Math.floor(Math.random() * ressources.liste_de_surnom_homme.length)]
                    break; 
                case "Femme": 
                    surnom_genere = ressources.liste_de_surnom_femme[Math.floor(Math.random() * ressources.liste_de_surnom_femme.length)]
                    break;
                case "Non-binaire":
                    surnom_genere = ressources.liste_surnom_total[Math.floor(Math.random() * ressources.liste_surnom_total.length)]
                    break;
                }
            
            
        } else {
            surnom_genere = ""
        }
        
        return surnom_genere
    }

    generer_taille (genre){
        let taille_finale = getRandomNormalInt(70) + 135

        switch (genre){
            case "Homme":
                taille_finale = getRandomNormalInt(75) + 135
                break; 
            case "Femme": 
                taille_finale = getRandomNormalInt(65) + 135
                break; 
            case "Non-binaire":
                taille_finale = getRandomNormalInt(70) + 135
                break;
            }

        let random_pourcentage = getRandomInt(20)
        if (random_pourcentage == 1){
            taille_finale=taille_finale-5
        }
        else if (random_pourcentage == 4){
            taille_finale=taille_finale-getRandomInt(10)
        }
        else if (random_pourcentage == 5){
            taille_finale=taille_finale+getRandomInt(20)
        }

        return taille_finale
    }

    generer_age(){
        let age_final = 18
        let random_age = getRandomInt(10);
            if (random_age < 3){
                age_final = (getRandomNormalInt(10) + 18)
            }
            else if (random_age > 3 && random_age < 7){
                age_final = (getRandomNormalInt(30) + 18)
            }
            else if (random_age >= 7 ){
                age_final = (getRandomNormalInt(45) + 18)
            }
       
        return age_final
    }

    generer_la_carriere(){
        
        let carriere_genere = ressources.liste_des_carrieres_possible[Math.floor(Math.random() * ressources.liste_des_carrieres_possible.length)]
        
        
        return carriere_genere
    }

    trouver_nom_carriere_selon_genre(genre, carriere){
        let nom_carriere_pour_perso
        if (genre == "Homme"){
            nom_carriere_pour_perso = carriere.nom_masculin
        }
        else if (genre == "Femme"){
            nom_carriere_pour_perso = carriere.nom_feminin
        }
        else {
            let random_choix_carriere_genre = getRandomInt(2)
            if (random_choix_carriere_genre <= 1){
                nom_carriere_pour_perso = carriere.nom_masculin
            }
            else {
                nom_carriere_pour_perso = carriere.nom_feminin
            }
        }
        return nom_carriere_pour_perso

    }

    generer_richesse(carriere){
        let richesse_depart_personnage
        richesse_depart_personnage = carriere.revenu * 5

        return richesse_depart_personnage
    }


    generer_la_vertu(){
        let generer_vertu = "Sans vertu"
        generer_vertu = ressources.liste_des_vertus[Math.floor(Math.random() * ressources.liste_des_vertus.length)]
        return generer_vertu
    }




    generer_le_vice(){
        let generer_vice = "Sans vice"
        generer_vice = ressources.liste_des_vices[Math.floor(Math.random() * ressources.liste_des_vices.length)]
        return generer_vice
    }






    verifier_surnom_genre_taille(genre, taille, surnom){

        if (taille >= 188 && genre=="Homme"){
            surnom = "le très grand"
        } 
        else if (taille >= 188 && genre=="Femme"){
            surnom = "la très grande"
        } 
        return surnom
    }


    generer_propriete(carriere){
        let propriete_personnage = []
        carriere.propriete.forEach(propriete => {
            propriete_personnage.push(propriete)
        })

        return propriete_personnage
    }


}