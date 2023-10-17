const express = require('express');
const fs = require("fs");
const addContact=require('../controllers/products')
const bodyparse = require('body-parser');
// app.use(bodyparse.urlencoded());

const router = express.Router();


router.get("/contact", addContact.getContact);

router.post("/success", addContact.postContact);


module.exports = router