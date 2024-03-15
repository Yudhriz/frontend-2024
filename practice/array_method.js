// Membuat array names

const names = ["Yudha", "Wika", "Rafi", "Rizky", "Rizal"];

/**
 * Menjalankan method forEach
 * Method forEach bertujuan untuk iterasi setiap element pada array
 */

names.forEach((name) => {
  console.log(`Name: ${name}`);
});
/**
 * Menjalankan method map
 * Method map bertujuan untuk transorm/mengubah data pada array
 */

const formattedName = names.map((name) => {
  return `Mr/Mrs. ${name}`;
});

console.log(formattedName);

// Array method dengan arrow function

// forEach dengan array function
names.forEach((name) => console.log(`Name: ${name}`));
