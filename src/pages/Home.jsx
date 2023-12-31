import { BsSearch } from 'react-icons/bs';
import React, { useContext, useState } from 'react';
import { UserProfileContext } from '../context/UserContext';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const { setUser, isPending, error } = useContext(UserProfileContext);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    setUser(inputValue);
    setInputValue('');
  }

  return (
    <div className='sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4 h-screen grid items-center m-auto px-10'>
      <form onSubmit={handleSubmitUser}>
        <label htmlFor="default-input" className="block text-center mb-2 text-3xl font-light text-gray-900 dark:text-white">
          Search Devs
        </label>

        <div className='flex gap-1'>
          <input
            required
            type="text"
            id="default-input"
            placeholder="Type the username here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-30 text-white bg-slate-600 hover:bg-slate-700 rounded-lg text-lg px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <BsSearch /> Buscar
          </button>
        </div>
        {error &&
          <p className='text-lg italic font-thin text-center mt-3'>
            {error}
          </p>
        }
        {isPending &&
          <p className='text-lg italic font-thin text-center mt-3'>
            Carregando
          </p>
        }
      </form>
    </div>
  )
}

export default Home;