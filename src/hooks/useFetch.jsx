import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (user) => {
  const [data, setData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // refatorar fetch e colocar pra validar usuário

  const navigate = useNavigate();

  useEffect(() => {

    if (user !== null) {
      const fetchData = async () => {
        setIsPending(true);

        try {
          const response = await fetch(`https://api.github.com/users/${user}`);
          const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`);

          if (response.status === 200) {
            const json = await response.json();
            const jsonRepos = await responseRepos.json();

            setData(json);
            setUserRepos(jsonRepos);
            setError(null);

            navigate('/profile');

          } else {
            setError('Ocorreu um erro ao buscar os dados do usuário');

          }
        } catch {
          setError('Ocorreu um erro ao buscar os dados do usuário');

        } finally {
          setIsPending(false);
        }
      };

      fetchData();

    } else {
      navigate('/');
    }

  }, [user]);

  return { data, userRepos, isPending, error };
};