import { IsNumber, IsString } from "class-validator"

export class CreateScheduleDto {
    @IsNumber()
    authorId 
    
    @IsString()
    hour :string

    
    @IsString()
    client:string

    
    @IsString()
    service :string


}
