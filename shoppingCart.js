// exporting modules
console.log('exporting modules');

// blocking code
// console.log('START FETCHING');
// await fetch(`https://jsonplaceholder.typicode.com/posts`);
// console.log('FINISH FETCHING');

// this is private variable, only can access inside this module
const shippingCost = 10;
export const cart = [];
console.log(shippingCost);

// export one thing
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// export many things & naming export
export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
