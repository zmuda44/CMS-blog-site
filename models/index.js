const User = require('./User');
const Post = require('./Post');

//both of these reference the foregin key in the post table user_id which is linked to blog_user.id
// User.hasMany(Post, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });




module.exports = { User, Post };




