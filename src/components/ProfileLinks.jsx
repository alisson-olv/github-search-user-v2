import React, { useContext, useEffect, useState } from 'react'
import { UserProfileContext } from '../context/UserContext';
import { BsFillBriefcaseFill, BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

const ProfileLinks = () => {
  const { data } = useContext(UserProfileContext);

  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (data) {
      const updatedLinks = [
        {
          icon: <BsFillBriefcaseFill />,
          name: data.company,
        },
        {
          icon: <MdLocationPin />,
          name: data.location,
        },
        {
          icon: <AiOutlineMail />,
          name: data.email,
        },
        {
          icon: <BsLink45Deg />,
          name: data.blog,
        },
        {
          icon: <BsTwitter />,
          name: data.twitter_username,
        }
      ];

      setLinks(updatedLinks)
    }
  }, [data])

  return (
    <div className='grid gap-2'>
      {links.map((item, index) => (
        item.name && item.name.trim() !== '' ? (
          <p key={index} className='text-slate-200 text-lg flex items-center gap-2'>
            <span>{item.icon}</span> {item.name}
          </p>
        ) : null
      ))}
    </div>
  )
}

export default ProfileLinks;