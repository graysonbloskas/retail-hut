const router= require('express').Router();
const userRoute = require('./userRoutes');

router.use("/users",userRoute);


module.exports= router;