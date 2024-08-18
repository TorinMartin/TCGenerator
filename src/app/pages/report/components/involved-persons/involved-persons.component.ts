import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonService } from '../../../../services/person/person-service.service';


@Component({
  selector: 'report-involved-persons',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './involved-persons.component.html',
  styleUrl: './involved-persons.component.css'
})
export class InvolvedPersonsComponent {
  readonly codeOptions: string[] = ['D', 'P', 'W', 'PED'];
  readonly sexOptions: string[] = ['M', 'F'];
  readonly beltedOptions: string[] = ['Y', 'N'];
  readonly statusOptions: string[] = ['UNHARMED', 'INJURED', 'SEVERELY INJURED', 'DECEASED'];

  constructor(public personService: PersonService) { }

  onFNameChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.personService.setFNameFor(id, inputElement.value);
  }

  onLNameChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.personService.setLNameFor(id, inputElement.value);
  }

  onAgeChange(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.personService.setAgeFor(id, inputElement.value);
  }
}
