import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
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

      <footer>
        <a
          href='https://www.vasaband.se'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex justify-center items-center mb-5'>
            <p>By and for</p>
            <img
              src='/logo_vasaband.svg'
              alt='Vasa Band Logo'
              className='h-12 pl-2'
            />
          </div>
        </a>
      </footer>
    </div>
  );
}
