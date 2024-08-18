export class Vehicle {
    public id: number;
    public driver: string | undefined;
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