import { CreateAccountService } from "./CreateAccountService";

describe('Create Account Service', () => {
    it('Should be able to create a account ', async () => {
        const data = {
            name: "José Ramos",
            cep: "04243-000",
            email: "nettorammos@hotmail.com",
            password: "123456",
            phone: "11954936563"
        }

        const sut = new CreateAccountService();

        const account = await sut.execute(data);

        expect(account).toBeTruthy();
    });
})