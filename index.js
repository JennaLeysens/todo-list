const User = require("./models").user;
const toDoList = require("./models").toDoList;

const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
const bodyParser = express.json();
app.use(bodyParser);

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res, next) => {
  try {
    const id = req.params.userId;
    const userPk = await User.findByPk(id);
    if (!userPk) {
      res.status(404).send("User not found");
    } else {
      res.send(userPk);
    }
  } catch (e) {
    console.log(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/todolists", async (req, res, next) => {
  try {
    const lists = await toDoList.findAll();
    res.send(lists);
  } catch (e) {
    next(e);
  }
});

app.listen(port, () => console.log(`Listening on: ${port}`));
