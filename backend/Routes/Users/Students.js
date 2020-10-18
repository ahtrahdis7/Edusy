

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Student = require('../../Models/Student')

const get = (req, res, next) => {
    Student.findById(req.params.studentId)
    .populate('user')
    .populate('score.subject')
    .then((student) => {
        res.statusCode = 200;
        res.json({
            student: student,
        })
    })
}

const post = (req, res, next) => {
    Student.findById(req.params.studentId)
    .then((student) => {
        if(student){
            student.score.push({
                subject: req.body.subjectId,
            })
            res.statusCode = 200;
            res.json({
                student: student,
            })
        }
    })
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