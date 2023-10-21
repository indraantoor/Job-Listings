'use client';

import JobListing from './JobListing';
import styles from './styles/sidebar.styles.module.css';
import Loading from '../Loading';
import Error from '../Error';
import useJobs from '@/common/hooks/api/useJobs';

const Sidebar = () => {
  const { data: jobs, isLoading, isError } = useJobs();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <aside className={styles.sidebarContainer}>
      {jobs?.map((job: any) => (
        <JobListing
          isSelected={false}
          jobTitle={job.jobTitle}
          companyName={job.companyName}
          location={job.location}
          key={job.id}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
