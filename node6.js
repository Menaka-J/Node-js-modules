const fs= require("fs");


//Reading content of the directory using "readdir"
//works only when the directory is present
fs.readdir("./newdir",(err,files)=>
{
    if(err)
    {
        console.log("Error while reading directory content.");
        console.log("Check if the directory is present or not.\n\n");
    }
    else{
        console.log("DIRECTORY CONTENT:\n");
        console.log(files);
    }
});


//Stats of file using "stat"

fs.stat("./newex.txt",(err, stats)=>{
    if(err)
    {
        console.log("Erro while fetching details of file [Check if the file is present ].");
    }
    else
    {
        console.log(stats);
    }
});