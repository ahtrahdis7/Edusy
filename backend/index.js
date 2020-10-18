// import { getTotalGoals } from './Test/test'
const express = require('express')
// Create the express app
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var passport = require('passport');


// IMPORT LOCAL PACKAGES
const config = require('./config');
const authenticate = require('./authenticate');

// IMPORT ROUTERS
const AuthRouter = require('./Routes/Auth/AuthRouter');
const UsersRouter = require('./Routes/Users/UserRouter');
const FeatureRouter = require('./Routes/Features/FeatureRouter');
const SubjectRouter = require('./Routes/Subjects/Router');

// INIT MONGO DB
const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(console.log(`Connected to MongoDB`))
.catch(error => {
  console.log(error);
});


app.use(bodyParser.json({limit: "512kb", extended: true}));
app.use(bodyParser.urlencoded({limit: "512kb", extended: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cookieParser());

app.use(passport.initialize());

// Routes and middleware

app.use('/auth', AuthRouter);
app.use('/user', UsersRouter);
app.use('/feature', FeatureRouter);
// app.use('/subject', SubjectRouter);
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})



// Start server
app.listen(config.PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(`Started at http://localhost:${config.PORT}`)
})

