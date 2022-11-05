import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AllGun = () => {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="p-5">
      <h1 className="text-4xl text-center font-bold mt-4">
        Welcome to our Gun Zone
      </h1>
      <p className="text-violet-800">
        This fairly small revolver is a common choice amongst service people
        looking for a well rounded secondary piece. Its stable weight makes it
        quite easy to handle. It packs a punch with great accuracy.
      </p>
    </div>
  );
};

export default AllGun;
