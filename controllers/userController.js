const User = require('../models/users');


module.exports.create = async function(req,res){
   
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    let user =await User.findOne({email:req.body.email});
    if(!user){
        console.log(req.body);
        newUser = await User.create(req.body);
        return res.redirect('/users/sign-in');
    }else{
            return res.redirect('back');

    }
}