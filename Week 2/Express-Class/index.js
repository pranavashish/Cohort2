// // creating an http server
// // express
// // node default library => NO

// const express = require("express");

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hi there, ans is " + ans);
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// var users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//     ],
//   },
// ];

// app.get("/", function (req, res) {
//   const johnKindeys = users[0].kidneys;
//   const numOfKidneys = johnKindeys.length;
//   let numOfHealthy = 0;
//   for (let i = 0; i < johnKindeys.length; i++) {
//     if (johnKindeys[i].healthy) {
//       numOfHealthy = numOfHealthy + 1;
//     }
//   }
//   const numOfUnhealthy = numOfKidneys - numOfHealthy;
//   res.json({ numOfKidneys, numOfHealthy, numOfUnhealthy });
// });

// //query parameter

// app.use(express.json());

// app.post("/", function (req, res) {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "Done!",
//   });
// });

// app.listen(3000);

// const express = require("express");
// const app = express();

// // Initial user data
// let users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//     ],
//   },
// ];

// // Get request to retrieve kidney status
// app.get("/", function (req, res) {
//   const johnKidneys = users[0].kidneys;
//   const numOfKidneys = johnKidneys.length;
//   let numOfHealthy = 0;

//   // Count healthy kidneys
//   for (let i = 0; i < johnKidneys.length; i++) {
//     if (johnKidneys[i].healthy) {
//       numOfHealthy++;
//     }
//   }

//   const numOfUnhealthy = numOfKidneys - numOfHealthy;
//   res.json({ numOfKidneys, numOfHealthy, numOfUnhealthy });
// });

// // Middleware to handle JSON data
// app.use(express.json());

// // Post request to update kidney status
// app.post("/", function (req, res) {
//   const isHealthy = req.body.isHealthy;

//   // Check if the body contains the required data
//   if (isHealthy !== undefined && typeof isHealthy === "boolean") {
//     users[0].kidneys.push({
//       healthy: isHealthy,
//     });

//     res.json({ msg: "Done!" });
//   } else {
//     res.status(400).json({ error: "Invalid data format" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// 411
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// removing all the unhealhty kidneys
app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
app.listen(3000);
