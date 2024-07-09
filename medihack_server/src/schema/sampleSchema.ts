import mongoose from 'mongoose';

const sampleSchema = new mongoose.Schema({
  data: {
    rangeStart: {
      type: Number,
      required: true,
    },
    rangeEnd: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    projectID: {
      type: String,
      required: true,
    }
  },
})

const SampleSchema = mongoose.model('SampleSchema', sampleSchema);

module.exports = SampleSchema;