import { IAccountRepository } from "../../../../../domain/account/repositories/interfaces/IAccountRepository";
import { IExperiencesRepository } from "../../../../../domain/account/repositories/interfaces/IExperiencesRepository";
import { CreateExperienceDTO } from "../../dtos/ExperienceDTO";

class CreateExperienceService {

    constructor(
        private repository: IExperiencesRepository,
        private accountRepository: IAccountRepository
    ) { }

    async execute({
        user_id, date_end, date_start, is_working_here, photo_url, text, title
    }: CreateExperienceDTO) {

        const account = await this.accountRepository.find(user_id);
        
        if (!account) {
            throw new Error("Account not found");
        }

        return this.repository.create({
            user_id, date_end, date_start, is_working_here, photo_url, text, title
        });
    }
}

export { CreateExperienceService }