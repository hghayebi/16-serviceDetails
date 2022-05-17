// const fs = require("fs");
// const path = require("path");

// // Reading data for csv file
// // let data = fs.readFileSync("d.csv", { encoding: "utf-8" });
// let data = fs.readFileSync(path.join(__dirname, "data", "raw-data.csv"), {
//   encoding: "utf-8",
// });

// // Change data to array
// data = data.split("\n");

// // Delete empty lines
// data = data.filter((line) => line.split(",").at(0) != "");

// // select first row as objects property
// const objPropertys = data[0].split(",").map((x) => x.trim());

// // Create an empty object
// const obj = new Object();

// data.slice(1).forEach((line) => {
//   let data2 = line.split(",").map((x) => x.trim());
//   let data2Name = data2[0];

//   obj[data2Name] = {};

//   data2.forEach((item, i) => {
//     obj[data2Name][objPropertys[i]] = item;
//   });
// });

// //

// //

// fs.writeFileSync(
//   path.join(__dirname, "data", "data0.json"),
//   JSON.stringify(obj)
// );
// ---------------------------------------------------------------
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const path = require("path");

const result = excelToJson({
  sourceFile: path.join(__dirname, "data", "raw-data.xlsx"),
  columnToKey: {
    A: "serviceCode",
    B: "serviceName",
    C: "serviceNameEn",
    D: "serviceDescription",
    E: "serviceDescriptionEn",
    F: "serviceLink",
    G: "serviceTime",
    H: "serviceResponsible",
    I: "serviceResponsibleContact",
    J: "serviceRequirements",
    K: "serviceMethod",
    L: "serviceSlaLink",
    M: "serviceGuideLink",
    N: "ServiceMardomLink",
    O: "serviceProcessImageLink",
    P: "q1",
    Q: "a1",
    R: "q2",
    S: "a2",
    T: "q3",
    U: "a3",
    V: "q4",
    W: "a4",
    X: "q5",
    Y: "a5",
  },
});
// console.log(result);

// fs.writeFileSync("data.json", JSON.stringify(result));

const obj = {};

result["raw-data"].forEach((el) => {
  obj[el.serviceCode] = el;
});

fs.writeFileSync(
  path.join(__dirname, "data", "data0.json"),
  JSON.stringify(obj)
);
