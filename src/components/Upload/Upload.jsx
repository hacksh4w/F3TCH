import { Web3Storage } from "web3.storage";
import { useState } from "react";

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQxQzBFMTk2RjhBNzdmNjI4MjI0MmU5MzFEOWY1QjFGRjIwMjI1MEUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNDE5NTI3MzQsIm5hbWUiOiJKWkYyMSJ9.YXs9x4F23BuJdqivhodhfblh46egy87gel-ICnqKnHg";

const client = new Web3Storage({ token: apiToken });

export default function Upload() {
  const [file, setFile] = useState("");
  const handleUpload = async () => {
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");

    const rootCid = await client.put(fileInput.files, {
      name: "cat pics",
      maxRetries: 3,
    });

    console.log(rootCid);

    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    setFile(url);
  };
  return (
    <div className="App">
      <h2>Decentralized file storage system</h2>
      <h1>Hello CodeSandbox</h1>
      <img alt="hi" src={file} />

      <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="input" name="file" multiple />
      </div>
      <div>
        <button onClick={handleUpload}>Submit</button>
      </div>
    </div>
  );
}
