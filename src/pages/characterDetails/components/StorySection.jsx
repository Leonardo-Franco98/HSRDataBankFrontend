const StorySection = ({ story }) => {
  return (
    <div>
      <p className='text-4xl text-sky-300 font-semibold mb-10'>Story</p>
      <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'></div>
      <div>
        {
          story.map((s, index) => {
            return <div className="mb-16 whitespace-pre-wrap">
              <p className='text-3xl text-sky-200 font-semibold mb-6'>Character Details {index + 1}</p>
              <p className="text-white text-xl mb-12">{s}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default StorySection