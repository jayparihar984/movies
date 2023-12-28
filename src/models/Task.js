import { Schema, model, models } from "mongoose";



const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Movie title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    publishing_year: {
      type: Number,
      required: true
    
    },
    poster: {
      type: String,
      required: [true, "The Movie image is required "]

    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Task || model("Task", TaskSchema);
