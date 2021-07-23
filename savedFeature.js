// !! I know that I have unessesary code that is commented, and I know that git saves all, somewhere, but unitl we figire it out do we need to decrement applications or not I am keeping all this junk. !!
  // Categories in all jobs this user have created or have applies need to decrement

  // we are getting all categories
  const allCategories = await Category.distinct('name');

  await allCategories.forEach(async (category) => {
    // we need all jobs that is created by the user, and from that we will remove all applications
    const jobsInCategoryUser = await Job.distinct('_id', { creator: userId, category, isDeleted: false });
    // we need all jobs that aren't made by the user, and we will remove all applications where he applied as candidate
    // we must do this step so we can filter applications by categories
    const jobsInCategoryNotUser = await Job.distinct('_id', { creator: { $ne: userId }, category, isDeleted: false });
    // we need how many jobs user have made by category that are active and we are soft deleting, we also needed the array of jobs so we coudn't use countDocuments
    const numJobsInCategory = jobsInCategoryUser.length;
    // and we need to count all applications that are made to the jobs that are post by users, and all his own applications
    // this should have status pending only, but this function is late, so applications get closed, so I included closed as well
    // it could lead to bug if user gets deleted multipule times; yes it can happen, as user can reactivate by loging in
    // I don't have good solution for now
    const applicationsNumber = await Application.countDocuments({ $or: [{ job: { $in: jobsInCategoryUser } }, { candidate: userId, job: { $in: jobsInCategoryNotUser } }], status: { $in: ['pending', 'closed'] } });
    const applicationsNumber = 0;
    await Category.updateOne({ name: category }, { $inc: { jobsCount: -numJobsInCategory, jobsApplied: -applicationsNumber } });
  });

  // test
  const resCategory1 = await Category.findOne({ name: categoryName1 }).lean();
  const resCategory2 = await Category.findOne({ name: categoryName2 }).lean();
  expect(resCategory1.jobsCount).to.equal(categories[0].jobsCount - 1);
  expect(resCategory1.jobsApplied).to.equal(categories[0].jobsApplied - 2);
  expect(resCategory2.jobsCount).to.equal(categories[1].jobsCount);
  expect(resCategory2.jobsApplied).to.equal(categories[1].jobsApplied - 1);