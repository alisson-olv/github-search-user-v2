import React from 'react';
import { useContext } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';
import { BiLogoGithub } from 'react-icons/bi';

import { UserProfileContext } from '../context/UserContext';
import CalcDaysFromNow from '../utils/CalcDaysFromNow';

const Repositories = () => {
  const { userRepos } = useContext(UserProfileContext);

  return (
    <>
      {userRepos &&
        <div className='grid p-10 gap-8'>
          {userRepos.map((item) => (
            <div key={item.id}>
              <h2 className='capitalize text-xl text-slate-800 italic'>{item.name}</h2>
              <p className='capitalize text-lg text-slate-800'>{item.description}</p>
              <div className='flex gap-4 items-center'>
                <p className='flex gap-1 items-center text-md text-slate-700'>
                  <BsFillStarFill /> {item.stargazers_count}
                </p>
                <p className='flex gap-2 items-center text-md text-slate-700'>
                  <GrUpdate /> Updated {CalcDaysFromNow(item.updated_at)} days ago
                </p>
              </div>
              <p className='text-md text-slate-700 underline flex gap-1 items-center'>
                <span><BiLogoGithub /> </span>
                <a href={item.html_url} target='_blank'>Link to repository</a>
              </p>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default Repositories;