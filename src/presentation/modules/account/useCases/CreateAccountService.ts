import { ICreateAccount } from "../dtos/AccountDTO"

class CreateAccountService {
    execute({ name, cep, email, password, phone }: ICreateAccount) {

        return {
            name,
            cep,
            email,
            password,
            phone
        }
    }
}

export { CreateAccountService }