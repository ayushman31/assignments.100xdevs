const  JWT_ADMIN_PASSWORD  = process.env.JWT_ADMIN_PASSWORD;
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
  
    const decodedData = jwt.verify(token, JWT_ADMIN_PASSWORD);
  
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
    adminMiddleware
  }