import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Schedule } from '@prisma/client';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get(':userId')
  async schedules(@Param('userId') userId: string): Promise<Schedule[]> {
    return this.schedulesService.schedules(userId);
  }

  @Post()
  async createSchedule(
    @Body()
    scheduleData: {
      title: string;
      start_date: Date;
      end_date: Date;
      user: {
        connect: { id: string };
      };
    },
  ): Promise<Schedule> {
    return this.schedulesService.createSchedule(scheduleData);
  }

  @Delete(':id')
  async deleteSchedule(@Param('id') id: string): Promise<Schedule> {
    return this.schedulesService.deleteSchedule(Number(id));
  }

  @Patch(':id')
  async updateSchedule(
    @Param('id') id: string,
    @Body()
    scheduleData: {
      title: string;
      start_date: Date;
      end_date: Date;
      user: {
        connect: { id: string };
      };
    },
  ): Promise<Schedule> {
    return this.schedulesService.updateSchedule(Number(id), scheduleData);
  }
}
