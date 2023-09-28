let arrBooks = [];
let storageValue = localStorage.getItem("books");
if (storageValue !== null) {
  arrBooks = JSON.parse(storageValue);
}
// [
//   {
//     title: "shulhanAruh",
//     pages: 300,
//     author: "rabi yesef karo",
//   },
//   {
//     title: "tanya",
//     pages: 400,
//     author: "rabi sneor zalman",
//   },
//   {
//     title: "nefesh",
//     pages: 500,
//     author: "rabi haim volozin",
//   },
// ];

document.querySelector("#myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  arrBooks.push({
    title: title.value,
    pages: pages.value,
    author: author.value,
  });
  title.value = "";
  pages.value = "";
  author.value = "";
  console.log(arrBooks);
  localStorage.setItem("books", JSON.stringify(arrBooks)); //! save in the websit as books
});

console.log(JSON.parse(localStorage.getItem("books"))); //! to jason
console.log(localStorage.getItem("books")); //! to string
localStorage.setItem("uriel", arrBooks); //!saving
console.log(localStorage.removeItem("uriel"));
console.log(localStorage);
