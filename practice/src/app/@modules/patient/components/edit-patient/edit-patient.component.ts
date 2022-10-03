import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DummyCrudService } from 'src/app/@core/dummy-crud.service';
import { addpatientmodel } from '../add-patient/add-patient.component';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss', '../add-patient/add-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  _editpatientformgroup!: FormGroup;;
  gender = [
    { name: "Male", sex: "Male" },
    { name: "Female", sex: "Female" },
    { name: "Undisclosed", sex: "Undisclosed" }
  ]
  constructor(private dummyCrudService: DummyCrudService,private _dialogref:MatDialogRef<EditPatientComponent>, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: {
    patientdata: addpatientmodel
  }) { }

  ngOnInit(): void {
    this._editpatientformgroup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      sex: new FormControl("", [Validators.required]),
      checkindate: new FormControl("", [Validators.required]),
    })
    this.onclikPatch()
  }
  onclikPatch() {
    this._editpatientformgroup.patchValue({
      name: this.data.patientdata.patientname,
      age: this.data.patientdata.patientage,
      sex: this.data.patientdata.patientgender,
      checkindate: this.data.patientdata.checkindate
    })
  }

  Onclickupdate() {
    let payload: addpatientmodel = {
      patientdetailsiduniquekey: this.data.patientdata.patientdetailsiduniquekey,
      patientname: this._editpatientformgroup.value.name,
      patientage: this._editpatientformgroup.value.age,
      patientgender: this._editpatientformgroup.value.sex,
      checkindate: this._editpatientformgroup.value.checkindate,
    }
    this.dummyCrudService.UpdateItem(payload)
this._dialogref.close(payload)
  }

  onNoClick():void {
    this._dialogref.close();
  }
}

