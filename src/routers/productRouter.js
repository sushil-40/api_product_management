import express from "express";
import {
  updateProduct,
  getProducts,
  insertProduct,
  deleteProduct,
} from "../models/productModels/ProductSchema.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const results = await getProducts();
  res.json({
    status: "success",
    message: "Here are the product lists",
    results,
  });
});
router.post("/", async (req, res, next) => {
  //insert product
  try {
    console.log(req.body);
    const result = await insertProduct(req.body);
    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "Product added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add the product, Please try again later!",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message + "xxxxxxxxxxxxxxxx",
    });
  }
});
router.patch("/", async (req, res) => {
  try {
    const { _id, product } = req.body;
    console.log(req.body, "=====-----check-- update----======");

    const result = await updateProduct(_id, { product });
    res.json({
      status: "success",
      message: "product updated successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
router.delete("/:_id?", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const result = await deleteProduct(_id);
  res.json({
    status: "success",
    message: "data deleted successfully",
    result,
  });
});

export default router;
