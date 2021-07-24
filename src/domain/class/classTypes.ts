import { WeekDayEnum, IBaseId, IStudent } from '..'

export interface IClass {
  name: string
  classStudents: IClassStudent[]
  weekSchedules: IWeekSchedule[]
  startDate: Date
  endDate?: Date

  createdAt?: Date
  updateAt?: Date
}

export interface IClassStudent {
  student: IBaseId & IStudent
  active: boolean
  monthDayToInvoice: string
  participationDates: {
    startedAt: Date
    stopedAt: Date
  }[]
  payments: {
    paidValueInCents: number
    paidAt: Date
  }[]
}

export interface IWeekSchedule {
  weekDay: WeekDayEnum
  startTimeUtc: string
  endTimeUtc: string
}
