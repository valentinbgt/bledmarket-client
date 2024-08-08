import { formatSizeUnit, formatDate } from "../functions.ts";

interface Props {
  detailsPanel: boolean;
  fileList: any[];
  selectedFiles: string[];
}

const DetailsPanel = ({ detailsPanel, fileList, selectedFiles }: Props) => {
  let file;
  if (selectedFiles.length == 1) {
    let selectedFile = fileList.filter((file) =>
      selectedFiles.includes(file.file_public_id)
    );

    file = selectedFile[0];
  }

  if (!file) return;
  if (file.file_is_folder) return;
  if (!file.file_is_uploaded) return;

  console.log(file);

  return (
    <div
      className="position-absolute top-0 end-0 bottom-0 bg-body-tertiary border-start border-top z-1 py-1 container d-flex flex-column"
      style={{ width: "fit-content" }}
      hidden={!detailsPanel}
    >
      <p>Aperçu</p>
      <p>{file.file_name}</p>
      <p>{formatSizeUnit(file.file_size)}</p>
      <p>{file.file_type}</p>
      <p>{formatDate(file.file_date)}</p>
      <p>{file.file_path}</p>
      <p>
        {file.file_is_shared
          ? "Fichier partagé : " + file.file_shared_id
          : "Fichier non partagé"}
      </p>
    </div>
  );
};

export default DetailsPanel;
