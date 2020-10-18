const mongoose = require('mongoose');

const Stats = mongoose.Schema({
    year: {
        type: String,
        required: false,
    },
    enrolled: {
        type: Number,
        required: false,
    },
    pass: {
        type: Number,
        required: false
    },
    class: {
        type: String,
        required: false,
    },
    section : {
        type: String,
        required: false,
    }
})

const Subject = mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    code: {
        type: String,
        required: false
    },
    syllabus: {
        type: [String],
        required: false
    },
    evaluation:{
        type: [String],
        required: false
    },
    stats: [Stats],

}, {timestamps: true});


module.exports = mongoose.model('Subject', Subject);
