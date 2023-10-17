
const path = require('path')
const rootDir = require('../util/path')

exports.getContact= ( (req, res) => {
    res.sendFile(path.join(rootDir, 'views','contactus.html'));
  })


exports.postContact= ((req,res) => {
    console.log(req.body)
    fs.writeFileSync('user.txt',`${req.body.title} : ${req.body.mail}`)
    res.sendFile(path.join(rootDir,'views','succesfull.html'));
})