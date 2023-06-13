import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import Product from "@/models/product";

export const GET = async (req) => {
  try {
    await connnectMongo();
    const product = await Product.find({});

    return new NextResponse(JSON.stringify(product));
  } catch (error) {
    return new NextResponse(`Failed to fetch all prompts ${err}`);
  }
};

export const POST = async (req) => {
  const { image, title, desciption, price, instoke, categori } =
    await req.json();

  const newProduct = new Product({
    image,
    title,
    desciption,
    price,
    instoke,
    categori,
  });

  try {
    await connnectMongo();
    await newProduct.save();

    return new NextResponse(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
