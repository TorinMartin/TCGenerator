export class Person {
    public id: number;
    public code: string = "D";
    public lastName: string | undefined;
    public firstName: string | undefined;
    public sex: string | undefined;
    public age: string | undefined;
    public belted: string | undefined;
    public status: string | undefined;

    public constructor(id: number) {
        this.id = id;
    }
}