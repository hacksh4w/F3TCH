import { Web3Storage } from "web3.storage";
import { useState } from "react";

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQxQzBFMTk2RjhBNzdmNjI4MjI0MmU5MzFEOWY1QjFGRjIwMjI1MEUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNDE5NTI3MzQsIm5hbWUiOiJKWkYyMSJ9.YXs9x4F23BuJdqivhodhfblh46egy87gel-ICnqKnHg";

const client = new Web3Storage({ token: apiToken });

window.localStorage.setItem("cid", "");
const getcid = window.localStorage.getItem("cid");

export default function Upload() {
  const [file, setFile] = useState("");
  const [displayurl, setDisplayurl] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleUpload = async () => {
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");

    const rootCid = await client.put(fileInput.files, {
      name: name,
      maxRetries: 3,
    });
    setDisplayurl(`https://${rootCid}.ipfs.w3s.link`);
     setResponse("File Uploaded Successfully");
    window.localStorage.setItem("cid", rootCid);
    console.log(rootCid);

    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);

    setFile(url);
   
  };

  return (
    <div className="App centre-block">
      <h1 className="funky-font funky-color">F3TCH</h1>
      <h2>Decentralized file storage system</h2>

      <div className="flex-box-col ">
        <h2>Upload Patient Records</h2>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Patient ID"
        />
{/* 
        <label for="file">Choose file to upload</label> */}
        <input type="file" id="input" name="file" multiple />
        <button onClick={handleUpload} className="submit-button">Submit</button>
      </div>

      <p>{response}</p>
      <div>
        {/* <button>
          {" "}
          <a href={displayurl}>Go to file</a>
        </button>

        <button>
          {" "}
          <a href={displayurl}>View All your files</a>
        </button> */}
      </div>
    </div>
  );
}
