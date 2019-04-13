document.getElementsByClassName("shop")[0].style.display = "none";
document.getElementsByClassName("reviews")[0].style.display = "none";
document.getElementsByClassName("single-product")[0].style.display = "none";
document.getElementsByClassName("card")[0].style.display = "none";
document.getElementsByClassName("loader")[0].style.display = "none";

let selectedProduct = 0;

let panel = [];
let products = [
  {
    id: 1,
    title: "Handmade_World Brown Leather Messenger Bag for Men and Women ",
    rating: 5,
    save: "66",
    shipping: "Free Shipping",
    img: "assets/images/bag-1.png",
    oldPrice: 89.99,
    newPrice: 50.99
  },
  {
    id: 2,
    title: "Handmade_World Rugged Vintage Laptop Messenger Bag for Men",
    rating: 5,
    save: "66",
    shipping: "Free Shipping",
    img: "assets/images/bag-2.png",
    oldPrice: 99.99,
    newPrice: 59.99
  },
  {
    id: 3,
    title: "Handmade World Messenger Bag Leather Laptop Bags Computer Satchel",
    rating: 5,
    save: "16",
    shipping: "Free Shipping",
    img: "assets/images/bag-4.png",
    oldPrice: 104.99,
    newPrice: 69.99
  },
  {
    id: 4,
    title: "Handmade World 16 Leather Messenger Bag Vintage Buffalo Satchel",
    rating: 5,
    save: "62",
    shipping: "Free Shipping",
    img: "assets/images/bag-3.png",
    oldPrice: 209.99,
    newPrice: 94.99
  }
];

for (let counter = 0; counter < products.length; counter++) {
  let save = document.getElementsByClassName("content__products--save-number")[
    counter
  ];
  let title = document.getElementsByClassName("content__products--title-titre")[
    counter
  ];
  let image = document.getElementsByClassName("content__products--prod-img")[
    counter
  ];
  let shipping = document.getElementsByClassName(
    "content__products--free-shipping"
  )[counter];
  let oldPrice = document.getElementsByClassName(
    "content__products--old-price"
  )[counter];
  let newPrice = document.getElementsByClassName(
    "content__products--new-price"
  )[counter];

  save.textContent = "SAVE " + products[counter].save + "%";
  title.textContent = products[counter].title;
  shipping.textContent = products[counter].shipping;
  oldPrice.textContent = "$ " + products[counter].oldPrice;
  newPrice.textContent = "$ " + products[counter].newPrice;
  image.src = products[counter].img;
  /*
  let title = ;
  let rating = "";
  let shipping = ;
  let img = ;
  */
}

function addToCard() {
  panel.push(products[selectedProduct]);
}

function chooseItem(id) {
  selectedProduct = id;
  document.getElementsByClassName("loader")[0].style.display = "block";
  hideAll();

  setTimeout(function() {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("single-product")[0].style.display =
      "block";

    document.getElementsByClassName("old")[0].textContent =
      "$ " + products[id].oldPrice;
    document.getElementsByClassName("new")[0].textContent =
      "$ " + products[id].newPrice;
    document.getElementsByClassName("selected-title")[0].textContent =
      products[id].title;
    document.getElementsByClassName("selected-shipping")[0].textContent =
      products[id].shipping;
    document.getElementsByClassName("selected-img")[0].src = products[id].img;
  }, 1000);
}

function showShop() {
  document.getElementsByClassName("loader")[0].style.display = "block";
  hideAll();
  setTimeout(function() {
    document.getElementsByClassName("loader")[0].style.display = "none";

    document.getElementsByClassName("shop")[0].style.display = "block";
  }, 1000);
}

function showHome() {
  hideAll();
  document.getElementsByClassName("loader")[0].style.display = "block";

  setTimeout(function() {
    document.getElementsByClassName("loader")[0].style.display = "none";

    document.getElementsByClassName("join-us")[0].style.display = "block";
    document.getElementsByClassName("slide")[0].style.display = "block";
    document.getElementsByClassName("content")[0].style.display = "block";
    document.getElementsByClassName("content")[1].style.display = "block";
    document.getElementsByClassName("content")[2].style.display = "block";
    document.getElementsByClassName("content")[3].style.display = "block";
  }, 1000);
}

function showCard() {
  hideAll();
  document.getElementsByClassName("loader")[0].style.display = "block";
  setTimeout(function() {
    document.getElementsByClassName("loader")[0].style.display = "none";

    document.getElementsByClassName("card")[0].style.display = "block";
  }, 1000);
}

function hideAll() {
  document.getElementsByClassName("shop")[0].style.display = "none";
  document.getElementsByClassName("reviews")[0].style.display = "none";
  document.getElementsByClassName("single-product")[0].style.display = "none";

  document.getElementsByClassName("join-us")[0].style.display = "none";
  document.getElementsByClassName("slide")[0].style.display = "none";
  document.getElementsByClassName("content")[0].style.display = "none";
  document.getElementsByClassName("content")[1].style.display = "none";
  document.getElementsByClassName("content")[2].style.display = "none";
  document.getElementsByClassName("content")[3].style.display = "none";

  document.getElementsByClassName("card")[0].style.display = "none";
}
