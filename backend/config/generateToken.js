//scarichiamo "npm install jsonwebtoken"
//ci aiuta ad autorizzare lo user 

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", //dopo 30 giorni scade
  });
};

module.exports = generateToken;