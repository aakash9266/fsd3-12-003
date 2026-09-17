// we use in memory data base
let users = [
  { id: 1, name: "kash", mob: "98759xxxxx", email: "kash.example@exam.com" },
  {
    id: 2,
    name: "aakash",
    mob: "98759xxxxx",
    email: "aakash.example@exam.com",
  },
];

let nextId = 3;
export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);

  return user;
};
