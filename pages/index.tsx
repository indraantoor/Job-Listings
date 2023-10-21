import Head from 'next/head';
import { NextPageWithLayout } from './page';
import Sidebar from 'components/Sidebar';
import JobDescription from 'components/JobDescription';
import styles from '../styles/Home.module.css';
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <JobDescription
        jobTitle="Frontend Developer"
        companyName="Microsoft"
        roleType="Full Time"
        roleLevel="Mid Level"
        description="hello"
        location="Worlwide (Remote)"
        hasApplied={false}
      />
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

      <div className={`${styles.container} ${inter.className}`}>
        <Sidebar />
        {page}
      </div>
    </div>
  );
};
