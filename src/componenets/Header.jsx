import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
        <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
          <span className="text-slate-500">Vire</span>
          <span className="text-slate-700">DiWedding</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-60" //we write first tailwind css for mobile then big screen like w is for mobile and then we use sm-w-64 for big screen its order wise written 1st mobile and 2nd big screen
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4 ">
            <Link to='/'>
            <li className="hidden sm:inline text-slate-700 hover:text-red-600 transition duration-300 ease-in-out">
            Home
          </li>
            </Link>
          <Link to='/about'>
          <li className="hidden sm:inline text-slate-700 hover:text-red-600 transition duration-300 ease-in-out">
            About
          </li>
          </Link>
          <Link to={'/sign-in'}>
          <li className=" text-slate-700 hover:text-red-600 transition duration-300 ease-in-out">
            Sign in
          </li>
          </Link>
          
        </ul>
      </div>
    </header>
  );
}
