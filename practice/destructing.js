// Membuat object
const req = {
  body: {
    name: "Yudha",
    age: 20,
    major: "Informatics",
  },
};

// Memanggil manual
console.log(req.body.name, req.body.age, req.body.major);

// Bisa juga didefinisikan ke variable terpisah
// const name = req.body.name;
// const age = req.body.age;
// const major = req.body.major;

console.log(name, age, major);

// Bisa desctructing object bedasarkan key
const { name, age, major } = req.body;

console.log(name, age, major);

/**
 * Membuat array family
 */

const family = ["Boboiboy", "Ying", "Yaya"];

// Mamanggil Manual
console.log(family[0], family[1], family[2]);

// Bisa juga didefinisikan ke variable terpisah
// const suami = family[0];
// const istri = family[1];
// const anak = family[2];

console.log(suami, istri, anak);

// Bisa desctructing object bedasarkan index atau posisi
const [suami, istri, anak] = family;

console.log(suami, istri, anak);
