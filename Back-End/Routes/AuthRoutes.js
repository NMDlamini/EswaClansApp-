const { signup, signin } = require("../Controllers/AuthControlers");

const router = require("express").Router();     //to handle client and server-side routing

router.post("/");
router.post("/signup",signup);
router.post("/signin",signin);

module.exports = router;