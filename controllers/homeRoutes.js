const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        // include: [
        //   {
        //     model: User,
        //     attributes: ['name'],
        //   },
        // ],
        
      }); 
    
      const posts = postData.map((post) => post.get({ plain: true }));  
      
      // res.render('homepage', { 
      //   posts, 
      //   logged_in: req.session.logged_in 
      // });

      res.render('homepage', { posts })
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {

  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});


// router.get('/profile', withAuth, async (req, res) => {

router.get('/profile', async (req, res) => {
  try {

    const userPostsData = await User.findByPk(req.id);
    
    const userPosts = userPostsData.map((post) => post.get({ plan: true }))

    

    res.render('profile', { userPosts });
  }catch (err) {
  res.status(500).json(err);
}
})




// router.get('/profile', withAuth, async (req, res) => {

// router.get('/profile', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });







// router.get('/', async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
//       const projectData = await Project.findAll({
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       // Serialize data so the template can read it
//       const projects = projectData.map((project) => project.get({ plain: true }));
  
//       // Pass serialized data and session flag into template
//       res.render('homepage', { 
//         projects, 
//         logged_in: req.session.logged_in 
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


  module.exports = router;



  // both of these worked

  // router.get('/', async (req, res) => {
//   const postData = await Post.findAll();
//   res.json(postData)
// })

// router.get('/', async (req, res) => {
//   const postData = await User.findAll();
//   res.json(postData)
// })




// router.get('/profile', (req, res) => {
//   res.render('profile')
// })