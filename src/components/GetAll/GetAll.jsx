import React, { useEffect, useState } from "react";
import axios from "axios";
const GetAll = () => {
  const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQxQzBFMTk2RjhBNzdmNjI4MjI0MmU5MzFEOWY1QjFGRjIwMjI1MEUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNDE5NTI3MzQsIm5hbWUiOiJKWkYyMSJ9.YXs9x4F23BuJdqivhodhfblh46egy87gel-ICnqKnHg";
  const config = {
    headers: { Authorization: `Bearer ${apiToken}` },
  };
  const [data, setData] = useState([]);
    const [q, setQ] = useState("");

      const [searchParam] = useState(["name", "name"]);

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
    function search(items) {
      return items.filter((item) => {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      });
    }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <input
        className="Search mx-2"
        type="text"
        placeholder="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className=" grid-cols-3 justify-center mx-2">
        {search(data).slice(0).map((item) => {
          return (
            <div className="card">
              <h3>{item.name}</h3>
              <button>
                {" "}
                <a href={`https://${item.cid}.ipfs.w3s.link`}>Open</a>
              </button>
              <p>{item.created.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetAll;
