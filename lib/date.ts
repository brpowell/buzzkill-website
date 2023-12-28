export const simpleDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const getTodayEST = () => {
  const todaysDate = new Date();
  const estDate = new Date(
    todaysDate.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  return todaysDate;
};

export const longDateString = (dateString: string) => {
  // Modify the input date string to include a time portion (00:00) to avoid time zone adjustments
  const date = new Date(dateString + "T00:00");

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
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Formatting the date into the desired format
  return `${dayOfWeek}, ${month} ${day}, ${year}`;
};
