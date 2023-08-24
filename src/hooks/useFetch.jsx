import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (user) => {
  const [data, setData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      const fetchData = async () => {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const json = await response.json();
        setData(json);
      };

      fetchData();

      const fetchRepos = async () => {
        const response = await fetch(`https://api.github.com/users/${user}/repos`);
        const json = await response.json();
        setUserRepos(json);
      };

      fetchRepos();

    } else if (user == null) {
      navigate('/');
    }

  }, [user]);

  return { data, userRepos };
};