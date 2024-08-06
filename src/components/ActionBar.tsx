const ActionBar = () => {
  return (
    <div id="actionBar" className="navbar">
      <div className="container-fluid">
        <div></div>
        <div>
          <button type="button" className="btn btn-secondary mx-1">
            + Dossier
          </button>
          <button type="button" className="btn btn-primary mx-1">
            + Fichier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
