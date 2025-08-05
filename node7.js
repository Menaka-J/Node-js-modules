const fs = require("fs");

//creating a directory, adding files to that directory , fetching details of that files

//creating directory
fs.mkdir("./directory",(err)=>{
    if(err)
    {
        console.log("Error while creating the directory.\n");
    }
    else
    {
        console.log("Directory successfully created.\n");

        //Adding files to that directory
        for(let i = 0; i < 2 ; i++)
        {
            fs.writeFile("./directory/file"+i,"Writing into new file.\n",(err)=>{
                if(err)
                {
                    console.log("Error while creating file.\n");
                }
                else
                {
                    console.log("File successfully created.\n");

                    //fetching details of that file

                    fs.stat("./directory/file"+i,(err,stats)=>
                    {
                        if(err)
                        {
                            console.log("Error while fetching details of the file.\n");
                        }
                        else
                        {
                            console.log("DETAILS OF FILE "+i+" :\n");
                            console.log(stats);
                        }
                    });
                }
            });
        }
    }
});