import { CreateExperienceDTO } from "../../../../presentation/modules/account/dtos/ExperienceDTO";
import { Experience } from "../../entities/Experience";

interface IExperiencesRepository {
    create(data: CreateExperienceDTO): Promise<Experience>
}

export { IExperiencesRepository }