import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  createJWT: () => String;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [/\S+@\S+\.\S+/, "Please provide valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  const token = jwt.sign(
    { id: this._id, name: this.name },
    process.env.JWT_SECRET || "jwtSecret",
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
  return token;
};

const User = mongoose.model<UserDoc>("User", UserSchema);

export default User;
