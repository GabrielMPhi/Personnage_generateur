class Personnage {
  constructor(
    genre,
    nom,
    prenom,
    surnom,
    age,
    taille,
    carriere,
    nom_carriere,
    richesse,
    vertu,
    vice,
    propriete,
    historique
  ) {
    this._genre = genre;
    this._nom = nom;
    this._prenom = prenom;
    this._surnom = surnom;
    this._age = age;
    this._taille = taille;
    this._carriere = carriere;
    this._nom_carriere = nom_carriere;
    this._richesse = richesse;
    this._vertu = vertu;
    this._vice = vice;
    this._propriete = propriete;
    this._historique = historique;
  }

  get nom() {
    return this._nom;
  }

  set nom(e) {
    this._nom = e;
  }

  get prenom() {
    return this._prenom;
  }

  set prenom(e) {
    this._prenom = e;
  }

  get surnom() {
    return this._surnom;
  }

  set surnom(e) {
    this._surnom = e;
  }

  get age() {
    return this._age;
  }

  set age(e) {
    this._age = e;
  }

  get taille() {
    return this._taille;
  }

  set taille(e) {
    this._taille = e;
  }

  get carriere() {
    return this._carriere;
  }

  set carriere(e) {
    this._carriere = e;
  }

  get nom_carriere() {
    return this._nom_carriere;
  }

  set nom_carriere(e) {
    this._nom_carriere = e;
  }

  get richesse() {
    return this._richesse;
  }

  set richesse(e) {
    this._richesse = e;
  }

  get vertu() {
    return this._vertu;
  }

  set vertu(e) {
    this._vertu = e;
  }

  get vice() {
    return this._vice;
  }

  set vice(e) {
    this._vice = e;
  }

  get propriete() {
    return this._propriete;
  }

  set propriete(e) {
    this._propriete = e;
  }

  get historique() {
    return this._historique;
  }

  set historique(e) {
    this._historique = e;
  }
}
