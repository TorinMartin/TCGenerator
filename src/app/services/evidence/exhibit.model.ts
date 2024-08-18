import { Evidence } from "./evidence.model";

export class Exhibit {
    id: number;
    title: string;
    isSpoiler: boolean;
    evidence: Evidence[] = [];

    constructor(id: number, title: string, isSpoiler: boolean, evidence: Evidence[]) {
        this.id = id;
        this.title = title;
        this.isSpoiler = isSpoiler;
        this.evidence = evidence;
    }
}