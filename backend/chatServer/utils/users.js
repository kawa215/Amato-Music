/*
Author     : Masaki Miura
Contents   : Manage users and room for chat
*/

const users = [];

const addUser = ({ id, username, displayUsername, room }) => {
  // Validate the data

  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  console.log(username);
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (existingUser) {
    removeUser(id);
  }

  // Store user
  const user = { id, username, displayUsername, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  console.log(users);
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
