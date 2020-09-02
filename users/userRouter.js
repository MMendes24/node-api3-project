const express = require('express');
Users = require('./userDb')

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(404).json({message: "could not find users"})
  })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
    res.status(200).json(req.user)
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
    // do your magic!
    const { id } = req.params
    let user = {}

    Users.getById(id)
    .then(userData => {
      console.log(userData)
      user = userData
      if (user) {
        req.user = user
        next()
      } else {
        res.status(400).json({ message: "invalid user id" })
      }
    })
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
