import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  user_id: {
    type: "number",
    unique: true,
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    unique: true,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
