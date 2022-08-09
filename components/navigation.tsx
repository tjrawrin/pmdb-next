import Link from "next/link";

const options = [
  "all",
  "#",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-2 mb-6">
      {options.map((option, index) => (
        <Link
          href={{ pathname: "/movies", query: { view: `${option}` } }}
          key={index}
        >
          <a className="bg-blue-600 text-white uppercase rounded shadow hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 active:bg-blue-800 transition duration-150 ease-in-out w-8 h-8 flex justify-center items-center">
            {option}
          </a>
        </Link>
      ))}
      <Link href="/movies/random">
        <a className="bg-blue-600 text-white uppercase rounded shadow hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 active:bg-blue-800 transition duration-150 ease-in-out w-8 h-8 flex justify-center items-center">
          ?
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
