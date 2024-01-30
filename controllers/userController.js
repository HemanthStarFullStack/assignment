
const User = require('../models/users');

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

        return res.redirect('/users/sign-in');
    }else{
            return res.redirect('back');

    }
}

module.exports.createSession = async function(req,res){

    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
    
        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }

        if(user.password != req.user.password){
            return res.status(401).json({ message: 'Invalid email or password' });
        }


        // Generate JWT
        const token = jwt.sign({ userId: user._id }, 'PheobeBuffay', {
          expiresIn: '1h',
        });
    
        req.session.userId = user._id; // Store user ID in session
    
        if (!user.isAdmin){

            return res.status(401).json({ message: 'Access Denied' });

        }

        res.redirect('/');

      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
};

module.exports.signIn = function(req,res){

    console.log("reached");

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

     
