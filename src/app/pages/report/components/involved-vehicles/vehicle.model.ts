export class Vehicle {
    public id: number;
    public driver: string = "D1";
    public passengers: string | undefined;
    public tag: string | undefined;
    public color: string | undefined;
    public model: string | undefined;
    public damage: string = "FUNCTIONAL";
    public towed: string = "N";

    constructor(id: number) {
        this.id = id;
    }
}