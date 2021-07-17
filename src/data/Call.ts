import { User } from "./User";

export class Call {
    constructor(user: User) {
        this.user = user;
    }

    user: User;
}