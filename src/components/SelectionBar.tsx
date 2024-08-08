interface Props {
  fileList: any[];
  selectedFiles: string[];
}

const SelectionBar = ({ fileList, selectedFiles }: Props) => {
  let numEl;
  let size = 0;
  if (selectedFiles.length > 0) {
    //fichier sélectionnés
    numEl = selectedFiles.length;

    let selectedFileSizes = fileList
      .filter((file) => selectedFiles.includes(file.file_public_id))
      .map((file) => file.file_size);
    selectedFileSizes.forEach((num) => {
      size += num;
    });
  } else {
    //fileList
    numEl = fileList.length;

    let arraySize = fileList.map((file) => file.file_size);
    arraySize.forEach((num) => {
      size += num;
    });
  }

  return (
    <div
      id="selectionBar"
      className="position-absolute bottom-0 start-0 end-0 border-top py-1 bg-body"
      style={{ flex: "0 1 auto" }}
    >
      <div className="container text-secondary fs-6 fw-light">
        {numEl} élément{numEl > 1 ? "s" : ""} - {size}
      </div>
    </div>
  );
};

export default SelectionBar;
