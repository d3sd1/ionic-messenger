import { User } from "./User";

export class Group {
    constructor(name: string) {
        this.name = name;
    }

    name: string;
    isEmpty: boolean;
    lastActive: number;
    pictureUrl: string;
    userNames: string;
}