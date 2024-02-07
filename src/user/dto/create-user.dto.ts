import { ApiProperty } from '@nestjs/swagger';
import { IsString, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome do usuário', example: 'Gabriel Carvalho farias' })
  @IsString({
    message: 'Campo invalido',
  })
  userName;

  
  @ApiProperty({ description: 'Email do usuário', example: 'GabrielCFarias@gmail.com' })
  @IsString({
    message: 'Campo invalido',
  })
  userEmail;

  @ApiProperty({ description: 'Senha do usuário', example: 'gabrielCostela' })
  @IsString()
  @Min(8, {
    message: 'A senha deve ter no mínimo 8 caracteres',
  })
  userPassword;
}
