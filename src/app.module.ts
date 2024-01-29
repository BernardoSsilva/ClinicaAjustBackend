import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ImageModule } from './image/image.module';
import { DiagnosiModule } from './diagnosi/diagnosi.module';

@Module({
  imports: [UserModule, ScheduleModule, ImageModule, DiagnosiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
