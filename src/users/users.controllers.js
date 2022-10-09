const usersDB = [
  {
    id: "86c65a11-c251-4a1c-806a-b907f2799ff3",
    first_name: "Camilo",
    last_name: "Sierra",
    email: "sierracamilo3@gmail.com",
    password: "3192036492Sierra",
    birthday: "1997/01/15",
  },
  {
    id: "016e151a-9e2f-46d3-a54e-439b23e5d996",
    first_name: "Santiago",
    last_name: "Restrepo",
    email: "santi089@gmail.com",
    password: "Colombia2022*",
    birthday: "1999/09/24",
  },
  {
    id: "f5429592-ad83-4914-95f1-b708ad041d89",
    first_name: "Manuel",
    last_name: "Gonzalez",
    email: "manu_ok@outlook.es",
    password: "Carola2029.-",
    birthday: "2001/11/23",
  },
  {
    id: "c47f3668-1263-4eaf-a2b3-397d471764cb",
    first_name: "María",
    last_name: "Patiño",
    email: "majo2405@hotmail.com",
    password: "Webhelp2022*",
    birthday: "2001/10/08",
  },
  {
    id: "e7851cad-3a80-46d9-973f-6a53e96b3385",
    first_name: "Natalia",
    last_name: "Polania",
    email: "nata_deg@hotmail.com",
    password: "LordDEG95.",
    birthday: "1999/05/14",
  },
];

const uuid = require("uuid");

const getAllUsers = () => {
  return usersDB;
};

const createNewUser = (userData) => {
  const newUser = {
    id: uuid.v4(),
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    password: userData.password,
    birthday: userData.birthday,
  };
  usersDB.push(newUser);
  return newUser;
};

const getUserById = (id) => {
  const data = usersDB.find((user) => user.id === id);
  return data
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
};
