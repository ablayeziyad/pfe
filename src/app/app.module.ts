import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componnents/header/header.component';
import { NavbarComponent } from './componnents/navbar/navbar.component';
import { BodyComponent } from './componnents/body/body.component';
import { LoginComponent } from './componnents/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './componnents/etudiant/etudiant.component';
import { SidebarComponent } from './componnents/sidebar/sidebar.component';
import { MonprofilComponent } from './componnents/monprofil/monprofil.component';
import { PlanDuCoursComponent } from './componnents/plan-du-cours/plan-du-cours.component';
import { ProgrammeComponent } from './componnents/programme/programme.component';
import { PresenceComponent } from './componnents/presence/presence.component';
import { EmploiDuTempComponent } from './componnents/emploi-du-temp/emploi-du-temp.component';
import { ModalComponent } from './componnents/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProfailComponent } from './componnents/my-profail/my-profail.component';
import { ProfailDetailComponent } from './componnents/profail-detail/profail-detail.component';
import { ProfComponent } from './componnents/prof/prof.component';
import { ProfPlusComponent } from './componnents/prof-plus/prof-plus.component';
import { CommuniquerComponent } from './componnents/communiquer/communiquer.component';
import {HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './componnents/admin/admin.component';
import { SidebaradminComponent } from './componnents/admin/sidebaradmin/sidebaradmin.component';
import { DashboardComponent } from './componnents/admin/dashboard/dashboard.component';
import { GetudiantComponent } from './componnents/admin/getudiant/getudiant.component';
import { EtudiantdetailsComponent } from './componnents/admin/etudiantdetails/etudiantdetails.component';
import { GenseignantComponent } from './componnents/admin/genseignant/genseignant.component';
import { EnseignantdetailsComponent } from './componnents/admin/enseignantdetails/enseignantdetails.component';
import { CommonModule } from '@angular/common';
import { ProfesseurComponent } from './componnents/professeur/professeur.component';
import { SidebarprofesseurComponent } from './componnents/professeur/sidebarprofesseur/sidebarprofesseur.component';
import { DashbordprofesseurComponent } from './componnents/professeur/dashbordprofesseur/dashbordprofesseur.component';
import { PresenceetudiantComponent } from './componnents/professeur/presenceetudiant/presenceetudiant.component';
import { SyllabusComponent } from './componnents/professeur/syllabus/syllabus.component';

import { SyllabusadminComponent } from './componnents/admin/syllabusadmin/syllabusadmin.component';
import { StatistiquesComponent } from './componnents/admin/statistiques/statistiques.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table' ;
import {MatPaginatorModule} from '@angular/material/paginator'; 





const routes: Routes= [


  {path: '', component: BodyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component:AdminComponent,

 children: [
   { path:'', component:DashboardComponent},
   {path: 'getudiant',component:GetudiantComponent, },
   {path:  'etudiantdetails/:id',component:EtudiantdetailsComponent},
   {path: 'genseignant',component:GenseignantComponent },
   {path: 'enseignantdetails/:id',component:EnseignantdetailsComponent},
   {path: 'syllabus',component:SyllabusadminComponent},
   {path: 'statistiques',component:StatistiquesComponent},
 ]
},
  
  {path: 'etudiant', component: SidebarComponent ,
  children:[
  

   { path:'', component:MonprofilComponent},
   
   { path:'emploi-du-temp', component:EmploiDuTempComponent},
   { path:'plan-du-cours', component:PlanDuCoursComponent},
   { path:'programme-statut', component:ProgrammeComponent},
   { path:"presence", component:PresenceComponent},
   { path:"demande", component:CommuniquerComponent},

 
   
  ]},
  
  {path: 'enseignant', component: SidebarprofesseurComponent ,
  children:[
  

   { path:'', component: DashbordprofesseurComponent},
   
   { path:'presence', component:PresenceetudiantComponent},
   { path:'syllabus', component:SyllabusComponent},
  //  { path:'plan-du-cours', component:PlanDuCoursComponent},
  //  { path:'programme-statut', component:ProgrammeComponent},
  //  { path:"presence", component:PresenceComponent},
  //  { path:"demande", component:CommuniquerComponent},

 
   
  ]}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    EtudiantComponent,
    SidebarComponent,
    MonprofilComponent,
    PlanDuCoursComponent,
    ProgrammeComponent,
    PresenceComponent,
    EmploiDuTempComponent,
    ModalComponent,
    ProfailDetailComponent,

    MyProfailComponent,

    ProfComponent,

    ProfPlusComponent,
   
    SidebarComponent,
    AdminComponent,
    SidebaradminComponent,
    GetudiantComponent,
    GenseignantComponent,
    ProfesseurComponent,
    SidebarprofesseurComponent,
    PresenceetudiantComponent,
    SyllabusComponent,
    DashbordprofesseurComponent,
    SyllabusadminComponent,
    GetudiantComponent,
    StatistiquesComponent,
   
    
   
   
   

      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule

  
   
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
