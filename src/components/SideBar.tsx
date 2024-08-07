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
          <i className="bi bi-house"></i> Acceuil
        </button>
        <button type="button" className="btn my-1">
          <i className="bi bi-folder2-open"></i> Public
        </button>
        <button type="button" className="btn my-1">
          <i className="bi bi-lock"></i> Privé
        </button>
        <button type="button" className="btn my-1 border-0" disabled>
          <i className="bi bi-share"></i> Drop
        </button>
        <button type="button" className="btn btn-outline-primary my-1" disabled>
          <i className="bi bi-plus"></i> Ajouter
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
