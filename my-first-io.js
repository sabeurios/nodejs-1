let fs = require('fs')  
       
let data = fs.readFileSync(process.argv[2])  
let lines = data.toString().split('\n').length - 1  
console.log(lines)