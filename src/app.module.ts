import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { SchedulesController } from './schedules/schedules.controller';
import { SchedulesService } from './schedules/schedules.service';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [UsersModule, SchedulesModule],
  controllers: [AppController, UsersController, SchedulesController],
  providers: [AppService, PrismaService, UsersService, SchedulesService],
})
export class AppModule {}
