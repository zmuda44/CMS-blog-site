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


      res.send(postData)
  
      // Serialize data so the template can read it
      // const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      // res.render('homepage', { 
      //   posts, 
      //   logged_in: req.session.logged_in 
      // });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});




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