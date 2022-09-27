import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  getAllEnseignant() {
    return this.http.get("http://localhost:8080/professeur/")
  }

  constructor(private http:HttpClient) { }


  getALLEtudiant(){
  return this.http.get("http://localhost:8080/etudiants/")
  }


}
