import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import VasaFooter from '../components/VasaFooter';
import { auth } from '../firebase';

export default function Home() {
  const [authUser] = useAuthState(auth);

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Head className='h-10'>
        <title>Jehrin - VasaBand music library</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mb-auto'>
        <Header />
        <Search />
      </main>

      <VasaFooter className='h-10' />
    </div>
  );
}
