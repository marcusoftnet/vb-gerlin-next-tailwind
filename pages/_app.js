import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loading';
import { auth } from '../firebase';
import '../styles/globals.css';
import LoginPage from './LoginPage';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <LoginPage />;

  return <Component {...pageProps} />;
}

export default MyApp;
