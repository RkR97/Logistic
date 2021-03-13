const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const passport = require('passport');
require("./models/db");
//const logisticHomeController = require('./controllers/logisticHomeController');
const logisticLoginController = require('./controllers/logisticLoginController');
const logisticRegController = require('./controllers/logisticRegController');
const userModel = require('./models/logistic_reg.model');
const homeApi = require('./API/api');
const app = express();

// stratigy 
const jwtStratigy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;

var opts = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


passport.use(new jwtStratigy(opts, function (jwt_payload, done) {
    // console.log(jwt_payload)
    userModel.findOne({ userName: jwt_payload.userName }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/signup', logisticRegController);
app.use('/signin', logisticLoginController);
app.use('/data', homeApi);

app.listen(port, () => {
    console.log(`Server is running at port no. : ${port}`);
});