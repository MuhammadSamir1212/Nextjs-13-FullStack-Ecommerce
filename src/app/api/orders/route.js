import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import Orders from "@/models/orders";

export const GET = async (req) => {
  try {
    await connnectMongo();
    const oreders = await Orders.find({});

    return new NextResponse(JSON.stringify(oreders));
  } catch (error) {
    return new NextResponse(`Failed to fetch all prompts ${err}`);
  }
};

export const POST = async (req) => {
  const { userId, orderItems, shippingAddress, totalPrice } = await req.json();

  const newOrder = new Orders({
    userId,
    orderItems,
    shippingAddress,
    totalPrice,
  });

  try {
    await connnectMongo();
    await newOrder.save();

    return new NextResponse(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
