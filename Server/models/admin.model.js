import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, select: false },
    securityQuestion: { type: String, required: true },
    securityAnswer: { type: String, required: true, select: false },
    failedAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
    refreshToken: { type: String, select: false },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  if (this.isModified("securityAnswer")) {
    this.securityAnswer = await bcrypt.hash(this.securityAnswer.trim().toLowerCase(), 12);
  }
});

adminSchema.methods.verifyPassword = function (password) {
  return bcrypt.compare(password, this.password);
};
adminSchema.methods.verifyAnswer = function (answer) {
  return bcrypt.compare(answer.trim().toLowerCase(), this.securityAnswer);
};

export const Admin = mongoose.model("Admin", adminSchema);