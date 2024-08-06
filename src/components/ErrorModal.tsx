import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
  errorMsg: any;
  setErrorMsg: (msg: string) => void;
}

const ErrorModal = ({ errorMsg, setErrorMsg }: Props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setErrorMsg("");
    }, 1000);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Une erreur est survenue :</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMsg}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleErrorClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModal;
