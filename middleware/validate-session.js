const jwt = require("jsonwebtoken");
const User = require("../db").import("../models/user");

const validateSession = (req, res, next) => {
  if (req.method == "OPTIONS") {
    next();
  } else {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (!err && decoded) {
        console.log(decoded);
        User.findOne({
          where: {
            id: decoded.id,
          },
        })
          .then((user) => {
            if (!user) throw "err";
            req.user = user;
            return next();
          })
          .catch((err) => next(err));
      } else {
        //changed this to fix the circulating json error, i had two res.errors/res.status's
        console.log("Error");
        req.errors = err;
        return res.status(500).json({
          err: err,
        });
      }
    });
  }
};
module.exports = validateSession;
