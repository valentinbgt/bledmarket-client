interface Props {
  togglePanel: () => void;
  detailsPanel: boolean;
}

const DetailsBar = ({ togglePanel, detailsPanel }: Props) => {
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
            <select
              className="form-select"
              aria-label="Sort files"
              defaultValue="alphabetic"
            >
              <option value="alphabetic">Alphabétique</option>
              <option value="heaviest">Plus lourd</option>
              <option value="lightter">Plus léger</option>
              <option value="recent">Plus récent</option>
              <option value="old">Plus ancien</option>
            </select>
          </div>

          <button
            type="button"
            className={
              detailsPanel
                ? "btn btn-outline-primary mx-1 text-nowrap"
                : "btn btn-outline-secondary mx-1 text-nowrap"
            }
            onClick={() => togglePanel()}
          >
            <i className="bi bi-card-text"></i> Détails
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBar;
