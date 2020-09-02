const express = require('express');

const server = express();
const userRouter = require("./users/userRouter")

// MAKING SURE SERVOR KNOWS ABOUT .JSON //
server.use(express.json())

// SETTING UP THE SERVER TO USE THE ROUTER //
const logger = () =>(req, res, next)=> {
  console.log(`a ${req.method} was made to ${req.url} at ${new Date()}`);
  next();
}

server.use(logger())
server.use("/api/users", userRouter)

//custom middleware





server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});




module.exports = server;
