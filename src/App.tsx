import { useEffect, useState } from "react";
import ErrorModal from "./components/ErrorModal";
import HeaderBar from "./components/HeaderBar";
import ActionBar from "./components/ActionBar";
import SideBar from "./components/SideBar";
import DetailsBar from "./components/DetailsBar";
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

      <header className="border-bottom" style={{ flex: "0 1 auto" }}>
        <HeaderBar />
        <ActionBar />
      </header>
      <main className="d-flex" style={{ flex: "1 1 auto" }}>
        <SideBar />

        <div id="explorerContent" style={{ flex: "1 1 auto" }}>
          <DetailsBar />
          <FileList fileList={fileList} />
        </div>
      </main>
    </>
  );
}

export default App;
