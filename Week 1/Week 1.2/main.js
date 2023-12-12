// let firstName = "Pranav";
// let lastName = "Ashish";
// let gender = "F";
// if (gender == "M") {

//   console.log("Goodmorning, Mr." + " " + firstName + " " + lastName);
// } else {
//   console.log("Goodmorning, Ms." + " " + firstName + " " + lastName);
// }

// let ans = 0;
// for (let i = 0; i <= 1000; i++) {
//   ans = ans + i;
// }
// console.log(ans);
// console.log("Hello");

// let arr = [
//   1, 2, 4, 5, 6, 7, 8, 9, 10, 45, 87, 45, 195, 89, 21, 56, 23, 59, 78, 48, 1825,
//   3, 12, 22,
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }
// let check = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > check) {
//     check = arr[i];
//   }
// }
// console.log(check);

// let person = [
//   {
//     fname: "Pranav",
//     lname: "Ashish",
//     age: 23,
//     gender: "male",
//   },
//   {
//     fname: "Ashish",
//     lname: "Singh",
//     age: 23,
//     gender: "male",
//   },
//   {
//     fname: "Neha",
//     lname: "Kapoor",
//     age: 23,
//     gender: "female",
//   },
//   {
//     fname: "Seema",
//     lname: "Gupta",
//     age: 23,
//     gender: "female",
//   },
// ];
// for (let i = 0; i < person.length; i++) {
//   if (person[i].gender == "male") {
//     console.log(person[i].fname);
//   }
// }

// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// let temp;

// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//   // Swap elements at start and end indices
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;

// Move indices towards the center

//   start++;
//   end--;
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function sum(num1, num2, func) {
  let ans = num1 + num2;
  func(ans);
}

function sum1(data) {
  console.log("Result of the sum is : " + data);
}

function sum2(data) {
  console.log("Sum's result is : " + data);
}

sum(1, 2, sum1);
