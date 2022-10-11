// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const newPrice = price.innerHTML
  const newQuantity =  quantity.value
  const calculate = newQuantity*newPrice

  let subtotal = product.querySelector(`.subtotal span`);
  subtotal.innerText = calculate  
  return calculate


  //... your code goes here
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  
const multipleProducts = document.getElementsByClassName('product');
let sum = 0;

for (let i= 0; i < multipleProducts.length; i++) {
  sum = sum + updateSubtotal(multipleProducts[i])
}


  // ITERATION 3
 let totalValue = document.querySelector("#total-value span")
 totalValue.innerText = sum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentNode.parentNode.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn-remove');
  for(let i=0; i<removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
  }
  //... your code goes here
});
