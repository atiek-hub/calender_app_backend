import { Injectable } from '@nestjs/common';
import { Prisma, Schedule } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async schedules(userId: string): Promise<Schedule[]> {
    return this.prisma.schedule.findMany({
      where: { userId },
    });
  }

  async createSchedule(data: Prisma.ScheduleCreateInput): Promise<Schedule> {
    data.start = new Date(data.start);
    data.end = new Date(data.end);
    data.allDay = Boolean(data.allDay);
    try {
      return this.prisma.schedule.create({
        data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteSchedule(id: number): Promise<Schedule> {
    return this.prisma.schedule.delete({
      where: { id },
    });
  }

  async updateSchedule(
    id: number,
    data: Prisma.ScheduleUpdateInput,
  ): Promise<Schedule> {
    return this.prisma.schedule.update({
      where: { id },
      data,
    });
  }
}
