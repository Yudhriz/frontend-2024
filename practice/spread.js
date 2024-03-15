// Spread hampir sama dengan rest, hanya saja spread digunakan untuk menggabungkan beberapa array menjadi satu array.

const family = ["Boboiboy", "Ying"];

const newfamily = [family[0], family[1], "Yaya", "Gopal", "Fang"];

console.log(newfamily);

/**
 * Spread Operator : Memisahkan array menjadi nilai tersendiri
 */

const keluarga = ["Boboiboy", "Ying"];

const newKeluarga = [...keluarga, "Yaya", "Gopal", "Fang"];

console.log(newKeluarga);

/**
 * COntoh di object
 */

const user = {
  name: "Yudha",
  major: "Informatics",
};

const newUser = {
  name: user.name,
  major: user.major,
  age: 20,
};

// Kalo memakai spread operator
const userr = {
  name: "Yudha",
  major: "Informatics",
};

const newUserr = {
  ...userr,
  age: 20,
};
