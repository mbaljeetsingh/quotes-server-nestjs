import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please Enter Quote Title'],
  },
  author: {
    type: String,
    required: [true, 'Please Enter Quote Author'],
  },
});
