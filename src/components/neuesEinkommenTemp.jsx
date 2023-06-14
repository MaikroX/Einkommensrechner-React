import { Button } from "react-bootstrap";

function NeuesEinkommenTemp() {
  return (
    <div className="m-2">
      <div id="myIncoming0" onclick="showButtons(0)">
        <div
          id="incomingState0"
          className="table-top incoming-style d-flex justify-content-center align-items-center mb-1 position-relative  incoming-border-right-openIncoming"
        >
          <div className="row text-center w-100 d-flex pt-1 pb-1 table-top-fs bg-info-edit font-weight-bold rounded-left incoming-style incoming-style-unpaid text-white">
            <div className="col-3 p-0 p-2 table-inner-fs d-flex justify-content-center align-items-center w-25 overflow-visible">
              <div className="d-flex flex-column">
                <span> 14.06.2023 </span>
                <span className="show-workings-time"> 19:00 - 20:00 </span>
              </div>
            </div>
            <div className="col p-0 p-0 pl-1 pr-1 pb-2 pt-2 overflow-auto table-inner-fs d-flex flex-column justify-content-center w-50 border-middle-content">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center incoming-head-style">
                  {" "}
                  sad
                </div>
                <div>sd</div>
              </div>
              <div id="toggleButtons0">
                <div
                  className="btn-box d-flex justify-content-center align-items-center"
                  id="btnBox0"
                >
                  <Button
                    onclick="incomingPaid(0)"
                    id="paid0"
                    className="paid-btn btn-primary toggleIndex rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-currency-dollar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                    </svg>
                  </Button>
                  <Button
                    onclick="unPaid(0)"
                    id="unPaid0"
                    className="unpaid-btn btn-warning toggleIndex rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-sticky"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z" />
                    </svg>
                  </Button>
                  <Button
                    onclick="deleteIncoming(0)"
                    id="delete0"
                    className="delete-btn btn-danger toggleIndex rounded m-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-3 p-0 p-2 overflow-auto table-inner-fs d-flex justify-content-center align-items-center w-25">
              333 €
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeuesEinkommenTemp;
