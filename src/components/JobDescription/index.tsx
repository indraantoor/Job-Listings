import styles from './styles/jobDescription.styles.module.css';
import Loading from '../Loading';
import Error from '../Error';
import useJobDescription from '@/common/hooks/api/useJobDescription';

interface IJobDescriptionProps {
  jobTitle: string;
  companyName: string;
  roleType: string;
  roleLevel: string;
  location: string;
  hasApplied: boolean;
}

const JobDescription = ({
  jobTitle = '',
  companyName = '',
  roleType = '',
  roleLevel = '',
  location = '',
  hasApplied = false,
}: IJobDescriptionProps) => {
  const { data: description, isLoading, isError } = useJobDescription(56);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.jobDescriptionContainer}>
      <div>
        <h2>{jobTitle}</h2>
        <div className={styles.companyDetails}>
          <span>Logo | </span>
          <span>{companyName} </span>
        </div>
        <div className={styles.roleType}>
          <span>{roleType} : </span>
          <span>{roleLevel}</span>
        </div>
        <div className={styles.location}>
          <span>{location}</span>
        </div>
        <div className={styles.applyBtn}>
          <button disabled={hasApplied}>
            {hasApplied ? 'Applied' : 'Apply'}
          </button>
        </div>
      </div>
      <div className={styles.description}>
        <h3>Job Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobDescription;
