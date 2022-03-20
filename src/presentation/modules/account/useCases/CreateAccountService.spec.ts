import { AccountRepository } from "../../../../domain/account/repositories/AccountRepository";
import { CreateAccountService } from "./CreateAccountService";

let sut: CreateAccountService;
let rut: AccountRepository;

beforeEach(() => {
    rut = new AccountRepository();
    sut = new CreateAccountService(rut);
})

describe('Create Account Service', () => {
    it('Should be able to create a account ', async () => {
        const data = {
            name: "José Ramos",
            cep: "04243-000",
            email: "nettorammos@hotmail.com",
            password: "123456",
            phone: "11954936563"
        }

        const account = await sut.execute(data);

        expect(account).toBeTruthy();
    });

    it('Should not be able to create account with email already used', async () => {
        const data = {
            name: "José Ramos",
            cep: "04243-000",
            email: "nettorammos@hotmail.com",
            password: "123456",
            phone: "11954936563"
        }

        await sut.execute(data);

        await expect(sut.execute(data)).rejects.toThrowError(Error("Email already used"))

    })
})