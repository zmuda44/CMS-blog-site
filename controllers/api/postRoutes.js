const router = require('express').Router();
const { Post } = require('../../models');

//creates new project from form _____



// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newProject = await Project.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newProject);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });



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