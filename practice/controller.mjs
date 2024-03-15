// Import data user dari file data.mjs
import users from "./data.mjs";

/**
 * Membuat controller user
 * Terdaoat method index dan store
 */

const index = () => {
  users.forEach((user) => {
    console.log(user);
  });
};

const store = (user) => {
  users.push({ user });
};

/** 
 * Expoet beberapa data
 * Menggunakan export object
 */

export { index, store };