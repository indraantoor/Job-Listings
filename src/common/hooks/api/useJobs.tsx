import { fetchAllJobs } from '@/common/core/services/api/jobs.services';
import { useQuery } from 'react-query';

const useJobs = () => {
  return useQuery({
    queryKey: ['all-jobs'],
    queryFn: fetchAllJobs,
    select: (response) => response.data,
  });
};

export default useJobs;
