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

  @Get(':id')
  async findScheduleById(@Param('id') id: string): Promise<Schedule> {
    return this.schedulesService.schedule(Number(id));
  }

  @Get()
  async schedules(): Promise<Schedule[]> {
    return this.schedulesService.schedules();
  }

  @Post()
  async createSchedule(
    @Body()
    scheduleData: {
      title: string;
      start: Date;
      end: Date;
      allDay: boolean;
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
      start: Date;
      end: Date;
      allDay: boolean;
    },
  ): Promise<Schedule> {
    return this.schedulesService.updateSchedule(Number(id), scheduleData);
  }
}
