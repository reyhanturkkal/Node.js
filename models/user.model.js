const db = require("../db")
const dbSchema = new db.Schema({

  email: {
      type:String,
      required:[true,'must']
  },
  password: {
    type:String,
    required:[true,'must'],
    minlength:3,
    maxlength:30
  },
  name: {
    type:String,
    required:[true,'must'],
    minlength:3,
    maxlength:30
  },
  age:Number,
  gender: {
    type:String,
    min:18,
  },
  isActive:Boolean,
  userType: {
    type:String
  },
});

module.exports = db.model("users", dbSchema);
