function TableTop() {
  return (
    <div>
      <div className="bg-primary-edit d-flex justify-content-center align-items-center rounded text-white sums-drop-shadow m-2 text-uppercase">
        <div className="row text-center w-100 d-flex pt-2 pb-2 table-top-fs pe-2">
          <div role="button" className="col-3 p-0 p-1 rounded-start">
            Wann
          </div>

          <div role="button" className="col p-0 p-1 border-middle-content ">
            <span>Wo</span> / <span>Was</span>
          </div>
          <div className="col-3 p-0 p-1">Euro</div>
        </div>
      </div>
    </div>
  );
}

export default TableTop;
