import React, { useContext } from 'react';
import { UserProfileContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { BsFillHeartFill, BsFillPersonFill, BsFillStarFill } from 'react-icons/bs';
import ProfileLinks from './ProfileLinks';


const Aside = () => {
  const { data } = useContext(UserProfileContext);

  const navigate = useNavigate();

  return (
    <>
      {data &&
        <div className='bg-[#3b4252] w-full sm:w-full lg:w-1/4 min-h-0 lg:min-h-screen px-5 py-10 flex flex-col gap-5' >
          <div className='flex justify-center'>
            <img
              className='rounded-lg w-5/6'
              src={data.avatar_url}
              alt={`Foto de perfil do ${data.name}`}
            />
          </div>

          <div>
            <div className='mb-4'>
              <h1 className='text-slate-200 text-3xl italic'>
                {data.name}
              </h1>
              <h2 className='text-slate-200 text-xl italic font-thin'>
                @{data.login}
              </h2>
            </div>
            <p className='text-slate-200 text-md'>
              {data.bio}
            </p>
          </div>

          <div className='flex gap-2 flex-wrap text-slate-200'>
            <p className='flex items-center gap-1'>
              <BsFillPersonFill /> {data.followers} followers
            </p>
            <p className='flex items-center gap-1'>
              <BsFillHeartFill /> {data.following} following
            </p>
            <p className='flex items-center gap-1'>
              <BsFillStarFill /> {data.public_gists} stars
            </p>
          </div>

          <ProfileLinks />

          <div className='flex justify-center'>
            <button
              className='text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600'
              onClick={() => navigate('/')}
            >
              Voltar
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default Aside;