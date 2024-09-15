// Function to update total product prices and total amount

function changeTotalProductPrices() {
    let totalProductPrices = 0;
    let totalAmount = 0;

    // Re-select all the price elements each time the function is called
    let allTotalPrices = document.querySelectorAll(`.totalPrice`);
    let deliveryCharge = document.querySelector(`.deliveryCharge`);
    
    // Recalculate the total product prices
    allTotalPrices.forEach((eachTotalPrice) => {
        totalProductPrices += Number(eachTotalPrice.innerText);
    });

    // Update the total product prices and total amount
    document.querySelector(`.totalProductPrices`).innerText = `${totalProductPrices}$`;
    totalAmount = totalProductPrices + Number(deliveryCharge.innerText);
    document.querySelector(`.totalAmount`).innerText = `${totalAmount}$`;
}

// Function to attach event listeners to cart items

function attachDeleteListeners() {
    let cartItems = document.querySelectorAll(`.cartItem`);
    let cartItemDeleteBtns = document.querySelectorAll(`.cartItemDeleteBtn`);
    
    cartItemDeleteBtns.forEach((eachCartItemDeleteBtn, index) => {
        eachCartItemDeleteBtn.addEventListener(`click`, (e) => {
            // Remove the corresponding cart item
            cartItems[index].remove();
            
            // Recalculate total product prices
            changeTotalProductPrices();
            
            // Re-attach event listeners after an item is deleted
            attachDeleteListeners();  // Recursively update the listeners
        });
    });
}

// Initial calculation of total prices
changeTotalProductPrices();

// Attach event listeners for the first time
attachDeleteListeners();

let QuantityChangingBtn= document.querySelectorAll(`.QuantityChangingBtn`)
QuantityChangingBtn.forEach((eachQuantityChangingBtn)=>{
    eachQuantityChangingBtn.addEventListener(`click`,(e)=>{
        // Recalculate total product prices
        changeTotalProductPrices();
    })
})
