import { createContext, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const UserProfileContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const { data, userRepos } = useFetch(user);

  return (
    <UserProfileContext.Provider value={{ user, setUser, data, userRepos }}>
      {children}
    </UserProfileContext.Provider>
  )
}

export default UserContext;