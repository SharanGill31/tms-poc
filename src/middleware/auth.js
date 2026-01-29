const jwt = require('jsonwebtoken');

const authMiddleware = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;

  const token = authHeader.split(' ')[1];
  if (!token) return null;

  try {
    return jwt.verify(token, 'secret'); 
  } catch (err) {
    
    console.log("Auth validation failed:", err.message);
    return null; 
  }
};

module.exports = { authMiddleware };