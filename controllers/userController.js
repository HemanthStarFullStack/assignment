
const User = require('../models/users');

const jwt = require('jsonwebtoken');



module.exports.create = async function(req,res){

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

        return res.redirect('/auth/sign-In');
    }else{
            return res.redirect('back');

    }
}

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

 
// Update user
module.exports.updatedUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user
module.exports.DeleteUser = async (req, res) => {

    console.log("hello man");

    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userID);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports.createSession = async function(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // This is the original password comparison logic
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id }, 'PheobeBuffay', {
            expiresIn: '1h',
        });

        res.cookie('auth',`${token}`);


        res.locals.user = user;




        console.log("Token:", token);

        if (!user.isAdmin) {
            return res.status(401).json({ message: 'Access Denied' });
        }

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

 

module.exports.signIn = async function(req,res){

    let data = await req.user;

    console.log("reached",data);

    if(!req.user){

        return res.render('login');

    }

    return res.redirect('back');

}

module.exports.signUp = function(req,res){

  if(!req.user){
    return res.render('signUp');
  }

  return res.redirect('back');

}


module.exports.signOut = function(req,res){

  res.clearCookie('auth');

  res.redirect('/auth/sign-In');

}
     
