import { format } from 'date-fns';

const LAST_MODIFY_DATE_FORMAT = 'yyyy-MM-dd';
const FULL_DATE_FORMAT = `${LAST_MODIFY_DATE_FORMAT}-HH:mm:ss.SSS`;

export const formatLastModifyDate = (date: Date) => {
  return format(date, LAST_MODIFY_DATE_FORMAT);
};

export const formatFullDate = (date: Date) => {
  return format(date, FULL_DATE_FORMAT);
};

export const getCurrTimestamp = (): number => {
  return new Date().getTime();
};
