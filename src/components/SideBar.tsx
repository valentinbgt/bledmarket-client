const SideBar = () => {
  return (
    <div
      id="sideBar"
      style={{ flex: "0 1 auto" }}
      className="bg-body-tertiary border-end d-flex flex-column"
    >
      <div
        id="folderTree"
        style={{ flex: "1 1 auto" }}
        className="d-flex flex-column container py-2"
      >
        <button type="button" className="btn my-1">
          Public
        </button>
        <button type="button" className="btn my-1">
          Privé
        </button>
        <button type="button" className="btn my-1 border-0" disabled>
          Drop
        </button>
        <button type="button" className="btn btn-outline-primary my-1" disabled>
          + Ajouter
        </button>
      </div>
      <div
        id="spaceLeft"
        style={{ flex: "0 1 auto" }}
        className="border-top container py-2"
      >
        10% - 5 Go / 50
      </div>
    </div>
  );
};

export default SideBar;
