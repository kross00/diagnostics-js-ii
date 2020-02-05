// This is my space for trying things out and seeeing how they work

//let person = {firstName: 'Bob', lasName: 'Smith', age:32};

//console.log('The first name is:' , person.firstName);
//console.log('The first name is:', person['firstName']);
//console.log('-------------');
//console.log('The last name is:' , person.lasName);
//console.log('The last name is:', person['lasName']);
//console.log('-------------');
//console.log('The age is:', person.age);
//console.log('The age is:', person['age']);
//console.log('-------------');
//person.firstName = 'Bobby';
//console.log('The first name is now:' , person.firstName);

// let daysInMonth = {
//   January: 31,
//   February: 29,
//   March: 31,
//   April: 30,
//   May: 31,
//   June: 30,
//   July: 31,
//   August: 30,
//   September: 31,
//   October: 30,
//   November: 31,
//   December: 31,
// }

// let monthName = 'January';
// let numDays = daysInMonth[monthName];
// console.log(`There are ${numDays} days in ${monthName}.`);

// let customerData = {};
// customerData['A1234'] = {ID: 'A1234', firstName: 'Bob' , lastName: 'Smith' , age: 32};
// customerData['B7631'] = {ID: 'B7631', firstName: 'Halle' , lastName: 'Berry' , age: 24};
// customerData['C9834'] = {ID: 'C9834', firstName: 'LeBrun' , lastName: 'Jameis' , age: 30};

// let customerID = 'C9834';
// let customer = customerData[customerID];

// if (customer !== undefined) {
//   console.log(`Customer ${customer.ID} found: ${customer.firstName} ${customer.lastName}`);
// } else {
//   console.log(`Customer unable to be found for customerID: ${customerID}.`);
//}

// *****Everything above is how dictionaries work*****

// let todoList = [
//   task1,
//   task2,
//   task3,
//   task4,
// ]
// let task1 = {
//   'isCompleted' = false ,
//   'description' = 'walk the dog' ,
// };

// let task2 = {
//   'isCompleted': 'false' ,
//   'description': 'wash the car' ,
//   'priority': 20,
// }

// let fruits = ['Apple' , 'Banana'];
// // console.log(fruits.length);

// //let first = fruits[0];
// // apple
// //let last = [fruits.length - 1];
// // banana

// // fruits.forEach(function(item, index, array) {
// //   console.log(item, index)
// // })

// let newLength = fruits.push('Orange');

// // let last = fruits.pop('Orange');

// // let first = fruits.shift('Apple');

// // let frist = fruits.unshift('Grape');

// // fruits.push('Mango');

// // let pos = fruits.indexOf('Mango');

// // let removedItem = fruits.splice(pos,1); // had an issue here

// // console.log(fruits);
// //console.log(pos);   // Running this gave me 2 due to the 'let pos =' input above

// let items = ['car', 'shoe', 'handle' , 'box'];
// console.log(items);

// let pos = 1;
// let n = 2;

// let removedItems = items.splice(pos, n);
// console.log(items);
// console.log(removedItems);

// let shallowCopy = items.slice();  // this is supposed to make a copy

// let arr = ['first', 'second', 'last'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log('break time');
// console.log(arr[arr.length - 1]);

// let fruits = []
// fruits.push('apple', 'lime', 'cherry',);
// console.log(fruits.length); // gives me 3
// console.log(fruits[2]); // gives me cherry

// let array = [2,3,4,5,];
// array.push(69);
// array.shift(2);     // it seems you can't do shift with a value that isn't already in the array
// array.unshift(7);
// let kendahl = 22;
// array.push(kendahl);
// console.log(array);

// // let rick = 2+2;
// // console.log(rick); // random think I wanted to see

let months = ["January", "February", "March",
              "April", "May", "June",
              "July", "August", "September",
              "October", "November", "December"];
let pete = 4;

function shuffle(months){
  for (let i = months.length - 1; i > 0; i--) {
    let n = Math.floor(Math.random() * (i + 1));
    [months[i], months[n]] = [months[n], months[i]] // I don't understand this line
  }
  return months
}

              console.log(shuffle(months));

// ****Pretty much everything above deals with arrays*** up until the dictionaries section

// console.log('Kendahl'.charAt(1));
// console.log('hello hello hello'.toUpperCase());

// let firstNum = 10;
// let secondsNum = 5;
// let total = firstNum + secondsNum;
// console.log(total);
// console.log('Spongebob');
// let currentYear = 2020;
// let nextDecade = currentYear + 10;
// console.log(nextDecade);
// console.log('Squarepants');
// console.log('The current year is ' + currentYear);
// let previousCurrentYear = currentYear
// currentYear = 2030;
// console.log('The current year is now ' + currentYear + ' but the current year used to be ' + previousCurrentYear);
// console.log('---------');
// let firstNum = 20;
// let secondsNum = 30;
// console.log(firstNum + secondsNum);
// firstNum = 30;     // this overrides what we previously declared the variable to be
// console.log(firstNum + secondsNum);
// secondsNum = 14
// console.log(firstNum + secondsNum);

// let count = 0
// console.log('1. The count is ' + count);
// count = count + 1;     // can also do let = newCount
// console.log('2. The count is now ' + count);
// count = count + 5;
// console.log('3. The count is now ' + count);
// let firstName = 'Kendahl';
// let lastName = 'Ross';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);
