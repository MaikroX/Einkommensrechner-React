import { Button, Modal } from "react-bootstrap";

function ModalEinkommen({ showModal, closeModal }) {
  return (
    <Modal show={showModal} onHide={closeModal} className="modal-einkommen">
      <Modal.Header closeButton>
        <Modal.Title>Neues Einkommen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              WANN
            </label>
            <input
              id="getDate"
              type="date"
              className="form-control text-center"
              placeholder="Wähle ein Datum"
              oninput="validate()"
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
              WO
            </label>
            <input
              id="whereWork"
              placeholder="Zb. Firmenname"
              type="text"
              className="form-control"
              oninput="validate()"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              WAS
            </label>
            <input
              id="doing"
              placeholder="Zb. Bar, Dj, Grafikdesign"
              type="text"
              className="form-control"
              oninput="validate()"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              VERDIENST{" "}
              <span>
                <small>(in € Gesamt)</small>
              </span>
            </label>
            <input
              placeholder="Zb. 95.20"
              type="text"
              className="form-control"
              id="number-input"
              oninput="validate()"
            />
            <p id="error-message" className="text-center" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEinkommen;
