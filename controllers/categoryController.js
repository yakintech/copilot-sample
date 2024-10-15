const Category = require('../models/Category');

/**
 * @function getCategories
 * @description Retrieves all categories from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().select('-__v');
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * @function createCategory
 * @description Creates a new category in the database.
 * @param {Object} req - Express request object containing the category data in the body.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.createCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory.toObject({ versionKey: false }));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/**
 * @function getCategory
 * @description Retrieves a single category by ID from the database.
 * @param {Object} req - Express request object containing the category ID in the URL parameters.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).select('-__v');
        if (category == null) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * @function updateCategory
 * @description Updates an existing category in the database.
 * @param {Object} req - Express request object containing the category ID in the URL parameters and the updated data in the body.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (category == null) {
            return res.status(404).json({ message: 'Category not found' });
        }
        Object.assign(category, req.body);
        const updatedCategory = await category.save();
        res.json(updatedCategory.toObject({ versionKey: false }));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/**
 * @function deleteCategory
 * @description Deletes a category from the database.
 * @param {Object} req - Express request object containing the category ID in the URL parameters.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (category == null) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.remove();
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

