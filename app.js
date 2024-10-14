require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet'); 
const rateLimit = require('express-rate-limit'); 
const cors = require('cors'); // CORS paketini ekleyin
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100
});
app.use(limiter); 

app.use(express.json());

// CORS'u etkinleştirin
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
  })
  .catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
  });

// Kimlik doğrulama rotaları
app.use('/api/auth', authRoutes);

// Korunan rotalar (örnek)
app.use('/api/products', authMiddleware, require('./routes/productRoutes'));
app.use('/api/categories', authMiddleware, require('./routes/categoryRoutes'));

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});