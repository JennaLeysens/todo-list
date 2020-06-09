const { user, toDoItem, toDoList } = require("./models");

// async function getUsers() {
//   const allUsers = await user.findAll({
//     include: { model: toDoList, attributes: ["name"] },
//   });
//   return allUsers.map((user) => user.get({ plain: true }));
// }

// getUsers().then((users) => console.log(users));

// const User = require("./models").user;
// async function getUserById(id) {
//   const userId = await user.findByPk(id, { include: [toDoList] });
//   console.log(userId.get({ plain: true }));
// }

// getUserById(1);

// async function importantItems() {
//   const todoItems = await toDoItem.findAll({
//     where: { important: true },
//     include: { model: toDoList, attributes: ["name"] },
//   });
//   return todoItems.map((item) => item.get({ plain: true }));
// }
// importantItems().then((items) => console.log("important todoItems", items));

// getUsers().then((users) => console.log(users));

async function getUserTasks(id) {
  const userTasks = await user.findByPk(id, {
    include: [
      {
        model: toDoList,
        attributes: ["name"],
        include: { model: toDoItem, attributes: ["task"] },
      },
    ],
  });
  console.log(userTasks.get({ plain: true }));
}

getUserTasks(2);
