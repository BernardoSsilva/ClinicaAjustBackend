import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateImageDto {

    @ApiProperty({ description: 'Nome original da imagem', example: 'costelas-raiox.jpg' })
    @IsString()
    imageName

    @ApiProperty({ description: 'Nome armazenado no banco de dados', example: '100sjkksoo199a.jpg' })
    @IsString()
    stored 

    @ApiProperty({ description: 'Id do exame', example: '1' })
    @IsNumber()
    examAtribuiton
}
