import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../book';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private router: Router, private libraryService: LibraryService) { }

  ngOnInit() {
  }

  add(id:number, titre:string, auteur = "", nbPages:number){
    this.libraryService.add(id, titre, auteur, nbPages).subscribe(
      resultat => {
        console.log(resultat)
      })
}

}
