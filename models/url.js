import mongoose from "mongoose";

const urlSchema = await mongoose.Schema(
  {
    shortenedUrl: {
      type: String,
      required: true,
      unique: true,
    },

    redirectionUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{timestamp: {type: Number}}],
  },
  { timestamps: true }
);

export const urlModel = await mongoose.model("url", urlSchema);
