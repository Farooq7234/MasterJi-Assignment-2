import React, { useEffect, useState } from 'react';

function CatListings() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(' https://api.freeapi.app/api/v1/public/cats?page=1&limit=4')
          .then(response => response.json())
          .then(data => {
              setData(data.data.data); 
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              setError('Failed to fetch user data');
              setLoading(false);
          });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;



  return (
    <>
      <div className='flex flex-col gap-4 justify-start  bg-random-cat bg-[#c4c4c4] bg-cover min-h-[110vh] w-full'>
        <h1 className='text-4xl text-white'>Cats Around Us</h1>
        <div  className='flex '>
{
  data.map((cat,index)=>
    <div key={index} className='min-w-[375px] h-[800px] mx-2 bg-white rounded-md'>
    <img className='h-[40%] w-full rounded-t-md' src={cat.image} alt="" />
    <div className='p-4'>
    <h2 className='text-3xl font-medium '>{cat.name}</h2>
    <p className='text-base font-medium text-black mt-2 '>{cat.description}</p>
    <div className='flex gap-4 mt-3'>
      <span className='text-xl font-medium'>Origin</span>
      <span className='font-medium'>{cat.origin}</span>
    </div>
    <div>
      <h2 className='text-xl font-medium my-3'>Temperament</h2>
      <ul className="flex gap-3 flex-wrap text-gray-600">
            {cat.temperament.split(', ').map((trait, index) => (
              <li className='text-[#353535] bg-[#EFEFEF] hover:bg-[#D482DB] hover:text-white cursor-pointer px-2 py-1 rounded-full' key={index}>{trait}</li>
            ))}
          </ul>
    </div>
    <div className='flex mt-4 gap-x-5 mb-5'>
      <h2 className='text-xl font-medium'>Life Span</h2>
     <p className='text-base font-medium'>{cat.life_span} Years</p>
    </div>
    <a href={`${cat.wikipedia_url}`} target='_blank' className=' text-xl'>Learn more</a>
    </div>
  </div>
  )
}
        </div>
      </div>
    </>
  )
}

export default CatListings