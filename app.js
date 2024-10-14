require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet'); 
const rateLimit = require('express-rate-limit'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100
});
app.use(limiter); 


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
  })
  .catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
  });


app.use(express.json());


app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/categoryRoutes'));


app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});