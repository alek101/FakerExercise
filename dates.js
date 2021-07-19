const { date } = require("faker");

function addDays(date,days=0) {
  date.setDate(date.getDate() + days);
  console.log(date)
}

let datum = new Date();

console.log('datum', datum, ':' ,typeof(datum));

datum = addDays(datum, 30);

console.log('datum', datum, typeof(datum));
