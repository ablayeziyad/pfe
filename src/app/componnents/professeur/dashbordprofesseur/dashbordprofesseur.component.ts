import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfserviceService } from 'src/app/services/profservice.service';

@Component({
  selector: 'app-dashbordprofesseur',
  templateUrl: './dashbordprofesseur.component.html',
  styleUrls: ['./dashbordprofesseur.component.css']
})
export class DashbordprofesseurComponent implements OnInit {
nbClasses: any;
proflast: any;
nbMatiere: any;
nbEtudiant: any;
prof: any;
professeur: any;
profclass: any;
profetud: any;
  constructor(private profservice: ProfserviceService) { }

  ngOnInit(): void {
    this.profservice.getNbClasses().subscribe(result => {
      this.nbClasses = result
      console.log(this.nbClasses)
    })
    this.profservice.getNbEtudiant().subscribe(result => {
      this.nbEtudiant=result
      console.log(this.nbEtudiant)
    })
    this.profservice.getNbMatiere().subscribe(result =>{
      this.nbMatiere= result
      console.log(this.nbMatiere)
    })
    this.profservice.getProf().subscribe(result =>{
      this.prof= result
      this.professeur=this.prof
      this.profetud= this.professeur.etudiant
      // this.profetud.map((etu:any)=>{
      //   this.profetud=[].concat(etu.etudiants)
      //   console.log(etu.etudiants)
      //   })
      console.log(this.profetud)
        })

  }


}
  // // this.profclass=this.profetud.classes
      // this.profclass=this.professeur.classes
      // this.profclass.map((etu:any)=>{
      // //  this.profetud =etu.etudiants
      // this.profetud=[].concat(etu.etudiants)
      // // console.log(this.prof)
      // })
