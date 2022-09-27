import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-etudiantdetails',
  templateUrl: './etudiantdetails.component.html',
  styleUrls: ['./etudiantdetails.component.css']
})
export class EtudiantdetailsComponent implements OnInit {
result:any;
id:any;
  constructor(private router: Router,private activeRoute : ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      console.log(this.id);
    this.getAllTheEtudiant();
  })
  }
  getAllTheEtudiant(){
    this.http.get(`http://localhost:8080/etudiants/${this.id}`).subscribe(data => {
      this.result = data;
      console.log(this.result);
    })
  }
}
