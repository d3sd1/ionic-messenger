export class User {
    constructor(name: string, pictureUrl: string) {
        this.name = name;
        this.alias = name.replace(" ", ".").toLowerCase();
        this.pictureUrl = pictureUrl;
    }

    name: string;
    alias: string;
    pictureUrl: string;
    isOnline: boolean;
}