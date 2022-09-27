import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-profail-detail',
  templateUrl: './profail-detail.component.html',
  styleUrls: ['./profail-detail.component.css']
})
export class ProfailDetailComponent implements OnInit {
data: any
  constructor(private etudiantServiceService:EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiantServiceService.getALLEtudiant().subscribe(response=>{
      this.data = response
      console.log(this.data)
    })
  }
id:any ="Profil";
  tabChange(ids:any){
    this.id = ids;
console.log(this.id);
  }
}
