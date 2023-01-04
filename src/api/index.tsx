import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const searchMovie = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery(
    ["movie"],
    async () =>
      await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7a6a1bf84273ea2287a836a3821ac0a7&language=en-US&page=1"
      )
  );
  console.log(data);

  return {
    data: data?.data.results || [],
    loading: isLoading,
    error: error,
  };
};
