import { NextResponse } from "next/server";
import connnectMongo from "@/utils/db";
import User from '@/models/user';

export async function GET(req) {
  try {
    await connnectMongo();
    const users = await User.find({});

    return new NextResponse(JSON.stringify(users));
  } catch (error) {
    return new NextResponse(`Failed to fetch all prompts ${err}`);
  }
}
