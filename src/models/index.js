const User = require("./User");
const EmailCode = require("./EmailCode");
const Upa = require("./Upa");

EmailCode.belongsTo(User);
User.hasOne(EmailCode);

Upa.belongsTo(User)
User.hasMany(Upa)
