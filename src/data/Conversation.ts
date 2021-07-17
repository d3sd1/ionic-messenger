import { User } from "./User";
import { Message } from "./Message";

export class Conversation {
    constructor(user: User, lastMessage: Message) {
        this.user = user;
        this.lastMessage = lastMessage;
    }

    user: User;
    lastMessage: Message;
}