import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 p-5 ">
      <div>
        <ul className="flex gap-10">
          <Link to="/">Create Post</Link>
          <Link to="/show">All Post</Link>
        </ul>
      </div>
      <div>
        <input type="serch" />
        <button className="bg-gray-300 px-2 text-gray-700">search</button>
      </div>
    </div>
  );
};

export default Navbar;
