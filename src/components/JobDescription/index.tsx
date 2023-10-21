import styles from './styles/jobDescription.styles.module.css';

interface IJobDescriptionProps {
  jobTitle: string;
  companyName: string;
  roleType: string;
  roleLevel: string;
  location: string;
  description: string;
  hasApplied: boolean;
}

const JobDescription = ({
  jobTitle = '',
  companyName = '',
  roleType = '',
  roleLevel = '',
  location = '',
  description = '',
  hasApplied = false,
}: IJobDescriptionProps) => {
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
        <p>
          {description}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
