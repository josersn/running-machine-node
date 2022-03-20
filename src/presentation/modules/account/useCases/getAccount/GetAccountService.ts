import { Account } from "../../../../../domain/account/entities/Account";
import { AccountRepository } from "../../../../../domain/account/repositories/AccountRepository";
import { IAccountRepository } from "../../../../../domain/account/repositories/interfaces/IAccountRepository";

class GetAccountService {

    constructor(private repository: IAccountRepository) { }

    async execute(id: string): Promise<Account | undefined> {
        const account = await this.repository.find(id);

        return account;
    }
}

export { GetAccountService }