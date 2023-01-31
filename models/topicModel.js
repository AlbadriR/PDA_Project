import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true, // Delete the space at the end
    lowercase: true,
  },
});
const Topic = mongoose.model("Topic", topicSchema);
export default Topic;
