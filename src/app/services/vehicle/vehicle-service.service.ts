import { Injectable } from '@angular/core';
import { Vehicle } from '../../pages/report/components/involved-vehicles/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public vehicles: Vehicle[] = [new Vehicle(1)];

  constructor() { }

  getVehicles() {
    let result = this.vehicles.sort((a, b) => a.id - b.id);
    return result;
  }

  addVehicle() {
    const ids = this.vehicles.map(vehicle => vehicle.id);
    
    let newId = 1;
    while (ids.includes(newId)) {
      newId++;
    }

    let vehicle: Vehicle = new Vehicle(newId);
    this.vehicles.push(vehicle);
  }

  removeVehicle(idToDel: number) {
    this.vehicles = this.vehicles.filter(v => v.id !== idToDel);
  }

  setDriverFor(id: number, driverId: number, driverCode: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.driver = driverCode + driverId;
    }
  }

  setPassengersFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.passengers = value;
    }
  }

  setTagFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.tag = value;
    }
  }

  setColorFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.color = value;
    }
  }

  setModelFor(id: number, value: string) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
        vehicle.model = value;
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
