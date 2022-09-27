import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }


  getNombreEtudiant(){
    return this.http.get("http://localhost:8080/etudiants/")
  }
  getNombreProfesseur(){
    return this.http.get("http://localhost:8080/professeur/")
  }
  getNombreDepartement(){
    return this.http.get("http://localhost:8080/departement/")
  }
  getNombreScolarite(){
    return this.http.get("http://localhost:8080/scolarite/")
  }
  getAllFiliere(){
    return this.http.get("http://localhost:8080/filiere/")}
  getAllMatiere(){
      return this.http.get("http://localhost:8080/matiere/")}
  getEtuDec(){
  return this.http.get("http://localhost:8080/etudiants/ab")}
  getEtuCroi(){
    return this.http.get("http://localhost:8080/etudiants/ab1")}
}
