import sequelize from "../Config/connection.js";
import { DataTypes } from "sequelize";
import User from "../Models/userModel.js"
const Meme = sequelize.define("Meme", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,

  },
});

User.hasMany(Meme)
Meme.belongsTo(User)

Meme.sync();

export default Meme;






//image URLs, text captions, and user references