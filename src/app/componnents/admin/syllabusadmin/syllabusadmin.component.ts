import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabusadmin',
  templateUrl: './syllabusadmin.component.html',
  styleUrls: ['./syllabusadmin.component.css']
})
export class SyllabusadminComponent implements OnInit {
data: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSyllabus()
  }
  getSyllabus(){
    this.http.get(`http://localhost:8080/syllabus/`).subscribe((response)=>{
      this.data=response
      console.log(this.data)
    })
  }
getmatiere(value:any){
 
  this.http.get(`http://localhost:8080/syllabus/${value.target.value.toUpperCase()}`).subscribe((response)=>{
    console.log(value.target.value)
      this.data=response
      console.log(this.data)
    })

}
}
