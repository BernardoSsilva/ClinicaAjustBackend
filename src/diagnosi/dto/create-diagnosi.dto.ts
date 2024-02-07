import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateDiagnosiDto {
    
    @IsNumber()
    author:number

    @ApiProperty({ description: 'Descrição do diagnostico', example: 'desvio cervical causado por má postura' })
    @IsString()
    description?:string

    @ApiProperty({ description: 'Nome do paciente', example: 'Claudia rosado' })
    @IsString()
    pacientName:string

}
