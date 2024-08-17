import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportComponent } from './report.component';
import { HeaderComponent } from "./components/header/header.component";
import { DetailsComponent } from './components/details/details.component';
import { InvolvedPersonsComponent } from './components/involved-persons/involved-persons.component';
import { InvolvedVehiclesComponent } from './components/involved-vehicles/involved-vehicles.component';
import { NarrativeComponent } from './components/narrative/narrative.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    NgbModule,
    HeaderComponent,
    DetailsComponent,
    InvolvedPersonsComponent,
    InvolvedVehiclesComponent,
    NarrativeComponent,
    EvidenceComponent,
    FooterComponent
],
  exports: [ReportComponent]
})
export class ReportModule { }
