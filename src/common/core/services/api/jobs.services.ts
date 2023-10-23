import axios from 'axios';
import ApiConstants from '../../constants/backendRoutes.constants';

export const fetchAllJobs = () => {
  return axios.get(ApiConstants.JOBS);
};

export const fetchJobDescriptionById = (jobId: number | string) => {
  return axios.get(ApiConstants.JOBS + '/' + jobId);
};

export const applyToJobById = (jobId: number | string) => {
  return axios.post(ApiConstants.APPLY_JOB, {
    jobId,
  });
};
