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
    <div className='flex flex-col h-auto'>
      <head>
        <title>Jehrin - Login</title>
      </head>

      <main className='flex items-center justify-center'>
        <div className='container flex flex-col justify-center w-1/2 h-screen'>
          <Image src='/../public/logo_vasaband.png' width={350} height={200} />

          <form className='flex flex-col m-5 justify-center'>
            <input
              className='mt-2'
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
            <button onClick={signIn} type='submit' className='mt-5 bg-blue-700'>
              Login
            </button>
          </form>
        </div>
      </main>

      <VasaFooter />
    </div>
  );
};

export default LoginPage;
