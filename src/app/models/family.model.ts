// private Long id;

import { Child } from "./children.model";
import { Evaluation } from "./evaluation.model";

export class Family {
    id: number;
    username: string;
    email: string;
    password: string;
    children: Child[];
    evaluation: Evaluation[];

    constructor(id: number, username: string, email: string, password: string, children: Child[], evaluation: Evaluation[]){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.children = children;
        this.evaluation = evaluation;
    }
}
