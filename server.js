const express = require('express');

const server = express();
const userRouter = require("./users/userRouter")

// MAKING SURE SERVOR KNOWS ABOUT .JSON //
server.use(express.json())

// SETTING UP THE SERVER TO USE THE ROUTER //
server.use("/api/users", userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


//custom middleware

// function logger(req, res, next) {}

module.exports = server;
