import React from "react";

export default function Tools() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row py-5">
          <h1 className="text-center display-5 fw-bold ">
            Tools that come with Substrate
          </h1>

          <div className="col-md-4 pt-5">
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-danger">
                  Polkadot Telemetry Service
                </h5>
                <p className="card-text">Network information</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-danger">
                Substrate and Polkadot UI
                </h5>
                <p className="card-text">Built with React.js and RxJS</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-danger">
                Substrate UI
                </h5>
                <p className="card-text">Built with the Bonds oo7 library</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-danger">
                Polkabot
                </h5>
                <p className="card-text">Network monitoring and reporting</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title text-danger">
                Polkascan
                </h5>
                <p className="card-text">Blockchain data explorer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">

        <h1 className="text-center display-5 fw-bold ">
        Start building your custom <br /> parachain with Substrate
          </h1>
<div className="col-md-12 text-center">  
        <button type="button" className="btn btn-outline-danger my-4"> Developer Hub</button>

 <br /><a href="">learn more</a>
</div>
        </div>
        <div className="row py-5">

            <div className="col-md-6 px-5">

                <h1 className="fw-bold ">Get a grant to build the Polkadot ecosystem</h1>
                <p>Web3 Foundation provides grants to steward research and development of Polkadot and the Web3 tech stack. The program funds work on runtime modules and parachains, development tools, UI, protocol integrations, maintenance, and more.</p>
                <button type="button" className="btn btn-outline-danger my-4">Learn more</button>

            </div>
            <div className="col-md-6  px-5">
                <ul>

                    <li>Development and deployment tooling (e.g. IDEs, parachain development kits)</li>
                    <li>Polkadot Runtime Modules (e.g. interoperability, governance)</li>
                    <li>Second layer protocols (e.g. dedicated parachains, state channels)</li>
                    <li>Monitoring (e.g. explorers)</li>
                    <li>Protocol integrations (e.g. bridges to other blockchains, distributed file storage)</li>
                </ul>
            </div>
        </div>

        <div className="row text-center">

            <div className="col-md-12">
            <h1 className="fw-bold ">Have a question about <br /> building on Polkadot?</h1>
            <button type="button" className="btn btn-outline-danger my-4">Lets connect</button>


            </div>
        </div>
      </div>
    </div>
  );
}
