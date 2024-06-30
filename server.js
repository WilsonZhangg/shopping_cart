const express = require('express');
const path = require('path');
const app = express();

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
];

// 設置靜態文件服務
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
