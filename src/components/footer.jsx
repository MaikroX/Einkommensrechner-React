function Footer() {
  return (
    <div>
      <footer className="bg-primary d-flex align-items-center text-white text-uppercase">
        <div className="w-100 d-flex justify-content-between p-2 ">
          <div>
            <small> © </small>
            <small> ML2023 </small>
          </div>
          <div className="d-flex">
            <a className="" href="/">
              {" "}
              <small className="text-white"> Datenschutz</small>
            </a>
            &nbsp; I &nbsp;
            <a className="" href="/">
              {" "}
              <small className="text-white"> Impressum</small>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
