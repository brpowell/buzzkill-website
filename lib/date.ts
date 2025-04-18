import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const simpleDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const getTodayEST = () => {
  return dayjs().tz("America/New_York").format("YYYY-MM-DD");
};

export const longDateString = (date: string | Date) => {
  // Modify the input date string to include a time portion (00:00) to avoid time zone adjustments
  if (typeof date === "string") {
    if (!date.includes("T")) {
      date = date + "T00:00";
    } else {
      date = date.split("T")[0] + "T00:00";
    }
  }
  const nextDate = typeof date === "string" ? new Date(date) : date;

  // Array of day names and month names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extracting the parts of the date
  const dayOfWeek = days[nextDate.getDay()];
  const month = months[nextDate.getMonth()];
  const day = nextDate.getDate();
  const year = nextDate.getFullYear();

  // Formatting the date into the desired format
  return `${dayOfWeek}, ${month} ${day}, ${year}`;
};
