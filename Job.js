const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobCategories = require('../lib/jobCategories');
const reportReasons = require('../lib/reportReasons');
const locations = require('../lib/locations');
const filterJobs = require('../lib/filterJobs');


const jobSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: {
      values: ['job', 'service'],
      message: ['Type must be either job or service']
    }
  },
  description: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  priceType: {
    type: String,
    enum: {
      values: ['fixed', 'per hour'],
      message: ['Price type must be either fixed or per hour']
    }
  },
  tags: [{
    tag: {
      type: String
    }
  }],
  categories: [{
    category: {
      type: String,
      num: {
        values: jobCategories,
        message: ['Please add category']
      }
    }
  }],
  views: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    enum: {
      values: locations,
      message: ['Add correct location']
    }
  },
  reports: [{
    reason: {
      type: String,
      enum: {
        values: reportReasons,
        message: ['Please add reason to report']
      }
    },
    comment: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId
    }
  }],
  deletedAt: {
    type: Date,
    default: null
  }
},
{timestamps: true});

//I didn't had db or controler at a time so I put in everything here. Also I like to keep controllers as light as possible.

// //Get all jobs with filter
// jobSchema.statics.index = async function(requestObject){
//   return jobs = await this.find(filterJobs(requestObject, true)).populate('User');
// }

// //Get single job by id
// jobSchema.statics.getById = async function(id){
//   return jobs = await this.findById(id).populate('User');
// }

// //Create new job
// jobSchema.statics.createNew = async function(requestObject){
//   //need to get id of the creator
//   return jobs = await this.create(requestObject);
// }

// //Delete job by id
// jobSchema.statics.createNew = async function(id){
//   return jobs = await this.findByIdAndUpdate(id, {deletedAt: new Date()});
// }

// //Increase time seen
// jobSchema.statics.increaseView = async function(id){
//   return jobs = await this.findByIdAndUpdate(id, {$inc: {views: 1}});
// }

// //create report
// jobSchema.statics.createReport = async function(requestObject){
//   //need to get id of the user
//   return jobs = await this.findByIdAndUpdate(requestObject.id, {
//     $push: {reports: {
//       //need to get id of the user
//       user: requestObject.user,
//       reason: requestObject.reason,
//       comment: requestObject.comment
//     }}
//   });
// }

// //remove report
// //define that
// jobSchema.statics.removeReports = async function(id){
//   return jobs = await this.findByIdAndUpdate(id, {reports: []});
// }

const Job = mongoose.model('Job', jobSchema);

module.exports=Job;
