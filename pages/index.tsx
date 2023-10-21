import Head from 'next/head';
import { NextPageWithLayout } from './page';
import Sidebar from 'components/Sidebar';
import JobDescription from 'components/JobDescription';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <JobDescription />
    </main>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <div>
      <Head>
        <title>Job Search</title>
        <meta name="description" content="Created by Indraan S Toor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Sidebar />
        {page}
      </div>
    </div>
  );
};
