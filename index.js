var addDays = require("date-fns/addDays");
const date = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
let x = 7;
module.exports = date;
console.log(date(x));
