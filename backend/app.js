import fs from 'fs/promises';
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware for parsing JSON request body
app.use(express.json());

// Middleware for serving static files from 'public' directory
app.use(express.static('public'));

// CORS middleware to allow requests from any origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Route to fetch available meals
app.get('/meals', async (req, res) => {
  try {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.json(JSON.parse(meals));
  } catch (error) {
    console.error('Error reading meals data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to place a new order
app.post('/orders', async (req, res) => {
  try {
    const orderData = req.body.order;

    if (!orderData || !orderData.items || orderData.items.length === 0) {
      return res.status(400).json({ message: 'Missing or empty order items' });
    }

    const requiredFields = ['email', 'name', 'street', 'postal-code', 'city'];
    for (const field of requiredFields) {
      if (!orderData.customer[field] || orderData.customer[field].trim() === '') {
        return res.status(400).json({ message: `Missing customer ${field}` });
      }
    }

    const newOrder = {
      ...orderData,
      id: (Math.random() * 1000).toString(),
    };

    const orders = await fs.readFile('./data/orders.json', 'utf8');
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));

    res.status(201).json({ message: 'Order created!', orderId: newOrder.id });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Handle OPTIONS requests
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// Default route handler for 404 Not Found
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
