import React from "react";

export default function Teams() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <h1 className="text-center display-4 fw-bold">What are teams building on <br /> Polkadot? Just a few examples:</h1>
         
          <div className="col-md-4 pt-5">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Smart contract chains</strong> with WebAssembly smart
              contracts (Astar, Moonbeam)
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Data curation networks</strong>  that connect all file storage chains into curated data sets
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Oracle chains</strong>  that make off-chain data available to all contracts on the Polkadot network
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Identity chains</strong> that link accounts to a persistent identity and enable access to other parachains through fewer accounts
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Financial chains</strong> that allow you to hold all your assets in one portfolio, including via bridges to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and ZCash (Acala, Parallel Finance)
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Internet of Things chains</strong>  that set IoT standards for machine-to-machine communication (Robonomics)
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Smart contract chains</strong> with WebAssembly smart
              contracts (Astar, Moonbeam)
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>File storage chains</strong> that incentivize storing data on-chain
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card border-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <p>
              {" "}
              <strong>Bridge to Ethereum</strong>  allowing Ethereum smart contracts to interact with the Polkadot network
            </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">

<h1 className="display-2 fw-bold text-center">Want to get started?</h1>
<div className="col-md-12 text-center">
<button type="button" class="btn btn-outline-danger my-4">Build a Polkadot</button>

</div>
        </div>
      </div>
    </div>
  );
}
