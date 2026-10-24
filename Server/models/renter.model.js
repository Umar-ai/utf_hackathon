import mongoose from "mongoose";

const renterSchema = new mongoose.Schema({
  renterFirstName: {
    type: "String",
    required: true,
    trim: true,
  },
  renterLastName: {
    type: "String",
    required: true,
    trim: true,
  },
  renterUserName: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [20, "Username cannot exceed 20 characters"],
    match: [/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"],
  },
  email: {
    type: "String",
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
    trim: true,
    minlength: [6, "Password must be at least 6 characters"],
  },
  phoneNumber: {
    type: "String",
    required: true,
    trim: true,
    match: [/^\d{11}$/, "Phone number must be 11 digits"],
  },
  montoring:[]
});

const Renter = mongoose.model("Renter", renterSchema);
