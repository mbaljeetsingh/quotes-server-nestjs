import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  title: String,
  author: String,
});
