const SelectionBar = () => {
  return (
    <div
      id="selectionBar"
      className="position-absolute bottom-0 start-0 end-0 border-top py-1 bg-body"
      style={{ flex: "0 1 auto" }}
    >
      <div className="container text-secondary fs-6 fw-light">3 éléments</div>
    </div>
  );
};

export default SelectionBar;
