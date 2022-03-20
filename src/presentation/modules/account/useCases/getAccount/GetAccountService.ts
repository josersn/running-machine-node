import { Account } from "../../../../../domain/account/entities/Account";
import { IAccountRepository } from "../../../../../domain/account/repositories/interfaces/IAccountRepository";

class GetAccountService {

    constructor(private repository: IAccountRepository) { }

    async execute(id: string): Promise<Account | undefined> {
        const account = await this.repository.find(id);

        if(!account) {
            throw new Error("Account not found");
        }

        return account;
    }
}

export { GetAccountService }