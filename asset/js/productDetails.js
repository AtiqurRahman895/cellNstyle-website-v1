// productDetails Page

// hero


let productQuantity=1
let initialTotalPrice= document.querySelector(`.totalPrice`).innerText

if(productQuantity==1){
        document.querySelector(`.QuantityDecrementBtn`).disabled=true
}

document.querySelector(`.productQuantity`).innerText=productQuantity
function changeProductQuantity(quantity){
    productQuantity+=quantity

    // if(productQuantity<=0){
    //     productQuantity=1
    // }

    if(productQuantity==1){
        document.querySelector(`.QuantityDecrementBtn`).disabled=true
    }else{
        document.querySelector(`.QuantityDecrementBtn`).disabled=false
    }

    document.querySelector(`.productQuantity`).innerText=productQuantity
    changedTotalPrice=Number(initialTotalPrice) * productQuantity
    document.querySelector(`.totalPrice`).innerText=changedTotalPrice

}

// Details and Description section

const productDetailsTogglers =document.querySelectorAll(`.productDetailsToggler`)
const productDetails =document.querySelectorAll(`.productDetail`)

productDetailsTogglers.forEach((eachProductDetailsTogglers,index)=>{
  eachProductDetailsTogglers.addEventListener(`click`,(e)=>{
    
    productDetailsTogglers.forEach((oneProductToggler)=>{
      oneProductToggler.classList.remove(`productDetailsTogglerAnimation`)
    })
    productDetailsTogglers[index].classList.add(`productDetailsTogglerAnimation`)
    
    productDetails.forEach((eachProductDetails)=>{
      // eachProductDetails.classList.remove(`d-flex`)
      eachProductDetails.classList.toggle(`d-none`,true)
    })
    productDetails[index].classList.remove(`d-none`)
    productDetails[index].classList.toggle(`d-flex`,true)
  })
})