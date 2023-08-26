import React from 'react';
import Aside from '../components/Aside';
import Repositories from '../components/Repositories';

const Profile = () => {

  return (
    <div className='flex flex-wrap'>
      <Aside />
      <Repositories />
    </div>
  )
}

export default Profile;