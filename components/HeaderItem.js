const HeaderItem = ({ title, Icon, action }) => {
  return (
    <div
      onClick={action}
      className='flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group'
    >
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 tracking-widest group-hover:opacity-100'>
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;