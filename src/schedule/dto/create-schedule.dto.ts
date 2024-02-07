import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateScheduleDto {
    @ApiProperty({ description: 'Id do autor', example: '1' })
    @IsNumber()
    authorId 
    
    @ApiProperty({ description: 'Horário do atendimento', example: '14:30' })
    @IsString()
    hour :string


     @ApiProperty({ description: 'Cliente a ser atendido', example: 'Claudia rosado' })
    @IsString()
    client:string

    
    @ApiProperty({ description: 'Serviço a ser prestado', example: 'ajuste cervical' })
    @IsString()
    service :string


}
