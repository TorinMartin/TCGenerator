import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

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
  public reportPreparedBy: string = this._cookieService.get('reportPreparedBy') || "";
  public reportEmployeeNum: string = this._cookieService.get('reportEmployeeNum') || "";
  public reportStationUnit: string = this._cookieService.get('reportStationUnit') || "";
  public reportUnitCar: string = this._cookieService.get('reportUnitCar') || "";

  constructor(private _cookieService: CookieService) { }


}
