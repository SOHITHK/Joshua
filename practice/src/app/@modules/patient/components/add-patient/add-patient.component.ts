import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DummyCrudService } from 'src/app/@core/dummy-crud.service';
export interface addpatientmodel {
  patientdetailsiduniquekey: number
  patientname: string
  patientage: number
  patientgender: string

  checkindate: string
}
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  _addpatientformgroup!: FormGroup;

  
  gender = [
    { name: "Male", sex: "Male" },
    { name: "Female", sex: "Female" },
    { name: "Undisclosed", sex: "Undisclosed" }
  ]
  title = 'Angular Form Validation Tutorial';
   angForm !: FormGroup;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private dummyCrudService: DummyCrudService,private _dialogref:MatDialogRef<AddPatientComponent>
    ) { this.ngOnInit}

   
 


  ngOnInit(): void {
    this._addpatientformgroup = this.fb.group({
      name: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      sex: new FormControl("", [Validators.required]),
      checkindate: new FormControl("", [Validators.required]),
    })
    
  }
  
  onclicksavefn() {
    let payload: addpatientmodel = {
      patientdetailsiduniquekey: Math.floor(Math.random() * 9999 - 1111),
      patientname: this._addpatientformgroup.value.name,
      patientage: this._addpatientformgroup.value.age,
      patientgender: this._addpatientformgroup.value.sex,
      checkindate: this._addpatientformgroup.value.checkindate,
    }
    this.dummyCrudService.SaveItemtoLocalStorage(payload)
    this._dialogref.close(payload);
  }
  onNoClick():void {
    this._dialogref.close();
  }
 
  }
  
 
 
  






