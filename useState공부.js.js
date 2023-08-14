const button = document.getElementById("button");
window.localStorage.getItem(key);
button.addEventListener("click", handleClick);

function handleClick() {
  window.localStorage.setItem(button, `2`);
}
