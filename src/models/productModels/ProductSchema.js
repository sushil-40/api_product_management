import mongoose from "mongoose";
//database table selectiong
const productSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});
const ProductCollection = mongoose.model("Product", productSchema);

export const insertProduct = (productObj) => {
  return ProductCollection(productObj).save();
};
export const getProducts = () => {
  return ProductCollection.find();
};
export const updateProduct = (_id, rest) => {
  return ProductCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};
export const deleteProduct = (_id) => {
  return ProductCollection.findByIdAndDelete(_id);
};
