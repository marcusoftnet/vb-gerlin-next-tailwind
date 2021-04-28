const Material = ({ material, handleStateChange, saveMaterial }) => {
  return (
    <div className='p-5'>
      <h1 className='text-3xl '>
        {material.seriesNumber} - {material.title}
      </h1>
      <form
        className='flex flex-col w-auto md:w-2/3 pr-5'
        onSubmit={saveMaterial}
      >
        <input
          name='seriesNumber'
          type='text'
          placeholder='Series number'
          className='mt-5 mb-5 text-2xl'
          autoFocus
          value={material.seriesNumber}
          onChange={handleStateChange}
        />
        <input
          name='title'
          type='text'
          placeholder='Title'
          className='mt-5 mb-5 text-2xl'
          value={material.title}
          onChange={handleStateChange}
        />
        <input
          name='composer'
          type='text'
          placeholder='Composer'
          className='mt-5 mb-5 text-2xl'
          value={material.composer}
          onChange={handleStateChange}
        />
        <input
          name='type'
          type='text'
          placeholder='Type'
          className='mt-5 mb-5 text-2xl'
          value={material.type}
          onChange={handleStateChange}
        />
        <textarea
          name='comments'
          placeholder='Comments'
          className='mt-5 mb-5 text-2xl'
          value={material.comments}
          onChange={handleStateChange}
          rows={4}
        />
        <div className='mt-2 ml-5 flex justify-end md:items-center'>
          <button type='submit' className='p-2' onClick={saveMaterial}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Material;
