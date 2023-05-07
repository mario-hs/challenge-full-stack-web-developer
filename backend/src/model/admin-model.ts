import mongoose from "mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Admin", AdminSchema);
