const mongoose = require('mongoose');

const Parent = mongoose.Schema({
    email: {
        type: String,
        required: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    student: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'student',
    }
    
}, {timestamps: true});


module.exports = mongoose.model('parent', Parent);
