import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  data:any;
  chapitre:any;
  validation:any;
  progression:any;
  sous_chapitre:any;
  closeResult= '';
 
  constructor(private http:HttpClient,private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ngOnInit(): void {
    this.getSyllabus();
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
  getSyllabus(){
    this.http.get("http://localhost:8080/syllabus/").subscribe((response)=>{
      this.data=response
      console.log(this.data)
    })
  }
  onSubmit(){
    this.http.post("http://localhost:8080/syllabus/",{
      chapitre:this.chapitre,
      sous_chapitre:this.sous_chapitre,
      validation:this.validation,
      progression:this.sous_chapitre,
      header:{
        'content-Type':'application/json',
      }

    }
    ).subscribe(data=>{
      console.log(data)
    })
     close()

  }
  }
