let searchBar = document.getElementsByClassName(
  "header__searchbar-panel--search"
)[0];
searchBar.style.display = "none";

let sideMenu = document.getElementsByClassName("header__side-menu")[0];

function manipulateSearchBar() {
  searchBar.style.display =
    searchBar.style.display === "none" ? "inline" : "none";
  document.getElementById("close-loop").src =
    searchBar.style.display === "none"
      ? "assets/icons/loop.jpg"
      : "assets/icons/close.jpg";
}

function manipulateSideMenu(attr) {
  sideMenu.style.width = attr === "x" ? " 0%" : "100%";
}
