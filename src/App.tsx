import { useEffect, useState } from "react";
import ErrorModal from "./components/ErrorModal";
import HeaderBar from "./components/HeaderBar";
import ActionBar from "./components/ActionBar";
import SideBar from "./components/SideBar";
import DetailsBar from "./components/DetailsBar";
import FileList from "./components/FileList";
import UploadWindow from "./components/UploadWindow";
import DetailsPanel from "./components/DetailsPanel";
import SelectionBar from "./components/SelectionBar";

function App() {
  const API_URL = "http://dev-api.bledmarket.fr";

  // const [mode, setMode] = useState("home");
  // const [path, setPath] = useState("/");

  const [fileList, setFileList] = useState([]);
  // const [currentFileList, setCurrentFileList] = useState([]);

  // const [loading, setLoading] = useState(true);
  const [selectedFiles, setSelectedFiles]: any = useState([]);

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
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
  }, []);

  const [keysDown, setKeysDown]: any = useState({});

  const handleKeyDown = (e: any) => {
    let obj: any = keysDown;
    obj[e.key] = true;
    setKeysDown(obj);
  };

  const handleKeyUp = (e: any) => {
    let obj: any = keysDown;
    obj[e.key] = false;
    setKeysDown(obj);
  };

  function selectFile(id: string) {
    const add = () =>
      setSelectedFiles((selectedFiles: any) => [...selectedFiles, id]);
    const remove = () =>
      setSelectedFiles((selectedFiles: any[]) =>
        selectedFiles.filter((fileId: string) => fileId !== id)
      );

    if (selectedFiles.includes(id)) {
      //l'élément cliqué est déjà sélectionné
      if (selectedFiles.length == 1 || keysDown.Control) {
        remove();
      } else {
        //plusieurs élément sélectionnés
        //clean and add
        setSelectedFiles([]);
        add();
      }
    } else {
      //l'élément cliqué n'est pas sélectionné
      if (!keysDown.Control) {
        setSelectedFiles([]);
      }
      add();
    }
  }

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
              <FileList
                fileList={fileList}
                selectedFiles={selectedFiles}
                selectFile={selectFile}
              />
            </div>
            <DetailsPanel />
          </div>

          <SelectionBar />

          <UploadWindow active={false} />
        </div>
      </main>
    </>
  );
}

export default App;
