const path = require("path");

//4
//path.extname()
//returns extension of file
filename = "C:\\Users\\Menaka\\Downloads\\Menaka J .pdf";
console.log("Extension of \""+filename + "\" is "+ path.extname(filename));
//example 2 
//returns '' 
console.log(path.extname("C:\\Users\\Menaka\\Downloads\\Menaka J "))


//5
//path.format()
//Create path string
var obj1 = {root: '/', dir:"menaka", name: "file1", ext: '.pdf' };
console.log("PATH is "+ path.format(obj1));


//6
//path.isAbsolute()
//return true if path starts from root else false
console.log(filename + "is "+ path.isAbsolute(filename));