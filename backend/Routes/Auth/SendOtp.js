

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Mail = require('../../Utils/Mail')

const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported yet');
}

const post = (req, res, next) => {
    Otp.findOne({email: req.body.email})
    .then((doc) => {
        Mail.SendOtp(doc.email, doc.otp);
    });
}

const put = (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported yet');
}

const del = (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported yet');
}


module.exports = {
    get : get,
    post : post,
    put : put,
    delete : del,
}