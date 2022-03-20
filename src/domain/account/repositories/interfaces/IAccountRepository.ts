import { ICreateAccount } from "../../../../presentation/modules/account/dtos/AccountDTO";
import { Account } from "../../entities/Account";

interface IAccountRepository {
    create(data: ICreateAccount): Promise<Account>;
    findByEmail(email: string): Promise<Account | undefined>;
}

export { IAccountRepository };