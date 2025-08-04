const fs = require("fs");

//reading a file using readFile
fs.readFile("./ex.txt",'utf-8',(err,data)=>{
    if(err){
        console.log("ERROR");
    }
    else
    {
        console.log(data);
    }
});

//creating and writing into a file using writeFile
fs.writeFile("./ex1.txt","Writing into file.",(err)=>{
    if(err)
    {
        console.log("ERROR");
    }
    else
    {
        console.log("SUccessfully writed into file .")
    }
});

//appending data into a file using appendFile
fs.appendFile("./ex.txt","\nAppending details into a file.",(err)=>{
    if(err)
    {
        console.log("ERROR");
    }
    else
    {
        console.log("Successfullt appended.")
    }
});