/*Controller-section of our MVC-architecture-based API  */

/*group of imports used in code*/
const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 *24*60*60;                                 

const createToken = (id) => {                               //creates signed web session id 
    return jwt.sign({id}, "ligusha", {                      //"ligusha" secret key, make sure is in envir var whn deploying to server
        expiresIn: maxAge,
    });   
};

const handleErrors = (err) => {                             //handles errors thrown by UseModel.create and UserModel.signin modules from model-section of MVC architecture
    let errors = {email:"", password:""};
    
    if (err.message === "both login email & pw empty"){
        errors.email = "Email is required";
        errors.password = "Password is required"
    }
    if (err.message === "login email is empty"){
        errors.email = "Email is required";
    }
    if (err.message === "login password is empty"){
        errors.password = "Password is required";
    }
    if (err.message === "incorrect email"){
        errors.email = "Email is not registerd";
    }

    if (err.message === "incorect password"){
        errors.password = "Password is incorrect";
    }
    
    if(err.code===11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    if(err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}
module.exports = handleErrors;                                      

/**signup module handles post request from /signup route of our react-app  
 * creates and assigns web session id for users with succesful signup post requests was*/
module.exports.signup = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.create({email, password});
        const token = createToken(user._id);

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
            secure: true
            
            
        })
        res.status(201).json({ user: user._id, created: true});
    } catch(err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({errors, created: false});
    };
};

/**signin module handles post request from /signin route of our react-app  
 * creates and assigns web session id for users with succesful signin post requests*/
module.exports.signin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.signin(email, password);
        const token = createToken(user._id);

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
        })
        res.status(200).json({ user: user._id, created: true});
    } catch(err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({errors, created: false});
    };
};