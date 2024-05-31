import { StatusCodes } from "http-status-codes";
import Job from "../models/jobs";
import { NotFoundError } from "../errors";

const getAllJobs = async (req: any, res: any) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdBy");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req: any, res: any) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    throw new NotFoundError(`No job found with job ID ${jobId}`);
  }
  res.status(StatusCodes.OK).json(job);
};

const createJob = async (req: any, res: any) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};

const updateJob = (req: any, res: any) => {
  res.send("Update job");
};

const deleteJob = (req: any, res: any) => {
  res.send("Delete job");
};

export { getAllJobs, createJob, deleteJob, getJob, updateJob };
