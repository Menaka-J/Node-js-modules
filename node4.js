//creating a file, writing into that file, reading content from that file then deleting that file

//creating and writing into a file
fs.writeFile("./ex1.txt", "Writing into a new file", (err) => {
    if (err) {
        console.log("Error while creating a file.");
    }
    else {
        console.log("File successfully created and content is written.");
        //now reading that file 
        fs.readFile("./ex1.txt", 'utf-8', (err, data) => {
            if (err) {
                console.log("Error while reading content of file.");
            }
            else {
                console.log("\nFILE CONTENT:\n");
                console.log(data);

                //Now deleting that file
                fs.unlink("./ex1.txt",(err)=>
                {
                    if(err)
                    {
                        console.log("Error while deleating the file.");
                    }
                    else
                    {
                        console.log("File deleted successfully.")
                    }
                });

            }
        });

    }
});
