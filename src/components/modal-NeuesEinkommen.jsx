import { Button, Modal } from "react-bootstrap";

function ModalEinkommen({ showModal, closeModal }) {
  const logoutInput = () => {
    const getDate = document.getElementById("getDate").value;
    const timePickerStart = document.getElementById("timePickerStart").value;
    const timePickerEnde = document.getElementById("timePickerEnde").value;
    const whereWork = document.getElementById("whereWork").value;
    const doing = document.getElementById("doing").value;
    const numberInput = document.getElementById("number-input").value;

    console.log("Eingabe:");
    console.log("Wann:", getDate);
    console.log("Beginn:", timePickerStart);
    console.log("Ende:", timePickerEnde);
    console.log("Wo:", whereWork);
    console.log("Was:", doing);
    console.log("Verdienst:", numberInput);

    closeModal();
  };

  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      className="modal-einkommen text-white"
      id="newIncomingTemp"
    >
      <Modal.Header closeButton>
        <Modal.Title>Neues Einkommen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="text-uppercase">
          <div className="form-group ">
            <label htmlFor="recipient-name" className="col-form-label">
              Wann
            </label>
            <input
              id="getDate"
              type="date"
              className="form-control text-center"
              placeholder="Wähle ein Datum"
            />
          </div>
          <div className="d-flex">
            <div className="form-group d-flex w-100 justify-content-between">
              <div className="d-flex flex-column justify-content-center">
                <label htmlFor="recipient-name" className="col-form-label">
                  Beginn
                </label>
                <input
                  className="timepicker-style"
                  type="time"
                  id="timePickerStart"
                  name="timepickerStart"
                  min="00:00"
                  max="23:59"
                  required=""
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <label htmlFor="recipient-name" className="col-form-label">
                  Ende
                </label>
                <input
                  className="timepicker-style"
                  type="time"
                  id="timePickerEnde"
                  name="timepickerEnd"
                  min="00:00"
                  max="23:59"
                  required=""
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              Wo
            </label>
            <input
              id="whereWork"
              placeholder="Zb. Firmenname"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              Was
            </label>
            <input
              id="doing"
              placeholder="Zb. Bar, Dj, Grafikdesign"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              Verdienst{" "}
              <span>
                <small>(in € Gesamt)</small>
              </span>
            </label>
            <input
              placeholder="Zb. 95.20"
              type="text"
              className="form-control"
              id="number-input"
            />
            <p id="error-message" className="text-center" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Schließen
        </Button>
        <Button variant="primary" onClick={logoutInput}>
          Speichern
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEinkommen;
