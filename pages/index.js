import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import VasaFooter from '../components/VasaFooter';
import { auth } from '../firebase';

export default function Home() {
  const [authUser] = useAuthState(auth);

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Jehrin - VasaBand music library</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex-grow justify-center items-center'>
        <h1>{authUser.email} is logged in</h1>
      </main>

      <VasaFooter />
    </div>
  );
}
