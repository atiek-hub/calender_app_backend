import { Injectable } from '@nestjs/common';
import { Prisma, Schedule } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async schedule(id: number): Promise<Schedule | null> {
    return this.prisma.schedule.findUnique({
      where: { id },
    });
  }

  async schedules(): Promise<Schedule[]> {
    return this.prisma.schedule.findMany();
  }

  async createSchedule(data: Prisma.ScheduleCreateInput): Promise<Schedule> {
    data.start_date = new Date(data.start_date);
    data.end_date = new Date(data.end_date);
    return this.prisma.schedule.create({
      data,
    });
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
