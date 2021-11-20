import namor from "namor";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { format } from "date-fns";

// functions marked # are snippets from https://react-table.tanstack.com/docs/examples/filtering without modifications
// functions marked ## are snippets with our own modifications
// functions marked ### are OC 

let DateGenerator = require("random-date-generator");

function randomFromArray(array) { //###
  return array[Math.floor(Math.random() * array.length)];
}

const carGroups = ["A", "B", "C", "D", "E"];

const minuteIntervals = ["00", "15", "30", "45"];

//Create random, formatted, dated. Maybe needs logic to be increasing all the time?
function randomizeDate() { // ###
  const randomDate = DateGenerator.getRandomDateInRange(
    new Date(),
    new Date(2021, 11, 0)
  );
  const formattedDate = format(
    randomDate,
    "MMM do HH:" + randomFromArray(minuteIntervals)
  );
  return formattedDate;
}

//config for name generator, documentation here [ https://bit.ly/3mseVnY ]
const nameSettings = {
  dictionaries: [names],
  style: "capital",
};

const newRental = () => { // ###
  return {
    pickupDateTime: randomizeDate(),
    bookingID: Math.floor(Math.random() * 10000000),
    firstName: uniqueNamesGenerator(nameSettings),
    lastName: namor.generate({ words: 1, saltLength: 0 }),
    carGroup: randomFromArray(carGroups),
  };
};

const range = (len) => { //#
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export default function makeData(...lens) { //#
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
