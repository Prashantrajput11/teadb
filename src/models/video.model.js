import mongoose, { Schema } from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // from cloudinary

      required: true,
    },
    thumbNail: {
      type: String,

      required: true,
    },
    owner: {
      type: Schema.mongoose.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
      // unique: true,
      // lowercase: true,
      // trim: true,
    },
    description: {
      type: String,
      required: true,
      // required: true,
      trim: true,
      // index: true,
    },
    duration: {
      type: Number, // it will be fetched from cloudinary only, it gives you metadata about the file
      required: true,
    },
    views: {
      type: Number,
      // required: true,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      // required: true,
      default: true,
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("User", videoSchema);
