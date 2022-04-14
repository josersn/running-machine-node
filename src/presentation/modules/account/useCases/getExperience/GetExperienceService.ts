import { Experience } from "../../../../../domain/account/entities/Experience";
import { IExperiencesRepository } from "../../../../../domain/account/repositories/interfaces/IExperiencesRepository";

class GetExperienceService {
    constructor(
        private repository: IExperiencesRepository
    ) { }


    async execute(user_id: string): Promise<Experience[]> {
        return await this.repository.findByUserId(user_id);
    }
}

export { GetExperienceService }