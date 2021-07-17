export class Business {
    constructor(name: string, description: string, pictureUrl: string) {
        this.name = name;
        this.description = description;
        this.pictureUrl = pictureUrl;
    }

    name: string; 
    description: string
    pictureUrl: string;
}