let productNamePrice = [{ Name: "Table", Price: 100 }, { Name: "Computer", Price: 200 }, { Name: "Chair", Price: 300 }, { Name: "Computer", Price: 300 }];

function checkAdult() {
  let smallest = productNamePrice.reduce((prev, next) => prev > next ? next : prev);
  let largest = productNamePrice.reduce((prev, next) => next < prev ? prev : next);
  let smallest_Discount = smallest.Price / 100 * 5;
  smallest_Discount = smallest.Price - smallest_Discount;
  let discount1 = document.getElementById("demo2");
  discount1.textContent = smallest_Discount;


  let largest_Discount = largest.Price / 100 * 15;
  largest_Discount = largest.Price - largest_Discount;
  let discount2 = document.getElementById("demo3");
  discount2.textContent = largest_Discount;

  let number = document.getElementById("demo");
  let number1 = document.getElementById("demo1");
  number.textContent = smallest.Price
  number1.textContent = largest.Price;
}
function leastPriceWithThisName(name) {
  document.getElementById("add_to_cart_button").disabled = false;
  let Product_Name = document.getElementById("name");
  Product_Name.textContent = name;
  let card_title = document.getElementById("card-title");
  card_title.textContent = name;
  checkAdult();
}
let add_to_cart_button = document.getElementById("add_to_cart_button");
add_to_cart_button.addEventListener("click", Add_number);
let clicks = 0;
function Add_number() {
  let Min_Price = document.getElementById("Min_Price");
  Min_Price.textContent = minimum();
  let Max_Price = document.getElementById("Max_Price");
  Max_Price.textContent = maximum();
  let least_Discount = document.getElementById("least_Discount");
  least_Discount.textContent = Least_Discount();
  clicks += 1;
  document.getElementById("number").innerHTML = clicks;
}
function minimum() {
  let smallest = productNamePrice.reduce((prev, next) => prev > next ? next : prev);
  return smallest.Price;
}
function maximum() {
  let largest = productNamePrice.reduce((prev, next) => next < prev ? prev : next);
  return largest.Price;
}
function Least_Discount() {
  let smallest = productNamePrice.reduce((prev, next) => prev > next ? next : prev);
  let smallest_Discount = smallest.Price / 100 * 5;
  smallest_Discount = smallest.Price - smallest_Discount;
  return smallest_Discount;
}
let quantity = document.getElementById("quantity");
quantity.addEventListener("input", Multiply);
function Multiply() {
  let smallest = productNamePrice.reduce((prev, next) => prev > next ? next : prev);
  let smallest_Discount = smallest.Price / 100 * 5;
  smallest_Discount = smallest.Price - smallest_Discount;
  let Total_Price = document.getElementById("Total_Price");
  let quantity_input = quantity.value;
  let Show_Quantity = document.getElementById("demo5");
  Show_Quantity.textContent = quantity_input;
  let Show_amount = smallest_Discount * quantity_input;
  Total_Price.textContent = smallest_Discount * quantity_input;
  let total_amount = document.getElementById("demo4");
  total_amount.textContent = Show_amount;

}



