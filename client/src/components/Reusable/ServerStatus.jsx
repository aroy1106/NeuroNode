import React from 'react';
// import jsonData from '../../../data/links.json';

function ServerStatus({serverActive}) {
  return (
    <div
      className='mx-auto flex flex-col text-center py-3 sticky top-0 z-20  bg-gray-800'
    >
      {/* <div className=' text-center top-4 text-4xl font-bold  text-red-500'>OpiniAnalyzer</div>
      <div
        className='text-lg text-red-900'
      >Understanding the tone of your review (positive / neutral / negative)
      </div>
      
      <button onClick={() => window.open(jsonData.link_random_cats, '_blank')} className='absolute top-0 right-0 w-10 h-10'>🐈</button> */}

      {serverActive ? (
        <div className='text-sm fixed left-1 top-0 text-green-500 font-bold'>Server is active 🟢</div>
      ) : (
        <div className='text-sm fixed left-1 top-0 text-red-500 font-bold'>Server is being loaded! Be patient!</div>
      )}
    </div>
  )
}

export default ServerStatus