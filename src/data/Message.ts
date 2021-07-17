export class Message {
    constructor(content: string) {
        this.content = content;
        this.seenTime = "12:00 AM";
    }

    content: string;
    sentByMe: boolean;
    time: string;
    isDifferentDay: boolean;
    isDelivered: boolean;
    isRead: boolean;
    isImage: boolean;
    showSeenTime: boolean;
    seenTime: string;
}