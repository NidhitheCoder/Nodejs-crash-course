import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../models/jobs";
import { BadRequestError, NotFoundError } from "../errors";

const getAllJobs = async (req: any, res: any) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdBy");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req: any, res: any, next: NextFunction) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

const createJob = async (req: any, res: any, next: NextFunction) => {
  try {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json(job);
  } catch (err) {
    next(err);
  }
};

const updateJob = async (req: any, res: any, next: NextFunction) => {
  try {
    const {
      body: { company, position },
      user: { userId },
      params: { id: jobId },
    } = req;

    if (!company || !position) {
      throw new BadRequestError("Company or position field cannot be empty");
    }

    const job = await Job.findByIdAndUpdate(
      { _id: jobId, createdBy: userId },
      { company, position },
      { new: true, runValidators: true }
    );

    if (!job) {
      throw new NotFoundError(`No job with job id ${jobId}`);
    }

    res.status(StatusCodes.OK).json(job);
  } catch (err) {
    next(err);
  }
};

const deleteJob = async (req: any, res: any, next: NextFunction) => {
  try {
    const {
      user: { userId },
      params: { id: jobId },
    } = req;

    const job = await Job.findByIdAndDelete({ _id: jobId, createdBy: userId });

    if (!job) {
      throw new NotFoundError(`No job found with job id${jobId}`);
    }

    res.status(StatusCodes.OK).send();
  } catch (err) {
    next(err);
  }
};

export { getAllJobs, createJob, deleteJob, getJob, updateJob };
