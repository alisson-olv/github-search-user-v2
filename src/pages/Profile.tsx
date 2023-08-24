import React, { useContext } from 'react';
import { UserProfileContext } from '../context/UserContext';

const Profile = () => {
  const { data, userRepos } = useContext(UserProfileContext);
  console.log(data);
  console.log(userRepos);

  return (
    <div>
      <div className='mb-10'>
        <img className='mb-5' src={data && data.avatar_url} alt="" />
        <p className='text-2xl font-bold'>
          User: {data && data.login}
        </p>
      </div>
      <div>
        {userRepos && userRepos.map((item) => (
          <ul key={item.id}>
            <li>{item.description}</li>
          </ul>
        ))
        }
      </div>
    </div>
  )
}

export default Profile;