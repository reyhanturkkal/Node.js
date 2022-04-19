const User = require('../user.model')

exports.create = (req,res) => {
  const newUser = new User({email:req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    isActive: req.body.isActive,
    userType:req.body.userType,
})
  
  newUser.save()
  .then(user=>{
      res.json(user)
  }).catch(err=>{
     res.json(err)
  })
}
exports.allUsers=(req,res)=>{
 User.find().then(users=>{
     res.send(users)
 })
}