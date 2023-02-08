const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001
    },
    hobbies: ["reading", "running", "gaming"],
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        age: 25
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 35
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: 90001
    },
    hobbies: ["hiking", "cooking", "traveling"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 4,
        name: "Samantha Brown",
        age: 28
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: 60001
    },
    hobbies: ["fishing", "golfing", "watching TV"],
    friends: [
      {
        id: 1,
        name: "John Doe",
        age: 30
      },
      {
        id: 5,
        name: "Emily Davis",
        age: 32
      }
    ]
  }
];

// FILTER
const johnDoe = data[0];
let i, j;

// Example: 
// Using filter method, create a new array of objects containing only the people who live in California (state: "CA").
const peopleInCA = data.filter(person => person.address.state === "CA");
console.log(peopleInCA);

// Exercise 1: Use the filter method to get all the friends of John Doe
let johnDoeFriendIDs = johnDoe.friends.map(friendID => friendID.id);
const friendsOfJohnDoe = data.filter(
  function(person) {
    return johnDoeFriendIDs.includes(person.id);
  }
);

// Exercise 2: Use the filter method to get all the people who live in New York
let peopleInNewYork = data.filter( 
  function(person) {
    return person.address.city === "New York";
  }
);

// Exercise 3: Use the filter method to get all the people who are older than 30
let peopleOlderThan30 = data.filter(
  function(person) {
    return person.age > 30;
  }
);

// MAP

// Example:
// Using map method, create a new array of strings with the full addresses (street, city, state, zip) of each person.
const fullAddresses = data.map(person => {
  const { street, city, state, zip } = person.address;
  return `${street}, ${city}, ${state} ${zip}`;
});
console.log(fullAddresses);

// Exercise 1: Use the map method to put the names of all the friends of John Doe in a single array (use also the flat method)
let namesOfJohnDoeFriends = johnDoe.friends.map(fren => fren.name);

// Exercise 2: Use the map method to get the full addresses (street, city, state, and zip) of all the people in the data array
let addressOfPeople = data.map(person => person.address);

// Exercise 3: Use the map method to get the hobbies of all the people in the data array in a single array
let hobbiesOfPeople = []; 
i = data.map(person => person.hobbies);
i = i.flat();
for(j of i) {
  if(hobbiesOfPeople.includes(j) === false) hobbiesOfPeople.push(j);
}


// FIND

// Example
// Using find method (and maybe some more methods), find the person with the name "Emily Davis".
const emily = data.map(person => person.friends).flat().find(p => p.name === "Emily Davis");
console.log(emily);


// Exercise 1: Use the find method to find the first person who lives in Chicago
let firstPersonThatLivesInChicago = data.find(person => person.address.city === "Chicago");
// Exercise 2: Use the find method to find the first person who is older than 30
let firstPersonThatIsOlderThan30 = data.find(person => person.age > 30);
// Exercise 3: Use the find method to find the first person who has "reading" as a hobby
let firstPersonWhoLikesReading = data.find(person => person.hobbies.includes("reading"));

// FOREACH

// Example
// Using forEach method, create a new object that has the names of all friends of each person as properties and their respective ages as values.
const friendsWithAges = {};
data.forEach(person => {
  person.friends.forEach(friend => {
    friendsWithAges[friend.name] = friend.age;
  });
});
console.log(friendsWithAges);

// Exercise 1: Use the forEach method to print out the names of all the people in the data array
data.forEach(person => console.log(person.name));
// Exercise 2: Use the forEach method to add a new property "isAdult" to each person object and set it to true if the person is over 18 and false if not
data.forEach(
  function(person) {
    if(person.age > 18) {
      person.isAdult = true;
    }
    else {
      person.isAdult = false;
    }
  }
);
// Exercise 3: Use the forEach method to print out the names of all the friends of each person
data.forEach(
  function(person) {
    for(i of person.friends) {
      console.log(i.name);
    }
  }
)

// SOME

// Example
// Using some method, check if any person in the data array has the hobby "traveling".
const anyTravelers = data.some(person => person.hobbies.includes("traveling"));
console.log(anyTravelers);


// Exercise 1: Use the some method to check if any of the people in the data array have "cooking" as a hobby
let somePeopleLikeCooking = data.some(person => person.hobbies.includes("cooking"));
// Exercise 2: Use the some method to check if any of the people in the data array live in California
let somePeopleLiveInCalifornia = data.some(person => person.address.state == "CA");
// Exercise 3: Use the some method to check if any of the friends of each person in the data array are older than 30
let someoneHasFriendOver30 = data.some(person => person.friends.map(friend => friend.age).some(age => age > 30));

// EVERY

// Example:
// Using every method, check if all people in the data array have an age greater than 20.
const allAdults = data.every(person => person.age > 20);
console.log(allAdults);

// Exercise 1: Use the every method to check if all the people in the data array have "reading" as a hobby
let everyoneLovesReading = data.every(person => person.hobbies.includes("reading"));
// Exercise 2: Use the every method to check if all the people in the data array live in the same state
let everyoneLivesInSameState = data.every(person => person.address.state === johnDoe.address.state);
// Exercise 3: Use the every method to check if all the friends of each person in the data array are older than 25
let everyoneFriendsOlderThan30 = data.every(person => person.friends.every(friend => friend.age > 25));

// REDUCE

// Example:
// Using reduce method, find the total age of all people in the data array.
const totalAge = data.reduce((acc, person) => acc + person.age, 0);
console.log(totalAge);

// Exercise 1: Use the reduce method to get the total age of all the people in the data array
let totalAgeOfAllPeople = data.reduce((acc, person) => acc + person.age, 0);
// Exercise 2: Use the reduce method to get the number of people who live in each state
let totalPeopleInEachState = data.reduce(
  function (acc, person) {
    if(acc[person.address.state]) acc[person.address.state] += 1;
    else acc[person.address.state] = 1;
    return acc;
  }, [])
// Exercise 3: Use the reduce method to get the average age of all the people in the data array
let averageAge = data.reduce((acc, person) => acc + person.age/data.length, 0);

// INCLUDES

// Example
// Using includes method, check if the name "Jane Smith" is in the data array.
const janeExists = data.map(person => person.name).includes("Jane Smith");
console.log(janeExists);

// Exercise 1: Use the includes method to check if the hobbies of John Doe include "gaming"
let johnDoeLikesGaming = johnDoe.hobbies.includes("gaming");
// Exercise 2: Use the includes method to check if the friends of Jane Smith include someone with the id of 4
let janeFriendsIDs = data[1].friends.map(friend => friend.id);
let janeFriendID4 = janeFriendsIDs.includes(4);
// Exercise 3: Use the includes method to check if the data array includes a person with the name "Emily Davis"
let includesEmily = data.map(person => person.name).includes("Emily Davis") || data.map(person => person.friends).flat().map(friend => friend.name).includes('Emily Davis');


