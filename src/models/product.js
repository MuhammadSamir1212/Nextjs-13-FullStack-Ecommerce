import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: [
      {url: { type: String, required: true }}
    ],
    title: { type: String, required: true },
    desciption: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    instoke: { type: Number, required: true },
    categori: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
