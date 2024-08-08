import { useState } from "react";
import DetailsBar from "./DetailsBar";
import FileList from "./FileList";
import DetailsPanel from "./DetailsPanel";
import SelectionBar from "./SelectionBar";
import UploadWindow from "./UploadWindow";

interface Props {
  visibleFileList: any;
  selectedFiles: string[];
  selectFile: (file: string) => void;
  loading: boolean;
}

const ExplorerContent = ({
  visibleFileList,
  selectedFiles,
  selectFile,
  loading,
}: Props) => {
  const [detailsPanel, setDetailsPanel] = useState(true);

  const togglePanel = () => {
    setDetailsPanel(!detailsPanel);
  };

  return (
    <div
      id="explorerContent"
      style={{ flex: "1 1 auto" }}
      className="position-relative d-flex flex-column"
    >
      <DetailsBar togglePanel={togglePanel} detailsPanel={detailsPanel} />

      <div className="position-relative h-100" style={{ flex: "1 1 auto" }}>
        <div className="container pb-5">
          <FileList
            fileList={visibleFileList}
            selectedFiles={selectedFiles}
            selectFile={selectFile}
            loading={loading}
          />
        </div>
        <DetailsPanel detailsPanel={detailsPanel} />
      </div>

      <SelectionBar fileList={visibleFileList} selectedFiles={selectedFiles} />
      <UploadWindow active={false} />
    </div>
  );
};

export default ExplorerContent;
