const fs = require("fs");

module.exports.readFsDir = readFsDir = fs.readdir("./modules", {} , (error, file)=>{
  if(error) console.log({error});
  else {
    console.log({file});
  }
});
