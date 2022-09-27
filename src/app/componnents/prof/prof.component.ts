import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
data: any
  constructor(private etudiantServiceService:EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiantServiceService.getALLEtudiant().subscribe(response=>{
      this.data = response
      console.log(this.data)
    })
  }

}
