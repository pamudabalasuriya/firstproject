// const { fsync, fstat } = require("fs");
// const os = require("os");

// console.log("Operating system: ", os.platform());
// console.log("Architecture: ", os.arch());
// console.log("Release: ", os.release());
// console.log("Hostname: ", os.hostname());

// console.log("No of CPUs: ", os.cpus().length);
// console.log("CPU Model: ", os.cpus()[0].model);
// console.log("CPU Speed: ", os.cpus()[0].speed);
// //console.log("Operating system: ", os.platform());

// console.log("Netwok interfaces: ", os.networkInterfaces());
// console.log("Uptime: ", os.uptime() + " seconds");
// console.log("Curernt User: ", os.userInfo().username);
// //console.log("CPU Speed: ", os.cpus()[0].speed);

// const fs = require("fs");

// const tmpfile = os.tmpdir() + "/temp.txt";
// fs.writeFileSync(tmpfile, "This is a temporory file");
// console.log("Temporary file created", tmpfile);



//const path = require("path");

//const joinedPath = path.join("directory", "file.txt");
//console.log(joinedPath);


// const tmp = require("tmp");
// const { error } = require("console");

// tmp.file((err,path, fd, cleanupCallback) => {
//     if (err) throw err;

//     console.log(path);

//     cleanupCallback();
// });


// // testConnection.js
// const connectToDatabase = require('./db'); // Adjust path if needed

// // Call the function to connect to MongoDB
// connectToDatabase()
//     .then(() => {
//         console.log("MongoDB connection test successful!");
//         // You can perform additional actions after the database connection is successful
//     })
//     .catch((error) => {
//         console.error("Error in testing MongoDB connection:", error);
//     });



// app.js
const express = require("express");
const connectToDatabase = require("./db"); // Import the database connection function
const post = require("./post"); // Import the post routes from post.js

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the post routes defined in post.js
app.use("/api/post", post);

// Connect to MongoDB and start the server
connectToDatabase()

        // Start the server if the database connection is successful
app.listen(port, () => {
     console.log(`Server running on http://localhost:${port}`);
});
