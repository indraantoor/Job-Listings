import styles from './styles/jobDescription.styles.module.css';
import Loading from '../Loading';
import Error from '../Error';
import useJobDescription from '@/common/hooks/api/useJobDescription';
import {
  IFindJobContext,
  useFindJobContext,
} from '@/state/context/findJobContext';
import parse from 'html-react-parser';
import useApplyJob from '@/common/hooks/api/useApplyJob';

const JobDescription = () => {
  const findJobContext = useFindJobContext() as IFindJobContext;
  const { selectedJobId, selectedJobSummary } = findJobContext.state;

  const { mutate: applyToJob, isLoading: isApplyingToJobLoading } =
    useApplyJob();

  const {
    data: jobDetails,
    isLoading,
    isError,
  } = useJobDescription(selectedJobId);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const hasAppliedToJob = jobDetails?.hasAppliedToJob ?? false;
  const description = jobDetails?.job?.description;

  return (
    <div className={styles.jobDescriptionContainer}>
      {!selectedJobId ? (
        <h2>Select a job listing to view details</h2>
      ) : (
        <>
          <div>
            <h2>{selectedJobSummary?.jobTitle}</h2>
            <div className={styles.companyDetails}>
              <span>Logo | </span>
              <span>{selectedJobSummary?.companyName} </span>
            </div>
            <div className={styles.roleType}>
              <span>{selectedJobSummary?.roleType} : </span>
              <span>{selectedJobSummary?.roleLevel}</span>
            </div>
            <div className={styles.location}>
              <span>{selectedJobSummary?.location}</span>
            </div>
            <div className={styles.applyBtn}>
              <button
                disabled={hasAppliedToJob || isApplyingToJobLoading}
                onClick={() => applyToJob(selectedJobId)}
              >
                {_generateApplyBtnStatus(
                  hasAppliedToJob,
                  isApplyingToJobLoading
                )}
              </button>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h3>Job Description</h3>
            <div className={styles.description}>
              {description ? parse(description) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobDescription;

function _generateApplyBtnStatus(
  hasAppliedToJob: boolean,
  isApplyingToJobLoading: boolean
) {
  if (isApplyingToJobLoading) {
    return 'Please wait...';
  }

  if (hasAppliedToJob) {
    return 'Applied';
  }

  if (!hasAppliedToJob) {
    return 'Apply';
  }
}
