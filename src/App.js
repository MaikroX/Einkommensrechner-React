import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import ActionButton from "./components/frontActionButtons";
import NavHeader from "./components/navbar";
import TableTop from "./components/table-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/components.css";
import "./App.css";
import NeuesEinkommenTemp from "./components/neuesEinkommenTemp";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavHeader />

      <div id="content" style={{ flex: "1" }}>
        <Dashboard />
        <ActionButton />
        <TableTop />
        <NeuesEinkommenTemp />
      </div>

      <Footer />
    </div>
  );
}

export default App;
