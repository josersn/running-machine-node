import { AccountRepository } from "../../../../../domain/account/repositories/AccountRepository";
import { ExperienceRepository } from "../../../../../domain/account/repositories/ExperienceRepository";
import { CreateAccountService } from "../createAccount/CreateAccountService";
import { CreateExperienceService } from "../createExperience/CreateExperienceService";
import { GetExperienceService } from "./GetExperienceService";

let sut: GetExperienceService;
let rut: ExperienceRepository;

let createAccountService: CreateAccountService;
let createExperienceService: CreateExperienceService;
let accountRepository: AccountRepository;


beforeEach(() => {

    accountRepository = new AccountRepository();
    rut = new ExperienceRepository();
    sut = new GetExperienceService(rut);

    createExperienceService = new CreateExperienceService(rut, accountRepository);
    createAccountService = new CreateAccountService(accountRepository);
})

describe('Get A  Experiences services', () => {
    it('Should return all account experiences  ', async () => {
        const userData = {
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

        const { id } = await createAccountService.execute(userData);

        const data = {
            user_id: id,
            date_start: "2021-09-08",
            date_end: undefined,
            is_working_here: true,
            photo_url: "MOCK_URL",
            title: "Software Engineer",
            text: "I do what i love ❤"
        }


        const experienceCreated = await createExperienceService.execute(data);

        const experienceFound = await sut.execute(id);

        expect(experienceFound[0].user_id).toBe(id);
        expect(experienceFound[0].id).toBe(experienceCreated.id);
    })
})