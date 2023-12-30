/**Controler-section of MVC-architecture based API*/

/*group of imports used within code */
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

/**CheckUser module handles post request from /vip route of our front-end react-app  
 * checks if user has a valid web session id to access vip page*/
module.exports.CheckUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, "ligusha", async (err, decodedToken) => {
            if (err){
             res.json({status:false});
             next();
            }
            else{
                const user = await User.findById(decodedToken.id);
                if (user) res.json({status:true, user: user.email})
                else res.json({status:false});
                next();
            }
        }) 
    } else {
        res.json({status:false});
        next();
    }
}