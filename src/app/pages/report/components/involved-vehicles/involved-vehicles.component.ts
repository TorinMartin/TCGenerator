import { Component } from '@angular/core';
import { PersonService } from '../../../../services/person/person-service.service';
import { Person } from '../involved-persons/person.model';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from '../../../../services/vehicle/vehicle-service.service';

@Component({
  selector: 'report-involved-vehicles',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './involved-vehicles.component.html',
  styleUrl: './involved-vehicles.component.css'
})
export class InvolvedVehiclesComponent {

  readonly damageOptions: string[] = ['FUNCTIONAL', 'DISABLED'];
  readonly towedOptions: string[] = ['Y', 'N'];

  constructor(private personService: PersonService, public vehicleService: VehicleService) { }

  getDrivers(): Person[] {
    let drivers = this.personService.persons.filter(p => p.id.startsWith("D"));
    return drivers ?? [];
  }

  onPassengersChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.vehicleService.setPassengersFor(id, inputElement.value);
  }

  onTagChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.vehicleService.setTagFor(id, inputElement.value);
  }

  onColorChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.vehicleService.setColorFor(id, inputElement.value);
  }

  onModelChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.vehicleService.setModelFor(id, inputElement.value);
  }
}
