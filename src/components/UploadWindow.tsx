import Accordion from "react-bootstrap/Accordion";

interface Props {
  active: boolean;
}

const UploadWindow = ({ active }: Props) => {
  return (
    <Accordion
      defaultActiveKey={active == true ? "0" : ""}
      className="position-absolute bottom-0 end-0 z-2 upload-window"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="spinner-grow spinner-grow-sm me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          Envoi de 5 fichiers
        </Accordion.Header>
        <Accordion.Body>
          Dua-Lipa-Illusion-Mastering-Colorful-Pop-V2.mp3
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default UploadWindow;
