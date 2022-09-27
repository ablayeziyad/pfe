import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminserviceService } from 'src/app/services/adminservice.service';

import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
const httpotions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',


  })
  }
@Component({
  selector: 'app-genseignant',
  templateUrl: './genseignant.component.html',
  styleUrls: ['./genseignant.component.css']
})
export class GenseignantComponent implements OnInit {

prof:any;
mydata:any;
data: any;
data1:any;
data3:any;
Mesdonne:any;
showcsection:boolean = false;
etudiant: any;
etudiant1: any;
clas:any;
clas1:any;
clas2:any;
closeResult="";
  constructor(private etudiantS : EtudiantServiceService,
    private admin:AdminserviceService,private modalService:NgbModal ,private router: Router,private http: HttpClient) { }




     open(content: any) {
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });
   }


    private getDismissReason(reason: any): string {
     if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
     } else {
     return `with: ${reason}`;
     }
     }











  displayValue ="";
  displayValue1 ="";
  displayValue2 ="";
  displayValue3 ="";
  displayValue4 ="";
  ngOnInit(): void {
    this.etudiantS.getAllEnseignant().subscribe(data => {
      this.mydata = data;
      this.prof= this.mydata;
      console.log(this.prof)

    })
    this.Matiere();
    this.Filiere();
  }

  post(): any {
    // let body = `username=this.email}&password=${this.password}`;
     this.http.post("http://localhost:8080/professeur/",{prenom:this.displayValue,nom:this.displayValue1,absence:this.displayValue2,motDePass:this.displayValue3,telephone:this.displayValue4},httpotions)
     .subscribe(() => {
    }
    )
    }



    Matiere(){
      this.admin.getAllMatiere().subscribe(response => {
        this.data=response
        console.log(this.data)
      })
    }
    Filiere(){
      this.admin.getAllFiliere().subscribe(response => {
        this.data1=response
        console.log(this.data1)
      })
    }

    getetudiant(val:any){
      this.http.get(`http://localhost:8080/filiere/${val.target.value}`).subscribe(data3 =>{
         this.etudiant=data3
         console.log(data3)
         this.etudiant1=this.etudiant.professeurs
     })}
    getetudiant1(val1:any){
      console.log(val1.target.value)
      this.http.get(`http://localhost:8080/matiere/mat/${val1.target.value}`).subscribe(data3 =>{
         this.etudiant=data3
         this.etudiant1=this.etudiant.professeurs
        console.log(this.etudiant)
     })}
       getetudiantCroissant(val2:any) {
  console.log("ziyad")
        this.http.get(`http://localhost:8080/etudiants/${val2.target.value}`).subscribe(data3 =>{
           this.etudiant1=data3
          console.log(data3)
       })}




  Delete(id: any){
    return this.http.delete(`http://localhost:8080/professeur/${id}`)
    .subscribe(()=> {
     window.location.reload();
   });
   }

getValue(value: any){
console.warn(value)
this.displayValue=value;
}
getValue1(value: any){
  console.warn(value)
  this.displayValue1=value;
  }
}
