import React from "react";

export default function Security() {
  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 pt-5  ">
            <h1>A better security model</h1>
            <p>
              In both Proof-of-Work and Proof-of-Stake systems, blockchains
              compete with each other over resources to secure their networks,
              and blockchains are easily attacked until they develop a
              significant community to support their network. Polkadot takes a
              different approach by letting blockchains pool their security,
              which means that the blockchains' security is aggregated and
              applied to all. By connecting to Polkadot, blockchain developers
              can secure their blockchain from day one.
            </p>
          </div>
          <div className="col-md-6 py-5 text-center ">
            {" "}
            <img className="w-50" src="/assets/4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
