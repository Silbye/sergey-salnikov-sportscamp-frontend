export function getDate() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const day = date.getDate();
  const month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let monthName = month[date.getMonth()];
  let str = `${day} ${monthName}, ${hour}:`;
  if (min < 10) {
    str += `0${min}`;
  } else {
    str += `${min}`;
  }
  return str;
}
