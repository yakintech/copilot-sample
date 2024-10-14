require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet'); // Helmet paketini ekleyin
const rateLimit = require('express-rate-limit'); // express-rate-limit paketini ekleyin
const app = express();
const port = process.env.PORT || 3000;

// Helmet kullanımı
app.use(helmet()); // Helmet'i kullanıma alın

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100 // 15 dakika içinde 100 istek
});
app.use(limiter); // Rate limiting'i kullanıma alın

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
  })
  .catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
  });

// Middleware
app.use(express.json());

// Rotalar
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/categoryRoutes'));

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});