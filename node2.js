const fs = require("fs");

//deleting a file using unlink
//works when the file is already present
fs.unlink("./ex.txt", (err) => {
    if (err) {
        console.log("Error happened wwhile deleting a file.");
    }
    else {
        console.log("File deleted successfully.");
    }
});

//creating and deleting the file using writeFile and unlink

//creating a file
fs.writeFile("./ex2.txt","Hello from Menaka Raman.",(err)=>{
    if(err)
    {
        console.log("Error while creating the file");
    }
    else
    {
        console.log("File successfully created and content is written.");

        //deleting the file
        fs.unlink("./ex2.txt",(err)=>{
            if(err)
            {
                console.log("Error while deleting the file");
            }
            else
            {
                console.log("File successfully deleted.");
            }
        });
    }
});


