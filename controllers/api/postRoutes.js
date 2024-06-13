const router = require('express').Router();
const { Post } = require('../../models');

//creates new project from form _____

//main question.  where do all of the res.status(200).json's go???


//there was a withAuth here on this i believe
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const newPost = await Post.create(req.body)

      console.log(newPost)
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;



//handles delete button on page________
  
//   router.delete('/:id', withAuth, async (req, res) => {
//     try {
//       const projectData = await Project.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
  
//       if (!projectData) {
//         res.status(404).json({ message: 'No project found with this id!' });
//         return;
//       }
  
//       res.status(200).json(projectData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });