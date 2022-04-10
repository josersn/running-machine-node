import { AccountRepository } from "../../../../../domain/account/repositories/AccountRepository";
import { ExperienceRepository } from "../../../../../domain/account/repositories/ExperienceRepository";
import { CreateAccountService } from "../createAccount/CreateAccountService";
import { CreateExperienceService } from "./CreateExperienceService";

let sut: CreateExperienceService;
let rut: ExperienceRepository;

let createAccountService: CreateAccountService;
let accountRepository: AccountRepository;


beforeEach(() => {

  accountRepository = new AccountRepository();
  rut = new ExperienceRepository();
  sut = new CreateExperienceService(rut, accountRepository);

  accountRepository = new AccountRepository();
  createAccountService = new CreateAccountService(accountRepository);
})

describe('Add a experiences to account', () => {
  it('Should be able to add Experiences to account', async () => {
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

    const experience = await sut.execute(data);

    expect(experience).toBeTruthy();

  })
})