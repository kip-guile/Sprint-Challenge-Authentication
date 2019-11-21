/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // res.status(401).json({ you: 'shall not pass!' });
  const token = req.headers.authorization
  if(token) {
    jwt.verify(
      token,
      "TAKE THIS TO YOUR GRAVE",
      (err, decodedToken) => {
        if (err) {
          res.status(401).json({message: err.message})
        } else {
          req.decodedToken = decodedToken;
          next()
        }
      }
    )
  } else {
    res.status(400).json({message: "No credentials provided"})
  }
};
