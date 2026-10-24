import mongoose from "mongoose";

const renterSchema = new mongoose.Schema(
  {
    
    googleId: { type: String, required: true, unique: true }, 
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true, default: "" },
    avatar: { type: String, default: "" },
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^\d{11}$/, "Phone number must be 11 digits"],
    },

    profileCompleted: { type: Boolean, default: false },

    refreshToken: { type: String, select: false },

    monitoring: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
    premiumSubscribed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Renter = mongoose.model("Renter", renterSchema);
