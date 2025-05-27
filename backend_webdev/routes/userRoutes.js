// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Authenticated access',
    user: req.user, // 来自 token 解密
  });
});


router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
