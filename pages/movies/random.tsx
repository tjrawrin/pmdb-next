import { trpc } from "../../utils/trpc";
import type { NextPage } from "next";
import Layout from "../../components/layout";

const Random: NextPage = () => {
  const { isLoading, error, data, refetch } = trpc.useQuery([
    "movies.getRandomMovie",
  ]);

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

  return (
    <Layout>
      <h2 className="text-2xl mb-6 border-b-2">Random</h2>
      <ul className="mb-6">
        <li className="flex justify-between my-2">
          <span>{data?.result?.title}</span>
          <span>{data?.result?.format.join(", ")}</span>
        </li>
      </ul>
      <div className="flex justify-center">
        <button
          className="bg-green-600 text-white rounded shadow hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 active:bg-blue-800 transition duration-150 ease-in-out p-2 flex justify-center items-center"
          onClick={() => refetch()}
        >
          &#8635; Next Random Movie
        </button>
      </div>
    </Layout>
  );
};

export default Random;
