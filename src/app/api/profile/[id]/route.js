import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import User from '@/models/user';
import Orders from "@/models/orders";

// hestory get
export const GET = async (request, { params }) => {
  try {
    await connnectMongo()

    const userProduct = await Orders.find({ userId: params.id }).populate("userId")

    return new NextResponse(JSON.stringify(userProduct), { status: 200 })
  } catch (error) {
    return new NextResponse("Failed to fetch prompts created by user", { status: 500 })
  }
} 

export async function PATCH (request, { params }) {
  const { name, email,avatar, password } = await request.json();

  try {
      await connnectMongo();

      // Find the existing user by ID
      const existingUser = await User.findById(params.id);

      if (!existingUser) {
          return new NextResponse("User not found", { status: 404 });
      }

      // Update the prompt with new data
      existingUser.name = name;
      existingUser.email = email;
      existingUser.avatar = avatar;
      existingUser.password = password;

      await existingUser.save();

      return new NextResponse("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
      return new NextResponse("Error Updating Prompt", { status: 500 });
  }
};