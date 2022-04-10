interface CreateExperienceDTO {
    user_id: string,
    date_start: string,
    date_end: string | undefined,
    is_working_here: boolean,
    photo_url: string | undefined,
    title: string,
    text: string,
}


export { CreateExperienceDTO }