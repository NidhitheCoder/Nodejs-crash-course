// fs or file system module

const fs = require("fs");
const path = require("path");

// // Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// //  Create and write to files
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),"Hellow word..!", err => {
//     if(err) throw err;
//     console.log("File written to...");
// } )

// //  This code makes the file hello.txt is rewrite && append to this same file
// fs.writeFile(path.join(__dirname,'/test',"hello.txt",),"I love node js", err => {
//     if(err) throw err;
//     console.log("Files written to..");
//     //  Appendfile helps to append some values to a file
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),"  I love FUll stack too..", err => {
//         if(err)throw err;
//         console.log("String append to file..")
//     })
// });

//  To read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

// To Rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.txt'),err =>{
    if(err) throw err;
    console.log("File renamed");
})

