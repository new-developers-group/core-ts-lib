import { Recurrence } from '@/domain/models'
import { add, format, nextSunday, previousMonday, sub } from 'date-fns'

export function getFormattedDate(date: any) {
  const year = date.getFullYear()
  const month = (1 + date.getMonth()).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return month + '/' + day + '/' + year
}

export function getRemainingMonthsOfYear(date = new Date()) {
  const month = date.getMonth() + 1
  return Math.abs(month - 12)
}

export function isMonthWith31Days(date = new Date()) {
  const month = date.getMonth() + 1
  return (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  )
}

export const formatDateRange = (start: Date, end: Date, period: Recurrence) => {
  switch (period) {
    case Recurrence.Weekly:
      return format(start, 'd MMM') + ' - ' + format(end, 'd MMM')
    case Recurrence.Monthly:
      return format(start, 'MMMM')
    case Recurrence.Yearly:
      return format(start, 'yyyy')
  }

  return format(start, 'd MMM') + ' - ' + format(end, 'd MMM')
}

export const calculateRange = (period: Recurrence, periodIndex: number) => {
  const now = new Date()
  let start: Date
  let end: Date

  switch (period) {
    case Recurrence.Daily:
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      end = add(start, {
        hours: 23,
        minutes: 59,
        seconds: 59
      })
      break
    case Recurrence.Weekly:
      // eslint-disable-next-line no-case-declarations
      const firstDayOfThisWeek = previousMonday(now)
      // eslint-disable-next-line no-case-declarations
      const daysToSubtract = periodIndex * 7
      start = sub(firstDayOfThisWeek, { days: daysToSubtract })
      end = nextSunday(start)
      break
    case Recurrence.Monthly:
      start = new Date(now.getFullYear(), now.getMonth() - periodIndex, 1)
      end = new Date(start.getFullYear(), start.getMonth() + 1, 0)
      break
    case Recurrence.Yearly:
      start = new Date(now.getFullYear(), 0, 1)
      end = new Date(now.getFullYear(), 11, 31)
      break
  }

  return {
    start,
    end
  }
}

export const matchRegex = (date: string, expression: RegExp) => {
  if (date.match(expression) === null) {
    return false
  }
}

/**
 * expected input: 2023-06-23T15:46:38.015Z
 * expected return value: 2023-06-23
 */
export function removeTimeStamp(date: string) {
  if (date && date.length >= 10) {
    return date.substring(0, 10)
  }
}
