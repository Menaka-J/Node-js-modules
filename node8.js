const fs = require("fs");
const { emitKeypressEvents } = require("readline");

//Create a directory ,add some file into that directory, read content of the file,rename that file,  delete that file then delete the directory

//1)Creating new directory
fs.mkdir("./dir1",(err)=>{
    if(err)
    {
        console.log("Error while creating the directory.\n");
    }
    else
    {
        console.log("Directory successfully created.\n");

        //Adding file into that directory

        fs.writeFile("./dir1/dir1file.txt","Writing into the directory file.", (err)=>{
            if(err)
            {
                console.log("Error while creating and writing file into the directory.\n");
            }
            else
            {
                console.log("New file successfully created and content is written into the file.\n");

                //Reading content of that file
                fs.readFile("./dir1/dir1file.txt",'utf-8',(err,data)=>{
                    if(err)
                    {
                        console.log("Error while reading content of that file.\n");
                    }
                    else
                    {
                        console.log("FILE CONTENT : ");
                        console.log(data+"\n");

                        //Renaming the file
                        fs.rename("./dir1/dir1file.txt","./dir1/dirfilenew.txt",(err)=>{
                            if(err)
                            {
                             console.log("Error while renaming the file.\n");   
                            }
                            else
                            {
                                console.log("File successfully renamed.\n");

                                //Deleting the file

                                fs.unlink("./dir1/dirfilenew.txt",(err)=>{
                                    if(err)
                                    {
                                        console.log("Error while deleting the file.\n");
                                    }
                                    else
                                    {
                                        console.log("File deleted successfully.\n");

                                        //Deleting the directory

                                        fs.rmdir("./dir1",(err)=>{
                                            if(err)
                                            {
                                                console.log("Error while deleting the directory.\n");
                                            }
                                            else
                                            {
                                                console.log("Directory successfully deleted.\n");
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});