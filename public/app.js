const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // 清空之前的产品列表

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart`);
}

function viewCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // 將購物車數據存儲到本地存儲
    window.location.href = 'cart.html'; // 跳轉到購物車頁面
}

// 當頁面加載時，獲取產品列表
document.addEventListener('DOMContentLoaded', fetchProducts);

async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
