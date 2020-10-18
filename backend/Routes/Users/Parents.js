

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Parent = require('../../Models/Parent')
const Student = require('../../Models/Student')

const get = (req, res, next) => {
    Parent.find({user: req.user._id})
    .populate('user')
    .populate('student')
    .populate('student.score.subject')
    .then((doc)=> {
        if(doc){
            res.statusCode = 200;
            res.json({
                data: doc
            })
        }
    })
}

const post = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}

const put = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}

const del = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}


module.exports = {
    get : get,
    post : post,
    put : put,
    delete : del,
}