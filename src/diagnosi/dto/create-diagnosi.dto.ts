import { IsNumber, IsString } from "class-validator"

export class CreateDiagnosiDto {
    
    @IsNumber()
    author:number

    @IsString()
    description?:string

    @IsString()
    pacientName:string

}
