import Modal from "react-modal";
import { Photo } from "../../types";

interface ModalImageProps {
  picture: Photo | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalImage: React.FC<ModalImageProps> = ({
  picture,
  modalIsOpen,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Picture modal"
    >
      {picture && <img src={picture.src} alt={picture.alt} />}
    </Modal>
  );
};

export default ModalImage;
