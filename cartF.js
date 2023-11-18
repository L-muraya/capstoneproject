function closeCart() {
    const cart = document.querySelector('.producstOnCart');
    cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
    const cart = document.querySelector('.producstOnCart');
    cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling')
});

const closeShopCart = document.querySelector('#closeButton');
const overLay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overLay.addEventListener('click', closeCart)
// new
