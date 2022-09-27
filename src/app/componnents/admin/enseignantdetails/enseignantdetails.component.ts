import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enseignantdetails',
  templateUrl: './enseignantdetails.component.html',
  styleUrls: ['./enseignantdetails.component.css']
})
export class EnseignantdetailsComponent implements OnInit {


  constructor(private router: Router,private activeRoute : ActivatedRoute,
    private http: HttpClient) { }
id:any;
result: any;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      console.log(this.id);
      this.getAllTheEnseignant();
  }
  )}
getAllTheEnseignant(){
  this.http.get(`http://localhost:8080/professeur/${this.id}`).subscribe(data => {
    this.result = data;
    console.log(this.result);
  })
}

}
