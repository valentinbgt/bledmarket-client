import { useEffect, useState } from "react";
import ErrorModal from "./components/ErrorModal";
import HeaderBar from "./components/HeaderBar";
import ActionBar from "./components/ActionBar";
import SideBar from "./components/SideBar";
import ExplorerContent from "./components/ExplorerContent";
// import Request from "./components/Request";
import { request } from "./functions";

function App() {
  const API_URL = "http://dev-api.bledmarket.fr";

  // const [mode, setMode] = useState("home");
  // const [path, setPath] = useState("/");

  const [fileList, setFileList] = useState([]);
  const [visibleFileList, setVisibleFileList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles]: any = useState([]);

  async function updateFileList(hideReload?: boolean) {
    try {
      if (!hideReload) setLoading(true);

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

      setFileList(await json.fileList);
      setVisibleFileList(await json.fileList); //DEV ONLY !!!

      setLoading(false);
    } catch (error) {
      setErrorMsg("Error fetching files: " + error);
    }
  }

  useEffect(() => {
    updateFileList();
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
    request(
      ["files", "newFolder"],
      { repertory: "public", path: "/" },
      (response) => {
        console.log("request: ", response);
      }
    );

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("keyup", handleKeyUp, true);
    };
  }, []);

  const reloadHandler = () => {
    updateFileList();
  };

  const [keysDown, setKeysDown]: any = useState({});

  const handleKeyDown = (e: any) => {
    let obj: any = keysDown;
    obj[e.key] = true;
    setKeysDown(obj);

    //raccourcis
  };

  const handleKeyUp = (e: any) => {
    let obj: any = keysDown;
    obj[e.key] = false;
    setKeysDown(obj);
  };

  const selectFile = (id: string | boolean) => {
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
  };

  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      {errorMsg && <ErrorModal errorMsg={errorMsg} setErrorMsg={setErrorMsg} />}

      <header className="border-bottom" style={{ flex: "0 1 auto" }}>
        <HeaderBar />
        <ActionBar loading={loading} reloadHandler={reloadHandler} />
      </header>
      <main className="d-flex border-bottom" style={{ flex: "1 1 auto" }}>
        <SideBar />

        <ExplorerContent
          visibleFileList={visibleFileList}
          selectedFiles={selectedFiles}
          selectFile={selectFile}
          loading={loading}
          API_URL={API_URL}
        />
      </main>
    </>
  );
}

export default App;
