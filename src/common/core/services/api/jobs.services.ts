import axios from 'axios';
import ApiConstants from '../../constants/backendRoutes.constants';

export const fetchAllJobs = () => {
  return axios.get(ApiConstants.JOBS);
};

export const fetchJobDescriptionById = (jobId: number | string) => {
  return axios.get(ApiConstants.JOBS + '/' + jobId);
};
