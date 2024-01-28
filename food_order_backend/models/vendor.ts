import mongoose, { Schema, Document, Model } from "mongoose";

interface VendorDoc extends Document {
  address: string;
  coverImages: [string];
  email: string;
//   foods: any;
  foodType: [string];
  name: string;
  ownerName: string;
  password: string;
  phone: string;
  pinCode: string;
  rating: number;
  salt: string;
  serviceAvailable: boolean;
}

const VendorSchema = new Schema(
  {
    address: { type: String },
    coverImages: { type: [String] },
    email: { type: String, required: true },
    // foods: [{ type: mongoose.SchemaTypes.ObjectId, ref: "food" }],
    foodType: { type: [String] },
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    pinCode: { type: String, required: true },
    rating: { type: Number },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model<VendorDoc>("vendor", VendorSchema);

export { Vendor };
