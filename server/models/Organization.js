const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    district: {
      type: String,
      required: true
    },

    helpType: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    contact: {
      type: String,
      required: true 
    },

    description: {
      type: String,
      required: true
    },

    website: {
      type: String,
      default: ""
    },

    source: {
      type: String,
      required: true
    },

    lastVerified: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Organization",
  organizationSchema
);