const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  // console.log(req.headers.Request-ID)
const payload = { 
  userId: 12345, 
  username: 'rahulAuthentication.com'
};
const secretKey = 'mysecretkey';
const options = { expiresIn: '1h' };

const token = jwt.sign(payload, secretKey, options);
console.log('Generated token:', token);

// Verify a JWT token
jwt.verify(token, 'mysecretkey', (err, decoded) => {
  if (err) {
    console.log('Error verifying token:', err.message);
  } else {
    console.log('Decoded token payload:', decoded);
    next();
  }
})
}
