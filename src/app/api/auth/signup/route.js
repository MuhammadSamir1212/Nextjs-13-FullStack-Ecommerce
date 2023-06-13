import connnectMongo from "@/utils/db";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connnectMongo();

  const hashedPassword = await hashPassword(password);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};