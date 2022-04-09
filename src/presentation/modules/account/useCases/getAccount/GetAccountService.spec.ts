import { AccountRepository } from "../../../../../domain/account/repositories/AccountRepository";
import { CreateAccountService } from "../createAccount/CreateAccountService";
import { GetAccountService } from "./GetAccountService";

let sut: GetAccountService;
let rut: AccountRepository;
let createAccountService: CreateAccountService;

beforeEach(() => {
    rut = new AccountRepository();
    sut = new GetAccountService(rut);
    createAccountService = new CreateAccountService(rut);

});

describe('Get Account Service', () => {
    it('Should be able to list the specific account ', async () => {

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

        const account = await createAccountService.execute(data);
        const accountFound = await sut.execute(account.id);

        expect(accountFound).toBeTruthy();
        expect(accountFound?.id).toEqual(account.id);
        expect(accountFound?.photo_url).toEqual(data.photo_url);
        expect(accountFound?.socialName).toEqual(data.socialName);
    });

    it('Should not able to a get a non exist account', async () => {
        await expect(sut.execute('MOCK_ID'))
            .rejects.
            toThrowError(Error("Account not found"));
    })
});