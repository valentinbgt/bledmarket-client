interface Props {
  fileList: string[];
  selectedFiles: string[];
  selectFile: (file: string) => void;
  loading: boolean;
}

const FileList = ({ fileList, selectedFiles, selectFile, loading }: Props) => {
  return (
    <>
      {!loading && (
        <ul className="list-group">
          {fileList.map((file: any) => (
            <>
              <li
                key={file.file_public_id}
                className={
                  selectedFiles.includes(file.file_public_id)
                    ? "list-group-item bg-primary-subtle"
                    : "list-group-item"
                }
                onClick={() => selectFile(file.file_public_id)}
                onDoubleClick={() =>
                  console.log("Donwload ", file.file_name, file.file_public_id)
                }
              >
                {file.file_name}
              </li>
            </>
          ))}

          {fileList.length < 1 && !loading && (
            <li className="list-group-item">Aucun fichier</li>
          )}
        </ul>
      )}

      {loading && (
        <ul className="list-group placeholder-glow">
          <li className="list-group-item">
            <span className="placeholder col-2 me-1"></span>
            <span className="placeholder col-4"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-1 me-1"></span>
            <span className="placeholder col-2 me-1"></span>
            <span className="placeholder col-4"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-2 me-1"></span>
            <span className="placeholder col-2 me-1"></span>
            <span className="placeholder col-3"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-3 me-1"></span>
            <span className="placeholder col-2"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-1 me-1"></span>
            <span className="placeholder col-4 me-1"></span>
            <span className="placeholder col-1"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-5 me-1"></span>
            <span className="placeholder col-2"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-2 me-1"></span>
            <span className="placeholder col-4"></span>
          </li>
          <li className="list-group-item">
            <span className="placeholder col-1 me-1"></span>
            <span className="placeholder col-2 me-1"></span>
            <span className="placeholder col-1"></span>
          </li>
        </ul>
      )}
    </>
  );
};

export default FileList;
