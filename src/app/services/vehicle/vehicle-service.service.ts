import { Injectable } from '@angular/core';
import { Vehicle } from '../../pages/report/components/involved-vehicles/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public vehicles: Vehicle[] = [new Vehicle(1)];

  constructor() { }

  addVehicle() {
    let last = this.vehicles[this.vehicles.length - 1]?.id ?? 0;
    let vehicle: Vehicle = new Vehicle(last + 1);
    this.vehicles.push(vehicle);
  }

  removeVehicle(idToDel: number) {
    this.vehicles = this.vehicles.filter(v => v.id !== idToDel);
  }

  setDriverFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.driver = value;
    }
  }

  setPassengersFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.passengers = value;
    }
  }

  setDamageFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.damage = value;
    }
  }

  setTowedFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.towed = value;
    }
  }
}
