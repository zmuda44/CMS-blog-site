const router = require('express').Router();
const { Post, Comment } = require('../../models');


//main question.  where do all of the res.status(200).json's go???


//there was a withAuth here on this i believe
router.post('/', async (req, res) => {

    try {
      const newPost = await Post.create(req.body) 
      res.status(200).json(newPost);

    } catch (err) {
      // console.log(err)
      res.status(400).json(err);
    }
});

router.post('/comment', async (req, res) => {


  const content = req.body.content
  const post_id = req.body.post_id
  user_id = req.session.user_id

  if(!user_id) {
    console.log("no user id")
  }

  try {
    const newComment = await Comment.create({ content, post_id, user_id });
    res.status(200).json(newComment);

  }

  catch(err) {
    res.status(400).json(err)
  }
}
)

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