interface Props {
  detailsPanel: boolean;
}

const DetailsPanel = ({ detailsPanel }: Props) => {
  return (
    <div
      className="position-absolute top-0 end-0 bottom-0 bg-body-tertiary border-start border-top z-1 py-1 container"
      style={{ width: "fit-content" }}
      hidden={!detailsPanel}
    >
      Details Panel
    </div>
  );
};

export default DetailsPanel;
