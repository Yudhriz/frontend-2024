// Membuat array of object
const users = [
  {
    name: "Yudha",
    age: 20,
  },
  {
    name: "Wika",
    age: 23,
  },
  {
    name: "Rafi",
    age: 22,
  },
  {
    name: "Rizky",
    age: 21,
  },
  {
    name: "Rizal",
    age: 24,
  },
];

/**
 * Menjalankan method find
 * Mencari 1 data berdasarkan kondisi tertentu
 * Kondisi umur lebih dari 21
 */

const foundUser = users.find((user) => {
  return user.age > 21;
});

console.log(foundUser);

// Kesimpulan :
// find akan berhenti mengambil data kalau sudah ketemu 1 data yang sesuai

/**
 * Menjalankan method filter
 * Mencari semua data berdasarkan kondisi tertentu
 * Kondisi umur lebih dari 21
 */

const filteredUser = users.filter((user) => {
  return user.age > 21;
});

console.log(filteredUser);

// Kesimpulan :
// filter akan mengambil semua data yang sesuai dengan kondisi