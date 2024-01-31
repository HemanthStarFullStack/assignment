const User = require('../models/users');


module.exports.adminPage = async(req,res) =>{

    try {

        const users = await User.find();

        return res.render('admin',{users:users});
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}


module.exports.Admincreate= async function(req,res){

    const adminEmail = "m.saihemanth1@gmail.com";
    const adminPassword = "123456789";
   
    let user =await User.findOne({email:req.body.email});
    if(!user){
        console.log(req.body);
        newUser = await User.create(req.body);

        let newReg =await User.findOne({email:req.body.email});

        if(newReg.email == adminEmail && newReg.password == adminPassword){

          newReg.isAdmin = true;

        }

        newReg.save();

         

        return res.redirect('/');
    }else{
            return res.redirect('back');

    }
}