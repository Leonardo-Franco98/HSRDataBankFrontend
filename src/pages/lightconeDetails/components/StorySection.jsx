const StorySection = ({ story }) => {
  return (
    <div>
      <p className='text-sky-300 font-semibold text-3xl mb-4'>Story</p>
      <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'> </div>
      <p className='text-white text-xl'>{story}</p>
    </div>
  )
}

export default StorySection