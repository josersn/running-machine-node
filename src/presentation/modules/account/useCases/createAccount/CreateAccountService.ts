import { Account } from "../../../../../domain/account/entities/Account";
import { IAccountRepository } from "../../../../../domain/account/repositories/interfaces/IAccountRepository";
import { ICreateAccount } from "../../dtos/AccountDTO";


class CreateAccountService {

    constructor(private repository: IAccountRepository) { }

    async execute({ name, cep, email, password, phone }: ICreateAccount): Promise<Account> {

        const emailExists = await this.repository.findByEmail(email);

        if (emailExists) {
            throw new Error("Email already used");
        }

        const phoneExists = await this.repository.findByPhone(phone);

        if (phoneExists) {
            throw new Error("Phone already used");
        }

        return this.repository.create({
            name, cep, email, password, phone
        });

    }
}

export { CreateAccountService }