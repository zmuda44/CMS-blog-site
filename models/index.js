const User = require('./User');
const Post = require('./Post');

//both of these reference the foregin key in the post table user_id which is linked to blog_user.id
//NEEDED to have this when you referenced model: post in an include on homeRoutes.js get request to profile
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});




module.exports = { User, Post };




