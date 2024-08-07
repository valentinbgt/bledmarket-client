interface Props {
  fileList: string[];
  selectedFiles: string[];
  selectFile: (file: string) => void;
}

const FileList = ({ fileList, selectedFiles, selectFile }: Props) => {
  return (
    <>
      {fileList.length < 1 && <p>Aucun fichier</p>}

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
            >
              {file.file_name}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default FileList;
