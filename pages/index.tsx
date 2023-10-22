import Head from 'next/head';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.css';
import { Inter } from 'next/font/google';
import JobDescription from '@/components/JobDescription';
import Sidebar from '@/components/Sidebar';
import { FindJobContextProvider } from '@/state/context/findJobContext';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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

      <FindJobContextProvider>
        <div className={`${styles.container} ${inter.className}`}>
          <Sidebar />
          {page}
        </div>
      </FindJobContextProvider>
    </div>
  );
};
