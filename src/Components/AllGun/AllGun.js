import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Gun from "../Gun/Gun";

const AllGun = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="my-4 p-5">
        <h1 className="text-4xl text-center font-bold mt-4">
          Welcome to our Gun Zone
        </h1>
        <p className="text-violet-800">
          This fairly small revolver is a common choice amongst service people
          looking for a well rounded secondary piece. Its stable weight makes it
          quite easy to handle. It packs a punch with great accuracy.
        </p>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {guns.map((gun) => (
          <Gun gun={gun} key={gun.id} countIncrease={countIncrease} />
        ))}
      </div>
    </div>
  );
};

export default AllGun;
