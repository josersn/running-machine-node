class Account {
    id?: string;
    name!: string;
    cep!: string;
    email!: string;
    password!: string;
    phone!: string;
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = Math.random().toString();
        }
    }
}

export { Account };