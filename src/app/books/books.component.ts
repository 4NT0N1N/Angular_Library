import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  items:Book[]

  constructor(private router: Router, private libraryService: LibraryService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
   }

  ngOnInit() {
    this.getLibrary()
  }

  getLibrary() {
    console.log('Liste livre')
    this.libraryService.getLibrary().subscribe(
      (resultat) => {
        console.log(resultat)
        this.items = resultat
      })
    console.log('fin')
  }

  delete(id: number) {
    if(confirm("Etes vous sûr de vouloir supprimer ce livre ?")) {
      console.log("delete")
      this.libraryService.delete(id).subscribe(
        resultat => {
          console.log(resultat)
        })

        this.router.navigated = false;
        this.router.navigate([this.router.url]);
    }
  }

}
