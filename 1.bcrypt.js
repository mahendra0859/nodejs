const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
//Technique 1 (generate a salt and hash on separate function calls):
bcrypt.genSalt(saltRounds, function(err, salt) {
    console.log("salt", salt);
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
		if(err) console.error("err", err);
		else console.log("tech 1 Hash", hash);
    });
});
//Technique 2 (auto-gen a salt and hash):
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
    if(err) console.error("error", err);
  else {
    console.log("tech 2 hash", hash);
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    console.log("bcrypt.compare", res)
  });
  }
});
