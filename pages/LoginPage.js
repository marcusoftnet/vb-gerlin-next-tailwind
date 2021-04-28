import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import VasaFooter from '../components/VasaFooter';
import { auth } from '../firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => router.push('/'))
      .catch((err) => alert(err.message));
  };

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Head className='h-10'>
        <title>Jehrin - Login</title>
      </Head>

      <main className='flex items-center justify-center mb-auto h-screen'>
        <div className='container flex flex-col justify-center w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <Image
            src='/logo_vasaband.png'
            className='object-contain max-w-2xl'
            width={200}
            height={100}
          />

          <form className='flex flex-col m-5 justify-center'>
            <input
              className='mt-2'
              autoFocus
              type='text'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='mt-2'
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn} type='submit' className='mt-5'>
              Login
            </button>
          </form>
        </div>
      </main>

      <VasaFooter className='h-10' />
    </div>
  );
};

export default LoginPage;
