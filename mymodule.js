let fs = require('fs')
let path = require('path')

module.exports =  (dir, filterStr, callback) => {

  fs.readdir(dir, (err, listfiles) => {
    if (err)
      return callback(err)

    listfiles = listfiles.filter( (file) => {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, listfiles)
  })
}