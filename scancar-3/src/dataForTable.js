import namor from 'namor'
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { format } from "date-fns";

let DateGenerator = require('random-date-generator');

/*

V1.0
Randomly generating table data based react-table examples
lacl@itu.dk 30/oct/2021

V1.1
Cleaned the code up a little, added functionality randomFromArrray()
lacl@itu.dk 31/oct/2021

*/ 


function randomFromArray(array) {
  return array[Math.floor(Math.random()*array.length)]
}

const carGroups=['A','B','C','D','E']

const minuteIntervals=['00','15','30','45']

//Create random, formatted, dated. Maybe needs logic to be increasing all the time?
function randomizeDate(){
    const randomDate = DateGenerator.getRandomDateInRange(new Date(),new Date(2021,11,0));
    const formattedDate = format(randomDate, 'MMM do HH:'+ randomFromArray(minuteIntervals))
    return formattedDate
}

//config for name generator, documentation here [ https://bit.ly/3mseVnY ]
const nameSettings = {
    dictionaries: [names],
    style: 'capital'
  }

const newRental = () =>{
    return{
        pickupDateTime: randomizeDate(),
        bookingID: Math.floor(Math.random()*10000000),
        firstName: uniqueNamesGenerator(nameSettings),
        lastName: namor.generate({words: 1, saltLength: 0}),
        carGroup: randomFromArray(carGroups)
    }

}

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}
  
export default function makeData(...lens) {
  const makeDataRow = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newRental(),
        subRows: lens[depth + 1] ? makeDataRow(depth + 1) : undefined,
      }
    })
  }
  return makeDataRow()
}
