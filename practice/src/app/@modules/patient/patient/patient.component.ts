import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DummyCrudService } from 'src/app/@core/dummy-crud.service';
import { AddPatientComponent, addpatientmodel } from '../components/add-patient/add-patient.component';
import { DeletePatientComponent } from '../components/delete-patient/delete-patient.component';
import { EditPatientComponent } from '../components/edit-patient/edit-patient.component';
import { HistoryPatientComponent } from '../components/history-patient/history-patient.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  tabledata: Array<addpatientmodel> = []
  constructor(public dialog: MatDialog, private dummyCrudService: DummyCrudService) {

  }


  ngOnInit(): void {
    this.getPatientData()
  }

  getPatientData() {
    this.tabledata = this.dummyCrudService.GetItemsFromLocalStoarge()
  }
  onclickopendialog() {
    const a = this.dialog.open(AddPatientComponent, {
      panelClass: "pop-up",
      minWidth: "140px",
      minHeight: "100px"
    })
    a.beforeClosed().subscribe((res) => {
      if (res) {
        this.getPatientData()
      }
    })
  }
  onclickeditdialog(patient: any) {
    console.log(patient)
    const a = this.dialog.open(EditPatientComponent, {
      data: {
        patientdata: patient
      }
    })
    a.beforeClosed().subscribe((res) => {
      if (res) {
        this.getPatientData()
      }
    })
  }
  onclickdelete(uniqueid: number) {
    const a = this.dialog.open(DeletePatientComponent, {
      data: {
        uniqueid
      }
    })
    a.beforeClosed().subscribe((res) => {
      if (res) {
        this.getPatientData()
      }
    })
  }
  onclickpatienthistory() {
    this.dialog.open(HistoryPatientComponent), {
      panelClass: "pop-up",
      minWidth: "500px",
      minHeight: "350px",
    }
  }




}