const fs = require("fs");
const filename = "a.txt";

function pranavReadFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        resolve(data); // Resolve the promise with the file content
      }
    });
  });
}

function onDone(data) {
  const content = data.replace(/\s+/g, " ").trim();
  writeToFile(filename, content)
    .then((message) => {
      console.log(message); // Log success message
    })
    .catch((err) => {
      console.error("Error writing to the file:", err); // Handle write error
    });
}

function writeToFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        resolve("Write Hogya"); // Resolve the promise on successful write
      }
    });
  });
}

pranavReadFile()
  .then(onDone)
  .catch((err) => {
    console.error("Error reading the file:", err); // Handle read error
  });
