module.exports.signUp = async (req, res) => {
    // return res.status(200).send(req.body)
  
    if (!req.body.email || !req.body.password || !req.body.name 
        || !req.body.confirmedPassword){
      throw new Error(error.MISSING_PARAMETERS);
    }
  
    if(req.body.password !== req.body.confirmedPassword){
        throw new Error(error.PASSWORD_WONT_MATCH)
    }
    const user = await new User(req.body).save();
    user.password = undefined;
    user.confirmedPassword = undefined;
  
    return res.status(200).send({
      message: 'Successfully signed up',
      token: issueNewToken({
        _id: user._id,
      }),
      results: user,
    });
  };