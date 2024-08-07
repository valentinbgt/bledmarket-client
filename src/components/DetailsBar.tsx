const DetailsBar = () => {
  return (
    <div className="navbar" style={{ flex: "0 1 auto" }}>
      <div className="container-fluid">
        <div>
          <div className="form-check mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="selectFilesCheck"
            />
            {/* <label className="form-check-label" for="selectFilesCheck">
              Sélection
            </label> */}
          </div>
        </div>
        <div className="d-flex">
          <div className="input-group mx-1">
            <span className="input-group-text">
              <i className="bi bi-filter"></i>
            </span>
            <select className="form-select" aria-label="Sort files">
              <option value="alphabetic" selected>
                Alphabétique
              </option>
              <option value="heaviest">Plus lourd</option>
              <option value="lightter">Plus léger</option>
              <option value="recent">Plus récent</option>
              <option value="old">Plus ancien</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-outline-primary mx-1 text-nowrap"
          >
            <i className="bi bi-card-text"></i> Détails
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBar;
