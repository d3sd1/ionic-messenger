import { Business } from "./Business";

export class BusinessList {
    constructor(name: string, businesses: Business[]) {
        this.name = name;
        this.businesses = businesses;
    }

    name: string;
    businesses: Business[];
}