const User ={}

exports.createReview = async (req, res, next) => {

    const {toUser, job, comment, rating} = req.body;

    const fromUser = req.user._id;

    const check = User.findOneAndUpdate({ userIdThisUserCanReview: toUser, jobId: job, createdAt: new Date()-7},{ $pull: { permissionToReviews: { userIdThisUserCanReview: toUser, jobId: job }},
     $set: { $inc: {ratingsQuantity: 1, ratingsSum: rating} }});

    //  if(!check ) throw error not found 

    //add review

    res.status(200).json({
      message: 'route under construction',
    });
  };