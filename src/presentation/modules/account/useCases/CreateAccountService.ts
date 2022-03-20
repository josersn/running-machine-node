
interface ICreateAccount {
    name: string,
    cep: string,
    email: string,
    password: string,
    phone: string
}

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