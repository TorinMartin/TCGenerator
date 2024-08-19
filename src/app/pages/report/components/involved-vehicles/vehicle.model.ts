export class Vehicle {
    public id: number;
    public driver: string = "D1";
    public passengers: string = "";
    public tag: string = "";
    public color: string = "";
    public model: string = "";
    public damage: string = "FUNCTIONAL";
    public towed: string = "N";

    constructor(id: number) {
        this.id = id;
    }
}