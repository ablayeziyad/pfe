import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private etudiantServiceService:EtudiantServiceService) { }

  ngOnInit(): void {

  }

}
