export class Vehicle {
    public id: number;
    public driver: string = "D1";
    public passengers: string | undefined;
    public tag: string | undefined;
    public color: string | undefined;
    public model: string | undefined;
    public damage: string | undefined;
    public towed: string | undefined;

    constructor(id: number) {
        this.id = id;
    }
}