import mongoose from "mongoose";

const connnectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connnectMongo;
