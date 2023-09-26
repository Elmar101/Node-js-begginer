const os = require("os");
const fs = require("fs");

const freeMemory = os.freemem();
const text = "Hello world!";

fs.writeFile("info.tx", text + " " + freeMemory , (err)=>{
  if(err) console.log({ err });
})


console.log({ freeMemory })