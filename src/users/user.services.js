const {
  getAllUsers,
  createNewUser,
  getUserById,
} = require("./users.controllers");

const getUsers = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
};

const createUser = (req, res) => {
  const userData = req.body;
  if (userData) {
    const data = createNewUser(userData);
    res.status(201).json(data);
  } else {
    res.status(404).json({ message: "Missing data" });
  }
};

const getOneUser = (req, res) => {
  const id = req.params.id;
  const data = getUserById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "Invalid ID" });
  }
};

module.exports = {
  getUsers,
  createUser,
  getOneUser,
};
