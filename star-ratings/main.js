const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
};

const startTotal = 5;

document.addEventListener("DOMContentLoaded", getRatings);

const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

let product;

productSelect.addEventListener("change", e => {
  product = e.target.value;
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;
  if (rating > 5) {
    alert("Please rate 1 - 5");
    return;
  }
  ratings[product] = rating;
  getRatings();
});

function getRatings() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / startTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;
    document.querySelector(
      `.${rating} .number-rating`
    ).innerText = ratings[rating];
  }
}
