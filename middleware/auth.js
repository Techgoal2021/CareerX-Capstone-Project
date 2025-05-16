// middleware/auth.js
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: 'Error checking admin status' });
  }
};

