const Router = require("express")
const router = Router();
const User = require("../modle/user");

router.post("/signup", async(req,res)=>{
    const {username, email, password} = req.body;
    try{
        const userCreate = await User.create({
            username:username,
            email:email,
            password:password,
        })
        return res.status(200).json({userCreate,message:"Signup Successfully"})
    }catch(error){
        return res.json({message:`Error Creating account ${error}`})
    }
})

router.post("/login", async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                error:"Invalid email and password",
            })
        }
    
        return res.status(201).json({user, message: "Logged In Successfully" });
    }catch(error){
        return res.json({message: "Error during login :" + error.message})
    }
})

module.exports = router;