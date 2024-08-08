import { formatSizeUnit, formatDate, isFileDisplayable } from "../functions.ts";

interface Props {
  detailsPanel: boolean;
  fileList: any[];
  selectedFiles: string[];
  API_URL: string;
}

const DetailsPanel = ({
  detailsPanel,
  fileList,
  selectedFiles,
  API_URL,
}: Props) => {
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

  let fileDisplay = isFileDisplayable(file.file_type);

  let preview;
  if (fileDisplay != false) {
    const src =
      API_URL + `/files/download?fileKey=${file.file_public_id}&display`;

    switch (fileDisplay) {
      case "IFRAME":
        preview = <iframe style={{ width: "100%" }} src={src}></iframe>;
        break;

      case "IMAGE":
        preview = <img width="100%" src={src} alt={file.file_name} />;
        break;

      case "AUDIO":
        preview = <audio style={{ width: "100%" }} src={src} controls></audio>;
        break;

      case "VIDEO":
        preview = (
          <video
            style={{ width: "100%" }}
            src={src}
            controls
            autoPlay
            muted
            loop
          ></video>
        );
        break;

      default:
        preview = <iframe style={{ width: "100%" }} src={src}></iframe>;
        break;
    }
  }

  return (
    <div
      className="position-absolute top-0 end-0 bottom-0 bg-body-tertiary border-start border-top z-1 py-1 container d-flex flex-column"
      style={{ width: "fit-content", maxWidth: "40%" }}
      hidden={!detailsPanel}
    >
      <div>{preview}</div>

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
