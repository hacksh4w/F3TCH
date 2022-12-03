import React, { useEffect, useState } from "react";
import axios from "axios";
const GetAll = () => {
  const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQxQzBFMTk2RjhBNzdmNjI4MjI0MmU5MzFEOWY1QjFGRjIwMjI1MEUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNDE5NTI3MzQsIm5hbWUiOiJKWkYyMSJ9.YXs9x4F23BuJdqivhodhfblh46egy87gel-ICnqKnHg";
  const config = {
    headers: { Authorization: `Bearer ${apiToken}` },
  };
  const [data, setData] = useState([]);

  const getPosts = async () => {
    await axios
      .get("https://api.web3.storage/user/uploads", config)
      .then((res) => {
        // console.log(res.data.data);
        console.log(res);
        setData(res.data);
       
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>
    {data.map((item) => {
        return <div>
            <p>{item.cid}</p>
            <p>{item.created}</p>
            <p>{item.name}</p>
        </div>
    })}
    
  </div>;
};

export default GetAll;
