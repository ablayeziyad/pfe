import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-my-profail',
  templateUrl: './my-profail.component.html',
  styleUrls: ['./my-profail.component.css']
})
export class MyProfailComponent implements OnInit {
 data: any;
  constructor(private etudiantServiceService:EtudiantServiceService) { }

  ngOnInit(): void {

    
    this.etudiantServiceService.getALLEtudiant().subscribe(response=>{
      this.data = response
      console.log(this.data)
    })

  }

}
