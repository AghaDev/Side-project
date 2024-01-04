import sequelize from "../Config/connection.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const User = sequelize.define("User", {
    username:{ type: DataTypes.STRING,
    allowNull: false,
},
    password:{
        type: DataTypes.STRING,
        set(value) {
          const hashedPassword = bcrypt.hashSync(value, 10);
          this.setDataValue("password", hashedPassword);
        },
        allowNull: false,
    }
}
)

User.sync();

export default User;