import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridOptions } from 'ag-grid-community';
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
  gridOptions: GridOptions<any>;
  constructor(public dialog: MatDialog, private dummyCrudService: DummyCrudService) {
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      // enable filtering 
      enableFilter: true
    };
    this.gridOptions.columnDefs = [
        {
            headerName: "Name",
            field: "id",
            width: 100
        },
        {
            headerName: "Age",
            field: "value",
          
            width: 100
        },
        {
            headerName: "Sex",
            field: "gender",
          
            width: 100
        },
        {
            headerName: "Check-in-date",
            field: "Date",
          
            width: 200
        },
        {
            headerName: "Actions",
            field: "value",
          
          
            width: 100
        },

    ];
    this.gridOptions.rowData = [
        {id: "sohith", value: 10,gender:"Male",Date:"12-12-2022",},
        {id: "Joshua", value: 15,gender:"Female",Date:"12-12-2022"},
        {id: "Raj", value: 20,gender:"male",Date:"12-12-2022"}
    ]

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
      panelClass: "full-screen-dialog",
      Width: "800px",
      Height: "700px",
    }
  }




}