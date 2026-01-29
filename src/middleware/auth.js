const jwt = require('jsonwebtoken');

const authMiddleware = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null; // No header, no user

  const token = authHeader.split(' ')[1];
  if (!token) return null; // No token, no user

  try {
    return jwt.verify(token, 'secret'); 
  } catch (err) {
    // Log the error for debugging but don't crash the server
    console.error("JWT Verification failed:", err.message);
    return null; 
  }
};

module.exports = { authMiddleware };