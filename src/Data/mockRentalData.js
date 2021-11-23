import namor from "namor";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { format } from "date-fns";

// Creating mock data for our table. 
// The newRental const will contain an object with randomized rental information
// Based on snippets from react table examples [ https://react-table.tanstack.com/docs/examples/filtering ]

let DateGenerator = require("random-date-generator");

function randomFromArray(array) { 
  return array[Math.floor(Math.random() * array.length)];
}

const carGroups = ["A", "B", "C", "D", "E"];

const minuteIntervals = ["00", "15", "30", "45"];

function randomizeDate() { 
  const randomDate = DateGenerator.getRandomDateInRange(
    new Date(),
    new Date(2021, 12, 0)
  );
  const formattedDate = format(
    randomDate,
    "MMM do HH:" + randomFromArray(minuteIntervals)
  );
  return formattedDate;
}

// config for generated names, 
// documentation and additional settings:  [ https://bit.ly/3mseVnY ]
const nameSettings = {
  dictionaries: [names],
  style: "capital",
};

const newRental = () => { 
  return {
    pickupDateTime: randomizeDate(),
    bookingID: Math.floor(Math.random() * 10000000),
    firstName: uniqueNamesGenerator(nameSettings),
    lastName: namor.generate({ words: 1, saltLength: 0 }),
    carGroup: randomFromArray(carGroups),
  };
};

const range = (len) => { //lifted from react table examples
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export default function makeData(...lens) { //lifted from react table examples
  const makeDataRow = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newRental(),

        subRows: lens[depth + 1] ? makeDataRow(depth + 1) : undefined,
      };
    });
  };
  return makeDataRow();
}
