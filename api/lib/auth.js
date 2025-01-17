const passport = require('passport');
const { ExractJwt, Stratecy, ExtractJwt } = require('passport-jwt');
const Users = require('../db/models/Users');
const UserRoles = require('../db/models/UsersRoles');
const RolePrivileges = require('../db/models/RolePrivileges');

const config  = require('../config');

module.exports = function () {
    let stratecy = new Stratecy({
        secretOrKey: config.JWT.SECRET,
        jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async (payload, done) => {

        try {
            
        
        let user = await Users.findOne({_id: payload._id});

        if (user) {
            let userRoles = await UserRoles.find({user_id: payload._id});

            let rolePrivileges = await RolePrivileges.find({role_id: { $in: userRoles.map(ur => ur.role_id)}});

            done(null,{
                id: user._id,
                roles: rolePrivileges,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                exp: parseInt(Date.now() / 1000) * config.JWT.EXPIRE_TIME
            });

        } else {
            done(new Error("User not found"), null);
        }

        } catch (error) {
            done(error, null);
        }
    });

    passport.use(stratecy);

    return {
        initialize: function (){
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt",{session: false});   // tüm requestlerde token beklediğimiz için session tutma ihtiyacı yok
        }
    }
}