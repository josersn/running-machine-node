import { ICreateAccount } from "../../../presentation/modules/account/dtos/AccountDTO";
import { Account } from "../entities/Account"
import { IAccountRepository } from "./interfaces/IAccountRepository";

class AccountRepository implements IAccountRepository {
    accounts: Account[];

    constructor() {
        this.accounts = []
    }

    async create({ name, email, password, phone, cep }: ICreateAccount): Promise<Account> {
        const account = new Account();

        Object.assign(account, {
            name,
            email,
            password,
            phone,
            cep,
            created_at: new Date()
        })

        this.accounts.push(account);

        return account;
    }

    async findByEmail(email: string): Promise<Account | undefined> {
        return this.accounts.find(account => account.email === email);
    }

}

export { AccountRepository }