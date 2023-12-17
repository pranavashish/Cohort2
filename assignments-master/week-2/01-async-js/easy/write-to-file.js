const fs = require("fs");

function writeToFile(fileName, content) {
  return new Promise((resolve) => {
    fs.writeFile(fileName, content, (err, data) => {
      resolve("File write successful!");
    });
  });
}

const fileName = "a.txt";
const contentToWrite = "Hello, this is content being written to a file!";

writeToFile(fileName, contentToWrite).then((message) => {
  console.log(message); // File write successful!
});
