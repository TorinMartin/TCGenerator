import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  public reportType: string = "TC";
  public reportNumber: string = "000";
  public reportLocation: string = "";
  public reportDate: string = "";
  public reportTime: string = "";
  public reportNarrative: string = "";
  public reportPreparedBy: string = "";
  public reportEmployeeNum: string = "";
  public reportStationUnit: string = "";
  public reportUnitCar: string = "";

  constructor() { }


}
