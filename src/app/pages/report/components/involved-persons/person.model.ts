export class Person {
    public id: string;
    public lastName: string = "";
    public firstName: string = "";
    public sex: string = "M";
    public age: string = "";
    public belted: string = "Y";
    public status: string = "UNHARMED";

    public constructor(id: string) {
        this.id = id;
    }
}