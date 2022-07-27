import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h2 className="text-center">
        Select an option above to view available movies.
      </h2>
    </Layout>
  );
};

export default Home;
