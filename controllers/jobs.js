const getAllJobs = () => {
  res.send("get jobs for user");
};

const getJob = () => {
  res.send("getall jobs for user");
};

const createJobs = () => {
  res.send("login user");
};
const updateJob = () => {
  res.send("");
};
const deleteJob = () => {
  res.send("delete Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJob,
  deleteJob,
};
