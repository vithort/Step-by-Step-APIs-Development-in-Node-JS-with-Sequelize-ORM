const express = require('express');
// include routes
const productRoutes = require('./routes/product');
const PORT = 8087;
const app = express();

app.use('/', productRoutes);

// welcome page default route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 1,
    message: 'Welcome to Home Page!',
  });
});

app.listen(PORT, () => {
  console.log('Application is running at PORT ' + PORT + '!');
});
