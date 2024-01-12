import React, { useEffect, useState } from "react";
// import React from 'react';
// import { useState } from 'react';
// import{ useLoaderData } from 'react-router-dom';

function Github() {
  // const data = useLoaderData();
  // if (!data) {
  //     return <div>Loading...</div>;
  //   }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/granthverma")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-orange-500 text-white text-3xl p-12  text-center flex flex-wrap">
     
     
      <img src={data.avatar_url} alt="Git picture" width={300}  />
      Github UserName :{data.login} <br/>
      Name :{data.name}  <br/>
      Location :{data.location} <br/>
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/granthverma')
//     return response.json()
// }
