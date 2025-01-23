const { fsync, fstat } = require("fs");
const os = require("os");

console.log("Operating system: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("No of CPUs: ", os.cpus().length);
console.log("CPU Model: ", os.cpus()[0].model);
console.log("CPU Speed: ", os.cpus()[0].speed);
//console.log("Operating system: ", os.platform());

console.log("Netwok interfaces: ", os.networkInterfaces());
console.log("Uptime: ", os.uptime() + " seconds");
console.log("Curernt User: ", os.userInfo().username);
//console.log("CPU Speed: ", os.cpus()[0].speed);

const fs = require("fs");

const tmpfile = os.tmpdir() + "/temp.txt";
fs.writeFileSync(tmpfile, "This is a temporory file");
console.log("Temporary file created", tmpfile);



//const path = require("path");

//const joinedPath = path.join("directory", "file.txt");
//console.log(joinedPath);


const tmp = require("tmp");
const { error } = require("console");

tmp.file((err,path, fd, cleanupCallback) => {
    if (err) throw err;

    console.log(path);

    cleanupCallback();
});

