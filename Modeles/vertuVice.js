class VertuVice {

    constructor(valeurVertu, nomVertu){
        this._valeurVertu = valeurVertu,
        this._nomVertu=nomVertu
    }
    get valeurVertu() {
        return this._valeurVertu;
      }
    
      set valeurVertu(e) {
        this._valeurVertu = e;
      }
      get nomVertu() {
        return this._nomVertu;
      }
    
      set nomVertu(e) {
        this._nomVertu = e;
      }
} 