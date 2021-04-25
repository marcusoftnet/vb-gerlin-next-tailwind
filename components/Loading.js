import { UserCircleIcon } from '@heroicons/react/outline';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <UserCircleIcon className='h-24 w-24 mb-5' />
      <p>Loading ...</p>
    </div>
  );
};

export default Loading;
