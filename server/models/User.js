const Promise = require('bluebird')
const bcrypt  = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
    const SALT_FACTOR = 8
    let pass = user.password;
    console.log(user.changed('password'), user.password);
    if (!user.changed('password')) {
        return Promise.resolve(true)
    }
    // return
    // bcrypt
        // .genSaltAsync(SALT_FACTOR)

        // .then(hash => {
            user.password = bcrypt.hashSync(user.password, null, null)
    console.log(user.password, bcrypt.compareSync(pass, user.password))
            // return true;
        // })

}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function(password){
        console.log(password, this.password);
        return bcrypt.compareSync(password, this.password)
    }

    User.associate = function(models) {

    }
    return User
}