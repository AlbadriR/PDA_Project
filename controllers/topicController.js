import TopicModel from "../models/topicModel.js";

export const getTopics = async (req, res) => {
  const topics = await TopicModel.find({});
  res.send(topics);
};

export const getTopic = async (req, res) => {
  const topics = await TopicModel.find({ _id: req.params.id });
  res.send(topics[0]);
};

export const updateTopic = async (req, res) => {
  const topic = await TopicModel.findByIdAndUpdate(req.params.id, req.body);
  await topic.save();
  res.send(topic);
};

export const deleteTopic = async (req, res) => {
  const topic = await TopicModel.findByIdAndDelete(req.params.id);
  if (!topic) {
    res.status(404).send("No topic with this id");
  }
  res.status(200).send();
};

export const postTopic = async (req, res) => {
  const topic = new TopicModel(req.body);
  await topic.save(); // mongoose save in database
  res.send(topic);
};
