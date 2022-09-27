import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private http:HttpClient, private etudiantServiceService:EtudiantServiceService) { }

  ngOnInit(): void {
   
  }

}
