/**Model-section of our MVC-architecture based API*/

/*group of imports used within code */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/*userSchema module creates/stores new user details on mongoose database */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
})

userSchema.pre('save', async function (next) {              //function encrypts user's password before it is stored on database
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

/*function checks if user details entered in signin request exist in database 
*/
userSchema.statics.signin = async function (email, password) {

    if (email ==="") {
        if (password ==="") {
            throw Error("both login email & pw empty")
        }
        throw Error("login email is empty")
    }
    if (password ==="") {
        if (email ==="") {
            throw Error("both login email & pw empty")
        }
        throw Error("login password is empty")  
    }
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorect password");
    }
    throw Error("incorrect email");
}

module.exports = mongoose.model("Users", userSchema);