import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.useQuery(["hello", { text: "client" }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}

// import type { NextPage } from "next";

// const Home: NextPage = () => {
//   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// };

// export default Home;
