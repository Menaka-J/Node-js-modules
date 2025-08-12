const path = require("path");
const { pathToFileURL } = require("url");

//1
//path.basename() function 
//returns filename from the given path
filepath = "C:\\Users\\Menaka\\Downloads\\Menaka J .pdf";
console.log("File name : ")
console.log(path.basename(filepath));
console.log(path.basename(filepath,'.pdf'));

//2
//path.delimiter()
//return path delimiter
console.log("\nPATH DELIMITER FOR WINDOWS IS " + path.delimiter);
//split environment variables path strings
const env = process.env.PATH;
const parts = env.split(path.delimiter);
console.log(parts);

//3
//path.dirname()
//returns path of file upto its directory
filepath = "C:\\Users\\Menaka\\Downloads\\Menaka J .pdf";
console.log("Directory path : ")
console.log(path.dirname(filepath));