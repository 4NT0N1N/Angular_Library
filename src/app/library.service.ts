import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Book } from './book'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {


  library = "http://localhost:5000/livres/"

  constructor(private  http: HttpClient) { }

  getLibrary() : Observable<Book[]> {
    return this.http.get<Book[]>(this.library)
    }
  add(id: number,titre:string,auteur = "",nbPages:number): Observable<Book>{
    return this.http.post<Book>(this.library, { "id":id, "titre":titre, "auteur":auteur,"nbPages":nbPages })
  }
  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(this.library+id)
  }
  update(id: number,titre:string,auteur = "",nbPages:number): Observable<Book> {
    return this.http.put<Book>(this.library, { "id":id, "titre":titre, "auteur":auteur,"nbPages":nbPages })
  }
}
