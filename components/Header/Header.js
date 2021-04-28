import {
  DocumentAddIcon,
  HomeIcon,
  LogoutIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { auth } from '../../firebase';
import HeaderItem from './HeaderItem';

const Header = () => {
  const router = useRouter();
  const goHome = () => router.push('/');
  const goSearch = () => router.push('/search');
  const addMaterial = () => router.push('/material');
  const logOut = () => {
    auth.signOut();
  };

  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} action={goHome} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} action={goSearch} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} action={goHome} />
        <HeaderItem title='ADD' Icon={DocumentAddIcon} action={addMaterial} />
        <HeaderItem title='LOGOUT' Icon={LogoutIcon} action={logOut} />
      </div>
      <Image
        className='object-contain'
        src='/logo_vasaband.png'
        width={160}
        height={80}
      />
    </header>
  );
};

export default Header;
