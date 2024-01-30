import { IsNumber, IsString } from "class-validator"

export class CreateImageDto {
    @IsString()
    imageName

    @IsString()
    stored 

    @IsNumber()
    examAtribuiton
}
