import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Chartist from 'chartist';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  dataetudiant: any
  nombreEtudiant?:Number
  dataprofesseur: any
  nombreProf?:Number
  dataDepartement: any
  nombreDepartement?:Number
  dataScolarite: any
  nombreScolarite?:Number
  
  constructor(private adminservice:AdminserviceService) { }
  startAnimationForLineChart(chart: Chartist.IChartistLineChart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data: { type: string; element: { animate: (arg0: { d?: { begin: number; dur: number; from: any; to: any; easing: Chartist.IChartistEasingDefinition; }; opacity?: { begin: number; dur: any; from: number; to: number; easing: string; }; }) => void; }; path: { clone: () => { (): any; new(): any; scale: { (arg0: number, arg1: number): { (): any; new(): any; translate: { (arg0: number, arg1: any): { (): any; new(): any; stringify: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; stringify: { (): any; new(): any; }; }; }; chartRect: { height: () => any; }; }) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};
startAnimationForBarChart(chart: Chartist.IChartistBarChart){
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data: { type: string; element: { animate: (arg0: { opacity: { begin: number; dur: any; from: number; to: number; easing: string; }; }) => void; }; }) {
      if(data.type === 'bar'){
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
      }
    });

    seq2 = 0;
};
 
  ngOnInit() {
  
    this.adminservice.getNombreEtudiant().subscribe(data => {
      this.dataetudiant=data
      this.nombreEtudiant=this.dataetudiant.length 
      
    })
    this.adminservice.getNombreProfesseur().subscribe(data => {
      this.dataprofesseur=data
      this.nombreProf=this.dataprofesseur.length 
      
    })
    this.adminservice.getNombreDepartement().subscribe(data => {
      this.dataDepartement=data
      this.nombreDepartement=this.dataDepartement.length 
      
    })
    this.adminservice.getNombreScolarite().subscribe(data => {
      this.dataScolarite=data
      this.nombreScolarite=this.dataScolarite.length 
      
    })
    var chart = new Chartist.Line('#dailySalesChart', {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      series: [
        [20, 40, 80, 100, 120,140],
      ]
    }, {
      low: 0,
      showArea: true,
      showPoint: false,
      fullWidth: true
    });
    
    chart.on('draw', function(data: { type: string; element: { animate: (arg0: { d: { begin: number; dur: number; from: any; to: any; easing: Chartist.IChartistEasingDefinition; }; }) => void; }; index: number; path: { clone: () => { (): any; new(): any; scale: { (arg0: number, arg1: number): { (): any; new(): any; translate: { (arg0: number, arg1: any): { (): any; new(): any; stringify: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; stringify: { (): any; new(): any; }; }; }; chartRect: { height: () => any; }; }) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
    var chart = new Chartist.Line('#completedTasksChart', {
      labels: ['IRM2', 'Masi', 'IRM4', 'Masi2', 'Masi4'],
      series: [
          [12, 47, 7, 17, 23, 18, 38]
      ]
    }, {
      low: 0,
      showArea: true,
      showPoint: false,
      fullWidth: true
    });
    
    chart.on('draw', function(data: { type: string; element: { animate: (arg0: { d: { begin: number; dur: number; from: any; to: any; easing: Chartist.IChartistEasingDefinition; }; }) => void; }; index: number; path: { clone: () => { (): any; new(): any; scale: { (arg0: number, arg1: number): { (): any; new(): any; translate: { (arg0: number, arg1: any): { (): any; new(): any; stringify: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; stringify: { (): any; new(): any; }; }; }; chartRect: { height: () => any; }; }) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
    var chart = new Chartist.Line('#websiteViewsChart', {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
  
      ]
    }, {
      low: 0,
      showArea: true,
      showPoint: false,
      fullWidth: true
    });
    
    chart.on('draw', function(data: { type: string; element: { animate: (arg0: { d: { begin: number; dur: number; from: any; to: any; easing: Chartist.IChartistEasingDefinition; }; }) => void; }; index: number; path: { clone: () => { (): any; new(): any; scale: { (arg0: number, arg1: number): { (): any; new(): any; translate: { (arg0: number, arg1: any): { (): any; new(): any; stringify: { (): any; new(): any; }; }; new(): any; }; }; new(): any; }; stringify: { (): any; new(): any; }; }; }; chartRect: { height: () => any; }; }) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
    
  

  
  }
 

}
