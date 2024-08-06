interface Props {
  fileList: string[];
}

const FileList = ({ fileList }: Props) => {
  return (
    <>
      {fileList.length < 1 && <p>Aucun fichier</p>}

      <ul className="list-group">
        {fileList.map((file: any) => (
          <>
            <li key={file.file_public_id} className="list-group-item">
              {file.file_name}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default FileList;
