import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


// const today = new Date();
// const month = today.getMonth();
// const year = today.getFullYear();

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
 
 
  // campaignOne = new FormGroup({
  //   start: new FormControl(new Date(year, month, 13)),
  //   end: new FormControl(new Date(year, month, 16)),
  // });
  // campaignTwo = new FormGroup({
  //   start: new FormControl(new Date(year, month, 15)),
  //   end: new FormControl(new Date(year, month, 19)),
  // });
  // campaignOne1 = new FormGroup({
  //   start: new FormControl(new Date(year, month, 13)),
  //   end: new FormControl(new Date(year, month, 16)),
  // });
  // campaignTwo2 = new FormGroup({
  //   start: new FormControl(new Date(year, month, 15)),
  //   end: new FormControl(new Date(year, month, 19)),
  // });

  constructor() { }
  date1!:string
  date2!:string

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','calss'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator:any ;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
  onChange1(e: any) {
    console.log(e.getDate()+"/"+ e.getMonth()+"/"+e.getFullYear())
  }
  onChange2(e: any) {
    console.log(e.getDate()+"/"+ e.getMonth()+"/"+e.getFullYear())
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  calss: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',calss:'I'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',calss:'Irm2'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',calss:'Irm2'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',calss:'Irm2'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',calss:'Irm2'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',calss:'Irm2'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',calss:'Irm2'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',calss:'Irm2'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',calss:'Irm2'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',calss:'Irm2'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',calss:'Irm2'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',calss:'Irm2'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',calss:'Irm2'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',calss:'Irm2'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',calss:'Irm2'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',calss:'Irm2'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',calss:'Irm2'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar',calss:'Irm2'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K',calss:'Irm2'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',calss:'Irm2'},
];