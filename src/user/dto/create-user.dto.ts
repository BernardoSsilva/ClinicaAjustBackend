import { IsString, Min } from "class-validator";

export class CreateUserDto {
@IsString({
    message: 'Campo invalido'
})
userName


@IsString({
    message: 'Campo invalido'
})
userEmail 

@IsString()
@Min(8, {
    message: 'A senha deve ter no mínimo 8 caracteres'
})
userPassword


}
