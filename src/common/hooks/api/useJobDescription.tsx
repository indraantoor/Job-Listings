import { fetchJobDescriptionById } from '@/common/core/services/api/jobs.services';
import { useQuery } from 'react-query';

const useJobDescription = (id: number | string) => {
  return useQuery({
    enabled: id ? true : false,
    queryKey: ['job-by-id', id],
    queryFn: () => fetchJobDescriptionById(id),
    select: (response) => response.data,
  });
};

export default useJobDescription;
