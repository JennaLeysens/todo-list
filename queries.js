// const User = require("./models").user;

// async function getAllUsers() {
//   try {
//     const users = await User.findAll();
//     users.forEach((user) => {
//       console.log(user.get({ plain: true }));
//     });
//   } catch (e) {
//     console.error("error", e);
//   }
// }

// getAllUsers();

// const TodoListItem = require("./models").toDoItem;

// async function getAllItems() {
//   try {
//     const items = await TodoListItem.findAll();
//     items.forEach((item) => {
//       console.log(item.get({ plain: true }));
//     });
//   } catch (e) {
//     console.error("error", e);
//   }
// }

// getAllItems();

// const User = require("./models").user;

// async function getUserTwo() {
//   try {
//     const user = await User.findByPk(2);

//     console.log(user.get({ plain: true }));
//   } catch (e) {
//     console.error("error", e);
//   }
// }
// getUserTwo();

// const User = require("./models").user;

// async function createUser() {
//   try {
//     const newUser = await User.create({
//       name: "Cari Pretorius",
//       email: "cari@cari.com",
//       phone: 1234569,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });
//     console.log(newUser);
//   } catch (e) {
//     console.error("error", e);
//   }
// }
// createUser();

const TodoListItem = require("./models").toDoItem;

async function importantItems() {
  try {
    const importantItems = await TodoListItem.findAll({
      where: { important: true },
    });
    importantItems.forEach((item) => {
      console.log(item.get({ plain: true }));
    });
  } catch (e) {
    console.error("error", e);
  }
}
importantItems();
