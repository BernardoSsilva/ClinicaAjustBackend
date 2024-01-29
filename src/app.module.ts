import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [UserModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
