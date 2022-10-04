import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DummyCrudService } from 'src/app/@core/dummy-crud.service';
export interface patienthistorymodel {
  patientdetailsiduniquekey: number
  patientweight:number
  patientheight:number
  smoking:string
  alcoholDrinking:string
  Drugusage:string
  surgiries:string

}

@Component({
  selector: 'app-history-patient',
  templateUrl: './history-patient.component.html',
  styleUrls: ['./history-patient.component.scss']
})
export class HistoryPatientComponent implements OnInit {

  _PatientHistoryformgroup!:FormGroup;

  constructor(public _fb:FormBuilder,public dialog:MatDialog,private dummyCrudService:DummyCrudService,private _dialogref:MatDialogRef <patienthistorymodel>) { }

  ngOnInit(): void {
    this._PatientHistoryformgroup! = this._fb.group({
      Height:new FormControl("",[Validators.required]),
      weight:new FormControl("",[Validators.required]),
      smoking:new FormControl("",[Validators.required]),
      alcoholdrinking:new FormControl("",[Validators.required]),
      drugusage:new FormControl("",[Validators.required]),
      surgeries:new FormControl("",[Validators.required]),
      
    })
    
  }
  onclicksavefn(){
    let payload:patienthistorymodel ={
      patientdetailsiduniquekey:Math.floor(Math.random() *999 - 1111),
      patientweight:this._PatientHistoryformgroup.value.Height,
      patientheight:this._PatientHistoryformgroup.value.weight,
      smoking:this._PatientHistoryformgroup.value.smoking,
      alcoholDrinking:this._PatientHistoryformgroup.value.alcoholDrinking,
      Drugusage:this._PatientHistoryformgroup.value.Drugusage,
      surgiries:this._PatientHistoryformgroup.value.surgiries,


    }
    this.dummyCrudService.SaveItemtoLocalStorage(payload)
    this._dialogref.close(payload);
    

      
  }
  onNoClick():void {
    this._dialogref.close();
  }
    }
  

