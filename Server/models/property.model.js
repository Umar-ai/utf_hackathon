import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  mainLocation: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "Arah Mohalla",
      "Rajgan mohalla",
      "Mator chowk",
      "Panjar Chowk",
      "Kalar Chowk",
      "Tehsil Chowk",
      "New Abadi",
      "Channi",
      "Bor Bazar",
      "Dungi",
      "Sihalian",
      "Dupri",
      "Plangri",
      "Bahria",
      "Galah",
      "Club Line",
      "Other",
    ],
  },
  price: { type: Number, required: true, min: 0 },
  bedrooms: { type: Number, required: true, min: 1 },
  bathrooms: { type: Number, required: true, min: 1 },
  area: { type: Number, required: true, min: 0 },
  livingRoom: { type: Boolean, required: true, default: false },
  tvLounge: {
    type: Boolean,
    required: true,
    default: false,
  },
  supplyWater: {
    type: Boolean,
    required: true,
    default: false,
  },
  drinkingWater: {
    type: Boolean,
    required: true,
    default: false,
  },
  totalHouseFloors: {
    type: Number,
    required: true,
    min: 1,
  },
  propertyType: {
    type: String,
    required: true,
    enum: ["Single Story", "Double Story", "Triple Story"],
  },
  houseFloorToRent: {
    type: Number,
    required: true,
    enum: ["First", "Second", "Third"],
  },
  carParking: {
    type: Boolean,
    required: true,
    default: false,
  },
  waterGezer: {
    type: Boolean,
    required: true,
    default: false,
  },
  furnished: {
    type: Boolean,
    required: true,
    default: false,
  },
  gasMeter: {
    type: Boolean,
    required: true,
    default: false,
  },
  images: {
    type: [String],
    validate: [(arr) => arr.length <= 10, "Maximum 10 images allowed"],
  },
  landlordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LandLord",
    required: true,
  },
  tenenatPreferences: {
    type: String,
    enum: ["Family", "Bachelors", "Any"],
    default: "Any",
  },
  status: {
    type: String,
    enum: ["available", "rented", "hidden"],
    default: "available",
  },
  approvedStatus:{
    type:String,
    enum:["pending","approved","rejected"],
    default:"pending"
  }
});

propertySchema.index({ status: 1, mainLocation: 1, price: 1, bedrooms: 1 });
propertySchema.index({ title: "text", description: "text", address: "text" });
export const Property = mongoose.model("Property", propertySchema);
