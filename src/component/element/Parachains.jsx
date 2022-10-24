import React from "react";

export default function Parachains() {
  return (
    <div className="container-fluid bg-black text-white">
      <div className="container py-5">
        <div className="row">
          <h1 className="fw-bold display 3 text-center py-5 ">
            Parachains: parallel transaction processing
          </h1>

          <div className="col-md-4">
            <p>
              Parachains are specialized blockchains that connect to Polkadot.
              They will have characteristics specialized for their use cases and
              the ability to control their own governance. Interactions on
              parachains are processed in parallel, enabling highly scalable
              systems. Transactions can be spread out across the chains,
              allowing many more transactions to be processed in the same period
              of time.
            </p>
          </div>
          <div className="col-md-4 ps-5">
            <h4>Current method:</h4>
            <p>Single transaction</p>
            <img src="/assets/1.png" alt="" />
          </div>
          <div className="col-md-4 ps-5">
            <h4>Polkadot method:</h4>
            <p>Multi parallelized transactions</p>
            <img src="/assets/2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
