export class Book {
    id:number
    titre:string
    auteur:string
    nbPages:number
    constructor(id:number,titre:string,auteur = "",nbPages:number) {
      this.id=id
      this.titre=titre
      this.auteur=auteur
      this.nbPages = nbPages
    }
}
