const { awsService, s3 } = require('../../lib/awsHandler');
const { User } = require('../../models');

const defaultPicture="https://partajmer.s3.eu-central-1.amazonaws.com/defaultprofilepicture.jpg";

const userPictures = await User.distinct('profilePicture', { profilePicture: { $ne: defaultPicture }});

userPictures.map(picture => await s3.deleteObject({ Bucket: process.env.S3_BUCKET, Key: picture.split('/').pop() }).promise());

