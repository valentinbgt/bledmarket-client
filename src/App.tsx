import { useEffect, useState } from "react";
import ErrorModal from "./components/ErrorModal";

function App() {
  const API_URL = "http://dev-api.bledmarket.fr";

  const [fileList, setFileList] = useState([]);

  async function updateFileList() {
    const result = await fetch(API_URL + "/files/get?repertory=public");
    result.json().then((json) => {
      console.log(json);
    });
  }

  useEffect(() => {
    updateFileList();
  }, []);

  return (
    <>
      <ErrorModal errorMsg="test" />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <header>
        <nav></nav>
      </header>
      <main>
        <h1>Bienvenue sur BledMarket</h1>
      </main>
      <footer>c - BledMarket 2024</footer>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
