import jwt from 'jsonwebtoken'
import Users from "../models/Users.js";

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ msg: "You Have No Authorized To Access This Page" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Users.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ msg: "No User Found With ID" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "You Have No Authorized To Access This Page" });
  }
};

