import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import type { NextPage } from "next";
import Layout from "../../components/layout";

const Movies: NextPage = () => {
  const router = useRouter();
  const { isLoading, error, data } = trpc.useQuery(
    ["movies.getMovies", { option: `${router.query.view}` }],
    { refetchOnWindowFocus: false }
  );
  const [userQuery, setUserQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(data?.results);

  useEffect(() => {
    setFilteredMovies(data?.results);
  }, [data]);

  if (isLoading) {
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h2>{`An error has occurred: ${error.message}`}</h2>
      </Layout>
    );
  }

  const filter = (event: React.ChangeEvent) => {
    const keyword = (event.currentTarget as HTMLInputElement).value;

    if (keyword !== "") {
      const results = data?.results.filter((movie) => {
        return movie.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredMovies(results);
    } else {
      setFilteredMovies(data?.results);
    }

    setUserQuery(keyword);
  };

  return (
    <Layout>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none leading-tight focus:ring-2 focus:shadow-none transition duration-150 ease-in-out mb-6"
        type="search"
        placeholder={`Search ${data?.option.toUpperCase()} movies...`}
        autoComplete="off"
        onChange={filter}
        value={userQuery}
      />
      <h2 className="text-2xl mb-6 border-b-2">
        {data?.option.toUpperCase()}
        <span class="text-sm">{`Showing ${data?.results.length} results.`}</span>
      </h2>
      {filteredMovies && filteredMovies.length > 0 ? (
        <ul>
          {filteredMovies.map((result, index) => (
            <li className="flex justify-between my-2" key={index}>
              <span>{result.title}</span>
              <span>{result.format.join(", ")}</span>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No results found!</h3>
      )}
    </Layout>
  );
};

export default Movies;
