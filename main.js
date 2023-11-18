let nameText = document.querySelector("#name-text");
let renameButton = document.querySelector("#change-button");
let renameImput = document.querySelector("#text-input");
renameButton.addEventListener("click", () => {
  let name = renameImput.value;
  nameText.innerHTML = "la photographe," + name;
});
