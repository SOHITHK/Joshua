import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyCrudService {

  private patientDetialsKey = "patientDetails";
  _patientDetails: Array<any> = [];
  constructor() {
    this._patientDetails = this.GetItemsFromLocalStoarge();
  }

  SaveItemtoLocalStorage(empDataTosave: any) {
    this._patientDetails.push(empDataTosave);
    this.StoreInLocalStorage(this._patientDetails);
  }

  GetItemsFromLocalStoarge() {
    let cartItemsBackup = localStorage.getItem(this.patientDetialsKey);
    if (cartItemsBackup !== null) {
      return JSON.parse(cartItemsBackup);
    } else {
      return [];
    }
  }

  UpdateItem(newItem: any) {
    console.log(this._patientDetails, "old dtaa");
    this._patientDetails.map((data: any) => {
      if (
        data.patientdetailsiduniquekey === newItem.patientdetailsiduniquekey
      ) {
        (data.comments = newItem.comments),
          (data.patientdetailsiduniquekey =
            newItem.patientdetailsiduniquekey),
          (data.patientname = newItem.patientname),
          (data.patientage = newItem.patientage),
          (data.patientgender =
            newItem.patientgender),
          (data.checkindate =
            newItem.checkindate);
      }
    });
    this.StoreInLocalStorage(this._patientDetails);
  }

  DeleteItem(selectedItem: any) {
    this._patientDetails = this.GetItemsFromLocalStoarge();
    const itemIndex = this._patientDetails.findIndex(
      (d) =>
        d.patientdetailsiduniquekey === selectedItem
    );
    if (itemIndex > -1) {
      this._patientDetails.splice(itemIndex, 1);
    }
    this.StoreInLocalStorage(this._patientDetails);
  }

  StoreInLocalStorage(_patientDetails: any) {
    localStorage.setItem(
      this.patientDetialsKey,
      JSON.stringify(_patientDetails)
    );
  }
}
