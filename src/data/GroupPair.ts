import { Group } from "./Group";

export class GroupPair {
    constructor(group1: Group, group2: Group) {
        this.group1 = group1;
        this.group2 = group2;
    }
    
    group1: Group;
    group2: Group;
}