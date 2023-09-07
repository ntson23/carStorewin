const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    slug: { type: String, slug: 'name', unique: true },
    name: {type: String},
    description: {type: String},
    image: {type: String},  
    videoID: {type: String},

  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Course', Course);