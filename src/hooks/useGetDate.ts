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
  return `${day} ${monthName}, ${hour}:${min}`;
}
