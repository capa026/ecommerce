import Product from "../models/product.model.js";
import sCart from "../models/shoppingCart.model.js";

export const createProduct = async (req, res) => {
  const { name, price, quantity, description, categories, image } = req.body;

  const newProduct = new Product({
    name,
    price,
    quantity,
    description,
    image,
    categories,
    user: req.user.id,
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const productFound = await Product.findById(req.params.id);
    if (!productFound)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(productFound);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProducts = async (req, res) => {
  try {
    // const productsFound = await Product.find({ user: req.user.id }).populate(
    //   "user"
    // );
    const productsFound = await Product.find();
    res.status(200).json(productsFound);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json("Product Deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getShoppingCart = async (req, res) => {
  try {
    const cartFounded = await sCart.findOne({ userId: req.user.id });
    if (!cartFounded) return res.status(200).json("No cart yet");
    res.status(200).json(cartFounded);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createShopingCart = async (req, res) => {
  const { userId, products } = req.body;
  const newCart = new sCart({
    userId: req.user.id,
    products,
  });
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateShopingCart = async (req, res) => {
  const { products } = req.body;
  try {
    const shoppingCart = await sCart.findOneAndUpdate(
      { userId: req.user.id },
      {
        $set: {
          products,
        },
      }
    );

    res.status(200).json(shoppingCart);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteShopingCart = async (req, res) => {
  try {
    const deleted = await sCart.deleteOne({ userId: req.user.id });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
