import { ICreateAccount } from "../../../presentation/modules/account/dtos/AccountDTO";
import { Account } from "../entities/Account"
import { IAccountRepository } from "./interfaces/IAccountRepository";

class AccountRepository implements IAccountRepository {
    accounts: Account[];

    constructor() {
        this.accounts = []
    }

    async create({
        name, email, password, phone, cep, address, complement, photo_url, socialName
    }: ICreateAccount): Promise<Account> {
        const account = new Account();

        Object.assign(account, {
            name,
            email,
            password,
            phone,
            cep,
            address,
            complement,
            photo_url,
            socialName,
            created_at: new Date()
        })

        this.accounts.push(account);

        return account;
    }

    async findByEmail(email: string): Promise<Account | undefined> {
        return this.accounts.find(account => account.email === email);
    }

    async findByPhone(phone: string): Promise<Account | undefined> {
        return this.accounts.find(account => account.phone === phone);
    }

    async find(id: string): Promise<Account | undefined> {
        return this.accounts.find(account => account.id === id);
    }

}

export { AccountRepository }