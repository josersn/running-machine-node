import {
    generatorHash
} from "../../../infrastructure/providers/crypto/generatorHash.provider";

class Experience {
    id!: string;
    date_start: Date;
    date_end: Date;
    is_working_here: boolean;
    photo_url!: string;
    title!: string;
    text!: string;
    user_id!: string;

    constructor() {
        this.id = generatorHash();
    }
}

export { Experience }