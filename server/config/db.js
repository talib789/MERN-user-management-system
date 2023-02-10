import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect("mongodb://localhost:27017/USER_MANAGEMENT_SYSTEM");
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectToMongo;
