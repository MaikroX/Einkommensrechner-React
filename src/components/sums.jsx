function Sums() {
  return (
    <div className="text-uppercase row text-center m-2 fw-bold">
      <div className="bg-warning-edit text-white d-flex flex-column col p-2 rounded sums-drop-shadow">
        <span>Betrag Offen</span>
        <span>0,00 €</span>
      </div>

      <div className="bg-primary-edit text-white d-flex flex-column col m-2 mt-0 mb-0 p-2 rounded sums-drop-shadow">
        <span>Betrag Erhalten</span>
        <span>0,00 €</span>
      </div>

      <div className="bg-info-edit text-white d-flex flex-column col p-2 rounded sums-drop-shadow">
        <span>Betrag Gesamt</span>
        <span>0,00 €</span>
      </div>
    </div>
  );
}

export default Sums;
