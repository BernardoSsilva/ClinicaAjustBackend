import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AuthBody {
  @ApiProperty({
    description: "Email do usuario",
    example: "gabrielCfarias@gmail.com",
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: "Senha do usuario",
    example: "gabrielCfaria",
  })
  @IsString()
  password: string;
}
