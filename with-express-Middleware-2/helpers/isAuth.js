// app.use((req,res,next)=>{
//   const authorized = true;
//   if (authorized) {
//      next();
//   } else {
//      res.send('You have no authority, please login')
//   }
// })
const isAuth = (req, res, next) => {
  const authorized = false;
  if (authorized) {
    next();
  } else {
    res.send("You have no authority, please login");
  }
}
module.exports = isAuth;
