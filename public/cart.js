document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCartItems(cart);
});

function displayCartItems(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // 清空之前的購物車項

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
            <p>Quantity: 1</p> <!-- 簡化處理，假設每個商品的數量為1 -->
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total';
    totalDiv.innerHTML = `<h2>Total: $${total}</h2>`;
    cartItemsContainer.appendChild(totalDiv);
}

function checkout() {
    alert('Proceeding to checkout...');
    // 這裡可以添加更多的結帳邏輯
}
