import { AccountRepository } from "../../../../../domain/account/repositories/AccountRepository";
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
            phone: "11954936563",
            socialName: "José Ramos",
            photo_url: "MOCK_URL",
            address: "Avenida Paulista",
            complement: ""
        }

        const account = await sut.execute(data);

        expect(account).toBeTruthy();
        expect(account).toHaveProperty("id");
    });

    it('Should not be able to create account with email already used', async () => {
        const data = {
            name: "José Ramos",
            cep: "04243-000",
            email: "nettorammos@hotmail.com",
            password: "123456",
            phone: "11954936563",
            socialName: "José Ramos",
            photo_url: "MOCK_URL",
            address: "Avenida Paulista",
            complement: ""
        }

        await sut.execute(data);

        await expect(sut.execute(data)).rejects.toThrowError(Error("Email already used"))

    })
    
    it('Should not be able to create account with phone already used', async () => {
        
        const data = {
            name: "José Ramos",
            cep: "04243-000",
            email: "nettorammos@hotmail.com",
            password: "123456",
            phone: "11954936563",
            socialName: "José Ramos",
            photo_url: "MOCK_URL",
            address: "Avenida Paulista",
            complement: ""
        }

        await sut.execute(data);

        const secondData = {
            name: "José Ramos",
            cep: "04243-000",
            email: "nettorammos2@hotmail.com",
            password: "123456",
            phone: "11954936563",
            socialName: "José Ramos",
            photo_url: "MOCK_URL",
            address: "Avenida Paulista",
            complement: ""
        }

        await expect(sut.execute(secondData)).rejects.toThrowError(Error("Phone already used"))

    })
})