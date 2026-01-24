const jwt = require('jsonwebtoken');

const authMiddleware = (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return null;
  try {
    return jwt.verify(token, 'secret'); // Same secret as mock
  } catch {
    throw new Error('Invalid token');
  }
};

module.exports = { authMiddleware };