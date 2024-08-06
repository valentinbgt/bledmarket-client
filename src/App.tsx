import { useEffect, useState } from "react";
import ErrorModal from "./components/ErrorModal";
import FileList from "./components/FileList";

function App() {
  const API_URL = "http://dev-api.bledmarket.fr";

  const [fileList, setFileList] = useState([]);

  async function updateFileList() {
    try {
      const result = await fetch(API_URL + "/files/get?repertory=public");
      if (!result.ok) {
        setErrorMsg(`HTTP error! status: ${result.status}`);
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const json = await result.json();

      if (typeof json !== typeof {}) {
        setErrorMsg("Une erreur est survenue. Lors de la requête.");
      }

      if (json.errorCode !== 1) {
        setErrorMsg(json.errorCode + ": " + json.errorMessage);
      }

      setFileList(json.fileList);
    } catch (error) {
      setErrorMsg("Error fetching files: " + error);
    }
  }

  useEffect(() => {
    updateFileList();
  }, []);

  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      {errorMsg && <ErrorModal errorMsg={errorMsg} setErrorMsg={setErrorMsg} />}

      <header>
        <nav></nav>
      </header>
      <main>
        <h1>Bienvenue sur BledMarket</h1>

        <FileList fileList={fileList} />
      </main>
      <footer>c - BledMarket 2024</footer>
    </>
  );
}

export default App;
