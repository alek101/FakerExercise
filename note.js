const User = {}

exports.createReview = async (req, res, next) => {

    const {toUser, job, comment, rating} = req.body;

    const fromUser = req.user._id;

    // Provera da li postoji dozvola u ulogovanom useru

    const check = req.user.permissionToReviews.filter(permission=> userIdThisUserCanReview === toUser && jobId === job && createdAt >= new Date()-7);

    if(check.length === 0) { console.log('no permission to review')}

    const reviewId = check[0]._id;

    //const job=check[0].jobId

    //remove permisssion from fromUser
    
    // await User.updateOne({ _id: fromUser}, { $pull: { permissionToReviews: {_id : reviewId}}}).lean();

    // await User.updateOne({ _id: toUser},$set: { $inc: {ratingsQuantity: 1, ratingsSum: rating} }}).lean();

    //add review
    // await Review.create({toUser, fromUser, comment, rating, job});

    res.status(200).json({
      message: 'route under construction',
    });
  };