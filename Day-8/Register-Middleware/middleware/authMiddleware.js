const authMiddleware = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({msg: "Name is required",});
  }

  if (!email) {
    return res.status(400).json({msg: "Email is required", });
  }

  if (!password) {
    return res.status(400).json({msg: "Password is required",});
  }

  if (password.length < 6) {
    return res.status(400).json({ msg: "Password must be at least 6 characters",});
  }

  next();
};

export default authMiddleware;