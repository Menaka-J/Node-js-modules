const path = require("path");

//7
//concate path segments using separator
const full = path.join('users', 'bob', '..', 'alice', 'notes.txt');
console.log(full);

//8
//path.normalize()
//returns correct path using eliminating .. or / etc.
let filepath = "\\menaka\\dir1\\..\\dir2\\file1.txt";
console.log("\n" + path.normalize(filepath));


//9
//path.parse()
//convert path string to objects
let filepath1 = "C:\\Users\\Menaka\\Downloads\\Menaka J .pdf";
console.log("Objects of "+ filepath1 + " :");
console.log(path.parse(filepath1));