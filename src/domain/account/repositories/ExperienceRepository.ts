import { CreateExperienceDTO } from "../../../presentation/modules/account/dtos/ExperienceDTO";
import { Experience } from "../entities/Experience";
import { IExperiencesRepository } from "./interfaces/IExperiencesRepository";

class ExperienceRepository implements IExperiencesRepository {

    private experiences: Experience[];

    constructor() {
        this.experiences = []
    }

    async create({
        date_end, date_start, is_working_here, photo_url, text, title, user_id
    }: CreateExperienceDTO): Promise<Experience> {
        const experience = new Experience();

        Object.assign(experience, {
            date_end, date_start, is_working_here, photo_url, text, title, user_id
        });

        this.experiences.push(experience);

        return experience;
    }

    async findByUserId(user_id: string): Promise<Experience[]> {
        return this.experiences.filter(item => item.user_id === user_id);
    }

}

export { ExperienceRepository }