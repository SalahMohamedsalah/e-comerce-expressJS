const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const createProduct = async (req, res) => {
  try {
    // Extract product data from request body
    const { name, description, price, countInStock, imageUrl } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      name,
      description,
      price,
      countInStock,
      imageUrl,
    });
    await Product.create({...req.body})

    // Save the new product to the database

    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price, countInStock, imageUrl } = req.body;

    // Find the product by ID
    const product = await Product.findById(productId); 

    // Update the product properties
    product.name = name;
    product.description = description;
    product.price = price;
    product.countInStock = countInStock;
    product.imageUrl = imageUrl;

    //await Product.updateOne({...req.body})

    // Save the updated product to the database
    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID and delete it
    await Product.findByIdAndDelete(productId);

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
