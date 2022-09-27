import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfserviceService {

  constructor(private http: HttpClient) {
   }
   getNbClasses() {
    return this.http.get(`http://localhost:8080/professeur/1/nbClasses`)
  }
  getNbEtudiant() {
    return this.http.get(`http://localhost:8080/professeur/1/nbEtudiant`)
  }
  getNbMatiere() {
    return this.http.get(`http://localhost:8080/professeur/1/nbMatiere`)
  }
  getProf(){
    return this.http.get(`http://localhost:8080/professeur/1`)
  }
  }
