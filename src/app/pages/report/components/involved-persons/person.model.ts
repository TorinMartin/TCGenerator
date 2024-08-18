export class Person {
    public id: string;
    public lastName: string | undefined;
    public firstName: string | undefined;
    public sex: string = "M";
    public age: string | undefined;
    public belted: string = "Y";
    public status: string = "UNHARMED";

    public constructor(id: string) {
        this.id = id;
    }
}