import React from "react";

export default function Connecting() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <h1 className="fw-bold">Connecting the dots</h1>

          <div className="col-md-3">
            <img className="w-50" src="/assets/a.png" alt="" />

            <h4 className="fw-bold">Relay Chain</h4>
            <p>
              Relay Chain The heart of Polkadot, responsible for the network’s
              shared security, consensus and cross-chain interoperability.
            </p>
          </div>
          <div className="col-md-3">
            <img className="w-50" src="/assets/b.png" alt="" />

            <h4 className="fw-bold">Parachains</h4>
            <p>
              Sovereign blockchains that can have their own tokens and optimize
              their functionality for specific use cases.
            </p>
          </div>
          <div className="col-md-3">
            <img className="w-50" src="/assets/c.png" alt="" />

            <h4 className="fw-bold">Parathreads</h4>
            <p>
              Similar to parachains but with a pay-as-you-go model. More
              economical for blockchains that don’t need continuous connectivity
              to the network.
            </p>
          </div>
          <div className="col-md-3">
            <img className="w-50" src="/assets/d.png" alt="" />

            <h4 className="fw-bold">Bridges</h4>
            <p>
              Allow parachains and parathreads to connect and communicate with
              external networks like Ethereum and Bitcoin.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <h1 className="fw-bold">Consensus Roles</h1>

          <div className="col-md-3 py-5">
            <img className="w-50" src="/assets/e.png" alt="" />

            <h4 className="fw-bold">Bridges</h4>
            <p>
              Allow parachains and parathreads to connect and communicate with
              external networks like Ethereum and Bitcoin.
            </p>
          </div>
          <div className="col-md-3 py-5">
            <img className="w-50" src="/assets/f.png" alt="" />

            <h4 className="fw-bold">Bridges</h4>
            <p>
              Allow parachains and parathreads to connect and communicate with
              external networks like Ethereum and Bitcoin.
            </p>
          </div>
          <div className="col-md-3 py-5">
            <img className="w-50" src="/assets/e.png" alt="" />

            <h4 className="fw-bold">Bridges</h4>
            <p>
              Allow parachains and parathreads to connect and communicate with
              external networks like Ethereum and Bitcoin.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <h1 className="fw-bold">Governance Roles</h1>

          <div className="col-md-3 pt-5">
            <img className="w-50" src="/assets/b.png" alt="" />

            <h4 className="fw-bold">Council Members</h4>
            <p>
              Elected to represent passive stakeholders in two primary
              governance roles: proposing referenda and vetoing dangerous or
              malicious referen
            </p>
          </div>
          <div className="col-md-3 pt-5">
            <img className="w-50" src="/assets/d.png" alt="" />

            <h4 className="fw-bold">Technical Committee</h4>
            <p>
              Composed of teams actively building Polkadot. Can propose
              emergency referenda, together with the council, for fast-tracked
              voting and implementation
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
