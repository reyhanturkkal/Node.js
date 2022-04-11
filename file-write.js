const fs = require("fs");

// add text to end of the page
fs.appendFile("demoWrite.txt", "Backend tryings...", (err) => {
 if(err){console.log(err)};
});
//writeFile ==> clears text and adds new text