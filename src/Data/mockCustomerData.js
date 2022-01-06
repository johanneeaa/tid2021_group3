import namor from "namor";
import { uniqueNamesGenerator, names } from "unique-names-generator";

// Generate random data for a new customer. Used for testing purposes as to not have to hardcode a new customer each time we want one.

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const carGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const domains = ["@geMail.com", "@hutmail.com", "@ito.dk", "@yahooo.com", "@gogle.com" ];

// config for generated names, documentation and additional settings: [ https://bit.ly/3mseVnY ]
const nameSettings = {
  dictionaries: [names],
  style: "capital",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** returns object of a randomly generated customer */
export const newCustomer = () => {
  return {
    lastCarGroup: randomFromArray(carGroups),
    email: namor.generate({ words: 1, saltLength: 0 }) + randomFromArray(domains),
    firstName: uniqueNamesGenerator(nameSettings),
    lastName: capitalizeFirstLetter(namor.generate({ words: 1, saltLength: 0 })),
    totalBookings: Math.floor(Math.random(10)*10 + 1)  //added +1 to avoid it from creating a totalbooking of 0 
  };
};
