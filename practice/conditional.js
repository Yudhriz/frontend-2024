/**
 * Kondisional atau percabangan
 * Contoh nilai
 */

const nilai = 90;

if (nilai > 90) {
  console.log("A");
} else if (nilai > 80) {
  console.log("B");
} else if (nilai > 70) {
  console.log("C");
} else {
  console.log("D");
}

// ------------------------

// Ternary

const age = 20;

age > 17 ? console.log("Dewasa") : console.log("Belum Dewasa");
//  Membuat percabangan menjadi lebih singkat, tetapi terbatas dengan if dan else.

const status = age > 20 ? "Dewasa" : "Belum Dewasa";
console.log(status);
// Dapat digunakan untuk menyimpan nilai ke variable
