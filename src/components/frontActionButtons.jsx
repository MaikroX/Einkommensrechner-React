import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalEinkommen from "./modal-NeuesEinkommen";

function ActionButton() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-4 position-relative">
      <Button
        type="button"
        data-toggle="modal"
        data-target="#archiveInfoModal"
        className="btn btn-primary-edit text-white font-weight-bold rounded-circle d-flex justify-content-center align-items-center p-0 archive-btn"
        data-whatever="@mdo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-briefcase-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
        </svg>
      </Button>

      <Button
        className="btn btn-primary-edit text-white font-weight-bold rounded-circle d-flex justify-content-center align-items-center p-3 sums-drop-shadow"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          ></path>
        </svg>
      </Button>

      <ModalEinkommen showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default ActionButton;
