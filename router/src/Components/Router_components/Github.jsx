import React, { useEffect, useState } from "react";


export default function Github() {


  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/manojwebdevelopment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="d-block text-center bg-dark w-100 p-5">
      <p className=" font-weight-700 text-white">
        Github Username : {data.name}
      </p>
      <p className=" font-weight-700 text-white">
        Github Followers : {data.followers}
      </p>
      <p className=" font-weight-700 text-white">
        Github Followers : {data.public_repos
}
      </p>
      <p className=" font-weight-700 text-white">
        Github Followers : {data.url
}
      </p>

      <div>
        <img src={data.avatar_url} alt="git picture" width={200} />
      </div>
    </div>
  );
}
