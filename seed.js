const mongoose = require('mongoose');
const Product = require('./models/Product');
const Category = require('./models/Category');

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://techcareer_swift:qSJrSgUN9qfgs0Fa@cluster0.jcus0vv.mongodb.net/copilot-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB bağlantısı başarılı');
  seedData();
}).catch(err => {
  console.error('MongoDB bağlantı hatası:', err);
});

// Seed data oluşturma ve ekleme
async function seedData() {
  try {
    // Önce mevcut verileri temizleyin
    await Product.deleteMany({});
    await Category.deleteMany({});

    // Kategoriler oluşturma
    const electronicsCategory = new Category({ name: 'Electronics', description: 'Electronic items' });
    const clothingCategory = new Category({ name: 'Clothing', description: 'Clothing items' });

    await electronicsCategory.save();
    await clothingCategory.save();

    // Ürünler oluşturma
    const product1 = new Product({
      name: 'Laptop',
      description: 'A high performance laptop',
      price: 1500,
      category: electronicsCategory._id
    });

    const product2 = new Product({
      name: 'T-Shirt',
      description: 'A comfortable cotton t-shirt',
      price: 20,
      category: clothingCategory._id
    });

    await product1.save();
    await product2.save();

    console.log('Seed data başarıyla eklendi');
    mongoose.connection.close();
  } catch (err) {
    console.error('Seed data ekleme hatası:', err);
    mongoose.connection.close();
  }
}