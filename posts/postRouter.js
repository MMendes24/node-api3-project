const express = require('express');

const router = express.Router();
const Posts = require("./postDb")

router.get('/', (req, res) => {
  // do your magic!
  Posts.get()
  .then(thenRes => {
    res.status(200).json(thenRes)
  })
  .catch(err => {
    res.status(404).json({ message: "posts could not be found"})
  })
});

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  res.status(200).json(req.post)
});

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  Posts.remove(req.params.id)
  .then(thenRes => {
    res.status(200).json({ message: "post successfully deleted"})
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "post could not be removed"})
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  Posts.getById(req.params.id)
  .then(post => {
    if(post) {
      req.post = post
      next()
    } else {
      res.status(404).json({ message: "Post by that ID not found"})
    }
  }) 
    
}

module.exports = router;
