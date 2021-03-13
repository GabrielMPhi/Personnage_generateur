class Moralite {

    constructor(genre){
        this._courage = this.generer_vertu_courage(genre),
        this._generosite=this.generer_vertu_generosite(genre),
        this._ambition=this.generer_vertu_courage(genre),
        this._modestie=this.generer_vertu_courage(genre),
        this._humour=this.generer_vertu_courage(genre),
        this._amitie=this.generer_vertu_courage(genre),
        this._temperance=this.generer_vertu_courage(genre),
        this._composure=this.generer_vertu_courage(genre),
        this._controle_de_soi=this.generer_vertu_courage(genre)
    }

    generer_vertu_courage(genre){
        let valeur_courage = getRandomInt(15)
        let mot_courage_a_afficher
            if (valeur_courage <= 5){
                    mot_courage_a_afficher = 'Lâche'
            } else if (valeur_courage >= 10){
                    mot_courage_a_afficher = 'Téméraire'
            } else {
                if (genre == "Homme"){
                    mot_courage_a_afficher = 'Courageux'
                } else {
                    mot_courage_a_afficher = 'Courageuse'
                }
            }
    
        return new VertuVice(valeur_courage, mot_courage_a_afficher)
    }


    generer_vertu_generosite(genre){
        let valeur_generosite = getRandomInt(15)
        let mot_generosite_a_afficher
            if (valeur_generosite <= 5){
                mot_generosite_a_afficher = 'Avare'
            } else if (valeur_generosite >= 10){
                if (genre == "Homme"){
                    mot_generosite_a_afficher = 'Extravagant'
                } else {
                    mot_generosite_a_afficher = 'Extravagante'
                }
            } else {
                if (genre == "Homme"){
                    mot_generosite_a_afficher = 'Généreux'
                } else {
                    mot_generosite_a_afficher = 'Généreuse'
                }
            }
    
        return new VertuVice(valeur_generosite, mot_generosite_a_afficher)
    }

}
