const fs = require("fs");

//Creating a directory using mkdir
fs.mkdir("./newdir",(err)=>{
    if(err)
    {
        console.log("Error while creating the directory.\nERROR: Check if the directory is already present.");
    }
    else
    {
        console.log("Directory successfully created.");
    }
});

//Deleting a directory using rmdir
//works only when the directory is present
fs.rmdir("./newdir",(err)=>{
    if(err)
    {
        console.log("Error while deleting directory [check if the directory is not present.]");
    }
    else{
        console.log("Directory successfully deleted.");
    }
});



