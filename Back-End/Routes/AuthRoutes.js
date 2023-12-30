/**Routes-section handles routing of client side requests to the server side */

/*group of all imports used within code*/
const { signup, signin } = require("../Controllers/AuthControlers");
const { CheckUser } = require("../Middlewares/authmiddlewares");
const router = require("express").Router();   //to handle client and server-side r

/*defined routes*/
router.post("/vip", CheckUser);         
router.post("/signup",signup);          
router.post("/signin",signin);          

module.exports = router;