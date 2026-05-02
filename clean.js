'use strict';

// const { useReducer } = require("react");

// const { entries } = require('core-js/core/array');

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limit, user) => limit?.[user] ?? 0;

// pure function
const addExpenses = function (
  state,
  limit,
  value,
  description,
  user = 'jonas',
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limit, cleanUser)
    ? [...state, { value: -value, description: description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpenses(budget, spendingLimits, 400, 'Pizza 🍕');

const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda',
);
const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// reguler function
// const checkExpenses = function (state, limit) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limit, state.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// };

// arrow function
// pure function : not create side effect & not mutate the original state/budget
const checkExpenses = (
  state,
  limit, // not depends on global data/state
) =>
  state.map(
    (
      entry, //create brand new array
    ) =>
      entry.value < -getLimit(limit, state.user)
        ? { ...entry, flag: 'limit' }
        : entry,
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// pure function
const logBigExpenses = function (state, limit) {
  // declarative programming
  const bigExpenses = state
    .filter(entry => entry.value <= -limit)
    .map(entry =>
      entry.value <= -limit ? `${entry.description.slice(-2)}` : '',
    )
    .join(' /');
  // .reduce((str, curr) => `${str} / ${curr.description.slice(-2)}`, '');

  // impure function
  console.log(bigExpenses);

  // immperative programming
  // let output = '';
  // for (const entry of state) {
  //   output +=
  //     entry.value <= -limit ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// Mini challenge
const getTotalExpenses = function (state, userBudget) {
  return state
    .filter(entry => entry.user === userBudget.toLowerCase() && entry.value < 0)
    .reduce((accEntry, entry) => accEntry + entry.value, 0);
};

console.log(budget);
logBigExpenses(finalBudget, 1000);
console.log(getTotalExpenses(finalBudget, 'JOnas'));
  