const jwt = require("jsonwebtoken");
const  JWT_USER_PASSWORD  = process.env.JWT_USER_PASSWORD;

function userMiddleware(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_USER_PASSWORD);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.json({
      message: "User not logged in",
    });
  }
}

module.exports = {
    userMiddleware
}
