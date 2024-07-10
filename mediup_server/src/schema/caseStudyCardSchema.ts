import mongoose from 'mongoose';

const caseStudyCardSchema = new mongoose.Schema({
  caseStudyID: {
    type: String,
    required: true
  },
  creatorID: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  }
})

const CaseStudyCardSchema = mongoose.model('CaseStudyCardSchema', caseStudyCardSchema);

module.exports = CaseStudyCardSchema;