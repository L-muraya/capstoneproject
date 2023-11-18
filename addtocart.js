let producstInCart = JSON.parse(localStorage.getItem('buynow'));
if (!producstInCart) {
    producstInCart = []
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.t1');

function countTheSumPrice() {
    let sumPrice = 0;
    producstInCart.forEach(product => {
        sumPrice += product.price;
    });
    return sumPrice;
}





const updateProductsInHTML = function () {
    localStorage.setItem('buynow', JSON.stringify(producstInCart));
    if (producstInCart.length > 0) {
        let result = producstInCart.map(product => {
            return `
            <li class="buyItem">
                                <img src="${t1.img}">
                                <div>
                                    <h5>${t1.name}</h5>
                                    <h6>${t1.price}</h6>
                                    <div>
                                        <button class="button-minus" data-id='${t1.id}'>-</button>
                                        <span class="${t1.count}">1</span>
                                        <button class="button-plus" data-id='${t1.id}'>+</button>
                                    </div>
                                </div>
                            </li>
            `
        });
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('.hiden');
        cartSumPrice.innerHTML = "$" + countTheSumPrice();


    } else {
        document.querySelector('.checkout').classList.add('.hiden');
        parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = "";


    }
}

function updateProductsInCart(product) {
    for (let i = 0; i < producstInCart.length; i++) {
        if (producstInCart[i].id == product.id) {
            producstInCart[i] += 1;
            producstInCart[i].price = producstInCart[i].basePrice * producstInCart[i].count;
            return;
        }
    }
    producstInCart.push(product);
}



products.forEach(product => {
    product.addEventListener('click', (e) => {
        if (e.target.classList.contains('buynow')) {
            const productID = e.target.dataset.productId;
            const productName = product.querySelector('.product__name').innerHTML;
            const productPrice = product.querySelector('.product__price').innerHTML;
            const productIMG = product.querySelector('.product__img').src;
            let productToCart = {
                name: productName,
                price: +productPrice,
                count: 1,
                img: productIMG,
                id: productID,
                basePrice: +productPrice,
            };
            updateProductsInCart(productToCart);
            updateProductsInHTML();

        }

    })
})


parentElement.addEventListener('click', (e) => {
    const isPlus = e.target.classList.contains('button-plus');
    const isMinus = e.target.classList.contains('button-minus');
    if (isMinus || isPlus) {
        for (let i = 0; i < producstInCart.length; i++) {
            if (producstInCart[i].id === e.target.dataset.id) {
                if (isPlus) {
                    producstInCart[i].count += 1;
                } else if (isMinus) {
                    producstInCart[i].count -= 1;
                }
                producstInCart[i].price = producstInCart[i].basePrice * producstInCart[i].count;
            }
            if (producstInCart[i] = 0) {
                producstInCart.slice(i, 1);
            }
        }
        updateProductsInHTML();
    }
})
updateProductsInHTML();