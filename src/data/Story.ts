import { User } from "./User";

export class Story {
    constructor(user: User) {
        this.user = user;
    }

    user: User;
}