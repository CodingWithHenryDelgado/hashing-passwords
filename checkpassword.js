const bcrypt = require("bcryptjs")

const passwordEnteredByUser = "mypass123"
const hash = "shushyourmouth"

bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
  if (err) {
    throw err
  } else if (!isMatch) {
    console.log("Password doesn't match!")
  } else {
    console.log("Password matches!")
  }
})