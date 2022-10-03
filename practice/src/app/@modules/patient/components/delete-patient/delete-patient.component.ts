import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DummyCrudService } from 'src/app/@core/dummy-crud.service';
import { addpatientmodel } from '../add-patient/add-patient.component';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {
  tabledata: Array<addpatientmodel> = []
  constructor(private _dialogref:MatDialogRef<DeletePatientComponent>,
    private dummyCrudService: DummyCrudService,@Inject (MAT_DIALOG_DATA) private data:{
    
    uniqueid:number;
    
  }) { }

  ngOnInit(): void {

  }
OnclickDeleteData(){

  this.dummyCrudService.DeleteItem(this.data.uniqueid)
  this._dialogref.close(true);


}

onNoClick():void {
  this._dialogref.close();
}
}
