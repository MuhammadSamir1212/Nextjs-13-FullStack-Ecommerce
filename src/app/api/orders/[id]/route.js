import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import Orders from "@/models/orders";

export async function GET(request, { params }) {
  try {
    await connnectMongo();

    const orders = await Orders.findById(params.id);
    if (!orders) return new NextResponse("Product Not Found", { status: 404 });

    return new NextResponse(JSON.stringify(orders));
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connnectMongo();

    // Find the User by ID and remove it
    await Orders.findByIdAndDelete(params.id);

    return new NextResponse("Prompt deleted successfully");
  } catch (error) {
    return new NextResponse("Error deleting prompt");
  }
}

export async function PATCH(req, { params }) {
  const { shippingStuts } = await req.json();

  try {
    await connnectMongo();

    // Find the existing user by ID
    const existingOrder = await Orders.findById(params.id);

    if (!existingOrder) {
      return new NextResponse("Order not found", { status: 404 });
    }

    // Update the product with new data
    existingOrder.shippingStuts = shippingStuts;

    await existingOrder.save();

    return new NextResponse("Successfully updated the Product", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error Updating Product", { status: 500 });
  }
}
