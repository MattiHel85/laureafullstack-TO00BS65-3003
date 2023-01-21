const data = require('./example.json');

// for (var i=0; i < data.length; i++){
//     console.log("***************");
//     console.log("First Name: " + data[i].firstName + "\n" + "Last name: " + data[i].lastName + "\n" + "Age: " + data[i].age);
//     console.log("***************");
//     console.log("\n");
// }

console.log('Original data');
console.log(data)

// Add more data to JSON object
data.push({
    "firstName": "Matt",
    "lastName":"Simpson",
    "age": 38
});

console.log('Added data')
console.log(data)

delete data[0]

console.log('Deleted data')
console.log(data)