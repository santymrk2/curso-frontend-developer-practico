const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleAside);
productDetailClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shopingCartContainer.classList.toggle('inactive');
    }
    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shopingCartContainer.classList.toggle('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isDektopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if (!isMobileMenuClosed || !isDektopMenuClosed || !isProductDetailClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    shopingCartContainer.classList.toggle('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
});
productList.push({
    name: 'pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
});
productList.push({
    name: 'mouse',
    price: 100,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
});

function renderProduct(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);