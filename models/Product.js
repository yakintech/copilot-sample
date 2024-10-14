const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, default: 'No description provided' },
    price: { type: Number, required: true, min: [0, 'Price must be positive'] },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    stock: { type: Number, default: 0, min: [0, 'Stock must be positive'] },
    images: [{ type: String }]
}, {
    timestamps: true
});

// İndeksleme
productSchema.index({ name: 1 });
productSchema.index({ category: 1 });

module.exports = mongoose.model('Product', productSchema);