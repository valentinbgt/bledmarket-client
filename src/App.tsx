import { useEffect, useState } from "react";
import ErrorModal from "./components/ErrorModal";
import HeaderBar from "./components/HeaderBar";
import ActionBar from "./components/ActionBar";
import SideBar from "./components/SideBar";
import DetailsBar from "./components/DetailsBar";
import FileList from "./components/FileList";
import UploadWindow from "./components/UploadWindow";
import DetailsPanel from "./components/DetailsPanel";

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
      <main className="d-flex border-bottom" style={{ flex: "1 1 auto" }}>
        <SideBar />

        <div
          id="explorerContent"
          style={{ flex: "1 1 auto" }}
          className="position-relative d-flex flex-column"
        >
          <DetailsBar />

          <div className="position-relative h-100" style={{ flex: "1 1 auto" }}>
            <div className="container pb-5">
              <FileList fileList={fileList} />
            </div>
            <DetailsPanel />
          </div>

          <div
            id="selectionBar"
            className="position-absolute bottom-0 start-0 end-0 border-top py-1 bg-body"
            style={{ flex: "0 1 auto" }}
          >
            <div className="container text-secondary fs-6 fw-light">
              3 éléments
            </div>
          </div>

          <UploadWindow active={false} />
        </div>
      </main>
    </>
  );
}

export default App;
