import { createContext, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const UserProfileContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const { data, userRepos, isPending, error } = useFetch(user);

  return (
    <UserProfileContext.Provider value={{ user, setUser, data, userRepos, isPending, error }}>
      {children}
    </UserProfileContext.Provider>
  )
}

export default UserContext;