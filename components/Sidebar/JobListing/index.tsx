import styles from './styles/jobListing.styles.module.css';

interface IJobListingProps {
  isSelected: boolean;
  jobTitle: string;
  companyName: string;
  location: string;
}

const JobListing = ({
  isSelected = false,
  jobTitle = '',
  companyName = '',
  location = '',
}: IJobListingProps) => {
  return (
    <div>
      <button
        className={styles.jobListingBtn}
        style={{
          background: isSelected ? '#a8dadc' : 'white',
        }}
      >
        <div>Logo | </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.jobTitle}>{jobTitle}</h2>
          <div className={styles.companyName}>
            <span>{companyName}</span>
          </div>
          <div className={styles.location}>{location}</div>
        </div>
      </button>
    </div>
  );
};

export default JobListing;
