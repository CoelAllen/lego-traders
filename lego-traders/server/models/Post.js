import { Schema } from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/dbUtils.js";

export const PostSchema = new Schema({
  creatorId: { type: ObjectId, required: true },
  title: { type: String, required: true, minLength: 2, maxLength: 100 },
  body: { type: String, required: true, maxLength: 500, minLength: 1 },
  imgUrl: { type: String},
  subscribers: { type: Array, default: []}
}, SCHEMA_OPTIONS)

PostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})