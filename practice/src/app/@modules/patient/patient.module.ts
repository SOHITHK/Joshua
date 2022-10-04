import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MaterialModule } from 'src/app/@shared/materail/materail.module';
import { AgGridModule } from 'ag-grid-angular';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { HistoryPatientComponent } from './components/history-patient/history-patient.component'



@NgModule({
  declarations: [
    
    PatientComponent,
         AddPatientComponent,
         DeletePatientComponent,
         EditPatientComponent,
         HistoryPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule,
    AgGridModule,
    HttpClientModule,

    FormsModule,ReactiveFormsModule
  ]
})
export class PatientModule { }
