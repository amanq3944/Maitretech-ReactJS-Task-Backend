import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
