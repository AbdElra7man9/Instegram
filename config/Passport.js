
import LocalStrategy from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcrypt';
import Users from '../models/Users.js';


const localStrategy  = () => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Users.findOne({ email: email }) 
        .then(user => {
          if (!user) {
            //  res.status(422).json({error:"That email is not registered"});
            return done(null, false)
            //  return done(null, false, { errors: { 'email or password': 'is invalid' } });
          }

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              return done(err)
            }
            if (isMatch) {
              return done(null, user);
            } else {
              // return done(null, false)
                //  res.status(422).json({error:"Password incorrect"});
                return done(null, false);
            }
          });
        });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    Users.findById(id, function (err, user) {
      done(err, user);
    });
  });
};

export default localStrategy 