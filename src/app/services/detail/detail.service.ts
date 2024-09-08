import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  public reportType: string = "TC";
  public reportTitleDate: string = "";
  public reportLocation: string = "";
  public reportDate: string = "";
  public reportTime: string = "";
  public reportNarrative: string = "";
  public reportPreparedBy: string = this._cookieService.get('reportPreparedBy') || "";
  public reportEmployeeNum: string = this._cookieService.get('reportEmployeeNum') || "";
  public reportStationUnit: string = this._cookieService.get('reportStationUnit') || "";
  public reportUnitCar: string = this._cookieService.get('reportUnitCar') || "";

  public date: NgbDateStruct;

  constructor(private _cookieService: CookieService) {
    let currentDate = new Date();
    this.date = { day: currentDate.getUTCDate(), month: currentDate.getUTCMonth() + 1, year: currentDate.getUTCFullYear() };
    this.reportTime = `${String(currentDate.getUTCHours()).padStart(2, '0')}:${String(currentDate.getUTCMinutes()).padStart(2, '0')}`;
    this.setTitleDate(this.date);
  }

  setTitleDate(ngbDate: NgbDateStruct) {
    this.date = ngbDate;
    const day = ngbDate.day.toString().padStart(2, '0'); 
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = months[ngbDate.month - 1]; 
    const year = ngbDate.year.toString().slice(-2); 

    this.reportTitleDate = `${day}/${month}/${year}`;
    this.reportDate = `${day}/${month}/${ngbDate.year}`;
  }


}
