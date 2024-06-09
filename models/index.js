const User = require('./User');
const Post = require('./Post');



module.exports = { User, Post };




/*

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});


*/