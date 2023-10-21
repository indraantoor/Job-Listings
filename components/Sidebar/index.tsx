import JobListing from './JobListing';
import styles from './styles/sidebar.styles.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
    </aside>
  );
};

export default Sidebar;
