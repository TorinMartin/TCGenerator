import { Injectable } from '@angular/core';
import { DetailService } from '../detail/detail.service';
import { PersonService } from '../person/person-service.service';
import { EvidenceService } from '../evidence/evidence.service';
import { VehicleService } from '../vehicle/vehicle-service.service';
import { Exhibit } from '../evidence/exhibit.model';
import { CookieService } from 'ngx-cookie-service';
import { Evidence } from '../evidence/evidence.model';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

    constructor(
        private _detailService: DetailService,
        private _personService: PersonService,
        private _vehicleService: VehicleService,
        private _evidenceService: EvidenceService,
        private _cookieService: CookieService,
    ) { }

    generateTitle(): string {
        let type = this._detailService.reportType;
        let num = this._detailService.reportNumber;
        let location = this._detailService.reportLocation;

        let title = `[TC-${num}] ${location}`;

        return type === 'DITC' ? `[DITC]${title}` : title;
    }

    generate() {
        let report = this._reportTemplate;

        report = report.replace('{{reportType}}', this._detailService.reportType);
        report = report.replace('{{reportNumber}}', this._detailService.reportNumber);

        report = report.replace('{{reportLocation}}', this._detailService.reportLocation);
        report = report.replace('{{reportDate}}', this._detailService.reportDate);
        report = report.replace('{{reportTime}}', this._detailService.reportTime);

        report = report.replace('{{involvedPersonTemplate}}', this.buildInvolvedPersonSection());

        report = report.replace('{{involvedVehiclesTemplate}}', this.buildInvolveVehiclesSection());

        report = report.replace('{{reportNarrative}}', this._detailService.reportNarrative);

        report = report.replace('{{evidence}}', this.buildEvidenceSection());

        report = report.replace('{{reportPreparedBy}}', this._detailService.reportPreparedBy);
        report = report.replace('{{reportEmployeeNumber}}', this._detailService.reportEmployeeNum);
        report = report.replace('{{reportStationUnit}}', this._detailService.reportStationUnit);
        report = report.replace('{{reportUnitCar}}', this._detailService.reportUnitCar);

        this._cookieService.set('reportPreparedBy', this._detailService.reportPreparedBy, 365);
        this._cookieService.set('reportEmployeeNum', this._detailService.reportEmployeeNum, 365);
        this._cookieService.set('reportStationUnit', this._detailService.reportStationUnit, 365);
        this._cookieService.set('reportUnitCar', this._detailService.reportUnitCar, 365);

        return report;
    }

    private buildInvolvedPersonSection(): string {
        let result = '';

        for (let person of this._personService.getPersons()) {
            let personEntry = this._involvedPersonTemplate;

            personEntry = personEntry.replace('{{id}}', person.id);
            personEntry = personEntry.replace('{{lastName}}', person.lastName);
            personEntry = personEntry.replace('{{firstName}}', person.firstName);
            personEntry = personEntry.replace('{{sex}}', person.sex);
            personEntry = personEntry.replace('{{age}}', person.age);
            personEntry = personEntry.replace('{{belted}}', person.belted);
            personEntry = personEntry.replace('{{status}}', person.status);

            result += personEntry;
        }

        return result;
    }

    private buildInvolveVehiclesSection(): string {
        let result = '';

        for (let vehicle of this._vehicleService.getVehicles()) {
            let vehicleEntry = this._involvedVehiclesTemplate;

            vehicleEntry = vehicleEntry.replace('{{id}}', 'V' + vehicle.id);
            vehicleEntry = vehicleEntry.replace('{{driver}}', vehicle.driver);
            vehicleEntry = vehicleEntry.replace('{{passengers}}', vehicle.passengers);
            vehicleEntry = vehicleEntry.replace('{{plate}}', vehicle.tag);
            vehicleEntry = vehicleEntry.replace('{{color}}', vehicle.color);
            vehicleEntry = vehicleEntry.replace('{{model}}', vehicle.model);
            vehicleEntry = vehicleEntry.replace('{{damage}}', vehicle.damage);
            vehicleEntry = vehicleEntry.replace('{{towed}}', vehicle.towed);

            result += vehicleEntry;
        }

        return result;
    }

    private buildExhibitSection(exhibit: Exhibit): string {
        let result = ''

        //for (let e of exhibit.evidence) {
        exhibit.evidence.forEach((e: Evidence, i: number) => {
            switch (e.type) {
                case 'text':
                    result += i === 0 ? `${e.value}` :
                    `
                        ${e.value}`;
                    break;
                case 'image':
                    result += i === 0 ? `[img]${e.value}[/img]` :
                    `
                        [img]${e.value}[/img]`;
                    break;
                case 'do':
                    result += i === 0 ? `[me]${e.value}[/me]` :
                    `
                        [me]${e.value}[/me]`;
                    break;
                default:
                    result += i === 0 ? `${e.value}` :
                    `
                        ${e.value}`;
                    break;
            }
        });

        return result;
    } 

    private buildEvidenceSection(): string {
        let result = '';

        for (let exhibit of this._evidenceService.getExhibits()) {
            result += this._evidenceService.generateTitle(exhibit);
            let content = this.buildExhibitSection(exhibit);

            if (exhibit.isSpoiler) {
                result += 
                `
                    [spoiler]
                        ${content}
                    [/spoiler]
                `;
            }
            else {
                result +=
                `
                    ${content}
                `
            }
        }

        return result;
    }

    private _involvedPersonTemplate: string =
`
[tr][td][size=85]{{id}}
[/size][/td]
[td][size=85]{{lastName}}
[/size][/td]
[td][size=85]{{firstName}}
[/size][/td]
[td][size=85]{{sex}}
[/size][/td]
[td][size=85]{{age}}
[/size][/td]
[td][size=85]{{belted}}
[/size][/td]
[td][size=85]{{status}}
[/size][/td][/tr]
`;

    private _involvedVehiclesTemplate: string =
`
[tr][td][size=85]{{id}}
[/size][/td]
[td][size=85]{{driver}}
[/size][/td]
[td][size=85]{{passengers}}
[/size][/td]
[td][size=85]{{plate}}
[/size][/td]
[td][size=85]{{color}}
[/size][/td]
[td][size=85]{{model}}
[/size][/td]
[td][size=85]{{damage}}
[/size][/td]
[td][size=85]{{towed}}
[/size][/td][/tr]
`;

    private _reportTemplate: string = 
`
[divbox=white][center][lssdheader][/lssdheader][/center]

[b][center]Traffic Collision Report Form[/center][/b]

[center][size=150]{{reportType}}-({{reportNumber}})
[/size][/center]
[hr][/hr]
[table=Arial][tr]
[td][size=85][b]LOCATION OF COLLISION[/b][/size][/td]
[td][size=85][b]DATE OF COLLISION[/b][/size][/td]
[td][size=85][b]TIME OF COLLISION[/b][/size][/td]
[/tr]
[tr]
[td][size=85]{{reportLocation}}
[/td]
[td][size=85]{{reportDate}}
[/size][/td]
[td][size=85]{{reportTime}}
[/size][/td]
[/tr][/table]
[b][center]INVOLVED PEOPLE[/center][/b]
[center][size=87]CODES: D - Driver (1, 2, 3)[color=transparent]â€”[/color] W - WITNESS (1, 2, 3)[color=transparent]â€”[/color] P - Passenger (1, 2, 3)[color=transparent]â€”[/color] PED - PEDESTRIAN (1, 2, 3)[/size][/center]

[table=Arial][tr]
[td][size=85][b]CODE[/b][/size][/td]
[td][size=85][b]L. NAME[/b][/size][/td]
[td][size=85][b]F. NAME[/b][/size][/td]
[td][size=85][b]SEX[/b][/size][/td]
[td][size=85][b]AGE[/b][/size][/td]
[td][size=85][b]BELTED[/b][/size][/td]
[td][size=85][b]STATUS[/b][/size][/td][/tr]

{{involvedPersonTemplate}}

[/table]
[b][center]INVOLVED VEHICLES[/center][/b]
[center][size=87] CODES:  V - Vehicle (1, 2, 3)[/size][/center]

[table=Arial][tr]
[td][size=85][b]CODE[/b][/size][/td]
[td][size=85][b]DRIVER[/b][/size][/td]
[td][size=85][b]PASSENGERS[/b][/size][/td]
[td][size=85][b]TAG[/b][/size][/td]
[td][size=85][b]COLOR[/b][/size][/td]
[td][size=85][b]MODEL[/b][/size][/td]
[td][size=85][b]DAMAGE[/b][/size][/td]
[td][size=85][b]TOWED[/b][/size][/td][/tr]


{{involvedVehiclesTemplate}}

[/table]


[olddivbox=white][center][size=85][b]NARRATIVE[/b][/size][/center]

[size=85]{{reportNarrative}}

[/size][/olddivbox]

[olddivbox=white][center][size=85][b]ATTACHED EVIDENCE[/b][/size][/center]

[size=85]
{{evidence}}

[/size][/olddivbox]


[table=Arial][tr]
[td][size=85][b]PREPARED BY[/b][/size][/td]
[td][size=85][b]EMPLOYEE #[/b][/size][/td]
[td][size=85][b]STATION/UNIT[/b][/size][/td]
[td][size=85][b]UNIT/CAR #[/b][/size][/td]
[/tr]
[tr]
[td][size=85]{{reportPreparedBy}}
[/size][/td]
[td][size=85]{{reportEmployeeNumber}}
[/size][/td]
[td][size=85]{{reportStationUnit}}
[/size][/td]
[td][size=85]{{reportUnitCar}}
[/size][/td][/table]
[hr][/hr]
`;
}
