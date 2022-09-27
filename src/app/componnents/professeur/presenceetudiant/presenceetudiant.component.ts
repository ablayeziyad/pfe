import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presenceetudiant',
  templateUrl: './presenceetudiant.component.html',
  styleUrls: ['./presenceetudiant.component.css']
})
export class PresenceetudiantComponent implements OnInit {
  showclass:boolean = false;
  showcsection:boolean = false;
  showmatiere:boolean = false;
   clas:any;
  classe :any;
  etudiant: any ;
  etudiantclass: any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getclasse()
  }
  
  toggleclasse(){
   this.showclass = !this.showclass;
  }
  togglesection(){
   this.showcsection=!this.showcsection;
   }
   togglematiere(){
    this.showmatiere= !this.showmatiere;
   }
   onsubmit(){
    console.log(this.clas)
   }
   onchange(){

   }
   getclasse(){
    this.http.get("http://localhost:8080/class/").subscribe(data=>{
    
      this.classe=data
      
    //  console.log(this.classe)
     
      
    })
   }

   getetudiant(val:any){
    this.http.get(`http://localhost:8080/class/${val.target.value}`).subscribe(data =>{
       this.etudiant=data
      // console.log(this.etudiant)
      this.etudiant.map((e:any) =>{
        e.map((t:any) =>{
           this.etudiant=t
           
          
        })
       console.log(this.etudiant.etudiants)
       this.etudiantclass=this.etudiant.etudiants
        // this.etudiantclass=this.t.etudiants
        // e.map((et:any) =>{
        //    console.log(et.etudiants)
        //     this.etudiantclass=et.etudiants
        // })
      })
       

     
      // console.log(val.target.value)
    //
   })

     }
   }
   

