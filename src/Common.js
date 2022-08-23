import { WEEK_DAYS } from "./constant";
export const getDayFormDate = (dateVal) => {
  var dayInWeek = new Date(dateVal).getDay();
  if (dayInWeek === 0) dayInWeek = 7;
  return WEEK_DAYS[dayInWeek - 1];
};

export const getHourFormDate = (dateVal) => {
  var time = new Date(dateVal).getHours();
  time += "h";
  return time;
};
