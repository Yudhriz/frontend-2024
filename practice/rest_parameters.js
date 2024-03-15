// Memmbuat fungsi sum tanpa batas(rest) parameter
// Bagaimana kalo fungsi memiliki parameter yang tidak terbatas?

function sum(a, b) {
  const hasil = a + b;
  return hasil;
}

sum(1, 2); // 3

// Kita bisa menggunakan rest parameter untuk menangkap parameter yang tidak terbatas
function sum(...numbers) {
  let hasil = 0;

  for (const number of numbers) {
    hasil += number;
  }
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest parameter harus diletakkan di akhir parameter