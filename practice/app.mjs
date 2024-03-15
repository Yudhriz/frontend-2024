// Import data user dari file controller.mjs
import { index, store } from "./controller.mjs";

/**
 * Membuat fungsi utama
 * fungsi ini yang dijalankan pertama kali
 */

const main = () => {
  const user = { name: "Gopal", age: 23 };

  index();
  store(user);
};

main();
