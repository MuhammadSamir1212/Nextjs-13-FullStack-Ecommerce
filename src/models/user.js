import { hashPassword } from "@/utils/auth";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/msa-programing/image/upload/v1683204301/avatar_d4deox.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
