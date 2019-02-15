const fs = require('fs')
const path = require('path')
var dir = './Logs';

let delLogs = function () {
   fs.readdir(dir, (err, files) => {
       if (err) throw err;

       for (const file of files) {
           fs.unlink(path.join(dir, file), err => {
           if (err) throw err;
           console.log(`deleting log files ${file}`)
       })
       }
       fs.rmdir(dir, (err) => {

        if (err) throw err;
        else{
            console.log("Logs deleted")
        }
    })
   })
}

delLogs()