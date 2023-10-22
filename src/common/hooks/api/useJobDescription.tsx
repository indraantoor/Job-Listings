import { fetchJobDescriptionById } from '@/common/core/services/api/jobs.services';
import { useQuery } from 'react-query';

const useJobDescription = (id: number | string) => {
  return useQuery({
    queryKey: ['job-by-id'],
    queryFn: () => fetchJobDescriptionById(id),
    select: (response) => response.data.job.description,
  });
};

export default useJobDescription;
