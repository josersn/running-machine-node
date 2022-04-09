import { Account } from "../../../../domain/account/entities/Account";

type ICreateAccount = Omit<Account, "id" | "created_at">

export { ICreateAccount }