import React, { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/subham007-coder")
//       .then((res) => res.json())
//       .then(data => {
//         setData(data)
//         console.log(data);
//       });
//   }, []);

  return (
    <div className="bg-gray-600 text-center text-white py-4">
      <p>Name: {data.name}</p>
      <img src={data.avatar_url} alt="" />
      <p>Bio: {data.bio}</p>
      <p>Public Repos: {data.public_repos}</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async() => {
   const response = await fetch('https://api.github.com/users/subham007-coder')
   return response.json()
}
