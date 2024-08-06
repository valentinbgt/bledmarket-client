import { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar";
import ActionBar from "./components/ActionBar";
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

      <header className="border-bottom">
        <HeaderBar />
        <ActionBar />
      </header>
      <main>
        <div>
          <div>
            <div>
              <button type="button" className="btn">
                Public
              </button>
              <button type="button" className="btn">
                Privé
              </button>
              <button type="button" className="btn">
                Drop
              </button>
              <button type="button" className="btn btn-primary">
                + Ajouter
              </button>
            </div>
            <div id="spaceLeft">10% - 5 Go / 50</div>
          </div>

          <div id="explorerContent">
            <FileList fileList={fileList} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
