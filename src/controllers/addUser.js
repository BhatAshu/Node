const express = require("express");
const router = express.Router();
const userModel = require("../models/user")

router.post("/", async(req,res) => {
    try {
        const {name, email,phone } = req.body ;
        if(!name || name ==""){
            return res.status(201).send("Name is required");
        }
        if(!email || email ==""){
            return res.status(201).send("Email is required");
        }
        if(!phone || phone ==""){
            return res.status(201).send("Phone is required");
        }

        const oldEmial = await userModel.findOne({email:email});
        if(oldEmial) {
            return res.status(202).send("Email is alrady exist");
        }
        const oldPhone = await userModel.findOne({phone:phone});
        if(oldPhone) {
            return res.status(202).send("Phone is alrady exist");
        }

        const emailPattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        if(!emailPattern || emailPattern.length <=0 || emailPattern.indexOf(" ") >= 0){
            return res.status(202).send("Email is Inavalid!!");
        } 
        const phonePattern = phone.match(/^\+?[1-9][0-9]{7,14}$/);
        if(!phonePattern || phonePattern.length <= 0 || phonePattern.indexOf(" ") >= 0){
            return res.status(202).send("Phone Number is Inavalid!!");
        } 


        const data = await userModel.create({
            name:name,
            email:email,
            phone:phone
        });

        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send(error);   
    }
});

module.exports = router;