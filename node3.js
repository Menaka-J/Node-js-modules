const { error } = require("console");
const fs = require("fs");

//Renaming a file using renameFile
//works only when a file with oldname is present
fs.rename("./ex.txt","./newex.txt",(err)=>{
    if(err)
    {
        console.log("Error while renaming a file[ File may not present.]");
    }
    else
    {
        console.log("File successfully renamed.");
    }
});

//creating a new file and renaming it

//creating a new file using writeFile
fs.writeFile("./ex.txt","Hey it's Menaka Raman.",(err)=>{
    if(err)
    {
        console.log("Error while creating the file.");
    }
    else{
        console.log("File successfully created and content is written.");

        //Now renaming that file
        fs.rename("./ex.txt","exnew.txt",(err)=>{
            if(err)
            {
                console.log("Error while renaming the file.");
            }
            else
            {
                console.log("Renaming the file.");
            }
        });
    }
});