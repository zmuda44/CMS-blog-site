const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class blogUser extends Model {}


// checkPassword(loginPw) {
//   return bcrypt.compareSync(loginPw, this.password);
// }

blogUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      unique: true,
      // validate: {
      //   isEmail: true,
      // },
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   len: [8],
      // },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_user',
  }
);

module.exports = blogUser;


//this object goes before sequelize all part of the object that sequelize is a part of. sequelize is the next object in that sequence
// {
//   hooks: {
//     beforeCreate: async (newUserData) => {
//       newUserData.password = await bcrypt.hash(newUserData.password, 10);
//       return newUserData;
//     },
//     beforeUpdate: async (updatedUserData) => {
//       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
//       return updatedUserData;
//     },
//   },
//   sequelize,
//   timestamps: false,
//   freezeTableName: true,
//   underscored: true,
//   modelName: 'user',
// }
