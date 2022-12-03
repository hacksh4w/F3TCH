import React from "react";
import { Web3Storage } from "web3.storage";
import {Link} from "react-router-dom";


const Retrieve = () => {
  async function retrieveFiles(cid) {
    const client = makeStorageClient();
    const res = await client.get(cid);
    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    if (!res.ok) {
      throw new Error(
        `failed to get ${cid} - [${res.status}] ${res.statusText}`
      );
    }

    // unpack File objects from the response
    const files = await res.files();
    for (const file of files) {
      console.log(`${file.cid} -- ${file.path} -- ${file.size}`);
    }
  }
  return (
    <div>
      <button  Link to="https://bafybeihmdsrzlre6z3lbssykjwq24sxc6h7cp6pp75dmpgtvoxl6ybwlai.ipfs.w3s.link" >View File</button>
    </div>
  );
};

export default Retrieve;
