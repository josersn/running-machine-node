import { generatorHash } from "../../../infrastructure/providers/crypto/generatorHash.provider";

class Account {
    id!: string;
    name!: string;
    socialName!: string;
    address!: string;
    complement!: string;
    photo_url!: string;
    cep!: string;
    email!: string;
    password!: string;
    phone!: string;
    created_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = generatorHash();
        }
    }
}

export { Account };