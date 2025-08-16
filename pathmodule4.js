const path = require("path");

//10
//path.relative()
//tells path from one file to another
let f1 = "C:\\Users\\Menaka\\Downloads\\Menaka J .pdf";
let f2 = "C:\\Users\\Menaka\\Downloads\\AI ChatBot\\AI ChatBot\\requirements.txt";

console.log("path from "+f1+" to "+f2+" is \n");
console.log(path.relative(f1,f2));


//11
//path.resolve()
//similar to path.normalize()
let f3 = "C:\\Users\\Menaka\\..\\Gokul\\dir\\f1.cpp";
console.log("\n\nCorrected path "+path.resolve(f3));