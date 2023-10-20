const fs = require("fs");
const path = require("path");

// Creating a folder
// fs.mkdir(path.join(__dirname, "test"), function (err) {
//   if (err) throw err;
//   console.log("Folder has been created");
// });


// Create and writing to a file
// fs.writeFile(
//   path.join(__dirname, "/test", "index.html"),
//   "<h1>Hello Node JS</h1>",
//   (err) => {
//     if (err) throw err;
//     console.log("Something has been written....");
//   }
// );


// Appending to a file
// fs.appendFile(
//   path.join(__dirname, "/test", "index.html"),
//   "<button>Click Me</button>",
//   (err) => {
//     if (err) throw err;
//     console.log("Appending to the file done...");
//   }
// );


// Reading from the file
// fs.readFile(
//   path.join(__dirname, "/test", "index.html"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );


// Renaming a file
// fs.rename(
//     path.join(__dirname, "test", "hello.html"),
//   path.join(__dirname, "test", "index.html"),
//   (err) => {
//     if (err) throw err;
//     console.log("Renaming file done");
//   }
// );