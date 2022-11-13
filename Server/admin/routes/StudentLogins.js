import bcrypt from 'bcrypt';
import express from "express";
import Student from '../models/Student.js'
import Parent from '../models/Parent.js'
import auth from '../middleware/auth.js'

import jwt from 'jsonwebtoken';

const router = express.Router();

const secret= "test"
router.route("/signinStudent").post(async(req,res)=>{
    try {
        // Get user input
        const { username, password, c_password } = req.body;
        // console.log(password)

        // Validate user input
        if (!(username && password && c_password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await Student.findOne( {username,password} );

        // console.log(user)
         let passwordU="uwu"

        //&& (await bcrypt.compare(password, passwordU)
        if (user && (password === passwordU)) {
            // Create token


            const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });

            res.status(200).json({ result: user, token });
        }

        const token = jwt.sign({ message:"error"} ,secret,{ expiresIn: "1h" });

        res.status(200).json({ username:"S001",result: "user", "token": token });

        // res.status(400).send("Invalid Credentials user.token");
    } catch (err) {
        console.log(err);
    }



});

router.route("/signinParent").post(async(req,res)=>{

    try {
        // Get user input
        const { email, password, c_password } = req.body;
        // console.log(password)

        // Validate user input
        if (!(email && password && c_password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await Student.findOne( {email} );

        // console.log(user)
        let passwordU="uwu"

        //&& (await bcrypt.compare(password, passwordU)
        if (user & (password === passwordU)) {
            // Create token
            const token = jwt.sign(
                { user_id: user.Student_ID, email },
                secret,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }

        const token = jwt.sign({ message:"error"} ,secret,{ expiresIn: "1h" });

        res.status(200).json({ username:"P001", result: "parent", "token" :token  });

        // res.status(400).send("Invalid Credentials user.token");
    } catch (err) {
        console.log(err);
    }
});


export default router;