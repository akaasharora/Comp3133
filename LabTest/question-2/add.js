const fs = require('fs')
const path = require('path')
var dir = './Logs';

let addLogs = function () {
   if (!fs.existsSync(dir)){
       fs.mkdirSync(dir);
   }
   try {
       process.chdir(dir);
       console.log('New directory: ' + process.cwd());
   }
   catch (err) {
       console.log('chdir: ' + err);
   }
   let data = 'I am a Log file. Pwease Dont Dewete ME!!!'
   for (let i = 1; i <= 10; i++) {
       fs.writeFile(`log${i}.txt`, data, function(err, data){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}
addLogs()




