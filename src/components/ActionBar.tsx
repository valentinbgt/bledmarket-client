const ActionBar = () => {
  return (
    <div id="actionBar" className="navbar">
      <div className="container-fluid">
        <div></div>
        <div className="d-flex">
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-arrow-right"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-arrow-up"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-arrow-clockwise"></i>
          </button>

          <div className="vr mx-2"></div>

          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-scissors"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-copy"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-clipboard"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-pencil"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-share"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-link-45deg"></i>
          </button>
          <button type="button" className="btn btn-outline-primary mx-1">
            <i className="bi bi-trash"></i>
          </button>

          <div className="vr mx-2"></div>

          <button type="button" className="btn btn-secondary mx-1">
            <i className="bi bi-folder-plus"></i> Dossier
          </button>
          <button type="button" className="btn btn-primary mx-1">
            <i className="bi bi-file-earmark-arrow-up"></i> Fichier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
