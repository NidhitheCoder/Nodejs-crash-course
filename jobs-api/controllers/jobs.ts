const getAllJobs = (req: any, res: any) => {
  res.send("Get all jobs");
};

const getJob = (req: any, res: any) => {
  res.send("Get job");
};

const createJob = (req: any, res: any) => {
  res.json(req.user);
};

const updateJob = (req: any, res: any) => {
  res.send("Update job");
};

const deleteJob = (req: any, res: any) => {
  res.send("Delete job");
};

export { getAllJobs, createJob, deleteJob, getJob, updateJob };
