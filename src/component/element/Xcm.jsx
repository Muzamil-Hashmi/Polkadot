import React from "react";

export default function Xcm() {
  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 text-center py-5">
            <img className="w-50" src="/assets/d.png" alt="" />
          </div>
          <div className="col-md-6 pt-5">
            <h1>XCM: a secure cross-chain communication standard</h1>
            <p>
              In both Proof-of-Work and Proof-of-Stake systems, blockchains For
              blockchains to work together and form the basis of Web3, they need
              a common language for communication. Polkadot sets the standard
              with XCM, a cross-consensus communication format and programming
              language that allows blockchains of different designs to securely
              exchange arbitrary data, code, and value. In this way, a new wave
              of rich cross-chain applications and services can be built that
              tap into the features and benefits of different chains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
