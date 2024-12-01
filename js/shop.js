// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
const buy = (idProduct) => {
    const product = products.find((product) => product.id === idProduct);
    let productInCart = cart.find((item) => item.id === idProduct);
  
    if (!product) {
      console.error(`The product with the ID ${idProduct} doesn't exist`);
    
    } else if (productInCart) {
      productInCart.quantity += 1; 
    } else {
      cart.push({ ...product, quantity: 1 }); 
    }
  
    console.log("Updated cart:", cart);
    updateCartCounter();

  };

// Exercise 2

const cleanCart = () => {
    if (cart.length === 0) {
      console.log("The cart is already empty");
    } else {
      cart.length = 0; 
      console.log("The cart has been emptied");
    }

    printCart()
  };

// Exercise 3
const calculateTotal = () => {
    const total = cart.reduce((acc,product) => acc + product.price * product.quantity,0) 
    console.log(`The total amount is: ${total}`);
    return total;
}

// Exercise 4
const applyPromotionsCart = () => {
    const oilDiscount = 0.80; 
    const cupcakeDiscount = 0.70; 
    let discountPrice = 0;
  
    cart.forEach((product) => {
      if (product.id === 1 && product.quantity >= 3) {
        discountPrice = product.price * oilDiscount;
        product.subtotalWithDiscount = discountPrice * product.quantity;
      } else if (product.id === 3 && product.quantity >= 10) {
      discountPrice = product.price * cupcakeDiscount;
        product.subtotalWithDiscount = discountPrice * product.quantity;
      } else {
      
        delete product.subtotalWithDiscount;
      }
    });
  
    console.log("Cart after applying promotions:", cart);
  };
  
// Exercise 5
const printCart = () => {
    const cartTable = document.getElementById("cart_list");
    const totalElement = document.getElementById("total_price");
    let cartHTML = "";
    let cartTotal = 0;
  
    for (const product of cart) {
      const productTotal = product.price * product.quantity;
      cartTotal += productTotal;
      cartHTML += `
        <tr class="cart-item">
          <td>${product.name}</td>
          <td>${product.price.toFixed(2)} €</td>
          <td>${product.quantity}</td>
          <td>${productTotal.toFixed(2)} €</td>
        </tr>`;
    }
    cartTable.innerHTML = cartHTML;
    totalElement.textContent = `${cartTotal.toFixed(2)} €`;
  };
  


// ** Nivell II **

// Exercise 7
const  removeFromCart = (idProduct) =>  {
    const productIndex = cart.findIndex((product) => product.id === idProduct);

    if (productIndex !== -1) {
      const product = cart[productIndex];
  
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        cart.splice(productIndex, 1);
      }
      calculateTotal();
      applyPromotionsCart(); 
      printCart(); 
    } else {
      console.warn(`Product with ID ${id} not found in the cart.`);
    }
  }
  
 

function open_modal() {
    printCart();
}