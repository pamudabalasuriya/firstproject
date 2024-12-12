// Array to store users that are added to the main list
const users = [];

// List of predefined users to choose from
const userPool = [
    { name: "John Doe", wealth: 145845651 },
    { name: "Jane Smith", wealth: 5455446315 },
    { name: "Michael Johnson", wealth: 225145 },
    { name: "Sarah Brown", wealth: 251635464 },
    { name: "David Williams", wealth: 2123543 }
];

// Keep track of the current user to add
let currentUserIndex = 0;

// Function to add the next user from the user pool
function addUser() {
    const userToAdd = userPool[currentUserIndex];
    users.push(userToAdd);
    currentUserIndex++;
    displayUsers();
}

// Function to double the wealth of all users
function doubleWealth() {
    users.forEach(user => {
        user.wealth *= 2;
    });
    displayUsers();
}

// Function to show millionaires (wealth >= 1 million)
function showMillionaires() {
    const millionaires = users.filter(user => user.wealth >= 1000000);
    let output = "<h3>Millionaires:</h3>";
    if (millionaires.length === 0) {
        output += "<p>No millionaires found!</p>";
    } else {
        millionaires.forEach(user => {
            output += `<p>${user.name}: $${user.wealth.toLocaleString()}</p>`;
        });
    }
    document.getElementById("user-list").innerHTML = output;
}

// Function to sort users by wealth in descending order
function sortUsers() {
    users.sort((a, b) => b.wealth - a.wealth);
    displayUsers();
}

// Function to calculate total wealth of all users
function calculateWealth() {
    const totalWealth = users.reduce((acc, user) => acc + user.wealth, 0);
    //alert(`Total Wealth: $${totalWealth.toLocaleString()}`);
    //output += `<div class="user-item">Total Wealth: $${totalWealth.toLocaleString()}</div>`
    output += `<div class="user-item">Total Wealth:</div>`
    document.getElementById("user-list").appendChild(output)
}

// Function to display all users
function displayUsers() {
    let output = "<h3>User List:</h3>";
    if (users.length === 0) {
        output += "<p>No users added yet.</p>";
    } else {
        users.forEach(user => {
            output += `<div class="user-item">${user.name}: $${user.wealth.toLocaleString()}</div>`;
        });
    }
    document.getElementById("user-list").innerHTML = output;
}
