import namor from "namor";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { format } from "date-fns";

let DateGenerator = require("random-date-generator");

function randomFromArray(array) { 
  return array[Math.floor(Math.random() * array.length)];
}

const carGroups = ["A", "B", "C", "D", "E"];

const domains = ["@geMail.com", "@hutmail.com", "@ito.dk"];


function randomizeDate() { 
  const randomDate = DateGenerator.getRandomDateInRange(
    new Date(),
    new Date(2021, 12, 0)
  );
  const formattedDate = format(
    randomDate,
    "MMM do "
  );
  return formattedDate;
} 

// config for generated names, 
// documentation and additional settings:  [ https://bit.ly/3mseVnY ]
const nameSettings = {
  dictionaries: [names],
  style: "capital",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const newCustomer = () => { 
  return {
    // lastBookingDate: randomizeDate(), // we do not use yet
    lastCarGroup: randomFromArray(carGroups),
    email: namor.generate({ words: 1, saltLength: 0 })+randomFromArray(domains),
    firstName: uniqueNamesGenerator(nameSettings),
    lastName: capitalizeFirstLetter(namor.generate({ words: 1, saltLength: 0 })),
    totalBookings: Math.floor(Math.random(10)*10)
  };
};