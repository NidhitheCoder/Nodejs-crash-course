import mongoose from "mongoose";

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
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
    maxLength: 12,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
