import {
  IFindJobContext,
  useFindJobContext,
} from '@/state/context/findJobContext';
import styles from './styles/jobListing.styles.module.css';

interface IJobListingProps {
  job: any;
}

const JobListing = ({ job }: IJobListingProps) => {
  const findJobContext = useFindJobContext() as IFindJobContext;
  const { setSelectedJobId, setSelectedJobSummary } = findJobContext;
  const { selectedJobId } = findJobContext.state;

  function handleSelectJob(id: string, job: any) {
    setSelectedJobId(id);
    setSelectedJobSummary(job);
  }

  const isSelected = job._id == selectedJobId ? true : false;

  return (
    <div>
      <button
        className={styles.jobListingBtn}
        style={{
          background: isSelected ? '#a8dadc' : 'white',
        }}
        onClick={() => handleSelectJob(job._id, job)}
      >
        <div>Logo | </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.jobTitle}>{job?.jobTitle}</h2>
          <div className={styles.companyName}>
            <span>{job?.companyName}</span>
          </div>
          <div className={styles.location}>{job?.location}</div>
        </div>
      </button>
    </div>
  );
};

export default JobListing;
