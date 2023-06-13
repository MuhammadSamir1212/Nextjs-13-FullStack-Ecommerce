import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import User from "@/models/user";

export async function DELETE(req, { params }) {
  try {
    await connnectMongo();

    // Find the User by ID and remove it
    await User.findByIdAndDelete(params.id);

    return new NextResponse("Prompt deleted successfully");
  } catch (error) {
    return new NextResponse("Error deleting prompt");
  }
}

export async function PATCH(request, { params }) {
  const { name, email, isAdmin } = await request.json();

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
    existingUser.isAdmin = isAdmin;

    await existingUser.save();

    return new NextResponse("Successfully updated the Prompts", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error Updating Prompt", { status: 500 });
  }
}
