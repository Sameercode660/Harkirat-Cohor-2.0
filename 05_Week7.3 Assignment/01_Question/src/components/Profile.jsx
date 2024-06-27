import React from 'react'

function Profile({profilePicture, name, country, follow, likes, photos}) {
  return (
    <div className='w-[300px] h-auto border rounded-md'>
        {/* upper section  */}
      <div className='rounded-md'>
        <img className='rounded-md w-[300px] h-[150px] object-cover' src="https://images.pexels.com/photos/3996433/pexels-photo-3996433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* picture section  */}
      <div className='w-[80px] h-[80px] relative z-30 bottom-14 left-28'>
        <img className='w-[100%] h-[100%] rounded-full border-2 border-white object-cover' src="https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* dataSection  */}
      <div className=' relative z-20 bottom-14'>
        <span className='font-semibold text-[20px]'>Angela Gom</span>
        <p className=' text-gray-400'>London</p>
      </div>
      {/* like and comment section  */}
      <div className='flex justify-evenly items-center relative z-10 bottom-10 pb-2 pt-2 border-t'>
        <div>
            <p className='font-semibold text-[18px]'>80K</p>
            <p className='text-[12px] text-gray-400'>Followers</p>
        </div>
        <div>
            <p className='font-semibold text-[18px]' >803K</p>
            <p className='text-[12px] text-gray-400'>Likes</p>
        </div>
        <div>
            <p className='font-semibold text-[18px]'>1.4K</p>
            <p className='text-[12px] text-gray-400'>Photos</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
