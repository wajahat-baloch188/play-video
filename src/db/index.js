import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function ConnectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB Connection Erorr: ", error);
    process.exit(1);
  }
}

export default ConnectDB;
