let carosel = document.getElementsByClassName(
  "content__products--carosel__long"
)[0];

let counter = 1;

let toClear = setInterval(() => {
  let leftValue = -(counter * 33.4);
  leftValue = leftValue + "%";
  if (counter < 2) {
    carosel.style.left = leftValue;
    counter = counter + 1;
  } else {
    carosel.style.left = "0%";
    counter = 0;
  }
}, 4000);

function move(direction) {
  clearInterval(toClear);
  if (direction === 1) {
    let leftValue = -(counter * 33.4);
    leftValue = leftValue + "%";
    if (counter < 2) {
      carosel.style.left = leftValue;
      counter = counter + 1;
    } else {
      carosel.style.left = "0%";
      counter = 0;
    }
  } else {
  }
}
