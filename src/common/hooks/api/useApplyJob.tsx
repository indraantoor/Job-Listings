import { applyToJobById } from '@/common/core/services/api/jobs.services';
import { useMutation, useQueryClient } from 'react-query';

const useApplyJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobId: string | number) => {
      return applyToJobById(jobId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job-by-id'] });
    },
  });
};

export default useApplyJob;
