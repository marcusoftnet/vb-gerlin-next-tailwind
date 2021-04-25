const VasaFooter = () => {
  return (
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
  );
};

export default VasaFooter;
