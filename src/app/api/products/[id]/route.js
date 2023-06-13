import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import Product from "@/models/product";

export async function GET(request, { params }) {
  try {
    await connnectMongo();

    const product = await Product.findById(params.id);
    if (!product) return new NextResponse("Product Not Found", { status: 404 });

    return new NextResponse(JSON.stringify(product));
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connnectMongo();

    // Find the User by ID and remove it
    await Product.findByIdAndDelete(params.id);

    return new NextResponse("Prompt deleted successfully");
  } catch (error) {
    return new NextResponse("Error deleting prompt");
  }
}

export async function PATCH(req, { params }) {
  const { image, title, desciption, price, instoke, categori } =
    await req.json();

  try {
    await connnectMongo();

    // Find the existing user by ID
    const existingProduct = await Product.findById(params.id);

    if (!existingProduct) {
      return new NextResponse("Product not found", { status: 404 });
    }

    // Update the product with new data
    existingProduct.image = image;
    existingProduct.title = title;
    existingProduct.desciption = desciption;
    existingProduct.price = price;
    existingProduct.instoke = instoke;
    existingProduct.categori = categori;

    await existingProduct.save();

    return new NextResponse("Successfully updated the Product", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error Updating Product", { status: 500 });
  }
}
